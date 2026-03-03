import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Eye, Home, Phone, Shield } from "lucide-react";

export function ScorpionsContent() {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important Safety Notice</AlertTitle>
        <AlertDescription>
          Scorpions can deliver painful and potentially dangerous stings. If
          stung, seek medical attention immediately, especially for children,
          elderly, or those with allergies.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Identifying Scorpions
          </CardTitle>
          <CardDescription>
            Learn to recognize scorpions and their characteristics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Physical Characteristics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Eight legs and two pincers (pedipalps) at the front</li>
              <li>
                • Segmented tail that curves over the back, ending in a stinger
              </li>
              <li>• Size ranges from 1 to 8 inches depending on species</li>
              <li>• Colors vary: tan, brown, yellow, or black</li>
              <li>
                • Glow under ultraviolet (UV) light due to fluorescent compounds
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">
              Common Species in North America
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Arizona Bark Scorpion:</strong> Most venomous in the
                U.S., light brown/yellow, 2-3 inches
              </li>
              <li>
                • <strong>Striped Bark Scorpion:</strong> Dark stripes on back,
                2-3 inches, common in southern states
              </li>
              <li>
                • <strong>Giant Desert Hairy Scorpion:</strong> Largest in North
                America, up to 6 inches, less dangerous
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Signs of Scorpion Presence</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Seeing scorpions at night (they are nocturnal)</li>
              <li>• Finding shed exoskeletons</li>
              <li>• Presence of prey insects (crickets, roaches, spiders)</li>
              <li>• Fluorescent glow when using a UV flashlight at night</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Habitats & Behavior
          </CardTitle>
          <CardDescription>
            Where scorpions live and how they behave
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Preferred Habitats</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Desert and arid regions, but adapt to various climates</li>
              <li>• Under rocks, logs, bark, and debris</li>
              <li>• In cracks and crevices of walls and foundations</li>
              <li>• Inside homes: closets, attics, crawl spaces, bathrooms</li>
              <li>• Dark, cool, moist areas during the day</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Behavior Patterns</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Nocturnal hunters, active at night</li>
              <li>• Feed on insects, spiders, and other small arthropods</li>
              <li>• Can survive months without food or water</li>
              <li>• Seek shelter indoors during extreme heat or cold</li>
              <li>• Climb walls and ceilings easily</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Entry Points</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Gaps under doors and windows</li>
              <li>• Cracks in walls and foundations</li>
              <li>• Utility line openings (pipes, wires)</li>
              <li>• Vents and weep holes</li>
              <li>• Torn window screens</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Prevention & Safety
          </CardTitle>
          <CardDescription>
            How to prevent scorpion encounters and stay safe
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Home Prevention</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Seal cracks and crevices in walls, foundations, and around
                windows/doors
              </li>
              <li>• Install weather stripping and door sweeps</li>
              <li>• Repair torn window screens</li>
              <li>• Remove debris, woodpiles, and rocks near the home</li>
              <li>• Keep vegetation trimmed away from the house</li>
              <li>• Store firewood at least 30 feet from the home</li>
              <li>
                • Use yellow or sodium vapor outdoor lights (less attractive to
                insects)
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Indoor Safety Measures</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Shake out shoes, clothing, and bedding before use</li>
              <li>• Keep beds away from walls</li>
              <li>• Don't walk barefoot at night</li>
              <li>• Use a UV flashlight to check for scorpions at night</li>
              <li>
                • Store items in sealed plastic containers, not cardboard boxes
              </li>
              <li>
                • Keep closets and storage areas organized and clutter-free
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Outdoor Precautions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Wear closed-toe shoes and gloves when working outdoors</li>
              <li>• Check before reaching into dark areas or under objects</li>
              <li>• Use caution when moving rocks, logs, or debris</li>
              <li>• Inspect camping gear and sleeping bags before use</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            What to Do If You Find Scorpions
          </CardTitle>
          <CardDescription>
            Steps to take when encountering scorpions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Immediate Actions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Do not attempt to handle or kill scorpions with bare hands
              </li>
              <li>• Use a long-handled tool or vacuum to remove them</li>
              <li>• Capture in a jar if possible for identification</li>
              <li>• Check for additional scorpions in the area</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">If Stung</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Wash the sting site with soap and water</li>
              <li>• Apply a cool compress to reduce pain and swelling</li>
              <li>• Keep the affected area below heart level if possible</li>
              <li>• Seek immediate medical attention, especially for:</li>
              <li className="ml-4">- Children under 6 years old</li>
              <li className="ml-4">- Elderly individuals</li>
              <li className="ml-4">
                - Anyone with severe symptoms (difficulty breathing, muscle
                twitching, unusual eye movements)
              </li>
              <li>• Call Poison Control: 1-800-222-1222</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Professional Control</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Contact a licensed pest control professional for infestations
              </li>
              <li>
                • Consider regular perimeter treatments in scorpion-prone areas
              </li>
              <li>• Ask about UV light inspections to locate scorpions</li>
              <li>• Discuss long-term prevention strategies</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
