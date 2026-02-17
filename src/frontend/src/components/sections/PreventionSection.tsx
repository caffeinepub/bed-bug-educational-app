import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function PreventionSection() {
  return (
    <div className="space-y-6">
      <Alert className="border-primary/50 bg-primary/5">
        <img 
          src="/assets/generated/bed-bugs-quick-tip-icon.dim_128x128.png" 
          alt="Quick tip" 
          className="h-4 w-4"
        />
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
            by keeping your home organized. Clutter provides more places for bed bugs to hide and makes
            detection harder.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Mattress Encasements:</strong> Use bed
            bug-proof encasements on mattresses and box springs. These trap any existing bugs inside and
            prevent new ones from entering.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Regular Inspections:</strong> Check your
            sleeping areas monthly for signs of bed bugs, especially if you travel frequently or live in a
            multi-unit building.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Seal Cracks:</strong> Caulk cracks and crevices
            in walls, baseboards, and furniture to eliminate hiding spots and prevent movement between rooms.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Vacuum Regularly:</strong> Frequent vacuuming
            can help remove bed bugs and their eggs before an infestation establishes. Focus on mattress
            seams, furniture, and baseboards.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Infestation Sources</CardTitle>
          <CardDescription>Where bed bugs typically come from</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">Travel & Accommodations:</strong> Hotels,
            motels, hostels, and vacation rentals are common sources. Bed bugs can hitchhike in luggage and
            clothing.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Secondhand Items:</strong> Used furniture,
            mattresses, clothing, and other items can harbor bed bugs. Always inspect carefully before
            bringing home.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Visitors & Guests:</strong> Bed bugs can be
            transported on clothing, bags, or belongings of visitors who have infestations in their homes.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Multi-Unit Housing:</strong> Apartments,
            condos, and dormitories are at higher risk as bed bugs can spread between units through walls and
            shared spaces.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Public Spaces:</strong> Movie theaters,
            libraries, public transportation, and other shared spaces can occasionally be sources of bed bug
            exposure.
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
            <strong className="font-semibold text-foreground">Visual Inspections:</strong> Regularly check
            mattress seams, bed frames, and nearby furniture for live bugs, shed skins, eggs, or fecal
            stains.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Interceptor Traps:</strong> Place bed bug
            interceptors under bed legs to catch bugs attempting to climb up or down. Check traps weekly.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Monitor Bites:</strong> Pay attention to
            unexplained bites, especially in lines or clusters on exposed skin. Document patterns and
            locations.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Professional Inspections:</strong> If you
            suspect an infestation or live in high-risk housing, consider periodic professional inspections
            with trained detection dogs or visual experts.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Act Quickly:</strong> If you find any signs of
            bed bugs, contact a pest control professional immediately. Early intervention is much easier and
            less expensive than treating a severe infestation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
