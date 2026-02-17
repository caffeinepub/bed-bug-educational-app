import { useState, useMemo } from 'react';
import { Trash2, Eye, Calendar, ChevronUp, ChevronDown, Tag, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { SavedScan } from '../hooks/useSavedScans';
import { SavedScanTagsEditor } from './SavedScanTagsEditor';

interface SavedScansGalleryProps {
  savedScans: SavedScan[];
  onOpenScan: (scan: SavedScan) => void;
  onDeleteScan: (id: string) => void;
  onMoveScan: (id: string, direction: 'up' | 'down') => void;
  onAddTag: (scanId: string, tag: string) => void;
  onRemoveTag: (scanId: string, tag: string) => void;
  onUpdateTag: (scanId: string, oldTag: string, newTag: string) => void;
}

export function SavedScansGallery({ 
  savedScans, 
  onOpenScan, 
  onDeleteScan, 
  onMoveScan,
  onAddTag,
  onRemoveTag,
  onUpdateTag,
}: SavedScansGalleryProps) {
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [filterTag, setFilterTag] = useState('');

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined 
    });
  };

  const handleDeleteClick = (id: string) => {
    setDeleteConfirmId(id);
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmId) {
      onDeleteScan(deleteConfirmId);
      setDeleteConfirmId(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteConfirmId(null);
  };

  // Get all unique tags from all scans
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    savedScans.forEach(scan => {
      (scan.tags || []).forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [savedScans]);

  // Filter scans by tag
  const filteredScans = useMemo(() => {
    if (!filterTag.trim()) {
      return savedScans;
    }
    const filterLower = filterTag.toLowerCase().trim();
    return savedScans.filter(scan => 
      (scan.tags || []).some(tag => tag.toLowerCase().includes(filterLower))
    );
  }, [savedScans, filterTag]);

  const handleClearFilter = () => {
    setFilterTag('');
  };

  const handleQuickFilterTag = (tag: string) => {
    setFilterTag(tag);
  };

  if (savedScans.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Saved Scans</CardTitle>
          <CardDescription>Your saved pest photos will appear here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="rounded-full bg-muted p-4 mb-4">
              <Calendar className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              No saved scans yet. Save your pest photos to access them later.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Saved Scans ({savedScans.length})</CardTitle>
          <CardDescription>View and manage your saved pest photos</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Filter UI */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by tag</span>
            </div>
            <div className="flex gap-2">
              <Input
                value={filterTag}
                onChange={(e) => setFilterTag(e.target.value)}
                placeholder="Enter tag to filter..."
                className="flex-1"
                aria-label="Filter by tag"
              />
              {filterTag && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClearFilter}
                  aria-label="Clear filter"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
            {allTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="cursor-pointer hover:bg-accent"
                    onClick={() => handleQuickFilterTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            {filterTag && (
              <p className="text-sm text-muted-foreground">
                Showing {filteredScans.length} of {savedScans.length} scans
              </p>
            )}
          </div>

          {/* Scans Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredScans.map((scan, index) => {
              const originalIndex = savedScans.findIndex(s => s.id === scan.id);
              return (
                <div
                  key={scan.id}
                  className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md"
                >
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={scan.imageDataUrl}
                      alt="Saved scan"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(scan.createdAt)}</span>
                    </div>

                    {/* Tags Section */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Tag className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs font-medium text-muted-foreground">Tags</span>
                      </div>
                      <SavedScanTagsEditor
                        scanId={scan.id}
                        tags={scan.tags || []}
                        onAddTag={onAddTag}
                        onRemoveTag={onRemoveTag}
                        onUpdateTag={onUpdateTag}
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => onOpenScan(scan)}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        aria-label="Open saved scan"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Open
                      </Button>
                      <Button
                        onClick={() => handleDeleteClick(scan.id)}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        aria-label="Delete saved scan"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => onMoveScan(scan.id, 'up')}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        disabled={originalIndex === 0}
                        aria-label="Move scan up"
                      >
                        <ChevronUp className="mr-2 h-4 w-4" />
                        Move Up
                      </Button>
                      <Button
                        onClick={() => onMoveScan(scan.id, 'down')}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        disabled={originalIndex === savedScans.length - 1}
                        aria-label="Move scan down"
                      >
                        <ChevronDown className="mr-2 h-4 w-4" />
                        Move Down
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredScans.length === 0 && filterTag && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="rounded-full bg-muted p-4 mb-4">
                <Tag className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                No scans found with tag "{filterTag}"
              </p>
              <Button
                variant="link"
                onClick={handleClearFilter}
                className="mt-2"
              >
                Clear filter
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={deleteConfirmId !== null} onOpenChange={(open) => !open && handleCancelDelete()}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Saved Scan?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently remove this scan from your saved photos. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancelDelete}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
