import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Eye, Home, Shield, Droplet, Phone } from 'lucide-react';

export function CarpenterAntsContent() {
  return (
    <div className="space-y-6">
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Structural Damage Warning</AlertTitle>
        <AlertDescription>
          Carpenter ants excavate wood to create nests, which can cause significant structural damage to homes and buildings over time. If you suspect carpenter ant activity, especially in structural wood, contact a licensed pest control professional for inspection and treatment. Early detection and professional intervention can prevent costly repairs.
        </AlertDescription>
      </Alert>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Safety Notice</AlertTitle>
        <AlertDescription>
          Carpenter ants can bite if threatened, though they rarely sting. Bites may cause minor pain and irritation. If you experience severe reactions or signs of an allergic response, seek medical care.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Identifying Carpenter Ants
          </CardTitle>
          <CardDescription>Learn to recognize carpenter ants and signs of infestation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Physical Characteristics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Large ants: 1/4 to 1/2 inch (workers), up to 3/4 inch (queens)</li>
              <li>• Black, red, brown, or combination of red and black coloration</li>
              <li>• Smooth, rounded thorax (upper body) when viewed from the side</li>
              <li>• Single node (bump) between thorax and abdomen</li>
              <li>• Elbowed antennae</li>
              <li>• Workers vary in size within the same colony (polymorphic)</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Common Species</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Black Carpenter Ant:</strong> Most common in North America, entirely black, 1/4-1/2 inch</li>
              <li>• <strong>Red Carpenter Ant:</strong> Reddish-brown thorax with black abdomen, similar size</li>
              <li>• <strong>Florida Carpenter Ant:</strong> Red and black, found in southeastern U.S.</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Key Signs of Carpenter Ant Infestation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Frass (sawdust):</strong> Piles of fine wood shavings mixed with ant body parts near nest openings</li>
              <li>• <strong>Rustling sounds:</strong> Faint rustling or crinkling noises inside walls, especially at night</li>
              <li>• <strong>Winged ants (swarmers):</strong> Large winged ants emerging indoors in spring, indicating an established colony</li>
              <li>• <strong>Visible ant trails:</strong> Lines of large ants, especially at night, moving between nest and food sources</li>
              <li>• <strong>Hollow-sounding wood:</strong> Tapping on wood produces a hollow sound</li>
              <li>• <strong>Smooth galleries:</strong> Excavated tunnels in wood with smooth, sandpapered appearance (no mud or debris)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Where Found & Sources
          </CardTitle>
          <CardDescription>Understanding carpenter ant nesting sites and what attracts them</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Preferred Nesting Sites</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Moist or water-damaged wood:</strong> Leaky roofs, plumbing leaks, poor drainage</li>
              <li>• <strong>Structural wood:</strong> Wall voids, floor joists, roof rafters, sill plates</li>
              <li>• <strong>Exterior wood:</strong> Tree stumps, logs, firewood, fence posts, deck supports</li>
              <li>• <strong>Window and door frames:</strong> Especially if wood is exposed to moisture</li>
              <li>• <strong>Insulation:</strong> Foam insulation in walls and attics</li>
              <li>• <strong>Hollow spaces:</strong> Behind siding, in hollow doors, inside columns</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Parent vs. Satellite Nests</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Parent colony:</strong> Usually outdoors in moist wood, contains queen and eggs</li>
              <li>• <strong>Satellite nests:</strong> Indoors or in drier wood, connected to parent colony, contain workers and mature larvae</li>
              <li>• Workers travel between parent and satellite nests</li>
              <li>• Treating only satellite nests won't eliminate the infestation</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">What Attracts Carpenter Ants</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Moisture-damaged or decaying wood (easier to excavate)</li>
              <li>• Wood in contact with soil or moisture sources</li>
              <li>• Tree branches touching or overhanging the house</li>
              <li>• Firewood stored against the house</li>
              <li>• Food sources: honeydew from aphids, sweet foods, proteins, dead insects</li>
              <li>• Warmth and shelter</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Behavior Patterns</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Most active at night, foraging for food</li>
              <li>• Colonies grow slowly: 3-6 years to reach maturity</li>
              <li>• Mature colonies contain 2,000-3,000 workers (can reach 10,000+)</li>
              <li>• Swarmers emerge in spring to establish new colonies</li>
              <li>• Don't eat wood—they excavate it to create nesting galleries</li>
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
          <CardDescription>Protect your home from carpenter ant damage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Moisture Control (Critical)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Fix roof leaks, plumbing leaks, and drainage problems immediately</li>
              <li>• Ensure proper ventilation in attics, crawl spaces, and basements</li>
              <li>• Use dehumidifiers in damp areas</li>
              <li>• Clean gutters and downspouts regularly</li>
              <li>• Ensure downspouts direct water away from the foundation</li>
              <li>• Repair or replace water-damaged wood promptly</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Eliminate Wood-to-Ground Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Keep wood siding, trim, and structural wood at least 6 inches above soil</li>
              <li>• Remove tree stumps and buried wood debris near the house</li>
              <li>• Replace wood foundation supports with concrete or metal</li>
              <li>• Don't let mulch or soil contact wood siding</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Trim Vegetation & Remove Debris</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Trim tree branches and shrubs away from the house (at least 3 feet)</li>
              <li>• Remove dead trees, stumps, and logs from your property</li>
              <li>• Store firewood at least 20 feet from the house and off the ground</li>
              <li>• Keep woodpiles covered and dry</li>
              <li>• Remove leaf litter and debris near the foundation</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Seal Entry Points</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Seal cracks and crevices in the foundation and exterior walls</li>
              <li>• Caulk gaps around windows, doors, and utility penetrations</li>
              <li>• Install door sweeps on exterior doors</li>
              <li>• Repair damaged screens and vents</li>
              <li>• Seal openings where wires and pipes enter the house</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Reduce Food Sources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Control aphids and other honeydew-producing insects on plants</li>
              <li>• Keep kitchen surfaces clean and food sealed</li>
              <li>• Store pet food in sealed containers</li>
              <li>• Take out garbage regularly</li>
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
          <CardDescription>Steps to address carpenter ant infestations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Immediate Actions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Confirm identification: large ants, frass, rustling sounds</li>
              <li>• Locate nest sites by following ant trails at night</li>
              <li>• Look for frass piles and listen for rustling in walls</li>
              <li>• Inspect moisture-damaged areas and wood in contact with soil</li>
              <li>• Document locations and take photos for pest control professionals</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">DIY Treatment Options (Limited Effectiveness)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Baits:</strong> Use carpenter ant baits along trails; ants carry bait back to nest</li>
              <li>• <strong>Insecticidal dust:</strong> Apply boric acid or diatomaceous earth in wall voids and nest sites (if accessible)</li>
              <li>• <strong>Perimeter sprays:</strong> Apply residual insecticide around the foundation and entry points</li>
              <li>• <strong>Direct nest treatment:</strong> If nest is accessible, apply insecticide directly</li>
              <li>• Note: DIY treatments often fail because parent nests are hard to locate and treat</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Professional Treatment (Recommended)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Pest control professionals have specialized tools to locate nests</li>
              <li>• Use professional-grade insecticides and application methods</li>
              <li>• Treat both parent and satellite colonies</li>
              <li>• Provide follow-up treatments and monitoring</li>
              <li>• Can assess and treat structural damage</li>
              <li>• Offer warranties and guarantees</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">When to Call a Professional (Strongly Recommended)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Always recommended for carpenter ants</strong> due to structural damage risk</li>
              <li>• You see winged ants (swarmers) indoors—indicates an established colony</li>
              <li>• You find frass or hear rustling sounds in walls</li>
              <li>• Ants are present in structural wood or multiple locations</li>
              <li>• DIY treatments haven't worked after several weeks</li>
              <li>• You cannot locate the nest</li>
              <li>• You want to prevent costly structural damage</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">After Treatment</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Repair moisture problems and water-damaged wood</li>
              <li>• Replace severely damaged structural wood</li>
              <li>• Implement prevention strategies to avoid re-infestation</li>
              <li>• Monitor for ant activity and frass</li>
              <li>• Schedule follow-up inspections with pest control</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <Phone className="h-4 w-4" />
        <AlertTitle>Professional Help Recommended</AlertTitle>
        <AlertDescription>
          Carpenter ant infestations can cause significant structural damage if left untreated. Because colonies are difficult to locate and eliminate completely, professional pest control is strongly recommended. A licensed professional can accurately identify the species, locate all nest sites, apply appropriate treatments, and help prevent future infestations. Early intervention can save thousands of dollars in structural repairs.
        </AlertDescription>
      </Alert>
    </div>
  );
}
