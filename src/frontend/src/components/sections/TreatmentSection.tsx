import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Flame, AlertTriangle, RotateCcw, Info } from 'lucide-react';
import { useHeatTreatmentChecklistProgress } from '@/hooks/useHeatTreatmentChecklistProgress';
import { useHeatTreatmentChecklistReminder } from '@/hooks/useHeatTreatmentChecklistReminder';
import { HeatTreatmentChecklistReminderDialog } from './HeatTreatmentChecklistReminderDialog';

// Checklist data structure
const CHECKLIST_DATA = {
  before: [
    'Remove all bedding, curtains, and washable items for dryer treatment',
    'Clear clutter from floors, closets, and under beds',
    'Pull furniture away from walls (at least 3 feet)',
    'Remove items from drawers and closets',
    'Open all drawers, closets, and cabinets to allow heat circulation',
    'Spread out contents of drawers and closets so heat can reach all surfaces',
    'Vacuum thoroughly, then seal and dispose of vacuum bag outside',
    'Remove or protect heat-sensitive items (electronics, computers, tablets, phones, TVs, gaming consoles)',
    'Remove pressurized containers (aerosol cans, fire extinguishers, propane tanks, compressed air)',
    'Remove candles, crayons, vinyl records, and wax-based items that may melt',
    'Remove medications, vitamins, and supplements (heat can reduce effectiveness)',
    'Remove perishable food items, chocolate, and temperature-sensitive groceries',
    'Remove houseplants (high heat will damage or kill them)',
    'Relocate pets, fish tanks, and pet supplies to a safe location',
    'Remove artwork, photographs, and important documents that may be damaged by heat',
    'Remove batteries and battery-powered devices',
    'Turn off or adjust thermostats and HVAC systems as directed by treatment provider',
    'Disable smoke detectors temporarily (coordinate with treatment provider and local fire department if required)',
    'Unplug power strips, surge protectors, and non-essential electronics',
    'Remove window treatments or open blinds to allow even heat distribution',
    'Ensure clear access to all rooms, including attics, basements, and crawl spaces',
    'Remove all firearms and ammunition and any other items that could explode',
  ],
  during: [
    'Maintain room temperature above 120°F for at least 4 hours (professional treatment)',
    'Use fans to circulate heat evenly throughout the space',
    'Monitor temperatures with thermometers in multiple locations',
    'Keep doors and windows closed to maintain heat',
    'Only the heat treatment technician is allowed in the home while it is being heat treated',
  ],
  after: [
    'Allow room to cool before re-entering',
    'Inspect for any surviving bed bugs',
    'Install mattress encasements on treated beds',
    'Only return sealed, treated items to the room',
    'Continue monitoring for 2-3 weeks to ensure complete elimination',
  ],
};

// Generate stable IDs for each checklist item
const generateItemId = (phase: string, index: number) => `${phase}-${index}`;

