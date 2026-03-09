import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChatButton } from "./components/ChatButton";
import { EducationalContent } from "./components/EducationalContent";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { LocationFinder } from "./components/LocationFinder";
import { QrCodePage } from "./components/QrCodePage";
import { useHashRoute } from "./hooks/useHashRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

function AppContent() {
  const { isRoute } = useHashRoute();

  // Handle QR code page
  if (isRoute("/qr")) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <QrCodePage />
        </main>
        <Footer />
        <ChatButton />
      </div>
    );
  }

  // Handle Location Finder page
  if (isRoute("/location-finder")) {
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
        <ChatButton />
      </div>
    );
  }

  // Handle home page
  if (isRoute("/") || isRoute("/home")) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <HomePage />
        </main>
        <Footer />
        <ChatButton />
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
      <ChatButton />
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
