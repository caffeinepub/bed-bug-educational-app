import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export function IdentifySection() {
  return (
    <div className="space-y-6">
      <Alert className="border-primary/50 bg-primary/5">
        <AlertCircle className="h-4 w-4 text-primary" />
        <AlertDescription className="text-sm">
          Early detection is crucial. Learning to identify bed bugs and their signs can help you catch an
          infestation before it becomes severe.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Adult Bed Bugs</CardTitle>
          <CardDescription>What mature bed bugs look like</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-muted/30">
            <img
              src="/assets/generated/adult-bed-bug.dim_400x400.jpg"
              alt="Adult bed bug close-up"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <strong className="font-semibold text-foreground">Size:</strong> Adult bed bugs are about 4-5mm
              long (roughly the size of an apple seed).
            </p>
            <p>
              <strong className="font-semibold text-foreground">Color:</strong> Reddish-brown, flat, and oval-shaped.
              After feeding, they become more elongated and darker.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Features:</strong> Six legs, antennae, and a
              segmented body. They cannot fly or jump but can crawl quickly.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Life Stages</CardTitle>
          <CardDescription>From eggs to adults</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-muted/30">
            <img
              src="/assets/generated/bed-bug-life-stages.dim_600x400.jpg"
              alt="Bed bug life cycle stages"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <strong className="font-semibold text-foreground">Eggs:</strong> Tiny (1mm), white, and
              pearl-like. Often found in clusters in cracks and crevices.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Nymphs:</strong> Smaller, lighter-colored
              versions of adults. They molt five times before reaching maturity, requiring a blood meal
              between each stage.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Development:</strong> Under ideal conditions,
              bed bugs can develop from egg to adult in as little as 5 weeks.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Bite Marks</CardTitle>
            <CardDescription>Identifying bed bug bites</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-hidden rounded-lg border bg-muted/30">
              <img
                src="/assets/generated/bed-bug-bites.dim_400x300.jpg"
                alt="Bed bug bite patterns on skin"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="space-y-2 text-sm">
              <p>
                Bites often appear in a line or cluster, typically on exposed skin during sleep. They may be
                red, itchy, and slightly raised.
              </p>
              <p className="text-muted-foreground">
                Note: Not everyone reacts to bed bug bites, and reactions vary by individual.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fecal Stains</CardTitle>
            <CardDescription>Dark spots and stains</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-hidden rounded-lg border bg-muted/30">
              <img
                src="/assets/generated/bed-bug-stains.dim_400x300.jpg"
                alt="Bed bug fecal stains on fabric"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="space-y-2 text-sm">
              <p>
                Look for small, dark spots (digested blood) on mattresses, sheets, and nearby furniture.
                These stains may bleed on fabric like a marker.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Blood Stains</CardTitle>
          <CardDescription>Evidence on bedding</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-muted/30">
            <img
              src="/assets/generated/blood-stains-sheet.dim_400x300.jpg"
              alt="Blood stains on bed sheets"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-2 text-sm">
            <p>
              Small blood spots on sheets or pillowcases can occur when bed bugs are crushed during sleep or
              from bite wounds.
            </p>
            <p>
              Check your bedding regularly, especially along seams and in corners where bed bugs tend to hide.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Eggs & Shells</CardTitle>
          <CardDescription>Finding the next generation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-muted/30">
            <img
              src="/assets/generated/bed-bug-eggs.dim_400x400.jpg"
              alt="Bed bug eggs close-up"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-2 text-sm">
            <p>
              Eggs are extremely small (about 1mm), white, and sticky. They're often laid in protected areas
              like mattress seams, furniture joints, and behind baseboards.
            </p>
            <p>
              You may also find shed skins (exoskeletons) from nymphs as they molt and grow. These are
              translucent and light-colored.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
