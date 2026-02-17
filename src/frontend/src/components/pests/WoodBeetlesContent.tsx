import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Eye, Home, Shield, Phone, AlertTriangle } from 'lucide-react';

export function WoodBeetlesContent() {
  return (
    <div className="space-y-6">
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          Wood-boring beetles can cause serious structural damage to homes. Early detection and professional treatment are essential to prevent costly repairs.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Identifying Wood Beetles
          </CardTitle>
          <CardDescription>Learn to recognize wood-boring beetles and their damage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Common Wood-Boring Beetle Types</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Powderpost Beetles:</strong> Small (1/8 to 1/4 inch), reddish-brown to black, most common</li>
              <li>• <strong>Old House Borers:</strong> Large (5/8 to 1 inch), gray-black with long antennae</li>
              <li>• <strong>Deathwatch Beetles:</strong> Medium (1/4 to 3/8 inch), brown, cylindrical body</li>
              <li>• <strong>False Powderpost Beetles:</strong> Small (1/8 to 1/4 inch), reddish-brown, attack softwoods</li>
              <li>• Adult beetles are rarely seen; larvae cause the damage</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Key Signs of Infestation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Exit holes:</strong> Small, round holes (1/32 to 1/4 inch) in wood surfaces</li>
              <li>• <strong>Powdery frass:</strong> Fine, flour-like powder near holes or on surfaces below</li>
              <li>• <strong>Tunnels:</strong> Visible channels or galleries inside damaged wood</li>
              <li>• <strong>Weakened wood:</strong> Wood that sounds hollow when tapped or crumbles easily</li>
              <li>• <strong>Adult beetles:</strong> Occasionally seen near windows or lights in spring/summer</li>
              <li>• <strong>Larvae:</strong> Cream-colored, C-shaped grubs inside wood (rarely visible)</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Damage Characteristics by Species</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Powderpost:</strong> Fine, talc-like powder; attacks hardwoods (oak, ash, hickory)</li>
              <li>• <strong>Old House Borer:</strong> Coarse, pellet-like frass; attacks softwoods (pine, fir)</li>
              <li>• <strong>Deathwatch:</strong> Bun-shaped pellets; attacks hardwoods and softwoods</li>
              <li>• Damage often goes unnoticed for years until structural issues appear</li>
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
          <CardDescription>Common locations and how infestations start</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Typical Indoor Locations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Structural wood: floor joists, beams, rafters, subflooring</li>
              <li>• Hardwood flooring, especially older installations</li>
              <li>• Wood paneling and trim</li>
              <li>• Furniture, especially antiques or unfinished pieces</li>
              <li>• Wooden cabinets and built-ins</li>
              <li>• Attics and crawl spaces with exposed wood</li>
              <li>• Basements with wooden support structures</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">How Infestations Begin</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Eggs laid in wood before it was milled or installed (most common)</li>
              <li>• Infested furniture or antiques brought into the home</li>
              <li>• Firewood stored indoors or near the house</li>
              <li>• Untreated or improperly dried lumber used in construction</li>
              <li>• Adult beetles entering through open windows or doors</li>
              <li>• Infestations can remain dormant for years before becoming active</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Favorable Conditions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• High moisture content in wood (above 14%)</li>
              <li>• Poor ventilation in attics, basements, or crawl spaces</li>
              <li>• Warm temperatures (beetles are more active in warmer months)</li>
              <li>• Sapwood (outer layers of wood) is more susceptible than heartwood</li>
              <li>• Unfinished or unsealed wood surfaces</li>
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
          <CardDescription>How to prevent wood beetle infestations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">New Construction & Renovations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use kiln-dried lumber (moisture content below 14%)</li>
              <li>• Apply wood preservatives or borate treatments to exposed wood</li>
              <li>• Seal or finish all wood surfaces with paint, varnish, or polyurethane</li>
              <li>• Inspect lumber for exit holes before installation</li>
              <li>• Ensure proper ventilation in attics, basements, and crawl spaces</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Moisture Control</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Fix leaks and water damage promptly</li>
              <li>• Use dehumidifiers in damp areas</li>
              <li>• Improve ventilation in crawl spaces and attics</li>
              <li>• Ensure proper drainage around the foundation</li>
              <li>• Keep wood moisture content below 14%</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Furniture & Firewood</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Inspect antique or used furniture carefully before bringing indoors</li>
              <li>• Store firewood at least 20 feet from the house</li>
              <li>• Never store firewood indoors</li>
              <li>• Burn firewood within one season of cutting</li>
              <li>• Inspect wooden items for exit holes and frass before purchase</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Regular Monitoring</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Inspect exposed wood annually for exit holes and frass</li>
              <li>• Check attics, basements, and crawl spaces regularly</li>
              <li>• Look for adult beetles near windows in spring and summer</li>
              <li>• Tap wood to check for hollow sounds (indicates damage)</li>
              <li>• Document any new holes or damage with photos and dates</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            What to Do If Found
          </CardTitle>
          <CardDescription>Steps to take when you discover wood beetles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Immediate Actions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Document the infestation with photos of holes, frass, and damage</li>
              <li>• Note the location and extent of damage</li>
              <li>• Determine if the infestation is active (fresh frass, new holes)</li>
              <li>• Isolate infested furniture if possible</li>
              <li>• Do not disturb or remove damaged wood yet</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Assessing Activity</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Active infestation:</strong> Fresh, light-colored frass; clean exit holes</li>
              <li>• <strong>Old infestation:</strong> Dark, compacted frass; dirty or weathered holes</li>
              <li>• Vacuum frass and check for new accumulation after a few weeks</li>
              <li>• Look for adult beetles in spring/summer (indicates active infestation)</li>
              <li>• Active infestations require immediate professional treatment</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">For Small, Isolated Infestations (Furniture)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Isolate the item from other wooden objects</li>
              <li>• Consider professional fumigation for valuable pieces</li>
              <li>• Freezing (0°F for 72 hours) can kill beetles in small items</li>
              <li>• Heat treatment (140°F for 30 minutes) is also effective</li>
              <li>• Discard heavily damaged items if not valuable</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">When to Call a Professional (Essential for Structural Damage)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Always contact a licensed pest control professional for:</strong></li>
              <li className="ml-4">- Active infestations in structural wood</li>
              <li className="ml-4">- Widespread damage or multiple locations</li>
              <li className="ml-4">- Uncertainty about species or extent of damage</li>
              <li className="ml-4">- Need for fumigation or structural treatment</li>
              <li>• Professional inspection can assess structural integrity</li>
              <li>• Treatment options include fumigation, heat treatment, or localized chemical treatment</li>
              <li>• May need to consult a structural engineer for severe damage</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">After Treatment</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Monitor for new exit holes or frass regularly</li>
              <li>• Repair or replace damaged wood as recommended</li>
              <li>• Seal or finish exposed wood to prevent re-infestation</li>
              <li>• Maintain proper moisture control</li>
              <li>• Schedule follow-up inspections as recommended</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
