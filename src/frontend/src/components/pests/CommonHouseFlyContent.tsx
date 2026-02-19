import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Eye, Home, Shield, CheckCircle2, Info } from 'lucide-react';

export function CommonHouseFlyContent() {
  return (
    <div className="space-y-6">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>About Common House Flies</AlertTitle>
        <AlertDescription>
          House flies are one of the most common indoor pests worldwide. While they don't bite, they can spread diseases by contaminating food and surfaces. They breed rapidly in organic waste and are attracted to food, garbage, and unsanitary conditions.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Identifying House Flies
          </CardTitle>
          <CardDescription>Learn to recognize house flies and signs of their presence</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Physical Characteristics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Size: 1/4 inch (6-7 mm) in length</li>
              <li>• Color: Gray body with four dark stripes on the thorax</li>
              <li>• Eyes: Large, compound red eyes</li>
              <li>• Wings: Single pair of transparent wings</li>
              <li>• Mouthparts: Sponging mouthparts (cannot bite)</li>
              <li>• Legs: Six legs with sticky pads that allow them to walk on walls and ceilings</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Signs of Infestation Indoors</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Multiple flies buzzing around indoors, especially near food or trash</li>
              <li>• Dark spots (fly specks) on walls, ceilings, and light fixtures</li>
              <li>• Flies congregating near windows trying to escape</li>
              <li>• Larvae (maggots) in garbage cans or organic waste</li>
              <li>• Increased fly activity during warm weather</li>
              <li>• Flies landing repeatedly on food preparation areas</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Life Cycle & Behavior</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Complete life cycle in 7-10 days under ideal conditions</li>
              <li>• Females lay 75-150 eggs at a time in decaying organic matter</li>
              <li>• Eggs hatch into maggots (larvae) within 12-24 hours</li>
              <li>• Most active during daytime hours</li>
              <li>• Attracted to light and tend to rest on ceilings and walls</li>
              <li>• Can live 15-25 days as adults</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Sources & Attractants
          </CardTitle>
          <CardDescription>What attracts house flies and where they breed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Primary Attractants</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Food:</strong> Exposed food, especially sweet or fermenting items</li>
              <li>• <strong>Garbage:</strong> Trash cans with food waste</li>
              <li>• <strong>Pet waste:</strong> Litter boxes, pet food bowls, and animal feces</li>
              <li>• <strong>Organic decay:</strong> Rotting fruits, vegetables, and compost</li>
              <li>• <strong>Moisture:</strong> Damp areas, spills, and standing water</li>
              <li>• <strong>Warmth:</strong> Warm indoor temperatures accelerate breeding</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Common Breeding Sites</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Kitchen garbage cans and recycling bins</li>
              <li>• Outdoor trash bins near doors and windows</li>
              <li>• Compost piles and organic waste</li>
              <li>• Pet food areas and litter boxes</li>
              <li>• Drains with organic buildup</li>
              <li>• Dumpsters and garbage collection areas</li>
              <li>• Decaying vegetation near the home</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Entry Points</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Open doors and windows without screens</li>
              <li>• Damaged or poorly fitted window screens</li>
              <li>• Gaps around doors and windows</li>
              <li>• Vents and exhaust fans without proper screening</li>
              <li>• Cracks in walls and foundations</li>
              <li>• Flies entering when doors are opened frequently</li>
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
          <CardDescription>Keep house flies from entering and breeding in your home</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Sanitation & Waste Management</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Empty kitchen trash daily and use trash cans with tight-fitting lids</li>
              <li>• Clean garbage cans regularly with soap and water</li>
              <li>• Store food in sealed containers and refrigerate perishables promptly</li>
              <li>• Clean up spills and crumbs immediately</li>
              <li>• Wash dishes promptly and don't leave dirty dishes sitting out</li>
              <li>• Keep countertops, tables, and food prep areas clean</li>
              <li>• Dispose of overripe or rotting fruits and vegetables</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Exclusion Methods</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Install or repair window and door screens (16-mesh or finer)</li>
              <li>• Use door sweeps on exterior doors</li>
              <li>• Keep doors and windows closed when possible</li>
              <li>• Install screen doors and keep them closed</li>
              <li>• Seal cracks and gaps around windows, doors, and foundations</li>
              <li>• Use air curtains or fans near frequently opened doors</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Outdoor Prevention</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Keep outdoor trash bins away from doors and windows</li>
              <li>• Ensure outdoor trash cans have tight-fitting lids</li>
              <li>• Clean up pet waste promptly from yards</li>
              <li>• Maintain compost piles properly (turn regularly, keep covered)</li>
              <li>• Remove decaying vegetation and organic debris near the home</li>
              <li>• Keep outdoor eating areas clean</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Pet Care</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Clean pet food bowls immediately after feeding</li>
              <li>• Don't leave pet food out for extended periods</li>
              <li>• Clean litter boxes daily</li>
              <li>• Store pet food in sealed containers</li>
              <li>• Clean up pet accidents immediately</li>
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
          <CardDescription>Detailed step-by-step control methods for house fly infestations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Step 1: Locate & Remove All Breeding Sources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Check all trash receptacles:</strong> Empty every trash can in the home, including bathroom, bedroom, and office bins—not just kitchen trash</li>
              <li>• <strong>Inspect drains thoroughly:</strong> Check kitchen sink, bathroom sinks, shower drains, and floor drains for organic buildup or standing water where larvae may be developing</li>
              <li>• <strong>Examine pet areas:</strong> Inspect litter boxes, pet food bowls, pet bedding, and any areas where pets eat or eliminate; clean all surfaces</li>
              <li>• <strong>Search for hidden organic matter:</strong> Look behind appliances, under sinks, in pantries, and in recycling bins for forgotten spills, rotting produce, or food debris</li>
              <li>• <strong>Check outdoor sources near entry points:</strong> Inspect outdoor trash cans, compost bins, pet waste areas, and decaying vegetation within 20 feet of doors and windows</li>
              <li>• <strong>Remove all identified sources immediately:</strong> Double-bag any organic waste and dispose of it in an outdoor bin with a tight-fitting lid, away from the house</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Step 2: Deep Clean & Disinfect Food Contact Surfaces</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Prepare cleaning solution:</strong> Mix hot water with dish soap or use a multi-surface cleaner; for disinfection, prepare a diluted bleach solution (1 tablespoon bleach per gallon of water) or use EPA-registered disinfectant</li>
              <li>• <strong>Clean all countertops and tables:</strong> Wipe down all food preparation surfaces, dining tables, and kitchen islands with soapy water first, then follow with disinfectant; let disinfectant sit for the contact time specified on the label (usually 3-5 minutes)</li>
              <li>• <strong>Wash all dishes and utensils:</strong> Run any exposed dishes, utensils, cutting boards, and food containers through the dishwasher on a hot cycle, or hand-wash with hot soapy water</li>
              <li>• <strong>Clean inside cabinets and pantry:</strong> Remove all items from food storage areas, wipe down shelves with cleaning solution, check for spills or crumbs, and discard any contaminated or expired food</li>
              <li>• <strong>Treat drains with enzyme cleaner:</strong> Pour enzyme-based or bio-drain cleaner down all drains (kitchen, bathroom, floor drains) following product directions; these break down organic matter that attracts flies and supports larvae</li>
              <li>• <strong>Sanitize trash cans:</strong> Scrub all indoor and outdoor trash cans with hot soapy water, rinse thoroughly, spray with disinfectant, and let air dry in the sun if possible</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Step 3: Trap & Remove Adult Flies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Deploy sticky traps strategically:</strong> Hang fly paper or place sticky fly traps near windows, in corners, and near previous problem areas—but not directly above food prep surfaces to avoid attracting flies there</li>
              <li>• <strong>Set up DIY vinegar traps:</strong> Fill small bowls or jars with apple cider vinegar plus 2-3 drops of dish soap; cover with plastic wrap, poke small holes in the top, and place near fly activity (the soap breaks surface tension so flies drown)</li>
              <li>• <strong>Use UV light traps for kitchens:</strong> Install plug-in UV light traps with sticky boards in kitchens, pantries, or food storage areas; position them away from windows so they don't attract outdoor flies inside</li>
              <li>• <strong>Manually remove flies:</strong> Use a fly swatter for individual flies; for multiple flies, use a handheld vacuum to capture them, then immediately empty the vacuum bag or canister into an outdoor trash bin and seal it</li>
              <li>• <strong>Check and replace traps regularly:</strong> Inspect traps daily; replace sticky traps when full or after 2-3 weeks; refresh vinegar traps every 3-4 days</li>
              <li>• <strong>Dispose of trapped flies properly:</strong> Seal used traps in plastic bags before discarding in outdoor trash to prevent odors and avoid attracting more flies</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Step 4: Apply Targeted Treatments (If Needed)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Choose appropriate products:</strong> Select aerosol insecticides labeled specifically for flying insects (pyrethrins or permethrin-based); read the entire label before use</li>
              <li>• <strong>Prepare the treatment area:</strong> Remove or cover all food, dishes, utensils, and pet bowls; open windows for ventilation; remove children and pets from the area</li>
              <li>• <strong>Apply indoor sprays correctly:</strong> Spray in short bursts toward the air and surfaces where flies rest (upper walls, ceilings, around windows); never spray directly on food contact surfaces, and avoid over-application</li>
              <li>• <strong>Treat outdoor resting areas:</strong> Apply residual spray to outdoor surfaces where flies congregate (exterior walls, fences, around trash areas, under eaves) following label directions for outdoor use</li>
              <li>• <strong>Consider natural alternatives:</strong> For chemical-sensitive households, use essential oil sprays (peppermint, eucalyptus, lavender mixed with water) as a deterrent; these repel but don't kill flies</li>
              <li>• <strong>Allow proper drying time:</strong> Keep treated areas ventilated; don't allow re-entry until sprays have fully dried (typically 15-30 minutes); wipe down any food contact surfaces that were accidentally exposed</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Step 5: Monitor & Prevent Recurrence</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Establish daily sanitation routine:</strong> Empty all trash daily, wipe down counters after each meal, wash dishes immediately, and sweep/vacuum floors to remove crumbs</li>
              <li>• <strong>Conduct weekly inspections:</strong> Check all potential breeding sites (drains, trash areas, pet zones, outdoor bins) every week; address any issues immediately</li>
              <li>• <strong>Maintain exclusion barriers:</strong> Inspect window screens monthly for tears or gaps; check door sweeps and weatherstripping; seal any new cracks or openings</li>
              <li>• <strong>Track fly activity:</strong> Keep a log of where and when you see flies; if you notice patterns (specific times, locations), investigate those areas for hidden breeding sources</li>
              <li>• <strong>Adjust outdoor maintenance:</strong> Keep outdoor trash bins at least 20 feet from doors; clean them monthly; ensure lids seal tightly; maintain yard cleanliness</li>
              <li>• <strong>Seasonal vigilance:</strong> Increase monitoring during warm months (peak breeding season); be extra diligent with sanitation during summer when fly populations surge</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">When to Call a Professional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Persistent large infestations:</strong> More than 10-15 flies daily despite 2+ weeks of rigorous sanitation and trapping efforts</li>
              <li>• <strong>Cannot locate breeding source:</strong> Flies keep appearing but you cannot find where they're breeding after thorough inspection</li>
              <li>• <strong>Structural breeding sites:</strong> Flies emerging from wall voids, crawl spaces, or other inaccessible areas that require professional access</li>
              <li>• <strong>Rapid re-infestation:</strong> Fly populations return to high levels within days of treatment, indicating a hidden or external source</li>
              <li>• <strong>Commercial or food service settings:</strong> Restaurants, cafeterias, food processing, or any business where flies pose health code violations or regulatory concerns</li>
              <li>• <strong>Need for comprehensive IPM:</strong> Situations requiring integrated pest management with professional-grade products, monitoring systems, and ongoing service contracts</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
