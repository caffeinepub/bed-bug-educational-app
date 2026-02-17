import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ShieldCheck } from 'lucide-react';

export function PreventionSection() {
  return (
    <div className="space-y-6">
      <Alert className="border-primary/50 bg-primary/5">
        <ShieldCheck className="h-4 w-4 text-primary" />
        <AlertDescription className="text-sm">
          Prevention is always easier than treatment. These strategies can help you avoid bringing bed bugs
          into your home or catching an infestation early.
        </AlertDescription>
      </Alert>

      <Card>
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
          <CardTitle>Home Protection Strategies</CardTitle>
          <CardDescription>Making your home less vulnerable</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">Reduce Clutter:</strong> Minimize hiding spots
            by keeping floors, closets, and storage areas organized and clutter-free.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Seal Cracks:</strong> Caulk cracks and crevices
            around baseboards, electrical outlets, and pipes to eliminate hiding places.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Mattress Encasements:</strong> Use bed
            bug-proof encasements on mattresses and box springs. These trap any existing bugs inside and
            prevent new ones from entering.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Regular Vacuuming:</strong> Vacuum frequently,
            especially around beds, furniture, and baseboards. Immediately dispose of vacuum bags in sealed
            plastic bags outside.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Bed Isolation:</strong> Move beds away from
            walls and ensure bedding doesn't touch the floor. Consider bed bug interceptors under bed legs.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Sources of Infestations</CardTitle>
          <CardDescription>Where bed bugs typically come from</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">Hotels & Accommodations:</strong> The most
            common source. Bed bugs hitchhike in luggage from infested rooms.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Public Transportation:</strong> Buses, trains,
            planes, and taxis can harbor bed bugs that transfer to clothing or bags.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Workplaces & Schools:</strong> Bed bugs can be
            transported on personal belongings in shared spaces like offices, classrooms, and locker rooms.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Visitors:</strong> Guests from infested homes
            may unknowingly bring bed bugs on their clothing or belongings.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Laundromats:</strong> Shared laundry facilities
            can be a transfer point if infested items are washed there.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Multi-Unit Housing:</strong> Apartments and
            condos are particularly vulnerable as bed bugs can travel between units through walls and shared
            spaces.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Early Detection Methods</CardTitle>
          <CardDescription>Catching infestations before they spread</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">Regular Inspections:</strong> Check your
            sleeping areas monthly for signs of bed bugs, especially after travel or having guests.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Monitoring Devices:</strong> Bed bug
            interceptors placed under bed legs can trap bugs attempting to climb up or down, providing early
            warning.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Watch for Bites:</strong> While not everyone
            reacts to bites, unexplained bite marks in a line or cluster pattern warrant investigation.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Professional Inspections:</strong> If you're in
            a high-risk situation (frequent travel, multi-unit housing), consider periodic professional
            inspections.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Educate Household Members:</strong> Ensure
            everyone in your home knows what bed bugs look like and the importance of reporting signs
            immediately.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
