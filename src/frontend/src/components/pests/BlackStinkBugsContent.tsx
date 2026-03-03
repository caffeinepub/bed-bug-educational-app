import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, Eye, Home, Phone, Shield } from "lucide-react";

export function BlackStinkBugsContent() {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Quick Tip</AlertTitle>
        <AlertDescription>
          Stink bugs are named for the unpleasant odor they release when
          disturbed or crushed. Handle them carefully to avoid triggering this
          defense mechanism.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Identifying Black Stink Bugs
          </CardTitle>
          <CardDescription>
            Learn to recognize stink bugs and their characteristics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Physical Characteristics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Shield-shaped body, approximately 1/2 to 3/4 inch long</li>
              <li>
                • Dark brown to black coloration (some species have mottled
                patterns)
              </li>
              <li>• Six legs and two antennae with light-colored bands</li>
              <li>• Broad, flat body with straight edges on the sides</li>
              <li>
                • Distinctive triangular plate (scutellum) on the back between
                wings
              </li>
              <li>• Strong, unpleasant odor when disturbed or crushed</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Common Species</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Brown Marmorated Stink Bug:</strong> Most common
                indoor invader, mottled brown
              </li>
              <li>
                • <strong>Black Stink Bug:</strong> Solid black or dark brown,
                less common indoors
              </li>
              <li>
                • <strong>Green Stink Bug:</strong> Bright green, occasionally
                enters homes
              </li>
              <li>• All species produce the characteristic odor</li>
              <li>
                • Most are agricultural pests that seek indoor shelter in fall
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Signs of Presence</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Live bugs on walls, ceilings, or windows</li>
              <li>• Clustering in warm, sunny areas</li>
              <li>• Unpleasant odor in rooms where they congregate</li>
              <li>• Dead bugs on windowsills or near light fixtures</li>
              <li>• Large numbers appearing suddenly in fall or spring</li>
              <li>• Buzzing or flying sounds as they move around</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Entry & Hiding Behavior
          </CardTitle>
          <CardDescription>How and why stink bugs enter homes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Why They Enter Homes</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Seeking warm shelter for overwintering (fall invasion)</li>
              <li>• Attracted to warmth and light on sunny fall days</li>
              <li>• Do not reproduce indoors (only seek shelter)</li>
              <li>• Emerge in spring to return outdoors</li>
              <li>• Can survive months indoors without food or water</li>
              <li>
                • Release aggregation pheromones that attract more stink bugs
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Common Entry Points</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Cracks and gaps around windows and doors</li>
              <li>• Openings around utility pipes, wires, and cables</li>
              <li>• Vents, chimneys, and exhaust fans</li>
              <li>• Gaps in siding, soffits, and fascia boards</li>
              <li>• Torn or poorly fitted window screens</li>
              <li>• Gaps under doors and around door frames</li>
              <li>• Attic vents and ridge vents</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Preferred Hiding Spots</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Wall voids and attic spaces</li>
              <li>• Behind baseboards and crown molding</li>
              <li>• Inside light fixtures and ceiling fans</li>
              <li>• Around window frames and door casings</li>
              <li>• In curtains, drapes, and blinds</li>
              <li>• Behind furniture and appliances</li>
              <li>• In closets and storage areas</li>
              <li>• Warm, south-facing walls and rooms</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Seasonal Behavior</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Fall (September-November):</strong> Peak invasion
                period as they seek shelter
              </li>
              <li>
                • <strong>Winter:</strong> Dormant in hiding spots, occasionally
                emerge on warm days
              </li>
              <li>
                • <strong>Spring (March-May):</strong> Emerge from hiding to
                return outdoors
              </li>
              <li>
                • <strong>Summer:</strong> Outdoors feeding on plants, rarely
                indoors
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
          <CardDescription>How to prevent stink bug invasions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Exclusion (Most Important)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Seal all cracks and gaps around windows and doors with caulk
              </li>
              <li>
                • Install or repair weather stripping on doors and windows
              </li>
              <li>• Add door sweeps to exterior doors</li>
              <li>• Repair or replace damaged window screens</li>
              <li>• Seal openings around utility pipes, wires, and cables</li>
              <li>• Cover vents with fine mesh screening</li>
              <li>• Inspect and seal gaps in siding, soffits, and fascia</li>
              <li>
                • <strong>Best time to seal:</strong> Late summer before fall
                invasion
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Outdoor Prevention</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Remove vegetation and debris from around the foundation</li>
              <li>• Trim tree branches and shrubs away from the house</li>
              <li>• Keep firewood stored away from the house</li>
              <li>
                • Reduce outdoor lighting or use yellow bulbs (less attractive)
              </li>
              <li>
                • Consider perimeter insecticide treatment in late summer
                (professional)
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Indoor Prevention</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Keep windows and doors closed during peak invasion periods
              </li>
              <li>• Use air conditioning instead of opening windows in fall</li>
              <li>
                • Inspect items brought in from outdoors (firewood, plants,
                decorations)
              </li>
              <li>• Vacuum regularly to remove any bugs that get inside</li>
              <li>
                • Seal cracks in interior walls to prevent movement between
                rooms
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Timing is Critical</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Complete exclusion work by late August or early September
              </li>
              <li>• Once bugs are inside, exclusion won't help until spring</li>
              <li>• Focus on removal methods during winter months</li>
              <li>• Plan prevention for next season if already infested</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            What to Do If Found
          </CardTitle>
          <CardDescription>Safe removal and cleanup steps</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Safe Removal Methods</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Vacuum:</strong> Use a vacuum with a bag or disposable
                filter
              </li>
              <li className="ml-4">
                - Vacuum bugs gently to avoid crushing them
              </li>
              <li className="ml-4">
                - Dispose of vacuum bag or contents outside immediately
              </li>
              <li className="ml-4">- Seal bag in plastic before disposal</li>
              <li>
                • <strong>Tissue/Paper Towel:</strong> Gently pick up and flush
                down toilet
              </li>
              <li>
                • <strong>Jar Method:</strong> Trap in a jar and release far
                from home
              </li>
              <li>
                • <strong>DO NOT CRUSH:</strong> Releases strong odor and may
                attract more bugs
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">For Large Infestations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Vacuum multiple times daily during peak emergence</li>
              <li>• Focus on sunny walls and windows where they congregate</li>
              <li>• Check attics and wall voids if accessible</li>
              <li>• Consider using a shop vacuum for large numbers</li>
              <li>• Empty vacuum outside after each use</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Odor Management</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• If odor is released, ventilate the area immediately</li>
              <li>• Wash surfaces with soap and water</li>
              <li>• Use baking soda or activated charcoal to absorb odors</li>
              <li>• Avoid using harsh chemicals that may worsen the smell</li>
              <li>• Odor typically dissipates within a few hours</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">
              Chemical Control (Use with Caution)
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Indoor insecticides are generally not recommended</li>
              <li>
                • Killing bugs indoors can attract carpet beetles (feed on dead
                insects)
              </li>
              <li>• Aerosol sprays may cause bugs to release odor</li>
              <li>
                • If using insecticides, follow label directions carefully
              </li>
              <li>
                • Focus on exclusion and removal rather than chemical control
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">When to Call a Professional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Severe infestation with hundreds of bugs</li>
              <li>• Bugs emerging from wall voids or inaccessible areas</li>
              <li>• Need help identifying and sealing entry points</li>
              <li>• Want preventive perimeter treatment for next season</li>
              <li>• Persistent problem despite DIY efforts</li>
              <li>
                • Professional can apply exterior treatments in late summer
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Long-Term Management</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Document entry points and seal them before next fall</li>
              <li>• Keep records of when and where bugs appear</li>
              <li>• Plan exclusion work for late summer</li>
              <li>• Consider professional perimeter treatment annually</li>
              <li>
                • Be patient - complete elimination may take multiple seasons
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
