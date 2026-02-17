import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Eye, Home, Shield, Phone } from 'lucide-react';

export function MiceContent() {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Health & Safety Warning</AlertTitle>
        <AlertDescription>
          Mice can carry diseases and contaminate food. They can also cause structural damage by chewing through wires, insulation, and building materials. Address infestations promptly.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Identifying Mice & Signs of Infestation
          </CardTitle>
          <CardDescription>Learn to recognize mice and evidence of their presence</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Physical Characteristics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>House Mouse:</strong> 2.5-3.5 inches long (body), light brown to gray</li>
              <li>• <strong>Deer Mouse:</strong> 3-4 inches long, brown with white belly and feet</li>
              <li>• Large ears relative to head size</li>
              <li>• Long, thin tail (often as long as body)</li>
              <li>• Small, black, beady eyes</li>
              <li>• Pointed snout with whiskers</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Signs of Mouse Presence</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Droppings:</strong> Small (1/4 inch), dark, rod-shaped pellets near food sources</li>
              <li>• <strong>Gnaw marks:</strong> Small teeth marks on food packaging, wires, wood</li>
              <li>• <strong>Tracks:</strong> Small footprints in dust or flour</li>
              <li>• <strong>Runways:</strong> Greasy rub marks along walls and baseboards</li>
              <li>• <strong>Nests:</strong> Shredded paper, fabric, or insulation in hidden areas</li>
              <li>• <strong>Sounds:</strong> Scratching, squeaking, or scurrying noises, especially at night</li>
              <li>• <strong>Odor:</strong> Musky smell in enclosed spaces</li>
              <li>• <strong>Pet behavior:</strong> Cats or dogs acting alert near walls or furniture</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Common Nesting Materials</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Shredded paper and cardboard</li>
              <li>• Fabric scraps and cotton</li>
              <li>• Insulation material</li>
              <li>• Plant matter and dried grass</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Habitats & Entry Points
          </CardTitle>
          <CardDescription>Where mice live and how they enter homes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Preferred Indoor Locations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Wall voids and spaces between floors</li>
              <li>• Attics and crawl spaces</li>
              <li>• Behind appliances (stoves, refrigerators, dishwashers)</li>
              <li>• Inside cabinets and pantries</li>
              <li>• Basements and storage areas</li>
              <li>• Garages and sheds</li>
              <li>• Near water heaters and furnaces (warmth)</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Common Entry Points</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Gaps around pipes, vents, and utility lines (as small as 1/4 inch)</li>
              <li>• Cracks in foundation and walls</li>
              <li>• Gaps under doors and garage doors</li>
              <li>• Damaged or missing weather stripping</li>
              <li>• Holes in window screens</li>
              <li>• Roof vents and chimney openings</li>
              <li>• Gaps where siding meets the foundation</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Behavior & Habits</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Nocturnal, most active at night</li>
              <li>• Excellent climbers, jumpers, and swimmers</li>
              <li>• Can squeeze through openings as small as a dime</li>
              <li>• Reproduce rapidly (5-10 litters per year, 5-6 pups per litter)</li>
              <li>• Travel along walls and edges (rarely cross open spaces)</li>
              <li>• Forage within 10-30 feet of nest</li>
              <li>• Attracted to food, water, and shelter</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Prevention & Exclusion
          </CardTitle>
          <CardDescription>How to keep mice out of your home</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Seal Entry Points</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Inspect exterior for gaps and cracks (use flashlight at night to spot light coming through)</li>
              <li>• Seal holes with steel wool, copper mesh, or hardware cloth (mice can't chew through)</li>
              <li>• Use caulk or expanding foam for small cracks</li>
              <li>• Install door sweeps on all exterior doors</li>
              <li>• Repair damaged window screens</li>
              <li>• Cover vents with 1/4-inch hardware cloth</li>
              <li>• Seal gaps around pipes and utility lines</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Eliminate Food Sources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Store food in airtight glass or metal containers</li>
              <li>• Clean up crumbs and spills immediately</li>
              <li>• Don't leave pet food out overnight</li>
              <li>• Keep garbage in sealed containers</li>
              <li>• Store birdseed and pet food in rodent-proof containers</li>
              <li>• Clean behind appliances regularly</li>
              <li>• Don't leave dirty dishes in the sink overnight</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Reduce Shelter & Clutter</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Keep storage areas organized and clutter-free</li>
              <li>• Store items in plastic bins with tight lids, not cardboard boxes</li>
              <li>• Remove piles of debris, wood, and vegetation near the home</li>
              <li>• Trim tree branches and shrubs away from the house</li>
              <li>• Keep grass mowed and weeds controlled</li>
              <li>• Elevate stored items off the floor</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Outdoor Prevention</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Keep compost bins sealed and away from the house</li>
              <li>• Don't leave pet food or water bowls outside</li>
              <li>• Clean up fallen fruit and nuts from trees</li>
              <li>• Store firewood at least 20 feet from the home and elevated</li>
              <li>• Keep gutters clean and in good repair</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            What to Do If You Have Mice
          </CardTitle>
          <CardDescription>Steps to take when dealing with a mouse infestation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Immediate Actions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Identify and seal entry points immediately</li>
              <li>• Remove food sources and clean thoroughly</li>
              <li>• Set traps in areas with signs of activity</li>
              <li>• Check traps daily and dispose of caught mice properly</li>
              <li>• Wear gloves when handling traps or cleaning contaminated areas</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Trapping Methods</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Snap traps:</strong> Effective and humane when used correctly</li>
              <li>• <strong>Live traps:</strong> Catch and release (release far from home)</li>
              <li>• <strong>Electronic traps:</strong> Quick and clean elimination</li>
              <li>• Place traps perpendicular to walls where mice travel</li>
              <li>• Use peanut butter, chocolate, or nesting material as bait</li>
              <li>• Set multiple traps (more effective than single traps)</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Cleaning & Sanitation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Wear gloves and a mask when cleaning contaminated areas</li>
              <li>• Spray droppings and nesting materials with disinfectant before cleaning</li>
              <li>• Do not sweep or vacuum (can spread disease)</li>
              <li>• Use paper towels to pick up droppings and dispose in sealed bags</li>
              <li>• Disinfect all surfaces with bleach solution (1 part bleach to 10 parts water)</li>
              <li>• Wash hands thoroughly after cleaning</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">When to Call a Professional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Large or persistent infestation</li>
              <li>• Unable to locate entry points</li>
              <li>• Mice in walls or inaccessible areas</li>
              <li>• Concerns about disease or contamination</li>
              <li>• Need for comprehensive exclusion work</li>
              <li>• Recurring infestations despite DIY efforts</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Health Risks</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Hantavirus (from deer mice droppings and urine)</li>
              <li>• Salmonella and other food-borne illnesses</li>
              <li>• Leptospirosis</li>
              <li>• Lymphocytic choriomeningitis (LCM)</li>
              <li>• Allergies and asthma triggers</li>
              <li>• Seek medical attention if you experience flu-like symptoms after exposure</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
