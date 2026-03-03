import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangle,
  Bug,
  CheckCircle2,
  Home,
  Shield,
  Skull,
} from "lucide-react";

export function SpidersContent() {
  return (
    <div className="space-y-6">
      <Alert variant="destructive">
        <AlertTriangle className="h-5 w-5" />
        <AlertTitle>Safety Warning</AlertTitle>
        <AlertDescription>
          Never handle unknown spiders with bare hands. Some species can deliver
          venomous bites. If you experience severe reactions, difficulty
          breathing, or concerning symptoms after a spider bite, seek immediate
          medical attention. When in doubt, contact a professional pest control
          service.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bug className="h-5 w-5" />
            Identifying Spiders
          </CardTitle>
          <CardDescription>
            Learn to recognize common household spiders and signs of their
            presence
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Physical Characteristics</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                Eight legs (distinguishes them from insects which have six)
              </li>
              <li>
                Two main body segments: cephalothorax (fused head and thorax)
                and abdomen
              </li>
              <li>
                Size varies widely from tiny (2-3mm) to large (several inches
                with legs)
              </li>
              <li>
                Colors range from brown, black, gray, to yellow or patterned
              </li>
              <li>
                Most have eight eyes, though some species have six or fewer
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Common Indoor Species</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>House spiders:</strong> Small to medium, brown or gray,
                build messy cobwebs in corners
              </li>
              <li>
                <strong>Cellar spiders (daddy longlegs):</strong> Very long thin
                legs, small body, hang upside down in webs
              </li>
              <li>
                <strong>Jumping spiders:</strong> Small, compact, fuzzy
                appearance, excellent vision, don't build webs
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Signs of Spider Presence</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Webs in corners, ceilings, windows, or outdoor structures</li>
              <li>
                Egg sacs (small silk bundles, often white or cream colored)
              </li>
              <li>Shed exoskeletons (spiders molt as they grow)</li>
              <li>
                Live spiders visible, especially at night when many species are
                active
              </li>
              <li>Increased insect activity (spiders follow their prey)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <Skull className="h-5 w-5" />
            Venomous Species: Black Widow Spider
          </CardTitle>
          <CardDescription>
            Highly venomous - requires immediate professional attention
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Dangerous Spider</AlertTitle>
            <AlertDescription>
              Black widow bites can cause severe pain, muscle cramps, nausea,
              and difficulty breathing. Seek immediate medical attention if
              bitten. Do not attempt to handle or remove black widows yourself.
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="mb-2 font-semibold">Identification</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Appearance:</strong> Shiny, jet-black body with a
                distinctive red or orange hourglass marking on the underside of
                the abdomen
              </li>
              <li>
                <strong>Size:</strong> Female body is about 0.5 inches (13mm),
                with legs spanning up to 1.5 inches; males are much smaller
              </li>
              <li>
                <strong>Web:</strong> Irregular, tangled cobwebs that are strong
                and sticky
              </li>
              <li>
                <strong>Behavior:</strong> Shy and non-aggressive; bites usually
                occur when the spider is accidentally pressed against skin
              </li>
              <li>
                Only females are dangerous; males and juveniles have less potent
                venom
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Typical Hiding Spots</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Outdoor:</strong> Woodpiles, sheds, garages, under
                rocks, in hollow stumps, and dense vegetation
              </li>
              <li>
                <strong>Indoor:</strong> Dark, undisturbed areas like basements,
                crawl spaces, attics, and storage areas
              </li>
              <li>
                Behind furniture, in cluttered areas, and in seldom-used items
              </li>
              <li>Near ground level in protected corners and crevices</li>
              <li>
                In outdoor furniture, grills, and equipment that's been stored
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">What to Do</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Do NOT attempt removal yourself</strong> - contact a
                licensed pest control professional immediately
              </li>
              <li>Keep children and pets away from the area</li>
              <li>If bitten, seek emergency medical care immediately</li>
              <li>
                Try to safely capture or photograph the spider for
                identification (without touching it)
              </li>
              <li>
                Wear gloves and protective clothing when working in areas where
                black widows may hide
              </li>
              <li>
                Shake out shoes, gloves, and clothing that have been stored
                before wearing
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <Skull className="h-5 w-5" />
            Venomous Species: Brown Recluse Spider
          </CardTitle>
          <CardDescription>
            Venomous bite can cause serious tissue damage - professional help
            required
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Dangerous Spider</AlertTitle>
            <AlertDescription>
              Brown recluse bites can cause necrotic lesions (tissue death) and
              systemic reactions. Seek immediate medical attention if bitten.
              Professional pest control is strongly recommended for removal.
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="mb-2 font-semibold">Identification</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Appearance:</strong> Light to dark brown with a
                distinctive dark violin or fiddle-shaped marking on the top of
                the cephalothorax (head region)
              </li>
              <li>
                <strong>Size:</strong> Body is about 0.25 to 0.5 inches
                (6-13mm), with legs spanning up to 1 inch
              </li>
              <li>
                <strong>Eyes:</strong> Six eyes arranged in three pairs (unlike
                most spiders which have eight eyes)
              </li>
              <li>
                <strong>Legs:</strong> Uniformly colored, no stripes or bands
              </li>
              <li>
                Smooth, hairless appearance compared to many other spiders
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Typical Hiding Spots</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Indoor:</strong> Dark, dry, undisturbed areas like
                closets, attics, basements, and storage spaces
              </li>
              <li>Behind furniture, pictures, and baseboards</li>
              <li>In boxes, shoes, clothing, and bedding that's been stored</li>
              <li>Inside folded linens, towels, and rarely-used items</li>
              <li>
                <strong>Outdoor:</strong> Under rocks, logs, woodpiles, and in
                sheds or outbuildings
              </li>
              <li>Most active at night; hides during the day</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">What to Do</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Contact a professional pest control service</strong>{" "}
                experienced with brown recluse spiders
              </li>
              <li>
                If bitten, seek immediate medical attention and bring the spider
                if safely possible
              </li>
              <li>Reduce clutter in storage areas to eliminate hiding spots</li>
              <li>
                Shake out clothing, shoes, and bedding before use, especially
                items stored in closets or boxes
              </li>
              <li>
                Use sticky traps to monitor for presence (place along walls and
                in corners)
              </li>
              <li>Seal cracks and crevices where spiders can hide</li>
              <li>
                Wear gloves when handling stored items in areas where brown
                recluse may be present
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bug className="h-5 w-5" />
            Common Species: Wolf Spider
          </CardTitle>
          <CardDescription>
            Large but generally harmless hunting spider
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Generally Harmless</AlertTitle>
            <AlertDescription>
              Wolf spiders can bite if provoked but are not considered dangerous
              to humans. Bites may cause mild pain, redness, and swelling
              similar to a bee sting. They are beneficial predators that help
              control insect populations.
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="mb-2 font-semibold">Identification</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Appearance:</strong> Large, robust, hairy spiders with
                brown or gray coloring and distinctive stripe patterns
              </li>
              <li>
                <strong>Size:</strong> Body ranges from 0.5 to 1.5 inches
                (13-38mm), with legs spanning up to 3-4 inches
              </li>
              <li>
                <strong>Eyes:</strong> Eight eyes arranged in three rows - two
                large eyes in the middle row give excellent vision
              </li>
              <li>
                <strong>Markings:</strong> Often have a light-colored stripe
                running down the cephalothorax and abdomen
              </li>
              <li>Fast-moving hunters that don't build webs</li>
              <li>
                Females carry egg sacs attached to their spinnerets and later
                carry spiderlings on their backs
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Typical Hiding Spots</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Outdoor:</strong> Ground-dwelling; found in grass, leaf
                litter, under rocks, logs, and in gardens
              </li>
              <li>Often burrow into soil or hide under debris</li>
              <li>
                <strong>Indoor:</strong> Enter homes accidentally, especially in
                fall; found on floors, in basements, and garages
              </li>
              <li>Along baseboards, in corners, and under furniture</li>
              <li>Near doors and windows where they may enter while hunting</li>
              <li>Active hunters that roam at night searching for prey</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">What to Do</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Capture and release:</strong> Use a cup and paper to
                safely trap and release outdoors (they're beneficial)
              </li>
              <li>
                Vacuum up wolf spiders and release the vacuum contents outside
              </li>
              <li>
                Seal entry points around doors, windows, and foundation to
                prevent entry
              </li>
              <li>
                Reduce outdoor lighting near entry points (attracts prey insects
                that attract spiders)
              </li>
              <li>
                Remove clutter, debris, and vegetation near the foundation
              </li>
              <li>
                Keep grass trimmed and remove leaf litter and mulch near the
                home
              </li>
              <li>Use weather stripping and door sweeps to block entry</li>
              <li>
                Consider keeping them outdoors as natural pest control - they
                eat many harmful insects
              </li>
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
              <li>
                <strong>Prey insects:</strong> Spiders follow their food source
                (flies, mosquitoes, moths, etc.)
              </li>
              <li>
                <strong>Shelter:</strong> Warm, protected spaces, especially in
                cold weather
              </li>
              <li>
                <strong>Moisture:</strong> Some species prefer damp environments
              </li>
              <li>
                <strong>Clutter:</strong> Undisturbed areas provide ideal hiding
                and hunting spots
              </li>
              <li>
                <strong>Outdoor lighting:</strong> Attracts insects which in
                turn attract spiders
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Behavior Patterns</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Most species are nocturnal and hide during the day</li>
              <li>Web-building spiders create webs and wait for prey</li>
              <li>Hunting spiders actively pursue prey without webs</li>
              <li>Generally shy and avoid human contact</li>
              <li>Beneficial predators that help control insect populations</li>
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
            Keep spiders from entering and establishing in your home
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Exclusion Methods</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                Seal cracks and gaps in foundations, walls, and around windows
                and doors
              </li>
              <li>Install or repair window screens and door sweeps</li>
              <li>
                Caulk gaps around utility pipes, wires, and cables entering the
                home
              </li>
              <li>Repair damaged siding and fill holes in exterior walls</li>
              <li>Keep vents screened and in good repair</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Reduce Attractants</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Control prey insects:</strong> Reduce flies, mosquitoes,
                and other insects that spiders feed on
              </li>
              <li>
                Use yellow or sodium vapor lights outdoors (less attractive to
                insects)
              </li>
              <li>
                Keep outdoor lights off or away from entry points when possible
              </li>
              <li>Remove spider webs regularly with a broom or vacuum</li>
              <li>Eliminate standing water and moisture sources</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Habitat Modification</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                Reduce clutter in basements, attics, closets, and storage areas
              </li>
              <li>
                Store items in sealed plastic containers rather than cardboard
                boxes
              </li>
              <li>Keep storage areas clean and organized</li>
              <li>
                Vacuum regularly, especially in corners and along baseboards
              </li>
              <li>
                Move firewood, lumber, and debris away from the foundation
              </li>
              <li>
                Trim vegetation and remove dense ground cover near the home
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Outdoor Prevention</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Keep grass mowed and remove leaf litter</li>
              <li>Remove rocks, wood piles, and debris near the foundation</li>
              <li>Trim tree branches and shrubs away from the house</li>
              <li>Store outdoor items (furniture, toys, equipment) properly</li>
              <li>Clean gutters and ensure proper drainage</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            Safe Spider Removal
          </CardTitle>
          <CardDescription>
            How to safely remove spiders from your home
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">For Non-Venomous Spiders</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                Use the cup-and-paper method: trap spider under a cup, slide
                paper underneath, and release outdoors
              </li>
              <li>Vacuum spiders and webs, then empty the vacuum outside</li>
              <li>
                Use a long-handled duster or broom to remove webs and spiders
                from high places
              </li>
              <li>Wear gloves if you're uncomfortable handling spiders</li>
              <li>
                Consider leaving harmless spiders alone - they provide natural
                pest control
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">For Venomous Species</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Do not attempt removal yourself</strong>
              </li>
              <li>Contact a licensed pest control professional immediately</li>
              <li>Keep children and pets away from the area</li>
              <li>Mark the location if the spider moves out of sight</li>
              <li>
                Take a photo from a safe distance for identification if possible
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">When to Call a Professional</h4>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Presence of venomous spiders (black widow, brown recluse)</li>
              <li>Large or recurring spider infestations</li>
              <li>Spiders in hard-to-reach or dangerous locations</li>
              <li>Uncertainty about spider identification</li>
              <li>Concerns about safe removal methods</li>
              <li>Need for preventive treatments and exclusion work</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Medical Attention</AlertTitle>
        <AlertDescription>
          If you are bitten by a spider and experience severe pain, muscle
          cramps, nausea, difficulty breathing, or the bite area shows signs of
          necrosis (tissue death), seek immediate medical attention. Try to
          safely capture or photograph the spider for identification purposes.
        </AlertDescription>
      </Alert>
    </div>
  );
}
