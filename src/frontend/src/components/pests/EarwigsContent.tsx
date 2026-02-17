import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Eye, Home, Shield, CheckCircle2, Info } from 'lucide-react';

export function EarwigsContent() {
  return (
    <div className="space-y-6">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>About Earwigs</AlertTitle>
        <AlertDescription>
          Earwigs are generally harmless to humans and rarely bite. While they have intimidating pincers (cerci), they primarily use them for defense and mating. They're more of a nuisance pest than a health threat.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Identifying Earwigs
          </CardTitle>
          <CardDescription>Learn to recognize earwigs and signs of their presence</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Physical Characteristics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Elongated, flattened body, typically 0.5 to 1 inch long</li>
              <li>• Dark brown to reddish-brown coloration</li>
              <li>• Distinctive pair of forceps-like pincers (cerci) at the rear end</li>
              <li>• Males have curved pincers; females have straighter pincers</li>
              <li>• Long, thread-like antennae</li>
              <li>• Six legs and two pairs of wings (though they rarely fly)</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Common Indoor Signs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Live earwigs found in damp areas like bathrooms, basements, or laundry rooms</li>
              <li>• Earwigs hiding in folded towels, newspapers, or stored items</li>
              <li>• Small, dark droppings resembling black pepper</li>
              <li>• Damage to indoor plants (irregular holes in leaves)</li>
              <li>• Musty odor in areas with large populations</li>
              <li>• Earwigs emerging from cracks and crevices at night</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Behavior Patterns</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Nocturnal: most active at night, hide during the day</li>
              <li>• Attracted to lights at night</li>
              <li>• Fast-moving when disturbed</li>
              <li>• Prefer to hide in tight, dark spaces during daylight</li>
              <li>• May emit a foul-smelling liquid when threatened</li>
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
          <CardDescription>Where earwigs live and what draws them indoors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Common Indoor Locations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Bathrooms and laundry rooms (high moisture areas)</li>
              <li>• Basements and crawl spaces</li>
              <li>• Under sinks and around plumbing</li>
              <li>• In stacks of newspapers, magazines, or cardboard</li>
              <li>• Behind baseboards and in wall cracks</li>
              <li>• Near potted plants and in damp soil</li>
              <li>• In cluttered storage areas</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">What Attracts Earwigs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Moisture:</strong> The primary attractant - leaky pipes, damp basements, wet areas</li>
              <li>• <strong>Shelter:</strong> Dark, tight spaces that provide protection</li>
              <li>• <strong>Food sources:</strong> Decaying organic matter, plants, small insects</li>
              <li>• <strong>Outdoor lighting:</strong> Lights near entry points attract them at night</li>
              <li>• <strong>Mulch and debris:</strong> Outdoor populations near the foundation can migrate indoors</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Outdoor Sources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Mulch beds, especially thick layers near the foundation</li>
              <li>• Under rocks, boards, and garden debris</li>
              <li>• In compost piles and leaf litter</li>
              <li>• Under flower pots and landscape timbers</li>
              <li>• In dense ground cover and ivy</li>
              <li>• Cracks in sidewalks and foundations</li>
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
          <CardDescription>Keep earwigs from entering and establishing in your home</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Reduce Moisture</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Fix leaky faucets, pipes, and drains promptly</li>
              <li>• Use dehumidifiers in damp basements and crawl spaces</li>
              <li>• Ensure proper ventilation in bathrooms and laundry rooms</li>
              <li>• Repair roof leaks and improve drainage around the foundation</li>
              <li>• Remove standing water from gutters and downspouts</li>
              <li>• Keep areas under sinks dry</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Seal Entry Points</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Seal cracks and crevices in the foundation with caulk</li>
              <li>• Install or repair weather stripping around doors and windows</li>
              <li>• Add door sweeps to exterior doors</li>
              <li>• Repair damaged window screens</li>
              <li>• Seal gaps around utility pipes and wires entering the home</li>
              <li>• Fill expansion joints and cracks in concrete</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Outdoor Prevention</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Keep mulch at least 6-12 inches away from the foundation</li>
              <li>• Remove leaf litter, grass clippings, and organic debris near the home</li>
              <li>• Store firewood away from the house and off the ground</li>
              <li>• Trim vegetation and ground cover away from the foundation</li>
              <li>• Remove boards, stones, and other hiding places near the home</li>
              <li>• Turn off or relocate outdoor lights near entry points</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Indoor Maintenance</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Reduce indoor clutter, especially stacks of paper and cardboard</li>
              <li>• Vacuum regularly to remove earwigs and their hiding spots</li>
              <li>• Keep basements and storage areas clean and organized</li>
              <li>• Store items in sealed plastic containers rather than cardboard boxes</li>
              <li>• Inspect and shake out items brought in from outdoors</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            What to Do If Found
          </CardTitle>
          <CardDescription>Safe removal and control methods</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Immediate Actions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Vacuum up visible earwigs and dispose of the vacuum bag or contents outdoors</li>
              <li>• Use a broom and dustpan to sweep them up and release outdoors</li>
              <li>• Trap earwigs in rolled-up damp newspaper overnight, then dispose of it in the morning</li>
              <li>• Place shallow dishes of vegetable oil mixed with soy sauce as traps (earwigs are attracted and drown)</li>
              <li>• Reduce indoor moisture immediately to make the environment less hospitable</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Control Methods</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Apply diatomaceous earth (food-grade) in cracks, crevices, and entry points</li>
              <li>• Use boric acid powder in wall voids and hidden areas (keep away from children and pets)</li>
              <li>• Apply residual insecticide sprays around the foundation perimeter outdoors</li>
              <li>• Use insecticidal dust in crawl spaces and attics if needed</li>
              <li>• Always follow product label instructions carefully</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Monitoring</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Check traps and treated areas regularly</li>
              <li>• Inspect damp areas and entry points for new activity</li>
              <li>• Continue moisture control and exclusion efforts</li>
              <li>• Monitor outdoor populations near the home</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">When to Call a Professional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Large or persistent infestations that don't respond to DIY methods</li>
              <li>• Recurring problems despite prevention efforts</li>
              <li>• Difficulty identifying or accessing entry points</li>
              <li>• Concerns about safe pesticide application</li>
              <li>• Structural moisture issues that require professional assessment</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