export function TreatmentSection() {
  const { toggleItem, isItemCompleted, resetAll, getCompletionStats, isLoaded, isPersistenceAvailable } =
    useHeatTreatmentChecklistProgress();

  const {
    isConfirmed,
    isReminderOpen,
    isLoaded: isReminderLoaded,
    isPersistenceAvailable: isReminderPersistenceAvailable,
    confirm,
    cancel,
    showReminder,
  } = useHeatTreatmentChecklistReminder();

  // Calculate all item IDs for stats
  const allItemIds = [
    ...CHECKLIST_DATA.before.map((_, i) => generateItemId('before', i)),
    ...CHECKLIST_DATA.during.map((_, i) => generateItemId('during', i)),
    ...CHECKLIST_DATA.after.map((_, i) => generateItemId('after', i)),
  ];

  const stats = getCompletionStats(allItemIds);

  // Checklist is locked until user confirms the reminder
  const isChecklistLocked = !isConfirmed;

  const handleToggleItem = (itemId: string) => {
    // Only allow toggling if checklist is unlocked
    if (!isChecklistLocked) {
      toggleItem(itemId);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderChecklistItems = (items: string[], phase: string) => {
    return items.map((item, index) => {
      const itemId = generateItemId(phase, index);
      const isCompleted = isItemCompleted(itemId);

      return (
        <li key={itemId} className="flex items-start gap-2 group">
          <Checkbox
            id={itemId}
            checked={isCompleted}
            onCheckedChange={() => handleToggleItem(itemId)}
            className="mt-0.5 flex-shrink-0"
            aria-label={item}
            disabled={isChecklistLocked}
            aria-disabled={isChecklistLocked}
          />
          <Label
            htmlFor={itemId}
            className={`text-sm leading-relaxed ${
              isCompleted ? 'checklist-item-completed' : ''
            } ${isChecklistLocked ? 'cursor-default opacity-60' : 'cursor-pointer'}`}
          >
            {item}
          </Label>
        </li>
      );
    });
  };

  const showPersistenceWarning = !isPersistenceAvailable || !isReminderPersistenceAvailable;

  return (
    <div className="space-y-6">
      <HeatTreatmentChecklistReminderDialog
        open={isReminderOpen}
        onConfirm={confirm}
        onCancel={cancel}
      />

      {showPersistenceWarning && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Storage Unavailable</AlertTitle>
          <AlertDescription>
            Checklist progress and reminder confirmation may not persist on this device or browser. Your progress will be available during this session only.
          </AlertDescription>
        </Alert>
      )}

      <Alert variant="destructive">
        <AlertTriangle className="h-5 w-5" />
        <AlertTitle className="text-base font-semibold">Warning: Do Not Use Bed Bug Bombs or Store-Bought Chemicals</AlertTitle>
        <AlertDescription className="text-sm space-y-2 mt-2">
          <p>
            <strong>Bed bug bombs and store-bought household chemicals do not work.</strong> These products only make bed bugs more resistant to chemicals and can spread the infestation to other areas of your home as bed bugs flee from the spray.
          </p>
          <p>
            <strong>Recommended Alternative:</strong> Use diatomaceous earth (food-grade) as a safer, more effective option. Apply it sparingly in cracks, crevices, and along baseboards where bed bugs travel. Use a powder puffer sprayer or sprinkle it lightly in targeted areas. Diatomaceous earth works by damaging the bed bugs' protective outer coating, causing them to dehydrate.
          </p>
        </AlertDescription>
      </Alert>

      <Alert className="border-primary/50 bg-primary/5">
        <button
          onClick={() => scrollToSection('heat-treatment-basics')}
          className="h-4 w-4 flex-shrink-0 cursor-pointer transition-opacity hover:opacity-70"
          aria-label="Jump to heat treatment section"
        >
          <Flame className="h-4 w-4 text-primary" />
        </button>
        <AlertDescription className="text-sm">
          High heat treatment is one of the most effective non-chemical methods for eliminating bed bugs.
          Proper preparation is essential for success.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription className="text-sm">
          <strong>Important:</strong> For severe infestations, professional pest control is strongly
          recommended. These guidelines are for supplementary treatment and prevention.
        </AlertDescription>
      </Alert>

      <Card id="heat-treatment-basics">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <img
              src="/assets/generated/high-heat-treatment-icon.dim_128x128.png"
              alt="High heat treatment"
              className="h-8 w-8 object-contain"
            />
            Heat Treatment Basics
          </CardTitle>
          <CardDescription>Why heat works against bed bugs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong className="font-semibold text-foreground">Lethal Temperature:</strong> Bed bugs and their
            eggs die when exposed to temperatures of 113°F (45°C) or higher for 90+ minutes, or 118°F (48°C)
            for 20 minutes.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Penetrating Heat:</strong> Heat treatment is
            effective because it penetrates into cracks, crevices, and materials where bed bugs hide.
          </p>
          <p>
            <strong className="font-semibold text-foreground">No Resistance:</strong> Unlike chemical
            treatments, bed bugs cannot develop resistance to heat.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Immediate Results:</strong> Heat kills bed bugs
            at all life stages (eggs, nymphs, adults) on contact when proper temperatures are maintained.
          </p>
          <p>
            <strong className="font-semibold text-foreground">Professional Whole-Home Heat Treatment:</strong> A heat assault machine is a highly effective professional solution for defeating bed bugs. This specialized equipment supplies high heat at 120 to 145 degrees Fahrenheit throughout the entire home. The system uses hoses connected to radiator-style fans that distribute consistent heat to every room for approximately 8 to 10 hours of continuous treatment. When performed by trained professionals, this whole-home heat treatment method is one of the most powerful approaches to completely eliminate bed bug infestations.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dryer Treatment</CardTitle>
          <CardDescription>Using high heat to treat fabrics and clothing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-muted/30">
            <img
              src="/assets/generated/high-heat-dryer.dim_400x300.jpg"
              alt="Clothes dryer for heat treatment"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <strong className="font-semibold text-foreground">Preparation:</strong> Remove all bedding,
              clothing, curtains, and washable fabric items from infested areas.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Washing:</strong> Wash items in hot water (at
              least 120°F/49°C) if fabric care labels allow. This helps kill bed bugs before drying.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Drying:</strong> Dry items on the highest
              heat setting for at least 30 minutes. Larger loads may require 45-60 minutes to ensure all
              items reach lethal temperatures.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Delicate Items:</strong> For items that can't
              be washed, place them directly in the dryer on high heat for 30-45 minutes.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Verify Temperature:</strong> Ensure your
              dryer reaches at least 120°F. Some older or smaller dryers may not get hot enough.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sealing & Storage</CardTitle>
          <CardDescription>Protecting treated items</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-muted/30">
            <img
              src="/assets/generated/sealed-bags-treatment.dim_500x400.jpg"
              alt="Sealed plastic bags for treated items"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <strong className="font-semibold text-foreground">Immediate Sealing:</strong> As soon as items
              come out of the dryer, place them directly into clean, sealed plastic bags or containers.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Bag Quality:</strong> Use heavy-duty plastic
              bags or bins with tight-fitting lids. Avoid bags with holes or weak seals.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Labeling:</strong> Clearly label bags as
              "TREATED" with the date to avoid confusion and prevent re-contamination.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Storage Duration:</strong> Keep items sealed
              until the infestation is completely eliminated (typically 2-3 weeks after final treatment).
            </p>
            <p>
              <strong className="font-semibold text-foreground">Clean Storage Area:</strong> Store sealed
              items in a clean, uninfested area away from the treatment zone.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Steam Cleaning</CardTitle>
          <CardDescription>Treating furniture and surfaces</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-muted/30">
            <img
              src="/assets/generated/steam-cleaning.dim_500x400.jpg"
              alt="Steam cleaner for bed bug treatment"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <strong className="font-semibold text-foreground">Equipment:</strong> Use a commercial-grade
              steam cleaner that produces steam at 160-180°F (71-82°C) at the tip.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Target Areas:</strong> Focus on mattress
              seams, box spring edges, bed frames, furniture joints, baseboards, and carpet edges.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Technique:</strong> Move the steamer slowly
              (1 inch per second) to ensure adequate heat penetration. Use a low moisture setting to avoid
              damaging materials.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Drying:</strong> Allow treated areas to dry
              completely before replacing bedding or using furniture to prevent mold growth.
            </p>
            <p>
              <strong className="font-semibold text-foreground">Limitations:</strong> Steam may not penetrate
              deeply into thick materials. Combine with other methods for comprehensive treatment.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle>Room Preparation Checklist</CardTitle>
              <CardDescription>
                Steps before heat treatment
                {isLoaded && stats.total > 0 && (
                  <span className="ml-2 text-xs font-medium">
                    ({stats.completed}/{stats.total} completed · {stats.percentage}%)
                  </span>
                )}
              </CardDescription>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {isReminderLoaded && isConfirmed && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={showReminder}
                  className="text-muted-foreground hover:text-foreground"
                  title="Show safety reminder"
                >
                  <Info className="h-4 w-4" />
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={resetAll}
                disabled={!isLoaded || stats.completed === 0}
                className="flex-shrink-0"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {isChecklistLocked && (
            <Alert className="border-amber-500/50 bg-amber-500/5">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-500" />
              <AlertDescription className="text-sm">
                <strong className="font-semibold">Safety Reminder Required:</strong> Please review and
                acknowledge the safety reminder before using this checklist.{' '}
                <Button
                  variant="link"
                  size="sm"
                  onClick={showReminder}
                  className="h-auto p-0 text-amber-700 dark:text-amber-400 underline"
                >
                  Show reminder
                </Button>
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold mb-3 text-foreground">Before Treatment</h3>
              <ul className="space-y-2.5">{renderChecklistItems(CHECKLIST_DATA.before, 'before')}</ul>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3 text-foreground">During Treatment</h3>
              <ul className="space-y-2.5">{renderChecklistItems(CHECKLIST_DATA.during, 'during')}</ul>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3 text-foreground">After Treatment</h3>
              <ul className="space-y-2.5">{renderChecklistItems(CHECKLIST_DATA.after, 'after')}</ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-muted-foreground/30">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Professional Treatment Recommended</AlertTitle>
        <AlertDescription className="text-sm">
          While these DIY methods can help with minor infestations, professional pest control services have
          specialized equipment and expertise to ensure complete elimination. For severe infestations or if
          DIY methods are unsuccessful, contact a licensed pest control professional.
        </AlertDescription>
      </Alert>
    </div>
  );
}
