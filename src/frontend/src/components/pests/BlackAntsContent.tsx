import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Droplet, Eye, Home, Shield } from "lucide-react";

export function BlackAntsContent() {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Safety Notice</AlertTitle>
        <AlertDescription>
          While black ants are generally not aggressive, some species can bite
          or sting if threatened. If you experience severe reactions, swelling,
          or signs of an allergic response, seek medical care immediately.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Identifying Black Ants
          </CardTitle>
          <CardDescription>
            Learn to recognize black ants and signs of their presence
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Physical Characteristics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Dark brown to black coloration</li>
              <li>
                • Size ranges from 1/16 to 1/2 inch depending on species and
                caste
              </li>
              <li>• Three distinct body segments: head, thorax, and abdomen</li>
              <li>• Six legs and two bent antennae</li>
              <li>• Workers are smaller than queens</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Common Black Ant Species</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Little Black Ant:</strong> Very small (1/16 inch),
                shiny black, common indoors
              </li>
              <li>
                • <strong>Black Garden Ant:</strong> Medium-sized (1/8 inch),
                dark brown to black, nests outdoors
              </li>
              <li>
                • <strong>Pavement Ant:</strong> Small (1/8 inch), dark brown to
                black, nests under pavement and foundations
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Signs of Black Ant Presence</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Visible trails of ants moving to and from food sources</li>
              <li>
                • Small piles of fine soil or sand near cracks (nest excavation)
              </li>
              <li>• Ants foraging in kitchens, pantries, or around food</li>
              <li>
                • Winged ants (swarmers) appearing indoors in spring or summer
              </li>
              <li>• Ant activity concentrated near moisture sources</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Habitats & Attractants
          </CardTitle>
          <CardDescription>
            Where black ants nest and what draws them indoors
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Nesting Locations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Outdoors: under rocks, logs, mulch, pavement, and in soil
              </li>
              <li>• Near foundations and building perimeters</li>
              <li>• In wall voids, insulation, and behind baseboards</li>
              <li>
                • Under sinks and around plumbing where moisture is present
              </li>
              <li>• In potted plants and planters</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">What Attracts Black Ants</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Sweet foods: sugar, honey, syrup, fruit, and sugary drinks
              </li>
              <li>• Protein sources: meat, grease, pet food</li>
              <li>• Moisture and water sources</li>
              <li>• Crumbs, spills, and food residue</li>
              <li>• Warmth and shelter, especially during extreme weather</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Behavior Patterns</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Form organized trails using pheromone scent markers</li>
              <li>• Forage primarily during warmer months</li>
              <li>
                • Colonies can contain thousands of workers and multiple queens
              </li>
              <li>
                • Scout ants search for food and recruit others when found
              </li>
              <li>• Most active during day and early evening</li>
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
            Keep black ants from entering and establishing in your home
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Eliminate Food Sources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Store food in sealed, airtight containers</li>
              <li>• Clean up spills and crumbs immediately</li>
              <li>• Don't leave dirty dishes in the sink</li>
              <li>• Keep counters, floors, and tables clean</li>
              <li>
                • Store pet food in sealed containers and clean bowls regularly
              </li>
              <li>• Take out garbage regularly and use sealed trash cans</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Seal Entry Points</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Caulk cracks and crevices in walls, foundations, and around
                windows
              </li>
              <li>• Seal gaps around pipes, wires, and utility lines</li>
              <li>• Install door sweeps on exterior doors</li>
              <li>• Repair damaged window screens</li>
              <li>• Fill gaps in baseboards and trim</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Reduce Moisture</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Fix leaky faucets, pipes, and drains</li>
              <li>• Ensure proper ventilation in bathrooms and kitchens</li>
              <li>• Use dehumidifiers in damp areas</li>
              <li>• Wipe up standing water promptly</li>
              <li>• Ensure proper drainage around the foundation</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Outdoor Prevention</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Keep mulch, leaf litter, and debris away from the foundation
              </li>
              <li>• Trim tree branches and shrubs away from the house</li>
              <li>• Store firewood at least 20 feet from the home</li>
              <li>• Remove standing water and fix drainage issues</li>
              <li>
                • Keep outdoor garbage cans sealed and away from entrances
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplet className="h-5 w-5" />
            What to Do If Found
          </CardTitle>
          <CardDescription>
            Steps to control and eliminate black ant infestations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Immediate Actions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Follow ant trails to locate entry points and nests</li>
              <li>
                • Clean surfaces with soap and water to remove pheromone trails
              </li>
              <li>
                • Vacuum up visible ants and dispose of the bag immediately
              </li>
              <li>• Remove food sources and clean thoroughly</li>
              <li>• Identify and seal entry points</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Baits & Treatments</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Ant baits:</strong> Place gel or granular baits along
                trails and near entry points; ants carry bait back to the colony
              </li>
              <li>
                • <strong>Bait stations:</strong> Use pre-filled stations for
                safer application around children and pets
              </li>
              <li>
                • <strong>Perimeter treatment:</strong> Apply residual
                insecticide spray around the foundation and entry points
              </li>
              <li>
                • <strong>Natural options:</strong> Diatomaceous earth or boric
                acid in cracks and crevices (use with caution)
              </li>
              <li>
                • Be patient: baits take several days to weeks to eliminate the
                colony
              </li>
              <li>
                • Don't spray ants directly when using baits—they need to carry
                it back to the nest
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Outdoor Nest Treatment</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Locate outdoor nests by following ant trails</li>
              <li>• Apply granular ant bait around nest entrances</li>
              <li>• Use outdoor perimeter sprays to create a barrier</li>
              <li>• Treat pavement cracks and soil mounds directly</li>
              <li>• Repeat treatments as needed according to product labels</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">When to Call a Professional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Infestation is large or widespread</li>
              <li>• DIY treatments haven't worked after several weeks</li>
              <li>• You cannot locate the nest or entry points</li>
              <li>• Ants keep returning despite prevention efforts</li>
              <li>
                • You're unsure about safe pesticide use around children or pets
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
