import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, Eye, Home, Phone, Shield } from "lucide-react";

export function BatBugsContent() {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Quick Tip</AlertTitle>
        <AlertDescription>
          Bat bugs look nearly identical to bed bugs but are primarily found in
          areas where bats roost. To eliminate them permanently, you must first
          remove the bats from your home — otherwise the bugs will keep
          returning.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Identifying Bat Bugs
          </CardTitle>
          <CardDescription>
            Learn to recognize bat bugs and tell them apart from bed bugs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Physical Characteristics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Oval-shaped, flat body — about 1/4 inch (5–6 mm) long</li>
              <li>• Brownish-red color, darkens after a blood meal</li>
              <li>• Very similar in appearance to bed bugs</li>
              <li>
                • Key difference: longer fringe hairs on the pronotum (the
                section just behind the head) — visible under magnification
              </li>
              <li>• Six legs, no wings</li>
              <li>• Wingless and cannot jump or fly</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Bat Bug vs. Bed Bug</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Preferred host:</strong> Bat bugs prefer bats; bed
                bugs prefer humans
              </li>
              <li>
                • <strong>Location:</strong> Bat bugs are usually found near bat
                roosts (attics, chimneys, wall voids); bed bugs are found near
                sleeping areas
              </li>
              <li>
                • <strong>Fringe hairs:</strong> Bat bugs have longer hairs on
                the pronotum (requires magnification to confirm)
              </li>
              <li>
                • Bat bugs will bite humans when bats are not available as hosts
              </li>
              <li>
                • Both leave similar bite marks; professional ID may be needed
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Signs of Infestation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Red, itchy bites — often on arms, neck, or face</li>
              <li>• Tiny dark fecal spots near bat roosts or sleeping areas</li>
              <li>• Shed exoskeletons (molted skins)</li>
              <li>• Musty odor in attics or rooms near bat colonies</li>
              <li>• Visible bugs crawling on walls or ceilings near roosts</li>
              <li>• Bat guano (droppings) present in attic or wall voids</li>
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
            Where bat bugs live and how they spread
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Primary Habitat</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Attics and roof spaces where bats roost</li>
              <li>• Wall voids and hollow spaces near bat colonies</li>
              <li>• Chimneys and behind shutters</li>
              <li>• Spaces around window frames and soffits</li>
              <li>• Caves, barns, and other structures bats inhabit</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">How They Spread Indoors</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • When bats leave or are removed, bat bugs migrate looking for a
                new host
              </li>
              <li>• They travel down walls and ceilings into living spaces</li>
              <li>
                • Can hide in bedrooms, furniture, and cracks — just like bed
                bugs
              </li>
              <li>
                • Without a bat host, they will attempt to feed on humans or
                pets
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Feeding Cycle</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Prefer to feed on bat blood, but will bite humans</li>
              <li>• Feed every few days when a host is available</li>
              <li>• Can survive for months without feeding</li>
              <li>• Nocturnal — most active at night</li>
              <li>
                • Bites may go unnoticed at first; reactions vary by person
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Prevention
          </CardTitle>
          <CardDescription>
            How to keep bat bugs out of your home
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Exclude Bats First</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • The most important step is removing the bat colony from your
                home
              </li>
              <li>
                • Use one-way exclusion devices during the right season (check
                local wildlife laws — bats are often protected)
              </li>
              <li>
                • Do NOT exclude bats when young (pups) are present (typically
                June–August)
              </li>
              <li>
                • Once bats are gone, seal all entry points with caulk, foam,
                and mesh
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Seal Entry Points</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Seal cracks and gaps around the roofline, eaves, and soffits
              </li>
              <li>• Cap chimneys and cover vents with fine mesh screens</li>
              <li>• Repair damaged fascia boards and siding</li>
              <li>• Seal gaps around pipes and wires entering the home</li>
              <li>• Fill openings around window and door frames</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Reduce Attractants</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Fix water leaks (bats need water sources near roosts)</li>
              <li>
                • Reduce outdoor lighting that attracts insects (bat food
                source)
              </li>
              <li>• Remove wood piles and debris stacked against the house</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Elimination & Treatment
          </CardTitle>
          <CardDescription>Steps to eliminate bat bugs safely</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Step 1: Remove the Bats</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Bat bugs cannot be permanently eliminated without first
                removing the bat colony
              </li>
              <li>
                • Contact a licensed wildlife removal professional — bats are
                legally protected in many states
              </li>
              <li>• Never kill bats — exclusion is the correct method</li>
              <li>• After bats are excluded, seal entry points immediately</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Step 2: Treat Affected Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Vacuum attic spaces, wall voids, and anywhere bat guano was
                present
              </li>
              <li>
                • Dispose of vacuum bags sealed in plastic bags outside
                immediately
              </li>
              <li>
                • Apply diatomaceous earth in cracks, along baseboards, and in
                attic areas — use sparingly with a powder puffer
              </li>
              <li>
                • Heat treatment (120–145°F sustained for 8–10 hours) can
                eliminate bat bugs just like bed bugs
              </li>
              <li>
                • Steam treat cracks, crevices, and wall voids where bugs hide
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Step 3: Monitor & Follow Up</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Place interceptor traps under bed legs to catch any bugs
              </li>
              <li>
                • Inspect sleeping areas for signs of biting or bug activity
              </li>
              <li>• Repeat treatment if activity continues</li>
              <li>
                • If bites persist, confirm identification with a pest
                professional — may be bed bugs, not bat bugs
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">
              WARNING: Do Not Use Bug Bombs
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Aerosol bug bombs and store-bought sprays do NOT work on bat
                bugs
              </li>
              <li>
                • They scatter the bugs deeper into walls, making the problem
                worse
              </li>
              <li>
                • Repeated chemical exposure builds resistance — making
                elimination harder
              </li>
              <li>
                • Use diatomaceous earth and heat as your primary treatment
                tools
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">When to Call a Professional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• You cannot safely access the bat roost area</li>
              <li>• Bites persist after bat removal and initial treatment</li>
              <li>• You are unsure if pests are bat bugs or bed bugs</li>
              <li>
                • Large bat colony or significant guano accumulation present
              </li>
              <li>
                • Contact Community Health at <strong>541-553-2352</strong> for
                local pest management assistance (area code 97761)
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
