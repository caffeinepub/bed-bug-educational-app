import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IdentifySection } from './sections/IdentifySection';
import { HabitatsSection } from './sections/HabitatsSection';
import { PreventionSection } from './sections/PreventionSection';
import { TreatmentSection } from './sections/TreatmentSection';
import { Quiz } from './Quiz';
import { PrintableGuides } from './PrintableGuides';
import { PhotoScanner } from './PhotoScanner';
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
import { Bug, Home, Shield, Flame, GraduationCap, FileDown, Camera, Rat } from 'lucide-react';
import { QuizSectionType } from '../backend';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function EducationalContent() {
  const [selectedPest, setSelectedPest] = useState<'bedbugs' | 'scorpions' | 'mice' | 'cockroaches' | 'headlice' | 'spiders' | 'mothslarvae' | 'beetles' | 'woodbeetles' | 'blackstinkbugs' | 'blackants' | 'redants' | 'armyants' | 'carpenterants' | 'earwigs'>('bedbugs');

  const renderPestSelectionButtons = () => (
    <div className="grid gap-3 grid-cols-2 sm:grid-cols-5 lg:grid-cols-10">
      <Button
        variant={selectedPest === 'bedbugs' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('bedbugs')}
        className="h-20 flex-col gap-2"
      >
        <Bug className="h-6 w-6" />
        <span className="text-xs">Bed Bugs</span>
      </Button>
      <Button
        variant={selectedPest === 'scorpions' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('scorpions')}
        className="h-20 flex-col gap-2"
      >
        <Bug className="h-6 w-6" />
        <span className="text-xs">Scorpions</span>
      </Button>
      <Button
        variant={selectedPest === 'mice' ? 'default' : 'outline'}
        onClick={() => setSelectedPest('mice')}
        className="h-20 flex-col gap-2"
      >
        <Rat className="h-6 w-6" />
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

        <Tabs defaultValue="scanner" className="w-full">
          <TabsList className="grid w-full grid-cols-3 gap-2 sm:grid-cols-7 h-auto p-1">
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
            <TabsTrigger value="quiz" className="flex items-center gap-2 py-3">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Quiz</span>
              <span className="sm:hidden">Quiz</span>
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center gap-2 py-3">
              <FileDown className="h-4 w-4" />
              <span className="hidden sm:inline">Guides</span>
              <span className="sm:hidden">PDF</span>
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

          <TabsContent value="quiz" className="mt-6">
            <Quiz sectionType={QuizSectionType.identifyBedBugs} sectionTitle="Bed Bug Identification" />
          </TabsContent>

          <TabsContent value="guides" className="mt-6">
            <PrintableGuides sectionType={QuizSectionType.identifyBedBugs} sectionTitle="Bed Bug Guides" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
