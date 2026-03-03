import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PreventionSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="space-y-6">
      <Alert className="border-primary/50 bg-primary/5">
        <div className="flex items-start gap-3">
          <button
            type="button"
            onClick={() => scrollToSection("travel-precautions")}
            className="flex-shrink-0 cursor-pointer transition-opacity hover:opacity-70 mt-0.5"
            aria-label="Jump to prevention section"
          >
            <img
              src="/assets/generated/bed-bugs-quick-tip-icon.dim_128x128.png"
              alt="Quick tip"
              className="h-5 w-5"
            />
          </button>
          <AlertDescription className="text-sm flex-1">
            Prevention is always easier than treatment. These strategies can
            help you avoid bringing bed bugs into your home or catching an
            infestation early.
          </AlertDescription>
        </div>
      </Alert>

      <Card id="travel-precautions">
        <CardHeader>
          <CardTitle>Travel Precautions</CardTitle>
          <CardDescription>
            Protecting yourself when away from home
          </CardDescription>
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
              <strong className="font-semibold text-foreground">
                Inspect Hotel Rooms:
              </strong>{" "}
              Before unpacking, check the mattress seams, headboard, and
              furniture for signs of bed bugs. Use a flashlight for better
              visibility.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Luggage Storage:
              </strong>{" "}
              Keep suitcases on luggage racks away from the bed and walls. Never
              place luggage on the bed or floor.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Upon Return:
              </strong>{" "}
              Inspect luggage outside before bringing it inside. Wash all
              clothing in hot water (at least 120°F) and dry on high heat for 30
              minutes.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Vacuum Luggage:
              </strong>{" "}
              Thoroughly vacuum suitcases and bags after travel, paying
              attention to seams and pockets.
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
              <strong className="font-semibold text-foreground">
                Thorough Inspection:
              </strong>{" "}
              Carefully examine all used furniture, especially mattresses, box
              springs, and upholstered items, before bringing them home.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Avoid Curbside Finds:
              </strong>{" "}
              Free furniture left on the curb may have been discarded due to bed
              bug infestations. Exercise extreme caution.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Treatment Before Entry:
              </strong>{" "}
              If you must bring in used items, treat them with heat or
              insecticide before bringing them inside your home.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Check Clothing:
              </strong>{" "}
              Inspect secondhand clothing and wash in hot water immediately
              after purchase.
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
            <strong className="font-semibold text-foreground">
              Reduce Clutter:
            </strong>{" "}
            Minimize hiding spots by keeping your home tidy. Store items in
            sealed plastic containers rather than cardboard boxes.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Mattress Encasements:
            </strong>{" "}
            Use bed bug-proof encasements on mattresses and box springs. These
            trap any existing bugs inside and prevent new ones from entering.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Seal Cracks:
            </strong>{" "}
            Caulk cracks and crevices in walls, baseboards, and furniture to
            eliminate hiding spots.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Regular Vacuuming:
            </strong>{" "}
            Vacuum frequently, especially around beds and furniture. Immediately
            dispose of vacuum bags in sealed plastic bags outside.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Bed Isolation:
            </strong>{" "}
            Move beds away from walls and ensure bedding doesn't touch the
            floor. Consider bed bug interceptors under bed legs.
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
            <strong className="font-semibold text-foreground">Travel:</strong>{" "}
            Hotels, motels, and other accommodations are the most common source.
            Bed bugs hitchhike in luggage and belongings.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Visitors:</strong>{" "}
            Guests may unknowingly bring bed bugs into your home on their
            clothing or bags.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Shared Spaces:
            </strong>{" "}
            Laundromats, public transportation, movie theaters, and offices can
            harbor bed bugs.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Multi-Unit Housing:
            </strong>{" "}
            In apartments and condos, bed bugs can travel between units through
            walls, pipes, and electrical conduits.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Used Items:
            </strong>{" "}
            Furniture, clothing, books, and electronics purchased secondhand may
            be infested.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Early Detection Methods</CardTitle>
          <CardDescription>
            Catching infestations before they spread
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">
              Regular Inspections:
            </strong>{" "}
            Check your sleeping area monthly for signs of bed bugs, including
            live bugs, shed skins, fecal spots, and blood stains.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Monitoring Devices:
            </strong>{" "}
            Use bed bug interceptors (traps) under bed legs to catch bugs
            attempting to climb up or down.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Be Alert to Bites:
            </strong>{" "}
            While not everyone reacts to bed bug bites, unexplained bites
            (especially in lines or clusters) warrant investigation.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Professional Inspections:
            </strong>{" "}
            If you live in multi-unit housing or have reason for concern,
            consider periodic professional inspections.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Post-Travel Checks:
            </strong>{" "}
            Always inspect luggage and wash travel clothing immediately after
            returning from trips.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
