import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Eye, Home, Shield, Phone, AlertCircle } from 'lucide-react';

export function MothsLarvaeContent() {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Quick Tip</AlertTitle>
        <AlertDescription>
          Moths and their larvae can damage clothing, fabrics, and stored foods. Early detection and prevention are key to protecting your belongings.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Identifying Moths & Larvae
          </CardTitle>
          <CardDescription>Learn to recognize moths, larvae, and signs of infestation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Adult Moths</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Clothes Moths:</strong> Small (1/4 to 1/2 inch), golden or buff-colored, avoid light</li>
              <li>• <strong>Pantry Moths:</strong> Slightly larger (1/2 to 5/8 inch), gray with copper/bronze markings</li>
              <li>• Weak fliers that prefer to run or hop rather than fly</li>
              <li>• Often found resting on walls or in dark corners</li>
              <li>• Attracted to natural fibers (wool, silk, fur) or stored foods</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Larvae (Caterpillars)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Creamy white to yellowish color with dark head capsule</li>
              <li>• Size: 1/4 to 1/2 inch long when fully grown</li>
              <li>• Soft-bodied, worm-like appearance</li>
              <li>• May spin silken tubes or cases for protection</li>
              <li>• Larvae cause the actual damage, not adult moths</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Signs of Infestation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Irregular holes in fabrics, especially wool, silk, or fur items</li>
              <li>• Silken tubes or webbing on fabric surfaces</li>
              <li>• Small, rice-like cocoons in corners or crevices</li>
              <li>• Webbing or clumping in stored food products</li>
              <li>• Adult moths flying near closets, pantries, or storage areas</li>
              <li>• Fecal pellets (frass) that look like fine sand or pepper</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Where Found & Attractants
          </CardTitle>
          <CardDescription>Common locations and what attracts moths</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Clothes Moth Locations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Closets with wool, silk, or fur garments</li>
              <li>• Storage boxes containing natural fiber clothing or blankets</li>
              <li>• Upholstered furniture with natural fiber stuffing</li>
              <li>• Carpets and rugs, especially wool or wool-blend</li>
              <li>• Areas with pet hair accumulation</li>
              <li>• Dark, undisturbed spaces like attics or basements</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Pantry Moth Locations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Kitchen cabinets and pantries</li>
              <li>• Stored grains, cereals, flour, and pasta</li>
              <li>• Dried fruits, nuts, and seeds</li>
              <li>• Pet food and bird seed</li>
              <li>• Spices and dried herbs</li>
              <li>• Chocolate and candy</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">What Attracts Moths</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Soiled or stained fabrics (sweat, food, body oils attract them)</li>
              <li>• Natural animal fibers (wool, silk, fur, feathers, leather)</li>
              <li>• Warm, dark, undisturbed environments</li>
              <li>• Open or poorly sealed food containers</li>
              <li>• High humidity levels</li>
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
          <CardDescription>How to prevent moth infestations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Fabric Protection</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Clean all clothing before storing, especially items with stains</li>
              <li>• Store natural fiber items in airtight containers or sealed bags</li>
              <li>• Use cedar blocks, lavender sachets, or moth repellent products</li>
              <li>• Regularly vacuum closets, carpets, and upholstered furniture</li>
              <li>• Brush or shake out garments periodically</li>
              <li>• Keep storage areas well-ventilated and dry</li>
              <li>• Avoid storing items in cardboard boxes (moths can chew through)</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Food Storage</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Store dry goods in airtight glass, metal, or heavy plastic containers</li>
              <li>• Inspect groceries before bringing them home</li>
              <li>• Rotate stored foods regularly (first in, first out)</li>
              <li>• Clean pantry shelves and corners frequently</li>
              <li>• Dispose of expired or infested food immediately</li>
              <li>• Keep pantry areas cool and dry</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">General Prevention</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Reduce indoor humidity with dehumidifiers</li>
              <li>• Seal cracks and gaps around windows and doors</li>
              <li>• Install tight-fitting screens on windows and vents</li>
              <li>• Regularly inspect stored items for signs of moths</li>
              <li>• Avoid leaving outdoor lights on (attracts moths)</li>
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
          <CardDescription>Steps to take when you discover moths or larvae</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Immediate Actions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Identify the type of moth (clothes moth vs. pantry moth)</li>
              <li>• Locate the source of the infestation</li>
              <li>• Remove and inspect all items in the affected area</li>
              <li>• Vacuum thoroughly, including cracks and crevices</li>
              <li>• Dispose of vacuum bag or empty canister outside immediately</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">For Clothes Moths</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Wash infested fabrics in hot water (120°F or higher) if safe for fabric</li>
              <li>• Dry clean items that cannot be washed</li>
              <li>• Freeze items for at least 72 hours (kills all life stages)</li>
              <li>• Discard heavily damaged items in sealed bags</li>
              <li>• Steam clean carpets and upholstery</li>
              <li>• Consider professional cleaning for valuable items</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">For Pantry Moths</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Discard all infested food in sealed bags outside</li>
              <li>• Check all nearby food items, even sealed packages</li>
              <li>• Wash all pantry shelves with hot soapy water</li>
              <li>• Wipe down cans and jars before returning to pantry</li>
              <li>• Use pheromone traps to monitor and catch adult moths</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">When to Call a Professional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Infestation persists after DIY treatment</li>
              <li>• Large-scale infestation affecting multiple rooms</li>
              <li>• Valuable items or collections are at risk</li>
              <li>• Uncertain about proper treatment methods</li>
              <li>• Need help identifying the moth species</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
