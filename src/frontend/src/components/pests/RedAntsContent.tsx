import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Eye, Home, Shield, Droplet } from 'lucide-react';

export function RedAntsContent() {
  return (
    <div className="space-y-6">
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important Safety Warning</AlertTitle>
        <AlertDescription>
          Red ants, especially fire ants, can deliver painful stings that cause burning sensations, welts, and pustules. Some people may experience severe allergic reactions including difficulty breathing, chest pain, or anaphylaxis. If you experience severe symptoms, seek emergency medical care immediately.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Identifying Red Ants
          </CardTitle>
          <CardDescription>Learn to recognize red ants and signs of their presence</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Physical Characteristics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Reddish-brown to dark red coloration</li>
              <li>• Size ranges from 1/8 to 1/4 inch depending on species and caste</li>
              <li>• Three distinct body segments with narrow waist</li>
              <li>• Six legs and elbowed antennae</li>
              <li>• Workers vary in size within the same colony (polymorphic)</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Common Red Ant Species</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Red Imported Fire Ant:</strong> Reddish-brown, 1/8-1/4 inch, aggressive, painful sting, builds large mounds</li>
              <li>• <strong>Southern Fire Ant:</strong> Similar to imported fire ant but less aggressive, native to southern U.S.</li>
              <li>• <strong>Red Harvester Ant:</strong> Large (1/4-1/2 inch), red to dark red, painful sting, collects seeds</li>
              <li>• <strong>Pharaoh Ant:</strong> Small (1/16 inch), light yellow to red, common indoors, difficult to control</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Signs of Red Ant Presence</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Dome-shaped mounds of loose soil in lawns and open areas (fire ants)</li>
              <li>• Aggressive behavior when mounds are disturbed</li>
              <li>• Visible trails of ants foraging for food</li>
              <li>• Ants swarming on food sources or in kitchens</li>
              <li>• Winged reproductive ants (swarmers) in spring and summer</li>
              <li>• Stings on people or pets who encounter colonies</li>
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
          <CardDescription>Where red ants nest and what draws them to your property</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Nesting Locations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Open, sunny areas: lawns, fields, parks, roadsides</li>
              <li>• Near foundations, sidewalks, and driveways</li>
              <li>• Under pavement, concrete slabs, and landscape timbers</li>
              <li>• In electrical equipment and utility boxes (attracted to electrical fields)</li>
              <li>• Indoors: wall voids, under floors, in insulation (less common but serious)</li>
              <li>• Mounds can be 18 inches tall and 2 feet wide (fire ants)</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">What Attracts Red Ants</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Protein sources: insects, meat, grease, dead animals</li>
              <li>• Sweet foods: honeydew from aphids, nectar, sugary substances</li>
              <li>• Seeds and plant materials (harvester ants)</li>
              <li>• Moisture and water sources</li>
              <li>• Warmth and shelter during extreme weather</li>
              <li>• Disturbed soil and new construction sites</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Behavior Patterns</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Highly aggressive when defending nests</li>
              <li>• Attack in large numbers, climbing up vertical surfaces</li>
              <li>• Sting repeatedly, injecting venom that causes burning pain</li>
              <li>• Colonies can contain 100,000 to 500,000 workers</li>
              <li>• Forage up to 100 feet from the nest</li>
              <li>• Can relocate colonies quickly when disturbed</li>
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
          <CardDescription>Reduce the risk of red ant infestations on your property</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Yard & Landscape Management</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Regularly inspect your property for new mounds</li>
              <li>• Keep grass mowed and vegetation trimmed</li>
              <li>• Remove debris, logs, and leaf litter</li>
              <li>• Avoid overwatering lawns and gardens</li>
              <li>• Create a vegetation-free zone around the foundation</li>
              <li>• Don't disturb mounds without proper treatment—ants will relocate</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Protect Your Home</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Seal cracks and crevices in foundations and exterior walls</li>
              <li>• Install door sweeps and repair damaged screens</li>
              <li>• Seal gaps around utility lines, pipes, and wires</li>
              <li>• Keep mulch and soil away from the foundation</li>
              <li>• Store firewood away from the house</li>
              <li>• Eliminate food sources: clean up spills, store food properly</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Personal Protection</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Wear closed-toe shoes, long pants, and gloves when working outdoors</li>
              <li>• Teach children to recognize and avoid ant mounds</li>
              <li>• Keep pets away from known ant colonies</li>
              <li>• Be cautious when moving outdoor items that may harbor ants</li>
              <li>• Inspect play areas, picnic spots, and outdoor furniture before use</li>
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
          <CardDescription>Treatment options and when to seek professional help</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">If Stung by Red Ants</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Move away from the area immediately to avoid more stings</li>
              <li>• Brush or flick ants off—don't slap them (releases more venom)</li>
              <li>• Wash the affected area with soap and water</li>
              <li>• Apply ice or cold compress to reduce pain and swelling</li>
              <li>• Take antihistamines to reduce itching and swelling</li>
              <li>• Avoid scratching pustules to prevent infection</li>
              <li>• Seek emergency medical care if you experience difficulty breathing, chest pain, severe swelling, dizziness, or signs of anaphylaxis</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Outdoor Mound Treatment</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Individual mound treatment:</strong> Apply mound drench or granular insecticide directly to mounds according to label instructions</li>
              <li>• <strong>Bait treatment:</strong> Broadcast fire ant bait over the entire yard; ants carry bait back to the colony</li>
              <li>• <strong>Two-step method:</strong> Combine broadcast bait with individual mound treatments for best results</li>
              <li>• Treat in early morning or late evening when ants are most active</li>
              <li>• Avoid watering treated areas for 24-48 hours</li>
              <li>• Reapply treatments as needed and according to product labels</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Indoor Infestations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use ant baits specifically labeled for the species</li>
              <li>• Place baits along trails and near entry points</li>
              <li>• Don't spray ants when using baits—they need to carry it back</li>
              <li>• Seal entry points after ant activity decreases</li>
              <li>• For pharaoh ants, use only non-repellent baits (sprays can cause colony splitting)</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">When to Call a Professional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Fire ant infestations:</strong> Professional treatment is highly recommended due to aggressive behavior and difficulty of control</li>
              <li>• Multiple or large mounds on your property</li>
              <li>• Ants have entered your home or electrical equipment</li>
              <li>• DIY treatments haven't worked after several weeks</li>
              <li>• You or family members are allergic to ant stings</li>
              <li>• Infestation poses a safety risk to children or pets</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Medical Considerations</AlertTitle>
        <AlertDescription>
          Fire ant stings typically cause immediate pain, burning, and itching, followed by the formation of pustules within 24 hours. While most reactions are localized, some individuals may experience severe allergic reactions. If you have a known allergy to insect stings or experience symptoms beyond the sting site, seek medical attention promptly.
        </AlertDescription>
      </Alert>
    </div>
  );
}
