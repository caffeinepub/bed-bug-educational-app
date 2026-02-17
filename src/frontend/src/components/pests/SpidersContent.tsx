import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Bug, Shield, Home, CheckCircle2 } from 'lucide-react';

export function SpidersContent() {
  return (
    <div className="space-y-6">
      <Alert variant="destructive">
        <AlertTriangle className="h-5 w-5" />
        <AlertTitle>Safety Warning</AlertTitle>
        <AlertDescription>
          Never handle unknown spiders with bare hands. Some species can deliver venomous bites. If you experience severe reactions, difficulty breathing, or concerning symptoms after a spider bite, seek immediate medical attention. When in doubt, contact a professional pest control service.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bug className="h-5 w-5" />
            Identifying Spiders
          </CardTitle>
          <CardDescription>
            Learn to recognize common household spiders and signs of their presence
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Physical Characteristics</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Eight legs (distinguishes them from insects which have six)</li>
              <li>Two main body segments: cephalothorax (fused head and thorax) and abdomen</li>
              <li>Size varies widely from tiny (2-3mm) to large (several inches with legs)</li>
              <li>Colors range from brown, black, gray, to yellow or patterned</li>
              <li>Most have eight eyes, though some species have six or fewer</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Common Indoor Species</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li><strong>House spiders:</strong> Small to medium, brown or gray, build messy cobwebs in corners</li>
              <li><strong>Cellar spiders (daddy longlegs):</strong> Very long thin legs, small body, hang upside down in webs</li>
              <li><strong>Jumping spiders:</strong> Small, compact, fuzzy appearance, excellent vision, don't build webs</li>
              <li><strong>Wolf spiders:</strong> Large, brown with stripes, hunt on ground, don't build webs</li>
              <li><strong>Black widows:</strong> Shiny black with red hourglass marking (venomous - seek professional help)</li>
              <li><strong>Brown recluse:</strong> Light to dark brown with violin-shaped marking (venomous - seek professional help)</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Signs of Spider Presence</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Webs in corners, ceilings, windows, or outdoor structures</li>
              <li>Egg sacs (small silk bundles, often white or cream colored)</li>
              <li>Shed exoskeletons (spiders molt as they grow)</li>
              <li>Live spiders visible, especially at night when many species are active</li>
              <li>Increased insect activity (spiders follow their prey)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Spider Habitats & Behavior
          </CardTitle>
          <CardDescription>
            Where spiders live and what attracts them indoors
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Preferred Indoor Locations</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Dark, undisturbed corners and crevices</li>
              <li>Basements, crawl spaces, and attics</li>
              <li>Behind furniture, appliances, and stored items</li>
              <li>Window frames, door frames, and ceiling corners</li>
              <li>Closets, especially those rarely used</li>
              <li>Garages, sheds, and storage areas</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">What Attracts Spiders</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Abundant insect prey (flies, mosquitoes, moths, etc.)</li>
              <li>Clutter providing hiding spots and web anchor points</li>
              <li>Moisture and humidity (especially for some species)</li>
              <li>Warmth during cold weather</li>
              <li>Outdoor lighting that attracts insects at night</li>
              <li>Easy entry points (gaps, cracks, open windows/doors)</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Feeding & Reproduction</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Spiders are predators that feed primarily on insects</li>
              <li>Most species are solitary and only come together to mate</li>
              <li>Females lay eggs in silk sacs, which can contain hundreds of eggs</li>
              <li>Spiderlings emerge from egg sacs and disperse via "ballooning" on silk threads</li>
              <li>Lifespan varies: some live only one season, others several years</li>
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
            Keep spiders out and reduce indoor populations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Exclusion Methods</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Seal cracks and gaps around windows, doors, and foundations</li>
              <li>Install or repair window and door screens</li>
              <li>Use weather stripping on doors and windows</li>
              <li>Seal utility entry points (pipes, wires, vents)</li>
              <li>Keep doors and windows closed when not in use</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Reduce Attractants</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Control other insect populations (spiders' food source)</li>
              <li>Use yellow or sodium vapor outdoor lights (attract fewer insects)</li>
              <li>Keep outdoor lights off when not needed</li>
              <li>Remove vegetation and debris from around the foundation</li>
              <li>Store firewood away from the house</li>
              <li>Fix moisture problems and leaks</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Habitat Modification</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Reduce clutter in basements, attics, and storage areas</li>
              <li>Store items in sealed plastic containers rather than cardboard boxes</li>
              <li>Vacuum regularly, especially in corners and behind furniture</li>
              <li>Remove visible webs with a broom or vacuum</li>
              <li>Keep closets and storage areas organized and accessible</li>
              <li>Shake out shoes, clothing, and bedding before use if stored</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            What to Do If You Find a Spider
          </CardTitle>
          <CardDescription>
            Safe removal and when to seek professional help
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Safe Capture & Removal</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Use a clear cup or jar and a piece of stiff paper or cardboard</li>
              <li>Gently place the cup over the spider, slide the paper underneath</li>
              <li>Carry the spider outside and release it away from the house</li>
              <li>Alternatively, use a vacuum cleaner with a hose attachment</li>
              <li>Wear gloves if you're concerned, but avoid direct contact</li>
              <li>Never attempt to handle venomous species</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Cleaning & Follow-Up</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Remove webs and egg sacs with a vacuum or broom</li>
              <li>Dispose of vacuum contents in an outdoor trash bin</li>
              <li>Clean the area to remove pheromones that might attract other spiders</li>
              <li>Inspect for entry points and seal them</li>
              <li>Monitor the area for new spider activity</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">When to Call a Professional</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>You've identified venomous species (black widow, brown recluse, etc.)</li>
              <li>You have a large or persistent infestation</li>
              <li>Spiders keep returning despite your prevention efforts</li>
              <li>You're uncomfortable handling spiders yourself</li>
              <li>You have young children, elderly family members, or pets at risk</li>
              <li>You need help identifying the species</li>
            </ul>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Medical Attention</AlertTitle>
            <AlertDescription>
              If bitten by a spider, clean the area with soap and water, apply ice, and monitor for symptoms. Seek immediate medical care if you experience: severe pain, muscle cramps, difficulty breathing, nausea, fever, or if the bite area shows signs of infection or necrosis. Try to safely capture or photograph the spider for identification if possible.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
