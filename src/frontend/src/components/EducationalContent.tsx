import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IdentifySection } from './sections/IdentifySection';
import { HabitatsSection } from './sections/HabitatsSection';
import { PreventionSection } from './sections/PreventionSection';
import { TreatmentSection } from './sections/TreatmentSection';
import { PrintableGuides } from './PrintableGuides';
import { PhotoScanner } from './PhotoScanner';
import { TechnicianFinder } from './TechnicianFinder';
import { LocationFinder } from './LocationFinder';
import { ScorpionsContent } from './pests/ScorpionsContent';
import { MiceContent } from './pests/MiceContent';
import { CockroachesContent } from './pests/CockroachesContent';
import { HeadLiceContent } from './pests/HeadLiceContent';
import { SpidersContent } from './pests/SpidersContent';
import { MothsLarvaeContent } from './pests/MothsLarvaeContent';
import { BeetlesContent } from './pests/BeetlesContent';
import { WoodBeetlesContent } from './pests/WoodBeetlesContent';
import { BlackStinkBugsContent } from './pests/BlackStinkBugsContent';
import { BlackAntsContent } from './pests/BlackAntsContent';
import { RedAntsContent } from './pests/RedAntsContent';
import { ArmyAntsContent } from './pests/ArmyAntsContent';
import { CarpenterAntsContent } from './pests/CarpenterAntsContent';
import { EarwigsContent } from './pests/EarwigsContent';
import { CommonHouseFlyContent } from './pests/CommonHouseFlyContent';
import { LargeFliesContent } from './pests/LargeFliesContent';
import { TicksContent } from './pests/TicksContent';
import { Bug, Home, Shield, Flame, FileDown, Camera, MapPin, Search } from 'lucide-react';
import { ContentType } from '../backend';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useHashRoute } from '../hooks/useHashRoute';

