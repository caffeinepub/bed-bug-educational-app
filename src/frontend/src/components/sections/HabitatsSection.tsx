import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function HabitatsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-6">
      <Alert className="border-primary/50 bg-primary/5">
        <button
          onClick={() => scrollToSection('common-hiding-spots')}
          className="h-4 w-4 flex-shrink-0 cursor-pointer transition-opacity hover:opacity-70"
          aria-label="Jump to habitats section"
        >
          <img 
            src="/assets/generated/bed-bugs-quick-tip-icon.dim_128x128.png" 
            alt="Quick tip" 
            className="h-4 w-4"
          />
        </button>
        <AlertDescription className="text-sm">
          Understanding where bed bugs live and how they behave helps you target inspections and treatments
          more effectively.
        </AlertDescription>
      </Alert>

      <Card id="common-hiding-spots">
        <CardHeader>
          <CardTitle>Common Hiding Spots</CardTitle>
          <CardDescription>Where bed bugs live in your home</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-muted/30">
            <img
              src="/assets/generated/mattress-hiding-spots.dim_600x400.jpg"
              alt="Common bed bug hiding spots in mattress"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <strong className="font-semibold text-foreground">Mattresses & Box Springs:</strong> Seams,
              tufts, folds, and the underside are prime locations. Bed bugs prefer to stay close to their
              food source (you).
            </p>
            <p>
              <strong className="font-semibold text-foreground">Bed Frames & Headboards:</strong> Cracks,
              joints, screw holes, and any crevices provide excellent harborage.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Furniture:</strong> Nightstands, dressers,
              chairs, and couches near sleeping areas. Check inside drawers and underneath furniture.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Walls & Floors:</strong> Behind baseboards,
              electrical outlets, picture frames, wallpaper edges, and carpet edges.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feeding Behavior</CardTitle>
          <CardDescription>When and how bed bugs feed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">Nocturnal Feeders:</strong> Bed bugs are most
            active at night, typically between 1 AM and 5 AM when hosts are in deep sleep.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Feeding Duration:</strong> A single feeding
            session lasts 5-10 minutes. They pierce the skin with their elongated beak and inject saliva
            containing anticoagulants.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Feeding Frequency:</strong> Bed bugs typically
            feed every 5-10 days, but can survive several months without a blood meal in cooler conditions.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Detection by CO₂:</strong> They're attracted to
            the carbon dioxide and warmth emitted by sleeping humans.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reproduction & Lifecycle</CardTitle>
          <CardDescription>How quickly infestations grow</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">Rapid Reproduction:</strong> A female bed bug
            can lay 1-7 eggs per day and 200-500 eggs in her lifetime.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Development Time:</strong> Eggs hatch in 6-10
            days. Nymphs develop through five molts over 5-8 weeks before reaching adulthood.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Lifespan:</strong> Adult bed bugs can live 6-12
            months under favorable conditions, with some surviving over a year.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Population Growth:</strong> A small infestation
            can quickly become severe. Early detection and treatment are critical.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Environmental Preferences</CardTitle>
          <CardDescription>Conditions bed bugs thrive in</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">Temperature:</strong> Bed bugs thrive in
            temperatures between 70-80°F (21-27°C). They become less active in cooler temperatures and die at
            extremes (below 0°F or above 113°F).
          </p>
          <p>
            <strong className="font-semibold text-foreground">Humidity:</strong> They prefer moderate humidity
            but can adapt to various conditions.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Light Avoidance:</strong> Bed bugs are
            photophobic (avoid light) and prefer dark, protected areas during the day.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Aggregation:</strong> They tend to cluster
            together, releasing pheromones that attract other bed bugs to the same hiding spots.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dispersal & Movement</CardTitle>
          <CardDescription>How bed bugs spread</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">Crawling Speed:</strong> Bed bugs can crawl
            about 3-4 feet per minute on most surfaces. They cannot fly or jump.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Between Rooms:</strong> They can travel through
            wall voids, electrical conduits, and along pipes to infest adjacent rooms or apartments.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Passive Transport:</strong> Most commonly spread
            through luggage, furniture, clothing, and other personal belongings moved between locations.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Range:</strong> While they prefer to stay within
            8 feet of their host, bed bugs will travel further if necessary to find a blood meal.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
