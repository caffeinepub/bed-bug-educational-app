import { useState, useRef, KeyboardEvent } from 'react';
import { Plus, X, Edit2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface SavedScanTagsEditorProps {
  scanId: string;
  tags: string[];
  onAddTag: (scanId: string, tag: string) => void;
  onRemoveTag: (scanId: string, tag: string) => void;
  onUpdateTag: (scanId: string, oldTag: string, newTag: string) => void;
}

export function SavedScanTagsEditor({
  scanId,
  tags,
  onAddTag,
  onRemoveTag,
  onUpdateTag,
}: SavedScanTagsEditorProps) {
  const [newTagInput, setNewTagInput] = useState('');
  const [editingTag, setEditingTag] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  const handleAddTag = () => {
    const trimmedTag = newTagInput.trim();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      onAddTag(scanId, trimmedTag);
      setNewTagInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    } else if (e.key === 'Escape') {
      setNewTagInput('');
      inputRef.current?.blur();
    }
  };

  const handleStartEdit = (tag: string) => {
    setEditingTag(tag);
    setEditValue(tag);
    setTimeout(() => editInputRef.current?.focus(), 0);
  };

  const handleSaveEdit = () => {
    const trimmedValue = editValue.trim();
    if (trimmedValue && trimmedValue !== editingTag && editingTag) {
      onUpdateTag(scanId, editingTag, trimmedValue);
    }
    setEditingTag(null);
    setEditValue('');
  };

  const handleCancelEdit = () => {
    setEditingTag(null);
    setEditValue('');
  };

  const handleEditKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancelEdit();
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div key={tag}>
            {editingTag === tag ? (
              <div className="flex items-center gap-1">
                <Input
                  ref={editInputRef}
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={handleEditKeyDown}
                  onBlur={handleSaveEdit}
                  className="h-6 w-24 px-2 text-xs"
                  aria-label={`Edit tag ${tag}`}
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0"
                  onClick={handleSaveEdit}
                  aria-label="Save tag edit"
                >
                  <Check className="h-3 w-3" />
                </Button>
              </div>
            ) : (
              <Badge variant="secondary" className="gap-1 pr-1">
                <span>{tag}</span>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => handleStartEdit(tag)}
                  aria-label={`Edit tag ${tag}`}
                >
                  <Edit2 className="h-3 w-3" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => onRemoveTag(scanId, tag)}
                  aria-label={`Remove tag ${tag}`}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          ref={inputRef}
          value={newTagInput}
          onChange={(e) => setNewTagInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add tag..."
          className="h-8 text-sm"
          aria-label="New tag input"
        />
        <Button
          size="sm"
          variant="outline"
          onClick={handleAddTag}
          disabled={!newTagInput.trim()}
          aria-label="Add tag"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
