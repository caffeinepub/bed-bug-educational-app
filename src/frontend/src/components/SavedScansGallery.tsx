import { useState } from 'react';
import { Trash2, Eye, Calendar, ChevronUp, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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

interface SavedScansGalleryProps {
  savedScans: SavedScan[];
  onOpenScan: (scan: SavedScan) => void;
  onDeleteScan: (id: string) => void;
  onMoveScan: (id: string, direction: 'up' | 'down') => void;
}

export function SavedScansGallery({ savedScans, onOpenScan, onDeleteScan, onMoveScan }: SavedScansGalleryProps) {
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

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
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {savedScans.map((scan, index) => (
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
                <div className="p-3 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(scan.createdAt)}</span>
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
                      disabled={index === 0}
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
                      disabled={index === savedScans.length - 1}
                      aria-label="Move scan down"
                    >
                      <ChevronDown className="mr-2 h-4 w-4" />
                      Move Down
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
