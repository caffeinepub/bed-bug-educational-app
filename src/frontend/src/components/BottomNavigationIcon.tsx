import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNextRoute } from '../hooks/useNextRoute';

/**
 * Fixed bottom navigation icon that allows users to navigate to the next
 * logical page or section in the app flow.
 * 
 * CRITICAL VISIBILITY STYLES:
 * - z-[9999]: Maximum z-index to appear above all page content
 * - shadow-2xl: Prominent shadow for depth perception
 * - bg-primary with text-primary-foreground: High contrast colors
 * - h-20 w-20: Extra large touch target (80x80px) for easy clicking
 * - rounded-full: Circular button for visual distinction
 * - ring-4 ring-background: Border ring for additional definition
 * - backdrop-blur-sm: Ensures visibility over any background
 */
export function BottomNavigationIcon() {
  const nextRoute = useNextRoute();

  // Don't render if there's no next route (e.g., on QR code page)
  if (!nextRoute) {
    return null;
  }

  const handleClick = () => {
    window.location.hash = nextRoute.hash;
  };

  return (
    // Fixed positioning with maximum z-index ensures visibility on all pages
    <div className="fixed bottom-6 right-6 z-[9999] pointer-events-auto">
      <Button
        onClick={handleClick}
        size="lg"
        className="h-20 w-20 rounded-full bg-primary text-primary-foreground shadow-2xl ring-4 ring-background backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
        aria-label={nextRoute.label}
        title={nextRoute.label}
      >
        <ChevronRight className="h-10 w-10" />
      </Button>
    </div>
  );
}
