import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Eye, Home, Shield, CheckCircle2, AlertTriangle } from 'lucide-react';

export function LargeFliesContent() {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>About Large Flies</AlertTitle>
        <AlertDescription>
          Large flies include blow flies, flesh flies, bottle flies, and horse flies. These flies are typically larger than house flies and may indicate sanitation issues, dead animals, or outdoor breeding sites. Some species can bite, while others are attracted to decaying matter and can spread disease.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Identifying Large Flies
          </CardTitle>
          <CardDescription>Learn to recognize different types of large flies and signs of their presence</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Blow Flies (Bottle Flies)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Size: 1/4 to 1/2 inch (6-12 mm), larger than house flies</li>
              <li>• Color: Metallic blue, green, bronze, or black with shiny appearance</li>
              <li>• Body: Robust, bristly body</li>
              <li>• Sound: Loud buzzing flight</li>
              <li>• Behavior: Attracted to dead animals, garbage, and feces</li>
              <li>• Common indoors when there's a dead animal in walls or attic</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Flesh Flies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Size: 1/4 to 1/2 inch (6-12 mm)</li>
              <li>• Color: Gray with three dark stripes on thorax and checkerboard pattern on abdomen</li>
              <li>• Eyes: Bright red eyes</li>
              <li>• Behavior: Attracted to decaying meat and animal carcasses</li>
              <li>• Reproduction: Give birth to live maggots rather than laying eggs</li>
              <li>• Often found near garbage or dead animals</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Cluster Flies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Size: Slightly larger than house flies (8-10 mm)</li>
              <li>• Color: Dark gray with golden hairs on thorax</li>
              <li>• Behavior: Cluster in large groups, especially in fall seeking shelter</li>
              <li>• Sluggish movement compared to other flies</li>
              <li>• Overwinter in attics, wall voids, and other protected spaces</li>
              <li>• Emerge in spring and may be found at windows</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Horse Flies & Deer Flies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Size: Large, 1/2 to 1 inch (10-25 mm)</li>
              <li>• Color: Dark brown to black, some with colored eyes</li>
              <li>• <strong>Warning:</strong> Females bite and can be painful</li>
              <li>• Behavior: Attracted to movement, dark colors, and carbon dioxide</li>
              <li>• Typically outdoor pests but may enter through open doors</li>
              <li>• Most active during warm, sunny days</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Signs of Infestation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Large flies buzzing loudly indoors, especially near windows</li>
              <li>• Multiple flies appearing suddenly (may indicate dead animal nearby)</li>
              <li>• Flies congregating in specific areas (attics, wall voids, basements)</li>
              <li>• Maggots found in garbage, drains, or near dead animals</li>
              <li>• Foul odor accompanying fly presence (decaying matter)</li>
              <li>• Flies clustering on sunny walls or windows in fall/spring</li>
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
          <CardDescription>What attracts large flies and where they breed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Primary Attractants</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Dead animals:</strong> Rodents, birds, or other animals in walls, attics, or crawl spaces</li>
              <li>• <strong>Garbage & waste:</strong> Outdoor trash bins, dumpsters, and compost</li>
              <li>• <strong>Pet waste:</strong> Animal feces in yards or litter boxes</li>
              <li>• <strong>Decaying organic matter:</strong> Rotting meat, fish, or other protein sources</li>
              <li>• <strong>Warmth:</strong> Seeking shelter in fall and warmth in spring</li>
              <li>• <strong>Light:</strong> Attracted to windows and light sources when trying to exit</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Common Breeding & Hiding Sites</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Wall voids and attics (especially cluster flies)</li>
              <li>• Dead animals in inaccessible areas (walls, crawl spaces, chimneys)</li>
              <li>• Outdoor garbage and recycling bins</li>
              <li>• Compost piles with meat or protein waste</li>
              <li>• Pet waste areas in yards</li>
              <li>• Drains and sewers with organic buildup</li>
              <li>• Neglected areas with animal carcasses</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Seasonal Patterns</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Spring:</strong> Overwintering flies emerge and seek to exit buildings</li>
              <li>• <strong>Summer:</strong> Peak breeding season for most species</li>
              <li>• <strong>Fall:</strong> Cluster flies seek indoor shelter in large numbers</li>
              <li>• <strong>Winter:</strong> Cluster flies dormant in wall voids; occasional warm days may activate them</li>
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
          <CardDescription>Keep large flies from entering and breeding in your home</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Exclusion & Sealing</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Seal cracks and gaps in exterior walls, foundations, and siding</li>
              <li>• Install or repair window and door screens</li>
              <li>• Seal openings around utility lines, pipes, and vents</li>
              <li>• Install door sweeps on all exterior doors</li>
              <li>• Caulk gaps around windows and door frames</li>
              <li>• Screen attic vents, soffit vents, and crawl space openings</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Sanitation & Waste Management</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Keep outdoor trash bins tightly sealed and away from the house</li>
              <li>• Clean trash cans regularly to remove residue</li>
              <li>• Don't add meat or animal products to compost piles</li>
              <li>• Remove pet waste from yards promptly</li>
              <li>• Keep outdoor areas free of dead animals and decaying matter</li>
              <li>• Maintain clean gutters and drainage areas</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Seasonal Prevention (Cluster Flies)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Seal entry points in late summer before fall migration</li>
              <li>• Apply residual insecticide to exterior walls in early fall (professional recommended)</li>
              <li>• Install tight-fitting screens on attic vents</li>
              <li>• Inspect and seal gaps in siding and roof edges</li>
              <li>• Use weather stripping on attic access doors</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Outdoor Protection (Biting Flies)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use fans on patios and porches to deter flies</li>
              <li>• Wear light-colored clothing when outdoors</li>
              <li>• Avoid perfumes and scented products that attract flies</li>
              <li>• Keep doors and windows closed during peak activity hours</li>
              <li>• Install screen doors and keep them closed</li>
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
          <CardDescription>Detailed scenario-specific control methods for large fly problems</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Step 1: Identify the Fly Type & Likely Source</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Metallic blue/green flies (blow flies):</strong> Strong indicator of a dead animal nearby; check for foul odors and concentrate search in areas where flies are most active</li>
              <li>• <strong>Gray flies with checkerboard pattern (flesh flies):</strong> Similar to blow flies, usually indicates decaying animal matter; often found near the same areas as blow flies</li>
              <li>• <strong>Sudden surge of many flies:</strong> Typically means a dead animal (rodent, bird, squirrel) died recently within or very near the structure; flies appear within 24-48 hours of death</li>
              <li>• <strong>Sluggish gray flies in fall/spring (cluster flies):</strong> Overwintering behavior; not related to sanitation but to seasonal shelter-seeking; most common in attics and upper floors</li>
              <li>• <strong>Large biting flies (horse/deer flies):</strong> Usually outdoor pests that wandered inside; isolated incidents don't indicate infestation; focus on exclusion</li>
              <li>• <strong>Document the pattern:</strong> Note the time of day, location, and number of flies; sudden appearance suggests dead animal, while gradual increase may indicate outdoor breeding site</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Step 2: Locate & Handle Dead Animal Sources (If Suspected)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Prepare safety equipment:</strong> Wear disposable gloves, N95 mask or respirator, safety glasses, and long sleeves; have heavy-duty trash bags, paper towels, and disinfectant ready</li>
              <li>• <strong>Search accessible areas first:</strong> Check attics, basements, crawl spaces, behind appliances, in wall cavities near plumbing, inside ductwork, and around chimneys; use a flashlight and follow your nose</li>
              <li>• <strong>Look for secondary signs:</strong> Maggots on floors or walls, staining on ceilings or walls, concentrated fly activity in one area, and persistent foul odor that worsens in specific locations</li>
              <li>• <strong>Remove accessible carcasses safely:</strong> Use a shovel or gloved hands to place the carcass in a heavy-duty plastic bag; double-bag it, seal tightly, and dispose in outdoor trash immediately</li>
              <li>• <strong>Clean and disinfect the area:</strong> Spray the area with enzymatic cleaner or disinfectant; wipe up any fluids or maggots with paper towels; place all cleaning materials in a sealed bag; wash the area again with soap and water, then disinfect a final time</li>
              <li>• <strong>If carcass is inaccessible (inside wall/ceiling):</strong> Do NOT cut into walls yourself; the carcass will decompose naturally in 1-3 weeks; focus on controlling odor with activated charcoal or odor absorbers near the area; seal any openings to prevent fly entry; consider professional help for removal</li>
              <li>• <strong>Ventilate thoroughly:</strong> Open windows, use fans to increase air circulation, and run HVAC systems to help dissipate odors; this also helps dry out the area and makes it less attractive to flies</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Step 3: Remove Adult Flies Indoors</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Use a vacuum for large numbers:</strong> Use a shop vacuum or handheld vacuum to quickly capture multiple flies; immediately empty the vacuum bag or canister into an outdoor trash bin and seal it</li>
              <li>• <strong>Deploy window traps:</strong> Place sticky fly traps on windows where flies congregate trying to escape; large flies are strongly attracted to light and will get caught</li>
              <li>• <strong>Set up light traps:</strong> Use UV light traps with sticky boards or electric grids in areas with fly activity; position away from windows to avoid attracting outdoor flies inside</li>
              <li>• <strong>Manual removal:</strong> Use a fly swatter for individual flies; for cluster flies, which are sluggish, you can often capture them by hand with a tissue or paper towel</li>
              <li>• <strong>Avoid crushing blow/flesh flies:</strong> These flies may carry disease organisms; use traps or vacuum instead of swatting when possible to avoid spreading contaminants</li>
              <li>• <strong>Check daily and remove dead flies:</strong> Sweep or vacuum up dead flies daily; dispose of them in sealed bags in outdoor trash to prevent odors and secondary pest issues (carpet beetles feed on dead flies)</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Step 4: Treat Specific Scenarios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>For dead animal situations:</strong> After source removal, spray aerosol insecticide in the affected area to kill remaining flies and larvae; treat surrounding areas where flies may have spread; continue monitoring for 1-2 weeks as remaining pupae may emerge</li>
              <li>• <strong>For cluster fly overwintering:</strong> In attics or wall voids, use a vacuum to remove visible flies; apply residual dust insecticide (like diatomaceous earth or silica gel) in wall voids and attic spaces following label directions; seal entry points after treatment</li>
              <li>• <strong>For outdoor breeding sites:</strong> If flies are entering from outside (trash areas, compost, pet waste), treat outdoor resting areas with residual spray; focus on exterior walls, under eaves, around doors and windows; improve sanitation in outdoor areas</li>
              <li>• <strong>For biting flies (horse/deer flies):</strong> These are typically isolated incidents; focus on exclusion (close doors/windows quickly, repair screens); use fans near doorways to deter entry; if persistent, consider professional outdoor perimeter treatment</li>
              <li>• <strong>For recurring blow/flesh flies without obvious source:</strong> Check for hidden sources like dead animals in inaccessible areas, outdoor breeding sites (dumpsters, dead wildlife in yard), or neighbor's sanitation issues; may require professional inspection</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Step 5: Monitor & Prevent Recurrence</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Track fly activity for 2-3 weeks:</strong> Keep a daily log of fly sightings (number, location, time); if numbers don't decrease after source removal, investigate further for additional sources</li>
              <li>• <strong>Seal all identified entry points:</strong> Once the immediate problem is resolved, seal cracks, gaps, and openings where flies entered; pay special attention to areas near where the source was found</li>
              <li>• <strong>Install exclusion devices:</strong> Add or repair window screens, install door sweeps, screen vents and openings; for cluster flies, focus on sealing attic and upper-level entry points before fall</li>
              <li>• <strong>Improve outdoor sanitation:</strong> Keep trash bins sealed and away from the house; remove dead animals from property promptly; maintain clean yard and outdoor areas</li>
              <li>• <strong>Seasonal cluster fly prevention:</strong> In late summer (August-September), inspect and seal potential entry points; consider professional exterior treatment before fall migration begins; install tight-fitting screens on attic vents</li>
              <li>• <strong>Set up early warning system:</strong> Place a few sticky traps in previously affected areas; check weekly; sudden increase in trapped flies may indicate a new problem developing</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">When to Call a Professional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Inaccessible dead animal:</strong> Carcass is inside a wall, ceiling, or other inaccessible area and odor/flies are severe; professional can locate and remove it or provide specialized odor control</li>
              <li>• <strong>Cannot locate source:</strong> Flies persist for more than 2 weeks despite thorough inspection and sanitation; professional has specialized detection equipment and experience</li>
              <li>• <strong>Repeated sudden surges:</strong> Multiple episodes of sudden fly appearances suggesting recurring dead animal problems (may indicate rodent infestation requiring integrated pest management)</li>
              <li>• <strong>Large cluster fly infestation:</strong> Hundreds or thousands of cluster flies in attic or wall voids; professional treatment with residual insecticides and exclusion work is most effective</li>
              <li>• <strong>Structural access needed:</strong> Source is in an area requiring wall removal, ceiling access, or other structural work; professional can coordinate pest control with necessary repairs</li>
              <li>• <strong>Commercial or sensitive settings:</strong> Restaurants, healthcare facilities, food processing, or any setting where flies pose regulatory, health code, or liability concerns</li>
              <li>• <strong>Persistent outdoor breeding:</strong> Flies breeding in outdoor areas beyond your control (neighbor's property, nearby dumpsters, agricultural areas); professional can provide perimeter treatments and exclusion strategies</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Safety Warning: Biting Flies</AlertTitle>
        <AlertDescription>
          Horse flies and deer flies can deliver painful bites. If bitten, clean the area with soap and water, apply antiseptic, and monitor for signs of infection. Seek medical attention if you experience severe swelling, signs of allergic reaction, or if the bite becomes infected.
        </AlertDescription>
      </Alert>
    </div>
  );
}