export function EducationalContent() {
  const [selectedPest, setSelectedPest] = useState<'bedbugs' | 'scorpions' | 'mice' | 'cockroaches' | 'headlice' | 'spiders' | 'mothslarvae' | 'beetles' | 'woodbeetles' | 'blackstinkbugs' | 'blackants' | 'redants' | 'armyants' | 'carpenterants' | 'earwigs' | 'housefly' | 'largeflies' | 'ticks'>('bedbugs');
  const { currentHash } = useHashRoute();

  // Determine active tab from hash
  const getActiveTab = (): string => {
    const hash = currentHash.replace('/', '').replace('#', '');
    const validTabs = ['scanner', 'identify', 'habitats', 'prevention', 'treatment', 'guides', 'findLocalHelp', 'locationFinder'];
    return validTabs.includes(hash) ? hash : 'scanner';
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

  // Sync tab with hash changes
  useEffect(() => {
    const newTab = getActiveTab();
    setActiveTab(newTab);
  }, [currentHash]);

  // Update hash when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.location.hash = `#${value}`;
  };

  const renderPestSelectionButtons = () => (
    <div className="grid gap-3 grid-cols-2 sm:grid-cols-5 lg:grid-cols-10">
      <Button
        variant={selectedPest === 'bedbugs' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('bedbugs')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/bed-bug-icon.dim_128x128.png" 
          alt="Bed Bugs" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Bed Bugs</span>
      </Button>
      <Button
        variant={selectedPest === 'scorpions' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('scorpions')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/scorpion-icon.dim_128x128.png" 
          alt="Scorpions" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Scorpions</span>
      </Button>
      <Button
        variant={selectedPest === 'mice' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('mice')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/mouse-icon.dim_128x128.png" 
          alt="Mice" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Mice</span>
      </Button>
      <Button
        variant={selectedPest === 'cockroaches' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('cockroaches')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/cockroach-icon.dim_128x128.png" 
          alt="Cockroaches" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Cockroaches</span>
      </Button>
      <Button
        variant={selectedPest === 'headlice' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('headlice')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/head-lice-icon.dim_128x128.png" 
          alt="Head Lice" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Head Lice</span>
      </Button>
      <Button
        variant={selectedPest === 'spiders' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('spiders')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/spider-icon.dim_128x128.png" 
          alt="Spiders" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Spiders</span>
      </Button>
      <Button
        variant={selectedPest === 'mothslarvae' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('mothslarvae')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/moths-larvae-icon.dim_128x128.png" 
          alt="Moths & Larvae" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Moths & Larvae</span>
      </Button>
      <Button
        variant={selectedPest === 'beetles' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('beetles')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/beetle-icon.dim_128x128.png" 
          alt="Beetles" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Beetles</span>
      </Button>
      <Button
        variant={selectedPest === 'woodbeetles' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('woodbeetles')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/wood-beetle-icon.dim_128x128.png" 
          alt="Wood Beetles" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Wood Beetles</span>
      </Button>
      <Button
        variant={selectedPest === 'blackstinkbugs' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('blackstinkbugs')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/black-stink-bug-icon.dim_128x128.png" 
          alt="Black Stink Bugs" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Stink Bugs</span>
      </Button>
      <Button
        variant={selectedPest === 'blackants' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('blackants')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/black-ant-icon.dim_128x128.png" 
          alt="Black Ants" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Black Ants</span>
      </Button>
      <Button
        variant={selectedPest === 'redants' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('redants')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/red-ant-icon.dim_128x128.png" 
          alt="Red Ants" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Red Ants</span>
      </Button>
      <Button
        variant={selectedPest === 'armyants' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('armyants')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/army-ant-icon.dim_128x128.png" 
          alt="Army Ants" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Army Ants</span>
      </Button>
      <Button
        variant={selectedPest === 'carpenterants' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('carpenterants')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/carpenter-ant-icon.dim_128x128.png" 
          alt="Carpenter Ants" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Carpenter Ants</span>
      </Button>
      <Button
        variant={selectedPest === 'earwigs' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('earwigs')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/earwig-icon.dim_128x128.png" 
          alt="Earwigs" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Earwigs</span>
      </Button>
      <Button
        variant={selectedPest === 'housefly' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('housefly')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/house-fly-icon.dim_128x128.png" 
          alt="Common House Fly" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">House Fly</span>
      </Button>
      <Button
        variant={selectedPest === 'largeflies' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('largeflies')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/large-flies-icon.dim_128x128.png" 
          alt="Large Flies" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Large Flies</span>
      </Button>
      <Button
        variant={selectedPest === 'ticks' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('ticks')}
        className="h-20 flex-col gap-2"
      >
        <img 
          src="/assets/generated/tick-icon.dim_128x128.png" 
          alt="Ticks" 
          className="h-6 w-6 object-contain"
        />
        <span className="text-xs">Ticks</span>
      </Button>
    </div>
  );

  const renderPestContent = () => {
    switch (selectedPest) {
      case 'bedbugs':
        return null; // Will render section-specific content
      case 'scorpions':
        return <ScorpionsContent />;
      case 'mice':
        return <MiceContent />;
      case 'cockroaches':
        return <CockroachesContent />;
      case 'headlice':
        return <HeadLiceContent />;
      case 'spiders':
        return <SpidersContent />;
      case 'mothslarvae':
        return <MothsLarvaeContent />;
      case 'beetles':
        return <BeetlesContent />;
      case 'woodbeetles':
        return <WoodBeetlesContent />;
      case 'blackstinkbugs':
        return <BlackStinkBugsContent />;
      case 'blackants':
        return <BlackAntsContent />;
      case 'redants':
        return <RedAntsContent />;
      case 'armyants':
        return <ArmyAntsContent />;
      case 'carpenterants':
        return <CarpenterAntsContent />;
      case 'earwigs':
        return <EarwigsContent />;
      case 'housefly':
        return <CommonHouseFlyContent />;
      case 'largeflies':
        return <LargeFliesContent />;
      case 'ticks':
        return <TicksContent />;
      default:
        return null;
    }
  };

  return (
    <div className="container py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Pest Identification & Education
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn about common household pests, how to identify them, and effective prevention strategies
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-4 gap-2 sm:grid-cols-8 h-auto p-1">
            <TabsTrigger value="scanner" className="flex items-center gap-2 py-3">
              <Camera className="h-4 w-4" />
              <span className="hidden sm:inline">Scanner</span>
              <span className="sm:hidden">Scan</span>
            </TabsTrigger>
            <TabsTrigger value="identify" className="flex items-center gap-2 py-3">
              <Bug className="h-4 w-4" />
              <span className="hidden sm:inline">Identify</span>
              <span className="sm:hidden">ID</span>
            </TabsTrigger>
            <TabsTrigger value="habitats" className="flex items-center gap-2 py-3">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Habitats</span>
              <span className="sm:hidden">Home</span>
            </TabsTrigger>
            <TabsTrigger value="prevention" className="flex items-center gap-2 py-3">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Prevention</span>
              <span className="sm:hidden">Prevent</span>
            </TabsTrigger>
            <TabsTrigger value="treatment" className="flex items-center gap-2 py-3">
              <Flame className="h-4 w-4" />
              <span className="hidden sm:inline">Treatment</span>
              <span className="sm:hidden">Treat</span>
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center gap-2 py-3">
              <FileDown className="h-4 w-4" />
              <span className="hidden sm:inline">Guides</span>
              <span className="sm:hidden">PDF</span>
            </TabsTrigger>
            <TabsTrigger value="findLocalHelp" className="flex items-center gap-2 py-3">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Find Local Help</span>
              <span className="sm:hidden">Local</span>
            </TabsTrigger>
            <TabsTrigger value="locationFinder" className="flex items-center gap-2 py-3">
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Location Finder</span>
              <span className="sm:hidden">Find</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scanner" className="mt-6">
            <PhotoScanner />
          </TabsContent>

          <TabsContent value="identify" className="mt-6">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="mb-4 text-center">
                  <h3 className="mb-2 text-xl font-semibold">Select a Pest</h3>
                  <p className="text-sm text-muted-foreground">Choose which pest you want to learn about</p>
                </div>
                {renderPestSelectionButtons()}
              </CardContent>
            </Card>

            {selectedPest === 'bedbugs' ? <IdentifySection /> : renderPestContent()}
          </TabsContent>

          <TabsContent value="habitats" className="mt-6">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="mb-4 text-center">
                  <h3 className="mb-2 text-xl font-semibold">Select a Pest</h3>
                  <p className="text-sm text-muted-foreground">Choose which pest you want to learn about</p>
                </div>
                {renderPestSelectionButtons()}
              </CardContent>
            </Card>

            {selectedPest === 'bedbugs' ? <HabitatsSection /> : renderPestContent()}
          </TabsContent>

          <TabsContent value="prevention" className="mt-6">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="mb-4 text-center">
                  <h3 className="mb-2 text-xl font-semibold">Select a Pest</h3>
                  <p className="text-sm text-muted-foreground">Choose which pest you want to learn about</p>
                </div>
                {renderPestSelectionButtons()}
              </CardContent>
            </Card>

            {selectedPest === 'bedbugs' ? <PreventionSection /> : renderPestContent()}
          </TabsContent>

          <TabsContent value="treatment" className="mt-6">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="mb-4 text-center">
                  <h3 className="mb-2 text-xl font-semibold">Select a Pest</h3>
                  <p className="text-sm text-muted-foreground">Choose which pest you want to learn about</p>
                </div>
                {renderPestSelectionButtons()}
              </CardContent>
            </Card>

            {selectedPest === 'bedbugs' ? <TreatmentSection /> : renderPestContent()}
          </TabsContent>

          <TabsContent value="guides" className="mt-6">
            <PrintableGuides contentType={ContentType.bedBugs} sectionTitle="Bed Bug Guides" />
          </TabsContent>

          <TabsContent value="findLocalHelp" className="mt-6">
            <TechnicianFinder />
          </TabsContent>

          <TabsContent value="locationFinder" className="mt-6">
            <LocationFinder />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
