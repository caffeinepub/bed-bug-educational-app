import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Search, Home, Shield, Activity, BookOpen, MapPin } from 'lucide-react';

export function HomePage() {
  const navigationItems = [
    {
      id: 'scanner',
      title: 'Scanner',
      description: 'Take or upload photos to identify pests',
      icon: Camera,
      hash: '#scanner',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      id: 'identify',
      title: 'Identify',
      description: 'Learn to recognize common pests',
      icon: Search,
      hash: '#identify',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
    },
    {
      id: 'habitats',
      title: 'Habitats',
      description: 'Discover where pests hide and live',
      icon: Home,
      hash: '#habitats',
      color: 'text-amber-600 dark:text-amber-400',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    },
    {
      id: 'prevention',
      title: 'Prevention',
      description: 'Stop infestations before they start',
      icon: Shield,
      hash: '#prevention',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    },
    {
      id: 'treatment',
      title: 'Treatment',
      description: 'Safe and effective treatment methods',
      icon: Activity,
      hash: '#treatment',
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
    },
    {
      id: 'guides',
      title: 'Guides',
      description: 'Download printable reference guides',
      icon: BookOpen,
      hash: '#guides',
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/30',
    },
    {
      id: 'findLocalHelp',
      title: 'Find Local Help',
      description: 'Locate professional pest control services',
      icon: MapPin,
      hash: '#findLocalHelp',
      color: 'text-teal-600 dark:text-teal-400',
      bgColor: 'bg-teal-50 dark:bg-teal-950/30',
    },
  ];

  const handleNavigationClick = (hash: string) => {
    window.location.hash = hash;
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center gap-4">
            <img 
              src="/assets/generated/bed-bug-icon.dim_128x128.png" 
              alt="Pest Control" 
              className="h-20 w-20 object-contain"
            />
            <img 
              src="/assets/generated/bed-bugs-quick-tip-icon.dim_128x128.png" 
              alt="Quick Tips" 
              className="h-20 w-20 object-contain"
            />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Pest Control Guide
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Your comprehensive resource for identifying, preventing, and treating common household pests. 
            Get expert guidance and connect with local professionals.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="mb-8">
          <h2 className="mb-6 text-center text-2xl font-semibold">Where would you like to start?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.id}
                  className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 active:scale-100"
                  onClick={() => handleNavigationClick(item.hash)}
                >
                  <CardHeader>
                    <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg ${item.bgColor}`}>
                      <Icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Features Overview */}
        <div className="mt-12 rounded-lg border bg-muted/50 p-6">
          <h3 className="mb-4 text-xl font-semibold">What You'll Find Here</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h4 className="mb-2 font-medium">18 Common Pests</h4>
              <p className="text-sm text-muted-foreground">
                Detailed information on bed bugs, scorpions, mice, cockroaches, ants, spiders, and more
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-medium">Photo Scanner</h4>
              <p className="text-sm text-muted-foreground">
                Use your camera or upload images to help identify pests in your home
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-medium">Prevention Tips</h4>
              <p className="text-sm text-muted-foreground">
                Learn proven strategies to keep pests out and protect your home
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-medium">Treatment Guidance</h4>
              <p className="text-sm text-muted-foreground">
                Safe, effective methods for dealing with infestations
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-medium">Printable Guides</h4>
              <p className="text-sm text-muted-foreground">
                Download PDF resources for quick reference
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-medium">Local Professionals</h4>
              <p className="text-sm text-muted-foreground">
                Find licensed pest control technicians in your area
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
