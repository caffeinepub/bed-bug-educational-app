import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Droplet, Eye, Home, Shield } from "lucide-react";

export function CockroachesContent() {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important Safety Notice</AlertTitle>
        <AlertDescription>
          Use pesticides and baits carefully according to label instructions.
          For severe or recurrent infestations, or if you're unsure about
          chemical safety, contact a licensed pest control professional.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Identifying Cockroaches
          </CardTitle>
          <CardDescription>
            Learn to recognize cockroaches and signs of infestation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Physical Characteristics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Flat, oval-shaped body that allows them to squeeze into small
                spaces
              </li>
              <li>• Six long, spiny legs for speed and climbing</li>
              <li>
                • Long antennae (often longer than their body) for navigation
                and detecting food
              </li>
              <li>• Size ranges from 0.5 to 2 inches depending on species</li>
              <li>
                • Colors vary: light brown, tan, reddish-brown, dark brown, or
                black
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Common Species</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>German Cockroach:</strong> Light brown, 0.5 inches,
                two dark stripes behind head, most common indoors
              </li>
              <li>
                • <strong>American Cockroach:</strong> Reddish-brown, 1.5-2
                inches, yellowish figure-eight marking on head
              </li>
              <li>
                • <strong>Oriental Cockroach:</strong> Shiny black, 1-1.25
                inches, prefers damp areas
              </li>
              <li>
                • <strong>Brown-Banded Cockroach:</strong> Dark brown, 0.5
                inches, two lighter bands across body
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Signs of Infestation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Droppings:</strong> Small species leave dark specks
                resembling pepper or coffee grounds; larger species leave
                cylindrical droppings
              </li>
              <li>
                • <strong>Musty odor:</strong> Distinctive oily smell from
                pheromones, especially in confined spaces
              </li>
              <li>
                • <strong>Smear marks:</strong> Brown, irregular streaks near
                wall-floor junctions in damp areas
              </li>
              <li>
                • <strong>Shed skins:</strong> Brown exoskeletons found near
                hiding places
              </li>
              <li>
                • <strong>Egg cases (oothecae):</strong> Brown, pill-shaped
                capsules containing multiple eggs
              </li>
              <li>
                • <strong>Daytime sightings:</strong> Seeing cockroaches during
                the day indicates a heavy infestation
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Habitats & Hiding Places
          </CardTitle>
          <CardDescription>
            Where cockroaches live and what attracts them
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Common Hiding Spots</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Kitchens and bathrooms (warm, humid areas with food and water)
              </li>
              <li>
                • Behind and under appliances (refrigerators, stoves,
                dishwashers)
              </li>
              <li>• In cracks and crevices in walls, floors, and ceilings</li>
              <li>• Under sinks and around plumbing</li>
              <li>• Inside cabinets, pantries, and drawers</li>
              <li>• Behind wall outlets and switch plates</li>
              <li>• In paper goods, cardboard boxes, and clutter</li>
              <li>• Drains, sewers, and garbage areas</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">What Attracts Cockroaches</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Food sources: crumbs, spills, dirty dishes, pet food, garbage
              </li>
              <li>
                • Water and moisture: leaky pipes, standing water, condensation
              </li>
              <li>• Warmth and shelter, especially in winter months</li>
              <li>• Clutter and cardboard that provides hiding places</li>
              <li>• Poor sanitation and food storage practices</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Behavior Patterns</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Nocturnal: most active at night, hide during the day</li>
              <li>• Fast runners that scatter when disturbed</li>
              <li>
                • Can travel between units in multi-unit buildings via plumbing
                and electrical lines
              </li>
              <li>
                • Reproduce rapidly: one female can produce hundreds of
                offspring in a year
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplet className="h-5 w-5" />
            Extermination Methods
          </CardTitle>
          <CardDescription>
            Step-by-step homeowner control options
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">
              Step 1: Sanitation & Cleaning
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Clean all surfaces thoroughly, removing food residue and
                grease
              </li>
              <li>
                • Vacuum and mop floors regularly, especially in kitchens and
                bathrooms
              </li>
              <li>
                • Wash dirty dishes immediately; don't leave them overnight
              </li>
              <li>• Take out garbage daily and use sealed trash cans</li>
              <li>• Clean behind and under appliances</li>
              <li>• Remove clutter, especially cardboard boxes and paper</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">
              Step 2: Eliminate Food & Water Sources
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Store food in sealed, airtight containers</li>
              <li>• Don't leave pet food out overnight</li>
              <li>• Fix leaky faucets, pipes, and drains</li>
              <li>• Wipe up spills and standing water immediately</li>
              <li>• Keep sinks and tubs dry overnight</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Step 3: Baits & Insecticides</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Gel baits:</strong> Apply in cracks, crevices, and
                along baseboards where roaches travel
              </li>
              <li>
                • <strong>Bait stations:</strong> Place near hiding spots and
                along walls; replace as needed
              </li>
              <li>
                • <strong>Insecticidal dust:</strong> Apply in wall voids,
                attics, and hard-to-reach areas (boric acid, diatomaceous earth)
              </li>
              <li>
                • <strong>Sprays:</strong> Use residual insecticides along
                baseboards and entry points (follow label carefully)
              </li>
              <li>• Always read and follow product label instructions</li>
              <li>• Keep baits and chemicals away from children and pets</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Step 4: Traps & Monitoring</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Use sticky traps to monitor activity and identify high-traffic
                areas
              </li>
              <li>
                • Place traps along walls, under sinks, and near appliances
              </li>
              <li>• Check traps regularly and replace as needed</li>
              <li>
                • Traps help gauge the severity of infestation and treatment
                effectiveness
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">When to Call a Professional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Infestation is severe or widespread</li>
              <li>• DIY methods haven't worked after several weeks</li>
              <li>• Infestation keeps returning</li>
              <li>• You're unsure about safe pesticide use</li>
              <li>
                • Multi-unit building with shared walls (requires coordinated
                treatment)
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Prevention Strategies
          </CardTitle>
          <CardDescription>
            Keep cockroaches from entering and establishing in your home
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Seal Entry Points</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Seal cracks and crevices in walls, floors, and foundations
                with caulk
              </li>
              <li>• Patch holes where pipes and wiring pass through walls</li>
              <li>• Install door sweeps on exterior doors</li>
              <li>• Repair damaged window screens</li>
              <li>• Seal gaps around utility lines entering the home</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Maintain Cleanliness</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Clean kitchen surfaces daily</li>
              <li>• Sweep and vacuum regularly, especially in food areas</li>
              <li>• Don't leave food or dirty dishes out overnight</li>
              <li>• Store food in sealed containers</li>
              <li>• Take out garbage regularly and keep bins clean</li>
              <li>• Clean up pet food and water bowls before bed</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Reduce Moisture</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Fix leaky faucets, pipes, and drains promptly</li>
              <li>• Use dehumidifiers in damp areas like basements</li>
              <li>• Ensure proper ventilation in bathrooms and kitchens</li>
              <li>• Wipe down sinks and tubs after use</li>
              <li>• Check for and repair roof leaks</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Declutter & Organize</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Reduce clutter that provides hiding places</li>
              <li>• Store items in plastic bins instead of cardboard boxes</li>
              <li>• Keep storage areas organized and clean</li>
              <li>• Dispose of old newspapers, magazines, and cardboard</li>
              <li>• Don't stack items against walls where roaches can hide</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Outdoor Prevention</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Keep outdoor garbage cans sealed and away from the house
              </li>
              <li>• Trim vegetation away from the foundation</li>
              <li>• Remove leaf litter, mulch, and debris near the home</li>
              <li>• Store firewood away from the house</li>
              <li>• Ensure proper drainage around the foundation</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Health Concerns</AlertTitle>
        <AlertDescription>
          Cockroaches can mechanically transmit disease-causing bacteria and
          trigger allergies and asthma, particularly in children. Their
          droppings, shed skins, and secretions can cause allergic reactions and
          respiratory distress. Prompt control is important for health and
          safety.
        </AlertDescription>
      </Alert>
    </div>
  );
}
