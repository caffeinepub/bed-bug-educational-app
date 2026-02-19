import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function PreventionSection() {
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
          onClick={() => scrollToSection('travel-precautions')}
          className="h-4 w-4 flex-shrink-0 cursor-pointer transition-opacity hover:opacity-70"
          aria-label="Jump to prevention section"
        >
          <img 
            src="/assets/generated/bed-bugs-quick-tip-icon.dim_128x128.png" 
            alt="Quick tip" 
            className="h-4 w-4"
          />
        </button>
        <AlertDescription className="text-sm">
          Prevention is always easier than treatment. These strategies can help you avoid bringing bed bugs
          into your home or catching an infestation early.
        </AlertDescription>
      </Alert>

      <Card id="travel-precautions">
        <CardHeader>
          <CardTitle>Travel Precautions</CardTitle>
          <CardDescription>Protecting yourself when away from home</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-muted/30">
            <img
              src="/assets/generated/hotel-prevention.dim_600x400.jpg"
              alt="Hotel room inspection for bed bugs"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <strong className="font-semibold text-foreground">Inspect Hotel Rooms:</strong> Before
              unpacking, check the mattress seams, headboard, and furniture for signs of bed bugs. Use a
              flashlight for better visibility.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Luggage Storage:</strong> Keep suitcases on
              luggage racks away from the bed and walls. Never place luggage on the bed or floor.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Upon Return:</strong> Inspect luggage outside
              before bringing it inside. Wash all clothing in hot water (at least 120°F) and dry on high heat
              for 30 minutes.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Vacuum Luggage:</strong> Thoroughly vacuum
              suitcases and bags after travel, paying attention to seams and pockets.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Used Furniture & Items</CardTitle>
          <CardDescription>Avoiding infested secondhand goods</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-muted/30">
            <img
              src="/assets/generated/furniture-inspection.dim_600x400.jpg"
              alt="Inspecting used furniture for bed bugs"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <strong className="font-semibold text-foreground">Thorough Inspection:</strong> Carefully
              examine all used furniture, especially mattresses, box springs, and upholstered items before
              bringing them home.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Avoid Curbside Finds:</strong> Furniture left
              on the curb is often discarded due to bed bug infestations. Exercise extreme caution or avoid
              entirely.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Check Seams & Crevices:</strong> Look inside
              drawers, along joints, under cushions, and in any cracks or crevices for live bugs, eggs, or
              fecal stains.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Clothing & Textiles:</strong> Wash and dry all
              secondhand clothing, linens, and fabric items on high heat before use.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Home Protection</CardTitle>
          <CardDescription>Reducing risk in your living space</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">Mattress Encasements:</strong> Use bed
            bug-proof encasements on mattresses and box springs. These trap any existing bugs inside and
            prevent new ones from entering.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Reduce Clutter:</strong> Minimize hiding spots
            by keeping floors, closets, and storage areas organized and clutter-free.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Seal Cracks:</strong> Caulk cracks and crevices
            in walls, baseboards, and around pipes to eliminate hiding places.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Regular Inspections:</strong> Check your
            sleeping area monthly for signs of bed bugs, especially if you travel frequently or live in a
            multi-unit building.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Vacuum Regularly:</strong> Frequent vacuuming
            can help remove bed bugs and eggs before an infestation establishes. Dispose of vacuum bags
            immediately in sealed plastic bags outside.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Sources of Infestation</CardTitle>
          <CardDescription>How bed bugs typically enter homes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">Travel:</strong> Hotels, motels, hostels, and
            vacation rentals are common sources. Bed bugs hitchhike in luggage and clothing.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Used Furniture:</strong> Secondhand mattresses,
            couches, and other upholstered furniture can harbor bed bugs.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Visitors:</strong> Guests who have bed bugs at
            home can unknowingly bring them to your residence.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Shared Laundry:</strong> Laundromats and shared
            laundry facilities can be transfer points if infested items are present.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Multi-Unit Buildings:</strong> Bed bugs can
            travel between apartments through wall voids, electrical conduits, and shared spaces.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Public Transportation:</strong> Buses, trains,
            and planes can harbor bed bugs in seats and luggage compartments.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Early Detection</CardTitle>
          <CardDescription>Catching infestations before they spread</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">Know the Signs:</strong> Familiarize yourself
            with bed bug appearance, fecal stains, shed skins, and bite patterns.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Inspect After Travel:</strong> Always check
            luggage, clothing, and personal items after returning from trips.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Monitor Sleeping Areas:</strong> Regularly
            examine mattress seams, bed frames, and nearby furniture for signs of activity.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Use Interceptors:</strong> Place bed bug
            interceptor traps under bed legs to catch bugs attempting to climb up or down.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Act Quickly:</strong> If you suspect bed bugs,
            investigate immediately. Early intervention is much easier and less costly than treating a
            full-blown infestation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
