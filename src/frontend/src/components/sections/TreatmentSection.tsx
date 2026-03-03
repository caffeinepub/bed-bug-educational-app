import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useHeatTreatmentChecklistProgress } from "@/hooks/useHeatTreatmentChecklistProgress";
import { useHeatTreatmentChecklistReminder } from "@/hooks/useHeatTreatmentChecklistReminder";
import { HeatTreatmentChecklistReminderDialog } from "./HeatTreatmentChecklistReminderDialog";

export function TreatmentSection() {
  const checklistItems = [
    { id: "remove-clutter", label: "Remove clutter from floors and surfaces" },
    {
      id: "wash-bedding",
      label: "Wash all bedding, curtains, and clothing in hot water",
    },
    {
      id: "vacuum-thoroughly",
      label: "Vacuum all floors, furniture, and mattresses",
    },
    { id: "seal-items", label: "Seal cleaned items in plastic bags" },
    {
      id: "move-furniture",
      label: "Move furniture away from walls (6-12 inches)",
    },
    {
      id: "remove-heat-sensitive",
      label:
        "Remove heat-sensitive items (candles, plants, medications, electronics)",
    },
    {
      id: "remove-pets",
      label: "Remove all pets and arrange alternative care",
    },
    {
      id: "turn-off-ac",
      label: "Turn off air conditioning and heating systems",
    },
    { id: "open-drawers", label: "Open all drawers, closets, and cabinets" },
    {
      id: "remove-wall-items",
      label: "Remove items from walls (pictures, mirrors, decorations)",
    },
  ];

  const { isItemCompleted, toggleItem, resetAll, getCompletionStats } =
    useHeatTreatmentChecklistProgress();

  const { isConfirmed, isReminderOpen, confirm, cancel, showReminder } =
    useHeatTreatmentChecklistReminder();

  const stats = getCompletionStats(checklistItems.map((item) => item.id));

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="space-y-6">
      <Alert className="border-primary/50 bg-primary/5">
        <div className="flex items-start gap-3">
          <button
            type="button"
            onClick={() => scrollToSection("heat-treatment-basics")}
            className="flex-shrink-0 cursor-pointer transition-opacity hover:opacity-70 mt-0.5"
            aria-label="Jump to treatment section"
          >
            <img
              src="/assets/generated/bed-bugs-quick-tip-icon.dim_128x128.png"
              alt="Quick tip"
              className="h-5 w-5"
            />
          </button>
          <AlertDescription className="text-sm flex-1">
            Heat treatment is the most effective non-chemical method for
            eliminating bed bugs. Professional treatment can eradicate all life
            stages in a single session.
          </AlertDescription>
        </div>
      </Alert>

      <Alert variant="destructive">
        <AlertDescription className="text-sm">
          <strong className="font-semibold">Warning:</strong> Do NOT use bed bug
          bombs or foggers. These products are ineffective against bed bugs and
          can spread the infestation by causing bugs to scatter into walls and
          adjacent rooms. They also pose health risks and fire hazards.
        </AlertDescription>
      </Alert>

      <Card id="heat-treatment-basics">
        <CardHeader>
          <CardTitle>Heat Treatment Basics</CardTitle>
          <CardDescription>
            How professional heat treatment works
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-muted/30">
            <img
              src="/assets/generated/high-heat-treatment-icon.dim_128x128.png"
              alt="Heat treatment equipment"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <strong className="font-semibold text-foreground">
                Temperature Requirements:
              </strong>{" "}
              Professional heat treatment raises the temperature of your home to
              120-135°F (49-57°C) for several hours. This temperature is lethal
              to bed bugs at all life stages, including eggs.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Treatment Duration:
              </strong>{" "}
              A typical heat treatment takes 6-8 hours, including setup,
              heating, and cool-down time.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Effectiveness:
              </strong>{" "}
              When performed correctly by professionals, heat treatment has a
              97-100% success rate in a single treatment.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Penetration:
              </strong>{" "}
              Heat penetrates into cracks, crevices, furniture, and other hiding
              spots where bed bugs shelter, reaching areas that chemical
              treatments may miss.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                No Residue:
              </strong>{" "}
              Unlike chemical treatments, heat leaves no residue and is safe for
              people, pets, and the environment once the space cools down.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Room Preparation Checklist</CardTitle>
          <CardDescription>
            {isConfirmed
              ? `Essential steps before heat treatment (${stats.completed}/${stats.total} complete - ${stats.percentage}%)`
              : "Review safety guidance before accessing checklist"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isConfirmed ? (
            <div className="space-y-4">
              <Alert className="border-warning/50 bg-warning/5">
                <AlertDescription className="text-sm">
                  Before preparing your home for heat treatment, please review
                  important safety information and professional guidance.
                </AlertDescription>
              </Alert>
              <Button onClick={showReminder} className="w-full">
                Review Safety Guidance & Access Checklist
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                {checklistItems.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3">
                    <Checkbox
                      id={item.id}
                      checked={isItemCompleted(item.id)}
                      onCheckedChange={() => toggleItem(item.id)}
                      className="mt-1"
                    />
                    <label
                      htmlFor={item.id}
                      className="text-sm leading-relaxed cursor-pointer select-none"
                    >
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-sm text-muted-foreground">
                  Progress: {stats.completed} of {stats.total} items complete
                </span>
                <Button variant="outline" size="sm" onClick={resetAll}>
                  Reset All
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What to Expect During Treatment</CardTitle>
          <CardDescription>The heat treatment process</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">
              Setup (1-2 hours):
            </strong>{" "}
            Technicians will place industrial heaters and fans throughout your
            home, along with temperature sensors to monitor heat distribution.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Heating Phase (4-6 hours):
            </strong>{" "}
            The temperature will gradually rise to the target range. Technicians
            monitor temperatures continuously to ensure all areas reach lethal
            levels.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Holding Period:
            </strong>{" "}
            Once target temperatures are reached, they're maintained for 1-2
            hours to ensure complete eradication, including eggs in deep hiding
            spots.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Cool Down:
            </strong>{" "}
            After treatment, your home will need time to cool before re-entry.
            Technicians will inform you when it's safe to return.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Post-Treatment:
            </strong>{" "}
            You can typically return home the same day. No additional cleaning
            is required, though you may want to vacuum to remove dead bugs.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Items to Remove Before Treatment</CardTitle>
          <CardDescription>
            Heat-sensitive items that must be removed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">
              Electronics:
            </strong>{" "}
            Computers, TVs, gaming consoles, tablets, phones, and other
            electronic devices can be damaged by high heat.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Medications:
            </strong>{" "}
            Prescription and over-the-counter medications, vitamins, and
            supplements should be removed.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Perishables:
            </strong>{" "}
            Food items, especially those in plastic containers, chocolate, and
            anything that can melt or spoil.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Cosmetics & Toiletries:
            </strong>{" "}
            Makeup, lotions, aerosol cans, and other personal care items that
            may be heat-sensitive.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Plants & Pets:
            </strong>{" "}
            All living things must be removed, including houseplants, pets, and
            aquarium fish.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Wax & Vinyl:
            </strong>{" "}
            Candles, vinyl records, wax figurines, and similar items that can
            melt or warp.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Pressurized Containers:
            </strong>{" "}
            Aerosol cans, fire extinguishers, propane tanks, and other
            pressurized items pose explosion risks.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Firearms & Ammunition:
            </strong>{" "}
            All firearms, ammunition, and explosive materials must be removed
            for safety.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>DIY Heat Treatment (Small Items)</CardTitle>
          <CardDescription>Treating individual items at home</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-lg border bg-muted/30">
              <img
                src="/assets/generated/high-heat-dryer.dim_400x300.jpg"
                alt="Clothes dryer for heat treatment"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg border bg-muted/30">
              <img
                src="/assets/generated/sealed-bags-treatment.dim_500x400.jpg"
                alt="Items sealed in bags for treatment"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <strong className="font-semibold text-foreground">
                Dryer Method:
              </strong>{" "}
              Wash and dry clothing, bedding, and fabric items on the highest
              heat setting for at least 30 minutes. This kills all bed bug life
              stages.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Sealed Bag Method:
              </strong>{" "}
              For items that can't be washed, seal them in black plastic bags
              and place in direct sunlight or a hot car (interior temperature
              must reach 120°F) for several hours.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Steam Cleaning:
              </strong>{" "}
              Use a commercial steamer to treat mattresses, furniture, and
              carpets. The steam temperature must reach at least 160°F at the
              surface.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Limitations:
              </strong>{" "}
              DIY methods work for individual items but cannot treat an entire
              home effectively. Professional treatment is necessary for
              whole-home infestations.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why Professional Treatment is Recommended</CardTitle>
          <CardDescription>The importance of expert service</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">
              Specialized Equipment:
            </strong>{" "}
            Professional heat treatment requires industrial heaters, fans, and
            monitoring equipment that homeowners don't have access to.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Even Heat Distribution:
            </strong>{" "}
            Professionals ensure heat reaches every corner, crack, and crevice
            in your home, including inside walls and furniture.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Temperature Monitoring:
            </strong>{" "}
            Technicians use multiple sensors to verify that lethal temperatures
            are reached and maintained throughout the treatment area.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Safety:</strong>{" "}
            Professionals know how to safely heat your home without causing fire
            hazards or damaging your property.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Guaranteed Results:
            </strong>{" "}
            Most professional services offer warranties or guarantees, providing
            follow-up treatments if needed.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Time & Stress:
            </strong>{" "}
            Professional treatment is completed in one day, whereas DIY methods
            may take weeks or months with uncertain results.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Post-Treatment Care</CardTitle>
          <CardDescription>
            After the heat treatment is complete
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">
              Immediate Return:
            </strong>{" "}
            You can typically return home the same day once the space has cooled
            to a safe temperature (usually 2-3 hours after treatment ends).
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Vacuuming:
            </strong>{" "}
            Vacuum thoroughly to remove dead bed bugs, shed skins, and eggs.
            Dispose of vacuum bags immediately in sealed plastic bags outside.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Monitoring:
            </strong>{" "}
            Continue to inspect your sleeping areas regularly for the next few
            weeks. While heat treatment is highly effective, a small number of
            bugs may have been missed if they were in protected areas.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Mattress Encasements:
            </strong>{" "}
            Consider using bed bug-proof mattress and box spring encasements to
            prevent future infestations and trap any remaining bugs.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Prevention:
            </strong>{" "}
            Follow prevention strategies to avoid re-infestation, especially if
            you live in multi-unit housing or travel frequently.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              Follow-Up:
            </strong>{" "}
            If you notice any signs of bed bugs within the warranty period,
            contact your pest control company immediately for follow-up
            treatment.
          </p>
        </CardContent>
      </Card>

      <HeatTreatmentChecklistReminderDialog
        open={isReminderOpen}
        onConfirm={confirm}
        onCancel={cancel}
      />
    </div>
  );
}
