import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EducationalContent } from './components/EducationalContent';
import { QrCodePage } from './components/QrCodePage';
import { LocationFinder } from './components/LocationFinder';
import { HomePage } from './components/HomePage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useHashRoute } from './hooks/useHashRoute';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

function AppContent() {
  const { isRoute, currentHash } = useHashRoute();

  // Handle QR code page
  if (isRoute('/qr')) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <QrCodePage />
        </main>
        <Footer />
      </div>
    );
  }

  // Handle Location Finder page
  if (isRoute('/location-finder')) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
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

  // Handle home page
  if (isRoute('/') || isRoute('/home') || currentHash === '') {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <HomePage />
        </main>
        <Footer />
      </div>
    );
  }

  // All other routes show the educational content with header/footer
  return (
    <div className="min-h-screen flex flex-col bg-background">
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
