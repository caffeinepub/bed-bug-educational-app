import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Lightbulb } from "lucide-react";

export function GuidesSection() {
  return (
    <div className="space-y-6">
      <Alert className="border-primary/50 bg-primary/5">
        <Lightbulb className="h-4 w-4" />
        <AlertDescription className="text-sm">
          This DIY bed bug bowl trap is a simple, cost-effective monitoring tool
          using common household items. While it won't eliminate an infestation,
          it can help detect bed bug activity early.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>DIY Bed Bug Bowl Trap</CardTitle>
          <CardDescription>
            Create an effective monitoring trap with household items
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Required Household Items
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  1
                </span>
                <span>
                  <strong className="font-semibold text-foreground">
                    Large shallow bowl or dish
                  </strong>{" "}
                  (8-10 inches diameter, 2-3 inches deep)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  2
                </span>
                <span>
                  <strong className="font-semibold text-foreground">
                    Smaller bowl or cup
                  </strong>{" "}
                  (fits inside the larger bowl with space around it)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  3
                </span>
                <span>
                  <strong className="font-semibold text-foreground">
                    Sugar
                  </strong>{" "}
                  (2-3 tablespoons)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  4
                </span>
                <span>
                  <strong className="font-semibold text-foreground">
                    Warm water
                  </strong>{" "}
                  (enough to fill the outer bowl about 1 inch deep)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  5
                </span>
                <span>
                  <strong className="font-semibold text-foreground">
                    Dish soap
                  </strong>{" "}
                  (1-2 tablespoons)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  6
                </span>
                <span>
                  <strong className="font-semibold text-foreground">
                    Masking tape or painter's tape
                  </strong>{" "}
                  (optional, for easier climbing)
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Step-by-Step Assembly
            </h3>
            <ol className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  1
                </span>
                <div>
                  <strong className="font-semibold text-foreground">
                    Prepare the sugar solution:
                  </strong>{" "}
                  Mix 2-3 tablespoons of sugar with warm water in a separate
                  container until dissolved. This creates a CO₂ attractant as it
                  ferments.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  2
                </span>
                <div>
                  <strong className="font-semibold text-foreground">
                    Add dish soap to the outer bowl:
                  </strong>{" "}
                  Pour about 1 inch of water into the large bowl, then add 1-2
                  tablespoons of dish soap. Mix gently to combine without
                  creating excessive bubbles.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  3
                </span>
                <div>
                  <strong className="font-semibold text-foreground">
                    Place the smaller bowl inside:
                  </strong>{" "}
                  Position the smaller bowl or cup in the center of the larger
                  bowl. It should sit above the soapy water level, creating a
                  "moat" around it.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  4
                </span>
                <div>
                  <strong className="font-semibold text-foreground">
                    Add the sugar solution:
                  </strong>{" "}
                  Pour the sugar water into the center bowl. This will attract
                  bed bugs with CO₂ as it ferments over time.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  5
                </span>
                <div>
                  <strong className="font-semibold text-foreground">
                    Optional - Add climbing surface:
                  </strong>{" "}
                  Wrap masking tape around the outside of the large bowl with
                  the sticky side out, or create a textured surface. This makes
                  it easier for bed bugs to climb up.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  6
                </span>
                <div>
                  <strong className="font-semibold text-foreground">
                    Position the trap:
                  </strong>{" "}
                  Place the trap near your bed, ideally under each bed leg or
                  along the bed frame. Bed bugs will climb up, fall into the
                  soapy water moat, and become trapped.
                </div>
              </li>
            </ol>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">How the Trap Works</h3>
            <div className="space-y-3 text-sm">
              <p>
                <strong className="font-semibold text-foreground">
                  CO₂ Attraction:
                </strong>{" "}
                The fermenting sugar water produces carbon dioxide, which mimics
                human breath and attracts bed bugs searching for a blood meal.
              </p>
              <p>
                <strong className="font-semibold text-foreground">
                  Physical Barrier:
                </strong>{" "}
                Bed bugs climb up the textured outer surface toward the CO₂
                source in the center bowl. When they try to reach it, they fall
                into the soapy water moat.
              </p>
              <p>
                <strong className="font-semibold text-foreground">
                  Soap Mechanism:
                </strong>{" "}
                Dish soap breaks the surface tension of water, preventing bed
                bugs from escaping. They become trapped and drown in the
                solution.
              </p>
              <p>
                <strong className="font-semibold text-foreground">
                  Monitoring Tool:
                </strong>{" "}
                Check the trap daily. Finding bed bugs confirms their presence
                and helps you monitor the severity of an infestation over time.
              </p>
            </div>
          </div>

          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong className="font-semibold">
                Important Safety Warnings:
              </strong>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  • This trap is for <strong>monitoring only</strong> - it will
                  not eliminate a bed bug infestation
                </li>
                <li>
                  • Replace the sugar water solution every 3-5 days to maintain
                  effectiveness
                </li>
                <li>
                  • Keep traps away from children and pets to prevent spills or
                  ingestion
                </li>
                <li>
                  • If you catch bed bugs, contact a licensed pest control
                  professional immediately
                </li>
                <li>
                  • Do not rely solely on DIY methods for active infestations -
                  professional treatment is essential
                </li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
            <h4 className="mb-2 font-semibold text-foreground">
              Maintenance Tips
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Check traps daily and remove any captured bed bugs</li>
              <li>• Refresh the soapy water weekly or when it becomes dirty</li>
              <li>
                • Replace the sugar solution every 3-5 days for optimal CO₂
                production
              </li>
              <li>• Clean and dry bowls thoroughly before reassembling</li>
              <li>
                • Position traps in multiple locations for better monitoring
                coverage
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
