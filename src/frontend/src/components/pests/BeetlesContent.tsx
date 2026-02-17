import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Eye, Home, Shield, Phone, AlertCircle } from 'lucide-react';

export function BeetlesContent() {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Quick Tip</AlertTitle>
        <AlertDescription>
          Many beetle species can infest homes, damaging stored foods, fabrics, and wood. Proper identification helps determine the best control method.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Identifying Beetles
          </CardTitle>
          <CardDescription>Learn to recognize common household beetles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">General Characteristics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Hard, shell-like wing covers (elytra) that meet in a straight line down the back</li>
              <li>• Six legs and two antennae</li>
              <li>• Size varies from 1/16 inch to over 1 inch depending on species</li>
              <li>• Colors range from black and brown to metallic or patterned</li>
              <li>• Complete metamorphosis: egg, larva (grub), pupa, adult</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Common Indoor Beetle Types</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Carpet Beetles:</strong> Small (1/8 inch), round, varied patterns, damage fabrics</li>
              <li>• <strong>Cigarette/Drugstore Beetles:</strong> Tiny (1/10 inch), reddish-brown, infest stored foods</li>
              <li>• <strong>Flour Beetles:</strong> Small (1/8 inch), reddish-brown, found in grain products</li>
              <li>• <strong>Grain Weevils:</strong> Small (1/8 inch), dark with elongated snout, infest whole grains</li>
              <li>• <strong>Ground Beetles:</strong> Medium to large (1/2 to 1 inch), black, usually harmless</li>
              <li>• <strong>Ladybugs (Asian Lady Beetles):</strong> Round (1/4 inch), orange/red with spots, overwinter indoors</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Signs of Beetle Infestation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Live or dead beetles in pantries, closets, or windowsills</li>
              <li>• Larvae (small grubs) in stored foods or fabrics</li>
              <li>• Holes or damage in fabrics, carpets, or stored products</li>
              <li>• Fine powder or frass near infested items</li>
              <li>• Shed larval skins in storage areas</li>
              <li>• Webbing in food packages (some species)</li>
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
          <CardDescription>Where beetles come from and what attracts them</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Common Entry Points</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Infested food products brought home from stores</li>
              <li>• Gaps around doors, windows, and foundations</li>
              <li>• Vents, chimneys, and utility openings</li>
              <li>• Cracks in walls and siding</li>
              <li>• Attached garages and storage areas</li>
              <li>• Cut flowers, plants, or firewood brought indoors</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Indoor Attractants</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Stored food products (grains, cereals, flour, spices, pet food)</li>
              <li>• Natural fiber materials (wool, silk, fur, feathers)</li>
              <li>• Carpets and rugs, especially wool or wool-blend</li>
              <li>• Dead insects and organic debris</li>
              <li>• Warmth and shelter during cold weather</li>
              <li>• Light sources (some species are attracted to lights)</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Breeding Sites</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Pantries and kitchen cabinets with stored foods</li>
              <li>• Closets with natural fiber clothing or blankets</li>
              <li>• Under furniture and in carpet edges</li>
              <li>• Wall voids and attic spaces</li>
              <li>• Pet food storage areas</li>
              <li>• Accumulated lint, hair, and debris</li>
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
          <CardDescription>How to prevent beetle infestations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Food Storage & Kitchen</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Store dry goods in airtight glass, metal, or heavy plastic containers</li>
              <li>• Inspect groceries before bringing them home</li>
              <li>• Rotate stored foods regularly (first in, first out)</li>
              <li>• Clean up spills and crumbs immediately</li>
              <li>• Vacuum pantry shelves and corners regularly</li>
              <li>• Dispose of expired or infested food promptly</li>
              <li>• Keep pet food in sealed containers</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Fabric & Carpet Protection</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Vacuum carpets, rugs, and upholstered furniture regularly</li>
              <li>• Clean clothing before storing, especially items with stains</li>
              <li>• Store natural fiber items in sealed containers or bags</li>
              <li>• Regularly inspect stored fabrics for damage</li>
              <li>• Remove lint, hair, and debris from closets and storage areas</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Home Maintenance</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Seal cracks and gaps around windows, doors, and foundations</li>
              <li>• Install or repair window and door screens</li>
              <li>• Caulk openings around utility lines and pipes</li>
              <li>• Use door sweeps on exterior doors</li>
              <li>• Reduce outdoor lighting or use yellow bulbs (less attractive)</li>
              <li>• Keep firewood stored away from the house</li>
              <li>• Inspect plants and flowers before bringing them indoors</li>
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
          <CardDescription>Steps to take when you discover beetles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Immediate Actions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Identify the beetle species if possible (helps determine treatment)</li>
              <li>• Locate the source of the infestation</li>
              <li>• Isolate infested items to prevent spread</li>
              <li>• Vacuum beetles and larvae thoroughly</li>
              <li>• Dispose of vacuum contents in sealed bags outside</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">For Food-Infesting Beetles</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Discard all infested food in sealed bags outside</li>
              <li>• Check all nearby food items, even sealed packages</li>
              <li>• Empty and clean all pantry shelves with hot soapy water</li>
              <li>• Vacuum all cracks and crevices in pantry area</li>
              <li>• Wipe down all food containers before returning to pantry</li>
              <li>• Consider freezing questionable items for 4 days to kill eggs/larvae</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">For Fabric-Damaging Beetles</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Wash infested fabrics in hot water (120°F or higher) if safe</li>
              <li>• Dry clean items that cannot be washed</li>
              <li>• Freeze items for at least 72 hours to kill all life stages</li>
              <li>• Steam clean carpets and upholstered furniture</li>
              <li>• Discard heavily damaged items in sealed bags</li>
              <li>• Vacuum thoroughly, including under furniture and along baseboards</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">For Occasional Invaders (Ground Beetles, Ladybugs)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Vacuum or sweep up beetles and release outside</li>
              <li>• Seal entry points to prevent future invasions</li>
              <li>• These beetles are generally harmless and don't reproduce indoors</li>
              <li>• Avoid crushing ladybugs (they can stain and emit odor)</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">When to Call a Professional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Infestation persists after DIY treatment</li>
              <li>• Large-scale or widespread infestation</li>
              <li>• Uncertain about beetle species or proper treatment</li>
              <li>• Valuable items or collections are at risk</li>
              <li>• Need help with identification and prevention strategies</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
