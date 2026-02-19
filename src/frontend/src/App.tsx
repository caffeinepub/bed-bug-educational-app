import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EducationalContent } from './components/EducationalContent';
import { QrCodePage } from './components/QrCodePage';
import { BottomNavigationIcon } from './components/BottomNavigationIcon';
import { useHashRoute } from './hooks/useHashRoute';
import { ErrorBoundary } from './components/ErrorBoundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function AppContent() {
  const { isRoute } = useHashRoute();

  // Render QR Code page when hash is /qr (handles both #qr and #/qr)
  if (isRoute('/qr')) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <QrCodePage />
        </main>
        <Footer />
      </div>
    );
  }

  // Default main app content with bottom navigation
  // BottomNavigationIcon is rendered outside the main content container
  // to ensure it's visible on all routes and not constrained by any parent
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <EducationalContent />
      </main>
      <Footer />
      {/* Bottom navigation icon renders on all non-QR pages */}
      <BottomNavigationIcon />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
