import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Flame, AlertTriangle } from 'lucide-react';

export function TreatmentSection() {
  return (
    <div className="space-y-6">
      <Alert className="border-primary/50 bg-primary/5">
        <Flame className="h-4 w-4 text-primary" />
        <AlertDescription className="text-sm">
          High heat treatment is one of the most effective non-chemical methods for eliminating bed bugs.
          Proper preparation is essential for success.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription className="text-sm">
          <strong>Important:</strong> For severe infestations, professional pest control is strongly
          recommended. These guidelines are for supplementary treatment and prevention.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Heat Treatment Basics</CardTitle>
          <CardDescription>Why heat works against bed bugs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">Lethal Temperature:</strong> Bed bugs and their
            eggs die when exposed to temperatures of 113°F (45°C) or higher for 90+ minutes, or 118°F (48°C)
            for 20 minutes.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Penetrating Heat:</strong> Heat treatment is
            effective because it penetrates into cracks, crevices, and materials where bed bugs hide.
          </p>
          <p>
            <strong className="font-semibold text-foreground">No Resistance:</strong> Unlike chemical
            treatments, bed bugs cannot develop resistance to heat.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Immediate Results:</strong> Heat kills bed bugs
            at all life stages (eggs, nymphs, adults) on contact when proper temperatures are maintained.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dryer Treatment</CardTitle>
          <CardDescription>Using high heat to treat fabrics and clothing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-muted/30">
            <img
              src="/assets/generated/high-heat-dryer.dim_400x300.jpg"
              alt="Clothes dryer for heat treatment"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <strong className="font-semibold text-foreground">Preparation:</strong> Remove all bedding,
              clothing, curtains, and washable fabric items from infested areas.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Washing:</strong> Wash items in hot water (at
              least 120°F/49°C) if fabric care labels allow. This helps kill bed bugs before drying.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Drying:</strong> Dry items on the highest
              heat setting for at least 30 minutes. Larger loads may require 45-60 minutes to ensure all
              items reach lethal temperatures.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Delicate Items:</strong> For items that can't
              be washed, place them directly in the dryer on high heat for 30-45 minutes.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Verify Temperature:</strong> Ensure your
              dryer reaches at least 120°F. Some older or smaller dryers may not get hot enough.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sealing & Storage</CardTitle>
          <CardDescription>Protecting treated items</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-muted/30">
            <img
              src="/assets/generated/sealed-bags-treatment.dim_500x400.jpg"
              alt="Sealed plastic bags for treated items"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <strong className="font-semibold text-foreground">Immediate Sealing:</strong> As soon as items
              come out of the dryer, place them directly into clean, sealed plastic bags or containers.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Bag Quality:</strong> Use heavy-duty plastic
              bags or bins with tight-fitting lids. Avoid bags with holes or weak seals.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Labeling:</strong> Clearly label bags as
              "TREATED" with the date to avoid confusion and prevent re-contamination.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Storage Duration:</strong> Keep items sealed
              until the infestation is completely eliminated (typically 2-3 weeks after final treatment).
            </p>
            <p>
              <strong className="font-semibold text-foreground">Clean Storage Area:</strong> Store sealed
              items in a clean, uninfested area away from the treatment zone.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Steam Cleaning</CardTitle>
          <CardDescription>Treating furniture and surfaces</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-muted/30">
            <img
              src="/assets/generated/steam-cleaning.dim_500x400.jpg"
              alt="Steam cleaner for bed bug treatment"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <strong className="font-semibold text-foreground">Equipment:</strong> Use a commercial-grade
              steam cleaner that produces steam at 160-180°F (71-82°C) at the tip.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Target Areas:</strong> Focus on mattress
              seams, box spring edges, bed frames, furniture joints, baseboards, and carpet edges.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Technique:</strong> Move the steamer slowly
              (1 inch per second) to ensure adequate heat penetration. Use a low moisture setting to avoid
              damaging materials.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Drying:</strong> Allow treated areas to dry
              completely before replacing bedding or using furniture to prevent mold growth.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Limitations:</strong> Steam may not penetrate
              deeply into thick materials. Combine with other methods for comprehensive treatment.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Room Preparation Checklist</CardTitle>
          <CardDescription>Steps before heat treatment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="space-y-2">
            <p className="font-semibold text-foreground">Before Treatment:</p>
            <ul className="ml-4 space-y-1 list-disc">
              <li>Remove all bedding, curtains, and washable items for dryer treatment</li>
              <li>Clear clutter from floors, closets, and under beds</li>
              <li>Pull furniture away from walls (at least 3 feet)</li>
              <li>Remove items from drawers and closets</li>
              <li>Vacuum thoroughly, then seal and dispose of vacuum bag outside</li>
              <li>Remove or protect heat-sensitive items (electronics, candles, medications)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-foreground">During Treatment:</p>
            <ul className="ml-4 space-y-1 list-disc">
              <li>Maintain room temperature above 120°F for at least 4 hours (professional treatment)</li>
              <li>Use fans to circulate heat evenly throughout the space</li>
              <li>Monitor temperatures with thermometers in multiple locations</li>
              <li>Keep doors and windows closed to maintain heat</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-foreground">After Treatment:</p>
            <ul className="ml-4 space-y-1 list-disc">
              <li>Allow room to cool before re-entering</li>
              <li>Inspect for any surviving bed bugs</li>
              <li>Install mattress encasements on treated beds</li>
              <li>Only return sealed, treated items to the room</li>
              <li>Continue monitoring for 2-3 weeks to ensure complete elimination</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Additional Non-Chemical Methods</CardTitle>
          <CardDescription>Supplementary treatment options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">Freezing:</strong> Items can be frozen at 0°F
            (-18°C) for at least 4 days to kill bed bugs. Ensure your freezer maintains this temperature.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Diatomaceous Earth:</strong> Food-grade DE can
            be applied to cracks and crevices. It damages bed bug exoskeletons, causing dehydration over
            several days.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Mattress Encasements:</strong> Trap bed bugs
            inside mattresses and box springs, preventing feeding and eventually causing starvation (can take
            up to 18 months).
          </p>
          <p>
            <strong className="font-semibold text-foreground">Interceptors:</strong> Place under bed legs to
            trap bed bugs attempting to climb up or down, helping monitor treatment effectiveness.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Professional Treatment:</strong> For severe
            infestations, professional heat treatment or integrated pest management (IPM) combining multiple
            methods is most effective.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
