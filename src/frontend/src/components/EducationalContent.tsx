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
import { Bug, Home, Shield, Flame, GraduationCap, FileDown, Camera, Rat } from 'lucide-react';
import { QuizSectionType } from '../backend';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function EducationalContent() {
  const [selectedPest, setSelectedPest] = useState<'bedbugs' | 'scorpions' | 'mice' | 'cockroaches' | 'headlice' | 'spiders'>('bedbugs');

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
                <div className="grid gap-3 sm:grid-cols-6">
                  <Button
                    variant={selectedPest === 'bedbugs' ? 'default' : 'outline'}
                    onClick={() => setSelectedPest('bedbugs')}
                    className="h-20 flex-col gap-2"
                  >
                    <Bug className="h-6 w-6" />
                    <span>Bed Bugs</span>
                  </Button>
                  <Button
                    variant={selectedPest === 'scorpions' ? 'default' : 'outline'}
                    onClick={() => setSelectedPest('scorpions')}
                    className="h-20 flex-col gap-2"
                  >
                    <Bug className="h-6 w-6" />
                    <span>Scorpions</span>
                  </Button>
                  <Button
                    variant={selectedPest === 'mice' ? 'default' : 'outline'}
                    onClick={() => setSelectedPest('mice')}
                    className="h-20 flex-col gap-2"
                  >
                    <Rat className="h-6 w-6" />
                    <span>Mice</span>
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
                    <span>Cockroaches</span>
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
                    <span>Head Lice</span>
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
                    <span>Spiders</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {selectedPest === 'bedbugs' && <IdentifySection />}
            {selectedPest === 'scorpions' && <ScorpionsContent />}
            {selectedPest === 'mice' && <MiceContent />}
            {selectedPest === 'cockroaches' && <CockroachesContent />}
            {selectedPest === 'headlice' && <HeadLiceContent />}
            {selectedPest === 'spiders' && <SpidersContent />}
          </TabsContent>

          <TabsContent value="habitats" className="mt-6">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="mb-4 text-center">
                  <h3 className="mb-2 text-xl font-semibold">Select a Pest</h3>
                  <p className="text-sm text-muted-foreground">Choose which pest you want to learn about</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-6">
                  <Button
                    variant={selectedPest === 'bedbugs' ? 'default' : 'outline'}
                    onClick={() => setSelectedPest('bedbugs')}
                    className="h-20 flex-col gap-2"
                  >
                    <Bug className="h-6 w-6" />
                    <span>Bed Bugs</span>
                  </Button>
                  <Button
                    variant={selectedPest === 'scorpions' ? 'default' : 'outline'}
                    onClick={() => setSelectedPest('scorpions')}
                    className="h-20 flex-col gap-2"
                  >
                    <Bug className="h-6 w-6" />
                    <span>Scorpions</span>
                  </Button>
                  <Button
                    variant={selectedPest === 'mice' ? 'default' : 'outline'}
                    onClick={() => setSelectedPest('mice')}
                    className="h-20 flex-col gap-2"
                  >
                    <Rat className="h-6 w-6" />
                    <span>Mice</span>
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
                    <span>Cockroaches</span>
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
                    <span>Head Lice</span>
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
                    <span>Spiders</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {selectedPest === 'bedbugs' && <HabitatsSection />}
            {selectedPest === 'scorpions' && <ScorpionsContent />}
            {selectedPest === 'mice' && <MiceContent />}
            {selectedPest === 'cockroaches' && <CockroachesContent />}
            {selectedPest === 'headlice' && <HeadLiceContent />}
            {selectedPest === 'spiders' && <SpidersContent />}
          </TabsContent>

          <TabsContent value="prevention" className="mt-6">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="mb-4 text-center">
                  <h3 className="mb-2 text-xl font-semibold">Select a Pest</h3>
                  <p className="text-sm text-muted-foreground">Choose which pest you want to learn about</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-6">
                  <Button
                    variant={selectedPest === 'bedbugs' ? 'default' : 'outline'}
                    onClick={() => setSelectedPest('bedbugs')}
                    className="h-20 flex-col gap-2"
                  >
                    <Bug className="h-6 w-6" />
                    <span>Bed Bugs</span>
                  </Button>
                  <Button
                    variant={selectedPest === 'scorpions' ? 'default' : 'outline'}
                    onClick={() => setSelectedPest('scorpions')}
                    className="h-20 flex-col gap-2"
                  >
                    <Bug className="h-6 w-6" />
                    <span>Scorpions</span>
                  </Button>
                  <Button
                    variant={selectedPest === 'mice' ? 'default' : 'outline'}
                    onClick={() => setSelectedPest('mice')}
                    className="h-20 flex-col gap-2"
                  >
                    <Rat className="h-6 w-6" />
                    <span>Mice</span>
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
                    <span>Cockroaches</span>
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
                    <span>Head Lice</span>
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
                    <span>Spiders</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {selectedPest === 'bedbugs' && <PreventionSection />}
            {selectedPest === 'scorpions' && <ScorpionsContent />}
            {selectedPest === 'mice' && <MiceContent />}
            {selectedPest === 'cockroaches' && <CockroachesContent />}
            {selectedPest === 'headlice' && <HeadLiceContent />}
            {selectedPest === 'spiders' && <SpidersContent />}
          </TabsContent>

          <TabsContent value="treatment" className="mt-6">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="mb-4 text-center">
                  <h3 className="mb-2 text-xl font-semibold">Select a Pest</h3>
                  <p className="text-sm text-muted-foreground">Choose which pest you want to learn about</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-6">
                  <Button
                    variant={selectedPest === 'bedbugs' ? 'default' : 'outline'}
                    onClick={() => setSelectedPest('bedbugs')}
                    className="h-20 flex-col gap-2"
                  >
                    <Bug className="h-6 w-6" />
                    <span>Bed Bugs</span>
                  </Button>
                  <Button
                    variant={selectedPest === 'scorpions' ? 'default' : 'outline'}
                    onClick={() => setSelectedPest('scorpions')}
                    className="h-20 flex-col gap-2"
                  >
                    <Bug className="h-6 w-6" />
                    <span>Scorpions</span>
                  </Button>
                  <Button
                    variant={selectedPest === 'mice' ? 'default' : 'outline'}
                    onClick={() => setSelectedPest('mice')}
                    className="h-20 flex-col gap-2"
                  >
                    <Rat className="h-6 w-6" />
                    <span>Mice</span>
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
                    <span>Cockroaches</span>
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
                    <span>Head Lice</span>
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
                    <span>Spiders</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {selectedPest === 'bedbugs' && <TreatmentSection />}
            {selectedPest === 'scorpions' && <ScorpionsContent />}
            {selectedPest === 'mice' && <MiceContent />}
            {selectedPest === 'cockroaches' && <CockroachesContent />}
            {selectedPest === 'headlice' && <HeadLiceContent />}
            {selectedPest === 'spiders' && <SpidersContent />}
          </TabsContent>

          <TabsContent value="quiz" className="mt-6">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="mb-2 text-2xl font-bold">Test Your Knowledge</h3>
                <p className="text-muted-foreground">
                  Choose a topic below to quiz yourself on what you've learned about bed bugs
                </p>
              </div>

              <Tabs defaultValue="identify-quiz" className="w-full">
                <TabsList className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
                  <TabsTrigger value="identify-quiz">Identify</TabsTrigger>
                  <TabsTrigger value="habitats-quiz">Habitats</TabsTrigger>
                  <TabsTrigger value="prevention-quiz">Prevention</TabsTrigger>
                  <TabsTrigger value="treatment-quiz">Treatment</TabsTrigger>
                </TabsList>

                <TabsContent value="identify-quiz" className="mt-6">
                  <Quiz sectionType={QuizSectionType.identifyBedBugs} sectionTitle="Identify Bed Bugs" />
                </TabsContent>

                <TabsContent value="habitats-quiz" className="mt-6">
                  <Quiz sectionType={QuizSectionType.habitatsHabits} sectionTitle="Habitats & Habits" />
                </TabsContent>

                <TabsContent value="prevention-quiz" className="mt-6">
                  <Quiz sectionType={QuizSectionType.prevention} sectionTitle="Prevention" />
                </TabsContent>

                <TabsContent value="treatment-quiz" className="mt-6">
                  <Quiz sectionType={QuizSectionType.treatmentPreparation} sectionTitle="Treatment Preparation" />
                </TabsContent>
              </Tabs>
            </div>
          </TabsContent>

          <TabsContent value="guides" className="mt-6">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="mb-2 text-2xl font-bold">Printable Guides</h3>
                <p className="text-muted-foreground">
                  Download PDF guides for offline reference and printing
                </p>
              </div>

              <Tabs defaultValue="identify-guides" className="w-full">
                <TabsList className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
                  <TabsTrigger value="identify-guides">Identify</TabsTrigger>
                  <TabsTrigger value="habitats-guides">Habitats</TabsTrigger>
                  <TabsTrigger value="prevention-guides">Prevention</TabsTrigger>
                  <TabsTrigger value="treatment-guides">Treatment</TabsTrigger>
                </TabsList>

                <TabsContent value="identify-guides" className="mt-6">
                  <PrintableGuides sectionType={QuizSectionType.identifyBedBugs} sectionTitle="Identify Bed Bugs" />
                </TabsContent>

                <TabsContent value="habitats-guides" className="mt-6">
                  <PrintableGuides sectionType={QuizSectionType.habitatsHabits} sectionTitle="Habitats & Habits" />
                </TabsContent>

                <TabsContent value="prevention-guides" className="mt-6">
                  <PrintableGuides sectionType={QuizSectionType.prevention} sectionTitle="Prevention" />
                </TabsContent>

                <TabsContent value="treatment-guides" className="mt-6">
                  <PrintableGuides sectionType={QuizSectionType.treatmentPreparation} sectionTitle="Treatment Preparation" />
                </TabsContent>
              </Tabs>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
