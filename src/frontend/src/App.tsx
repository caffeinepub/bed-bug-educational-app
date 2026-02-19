import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EducationalContent } from './components/EducationalContent';
import { QrCodePage } from './components/QrCodePage';
import { LocationFinder } from './components/LocationFinder';
import { HomePage } from './components/HomePage';
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
  const { isRoute, currentHash } = useHashRoute();

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

  // Render Location Finder page when hash is /location-finder
  if (isRoute('/location-finder')) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <div className="container py-8">
            <div className="mx-auto max-w-5xl">
              <LocationFinder />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Render HomePage when hash is empty, /, or /home
  if (isRoute('/') || isRoute('/home') || currentHash === '') {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HomePage />
        </main>
        <Footer />
      </div>
    );
  }

  // Default main app content (educational tabs)
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <EducationalContent />
      </main>
      <Footer />
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
