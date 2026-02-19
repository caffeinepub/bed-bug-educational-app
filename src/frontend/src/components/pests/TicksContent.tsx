import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Eye, MapPin, Shield, AlertTriangle } from 'lucide-react';

export function TicksContent() {
  return (
    <div className="space-y-6">
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important Health Warning</AlertTitle>
        <AlertDescription>
          Ticks can transmit serious diseases including Lyme disease, Rocky Mountain spotted fever, and others. If you find a tick attached to your skin, remove it promptly and monitor for symptoms. Seek medical attention if you develop a rash, fever, or flu-like symptoms after a tick bite.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Tick Habits & Behavior
          </CardTitle>
          <CardDescription>Understanding how ticks live and feed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Physical Characteristics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Small arachnids (8 legs) ranging from 1mm to 1cm depending on species and feeding stage</li>
              <li>• Flat, oval-shaped body that becomes engorged and round when feeding</li>
              <li>• Colors vary: brown, reddish-brown, black, or gray depending on species</li>
              <li>• No wings or antennae</li>
              <li>• Hard ticks (most common) have a hard shield behind the mouthparts</li>
              <li>• Soft ticks have a leathery appearance without the hard shield</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Life Cycle & Feeding Behavior</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Four life stages: egg, larva (6 legs), nymph (8 legs), and adult (8 legs)</li>
              <li>• Each stage requires a blood meal to progress to the next stage</li>
              <li>• Can feed on mammals, birds, reptiles, and amphibians</li>
              <li>• Feeding can last several days; ticks remain attached during this time</li>
              <li>• Disease transmission typically occurs after 24-48 hours of attachment</li>
              <li>• Can survive months to years without feeding, depending on species and stage</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Activity Patterns</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Most active during warmer months (spring through fall)</li>
              <li>• Some species remain active in winter if temperatures are mild</li>
              <li>• Use a behavior called "questing": climb vegetation and wait with front legs extended</li>
              <li>• Detect hosts by sensing body heat, carbon dioxide, and movement</li>
              <li>• Cannot jump or fly; they must make direct contact with a host</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Where You Get Ticks
          </CardTitle>
          <CardDescription>Common locations and situations for tick exposure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Outdoor Environments</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Wooded areas and forests with leaf litter</li>
              <li>• Tall grass, brush, and overgrown vegetation</li>
              <li>• Edges between lawns and wooded areas (transition zones)</li>
              <li>• Hiking trails, especially those with overhanging vegetation</li>
              <li>• Parks, campgrounds, and recreational areas</li>
              <li>• Areas frequented by deer, rodents, and other wildlife</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Common Exposure Situations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Hiking, camping, or walking through wooded trails</li>
              <li>• Gardening or yard work in areas with tall grass or brush</li>
              <li>• Sitting on logs, stumps, or the ground in tick-prone areas</li>
              <li>• Contact with pets that have been outdoors in tick habitats</li>
              <li>• Hunting or wildlife observation activities</li>
              <li>• Children playing in yards adjacent to wooded areas</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Indoor Exposure</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Ticks brought indoors on clothing, gear, or pets</li>
              <li>• Ticks can survive indoors temporarily but cannot complete their life cycle</li>
              <li>• Check pets, clothing, and gear immediately after outdoor activities</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            How to Prevent Tick Bites
          </CardTitle>
          <CardDescription>Effective strategies to reduce tick exposure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Personal Protection</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Wear long sleeves, long pants, and closed-toe shoes in tick-prone areas</li>
              <li>• Tuck pants into socks or boots to prevent ticks from crawling up legs</li>
              <li>• Wear light-colored clothing to make ticks easier to spot</li>
              <li>• Apply EPA-registered insect repellent containing DEET, picaridin, or IR3535 to exposed skin</li>
              <li>• Treat clothing and gear with permethrin (remains effective through several washes)</li>
              <li>• Stay on cleared trails and avoid walking through tall grass or brush</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">After Outdoor Activities</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Perform a full-body tick check within 2 hours of coming indoors</li>
              <li>• Check hidden areas: underarms, in and around ears, inside belly button, behind knees, between legs, around waist, and in hair</li>
              <li>• Shower or bathe soon after being outdoors (within 2 hours if possible)</li>
              <li>• Examine gear, backpacks, and clothing for ticks</li>
              <li>• Tumble dry clothes on high heat for 10 minutes to kill ticks</li>
              <li>• Check pets thoroughly and use veterinarian-approved tick prevention products</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Yard & Property Management</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Keep grass mowed short and remove leaf litter regularly</li>
              <li>• Clear tall grass and brush around homes and at the edges of lawns</li>
              <li>• Create a 3-foot wide barrier of wood chips or gravel between lawns and wooded areas</li>
              <li>• Stack wood neatly in dry areas away from the house</li>
              <li>• Remove old furniture, trash, and debris where rodents might nest</li>
              <li>• Discourage deer and rodents by removing food sources and using fencing</li>
              <li>• Consider professional tick control treatments for high-risk properties</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            How to Safely Remove a Tick
          </CardTitle>
          <CardDescription>Step-by-step tick removal and aftercare</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Remove Ticks Promptly</AlertTitle>
            <AlertDescription>
              The sooner you remove an attached tick, the lower your risk of disease transmission. Most tick-borne diseases require 24-48 hours of attachment before transmission occurs.
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="mb-2 font-semibold">Safe Removal Steps</h4>
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
              <li>Use fine-tipped tweezers or a tick removal tool (not your fingers)</li>
              <li>Grasp the tick as close to the skin's surface as possible</li>
              <li>Pull upward with steady, even pressure (do not twist or jerk)</li>
              <li>Avoid squeezing the tick's body, which can push infectious fluids into the bite</li>
              <li>If mouthparts remain in the skin, try to remove them with tweezers; if not possible, leave them and let the skin heal</li>
              <li>Do not use heat, petroleum jelly, nail polish, or other folk remedies</li>
            </ol>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">After Removal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Clean the bite area and your hands with rubbing alcohol or soap and water</li>
              <li>• Dispose of the tick by placing it in alcohol, sealing it in a bag, or flushing it down the toilet</li>
              <li>• Consider saving the tick in a sealed container with the date and location for identification if symptoms develop</li>
              <li>• Take a photo of the tick for reference if needed</li>
              <li>• Note the date of the bite and monitor the area for changes</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Monitoring & When to Seek Medical Help</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Watch for a rash at the bite site or elsewhere on the body (especially a bull's-eye rash)</li>
              <li>• Monitor for fever, headache, fatigue, muscle aches, or joint pain in the weeks following the bite</li>
              <li>• Contact a healthcare provider if you develop any symptoms after a tick bite</li>
              <li>• Seek immediate medical attention if you develop a severe rash, difficulty breathing, or signs of infection</li>
              <li>• Inform your doctor about the tick bite, when it occurred, and where you likely acquired it</li>
              <li>• Early treatment of tick-borne diseases is most effective</li>
            </ul>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Not Medical Advice</AlertTitle>
            <AlertDescription>
              This information is for educational purposes only and does not replace professional medical advice. Always consult a healthcare provider for diagnosis and treatment of tick-borne illnesses.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
