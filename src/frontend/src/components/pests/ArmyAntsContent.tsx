import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Eye, Home, Shield, Droplet } from 'lucide-react';

export function ArmyAntsContent() {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Safety Notice</AlertTitle>
        <AlertDescription>
          Army ants can bite and sting aggressively when defending their colony or during raids. While encounters are rare in North America, if you experience severe reactions, swelling, or signs of an allergic response, seek medical care immediately.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Identifying Army Ants
          </CardTitle>
          <CardDescription>Learn to recognize army ants and their distinctive behavior</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Physical Characteristics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Reddish-brown to dark brown or black coloration</li>
              <li>• Size ranges from 1/8 to 1/2 inch depending on caste</li>
              <li>• Large, powerful mandibles (jaws) for capturing prey</li>
              <li>• Long legs adapted for rapid movement</li>
              <li>• Workers are blind or have very poor vision</li>
              <li>• Queens are much larger than workers (up to 2 inches in some species)</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Species & Distribution</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>New World Army Ants (Eciton):</strong> Found in Central and South America, occasionally southern U.S.</li>
              <li>• <strong>Old World Driver Ants (Dorylus):</strong> Found in Africa and Asia, not in North America</li>
              <li>• Most army ant species are tropical and rarely encountered in temperate regions</li>
              <li>• In the U.S., true army ants are extremely rare and limited to southern border areas</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Signs of Army Ant Presence</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Large columns or swarms of ants moving in organized formations</li>
              <li>• Aggressive raiding behavior, attacking insects and small animals</li>
              <li>• Temporary bivouac nests made of living ants clustered together</li>
              <li>• No permanent nest structures or mounds</li>
              <li>• Nomadic behavior: colonies move frequently</li>
              <li>• Distinctive chemical odor when disturbed</li>
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
          <CardDescription>Understanding army ant ecology and raiding patterns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Habitat & Range</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Primarily tropical rainforests and warm, humid environments</li>
              <li>• Forest floors, leaf litter, and under logs</li>
              <li>• Rarely found in urban or suburban areas in North America</li>
              <li>• Temporary nests (bivouacs) in tree hollows, under logs, or in soil cavities</li>
              <li>• Colonies are nomadic, moving every few weeks</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Unique Behavior Patterns</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Nomadic phase:</strong> Colony moves daily, raiding for food</li>
              <li>• <strong>Statary phase:</strong> Colony remains in one location while queen lays eggs</li>
              <li>• Form massive raiding columns with hundreds of thousands of workers</li>
              <li>• Hunt cooperatively, overwhelming prey with sheer numbers</li>
              <li>• Feed on insects, spiders, scorpions, and other arthropods</li>
              <li>• Use chemical trails and tactile communication to coordinate raids</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Colony Structure</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Colonies can contain 100,000 to over 1 million workers</li>
              <li>• Single queen produces thousands of eggs during statary phase</li>
              <li>• Workers vary in size: small workers care for brood, large workers defend and raid</li>
              <li>• No permanent nest—bivouac is formed by workers linking bodies together</li>
              <li>• Colony splits when a new queen is produced (colony fission)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Prevention & Avoidance
          </CardTitle>
          <CardDescription>How to avoid encounters with army ants</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">In North America</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Army ant encounters are extremely rare in the U.S.</li>
              <li>• If traveling to southern border areas, be aware of local ant species</li>
              <li>• Most "army ant" reports in the U.S. are actually other aggressive ant species</li>
              <li>• Standard ant prevention methods are sufficient for typical household ants</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">In Tropical Regions (Travel)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Watch for large columns of ants on trails and forest floors</li>
              <li>• Avoid stepping on or disturbing ant columns</li>
              <li>• Wear closed-toe shoes and long pants when hiking</li>
              <li>• Shake out clothing and shoes before putting them on</li>
              <li>• Don't camp directly on the ground—use elevated platforms or hammocks</li>
              <li>• Listen to local guides about ant activity in the area</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">General Ant Prevention</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Keep food sealed and stored properly</li>
              <li>• Clean up spills and crumbs immediately</li>
              <li>• Seal cracks and entry points in your home</li>
              <li>• Remove outdoor debris and leaf litter near the house</li>
              <li>• Fix moisture problems and leaks</li>
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
          <CardDescription>How to respond to army ant encounters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">If You Encounter Army Ants</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Move away from the column or swarm immediately</li>
              <li>• Don't attempt to disturb or block their path</li>
              <li>• Brush off any ants on your body quickly but carefully</li>
              <li>• Avoid crushing ants, which can release alarm pheromones</li>
              <li>• If bitten, wash the area with soap and water</li>
              <li>• Apply ice or cold compress to reduce pain and swelling</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">If Army Ants Enter Your Property</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• In tropical regions, army ant raids are temporary—colonies move on within hours to days</li>
              <li>• Remove pets and small animals from the area</li>
              <li>• Close doors and windows to prevent entry indoors</li>
              <li>• Wait for the colony to pass—they are nomadic and won't establish permanent nests</li>
              <li>• Don't use pesticides on large columns—it's ineffective and may provoke aggression</li>
              <li>• Contact local pest control if ants enter your home</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">In North America</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• True army ants are not a concern in most of the U.S.</li>
              <li>• If you observe aggressive ant behavior, it's likely another species (fire ants, carpenter ants, etc.)</li>
              <li>• Use standard ant control methods appropriate for the species</li>
              <li>• Consult a pest control professional for identification and treatment</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">When to Seek Help</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• If you're unsure about ant species identification</li>
              <li>• If ants have entered your home in large numbers</li>
              <li>• If you experience severe reactions to bites or stings</li>
              <li>• If you're in a tropical region and need professional advice</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important Context</AlertTitle>
        <AlertDescription>
          Army ants are fascinating insects with complex social behavior, but they are not a common pest concern in North America. Most ant problems in U.S. homes are caused by other species such as fire ants, carpenter ants, or odorous house ants. If you're experiencing ant issues, proper identification is the first step to effective control.
        </AlertDescription>
      </Alert>
    </div>
  );
}
