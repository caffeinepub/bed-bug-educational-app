import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Eye, Home, Shield, Users } from "lucide-react";

export function HeadLiceContent() {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          Head lice are not a sign of poor hygiene and do not spread disease.
          They are common among school-age children. If you suspect head lice,
          check all household members and notify close contacts like schools or
          daycare centers.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            What Are Head Lice?
          </CardTitle>
          <CardDescription>
            Understanding head lice and how to identify them
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Basic Information</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Size:</strong> Adult lice are about the size of a
                sesame seed (2-3mm long)
              </li>
              <li>
                • <strong>Color:</strong> Tan to grayish-white, may appear
                darker on dark hair
              </li>
              <li>
                • <strong>Location:</strong> Live on the scalp, close to the
                skin for warmth and blood meals
              </li>
              <li>
                • <strong>Lifespan:</strong> Adult lice live about 30 days on a
                person's head
              </li>
              <li>
                • <strong>Eggs (nits):</strong> Tiny, oval-shaped, yellow or
                white, firmly attached to hair shaft near scalp
              </li>
              <li>
                • <strong>Movement:</strong> Crawl quickly but cannot jump or
                fly
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Common Signs of Head Lice</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Itching:</strong> Intense itching on the scalp, neck,
                and ears (caused by allergic reaction to lice saliva)
              </li>
              <li>
                • <strong>Tickling sensation:</strong> Feeling of something
                moving in the hair
              </li>
              <li>
                • <strong>Visible lice:</strong> Small insects crawling on scalp
                or hair (difficult to see, move quickly)
              </li>
              <li>
                • <strong>Nits (eggs):</strong> Tiny white or yellow-brown
                specks firmly attached to hair shafts, especially behind ears
                and at nape of neck
              </li>
              <li>
                • <strong>Sores:</strong> Small red bumps or sores on scalp,
                neck, and shoulders from scratching
              </li>
              <li>
                • <strong>Difficulty sleeping:</strong> Lice are most active in
                the dark
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">How to Check for Head Lice</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use bright light or natural sunlight</li>
              <li>• Part hair in small sections and look close to the scalp</li>
              <li>• Check behind ears and at the nape of the neck carefully</li>
              <li>
                • Use a fine-toothed lice comb to help detect lice and nits
              </li>
              <li>
                • Look for nits within 1/4 inch of the scalp (farther away may
                be old, hatched eggs)
              </li>
              <li>
                • Nits are firmly attached and difficult to remove (unlike
                dandruff which brushes off easily)
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            How Head Lice Spread
          </CardTitle>
          <CardDescription>
            Understanding transmission and risk factors
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Primary Transmission Methods</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Direct head-to-head contact:</strong> Most common way
                lice spread (during play, sports, sleepovers)
              </li>
              <li>
                • <strong>Shared personal items:</strong> Hats, scarves,
                helmets, hair accessories, combs, brushes, towels
              </li>
              <li>
                • <strong>Shared bedding:</strong> Pillows, blankets, and
                stuffed animals
              </li>
              <li>
                • <strong>Upholstered furniture:</strong> Couches, car seats,
                and headrests where infested heads have rested
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Common Risk Factors</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • School-age children (ages 3-11) are most commonly affected
              </li>
              <li>• Close contact in schools, daycare centers, and camps</li>
              <li>• Sleepovers and group activities</li>
              <li>• Sharing personal items with infested individuals</li>
              <li>
                • Girls tend to get head lice more often than boys (due to
                longer hair and closer contact during play)
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">
              Important Facts About Transmission
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Head lice do not jump or fly; they crawl</li>
              <li>
                • Pets cannot get or spread head lice (they only live on humans)
              </li>
              <li>• Head lice can survive off the head for only 1-2 days</li>
              <li>
                • Nits (eggs) cannot hatch at room temperature and die within a
                week off the head
              </li>
              <li>
                • Head lice are not related to cleanliness; anyone can get them
              </li>
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
          <CardDescription>
            How to prevent head lice infestations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Avoid Head-to-Head Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Teach children to avoid head-to-head contact during play and
                activities
              </li>
              <li>
                • Encourage children to keep a personal space during group
                activities
              </li>
              <li>• Avoid hugging and close contact with heads touching</li>
              <li>
                • Be especially cautious during sleepovers and group gatherings
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Don't Share Personal Items</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Never share:</strong> Hats, scarves, helmets, hair
                accessories, combs, brushes, towels
              </li>
              <li>
                • Keep coats and hats in separate cubbies or lockers at school
              </li>
              <li>• Use separate hooks for each family member at home</li>
              <li>• Don't share headphones or earbuds</li>
              <li>• Avoid trying on hats in stores</li>
              <li>• Each child should have their own hairbrush and comb</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">
              Handle Bedding and Clothing Carefully
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Wash bedding, clothing, and towels in hot water (130°F or
                higher) if someone has lice
              </li>
              <li>• Dry items on high heat for at least 20 minutes</li>
              <li>
                • Items that can't be washed can be sealed in plastic bags for 2
                weeks
              </li>
              <li>
                • Vacuum floors, furniture, and car seats where infested person
                sat or lay
              </li>
              <li>
                • Don't share pillows, blankets, or stuffed animals during
                sleepovers
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">
              Regular Checks and Early Detection
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Check children's heads regularly, especially during peak lice
                season (back-to-school time)
              </li>
              <li>
                • Perform weekly head checks if there's an outbreak at school or
                daycare
              </li>
              <li>
                • Look for nits close to the scalp, especially behind ears and
                at nape of neck
              </li>
              <li>
                • Use a fine-toothed lice comb during regular hair brushing
              </li>
              <li>
                • Teach children to report itching or tickling sensations
                immediately
              </li>
              <li>
                • Early detection makes treatment easier and prevents spread
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Hair Management</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Keep long hair tied back in braids, buns, or ponytails</li>
              <li>
                • This reduces the chance of hair-to-hair contact during play
              </li>
              <li>• Consider shorter hairstyles during peak lice season</li>
              <li>
                • Use hair gel or spray to make hair less attractive to lice
                (they prefer clean, loose hair)
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Communication and Awareness</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • If your child has lice, notify the school, daycare, and close
                contacts immediately
              </li>
              <li>• Check all household members when one person has lice</li>
              <li>
                • Treat all infested family members on the same day to prevent
                re-infestation
              </li>
              <li>
                • Educate children about head lice without creating fear or
                stigma
              </li>
              <li>• Stay informed about outbreaks in your community</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            What to Do If You Find Head Lice
          </CardTitle>
          <CardDescription>
            Steps to take when dealing with head lice
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Immediate Actions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Stay calm; head lice are common and treatable</li>
              <li>• Check all household members for lice and nits</li>
              <li>• Notify school, daycare, and close contacts</li>
              <li>
                • Begin treatment immediately with an over-the-counter or
                prescription lice treatment
              </li>
              <li>• Follow product instructions carefully</li>
              <li>• Remove nits with a fine-toothed comb after treatment</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Treatment Options</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Over-the-counter treatments:</strong> Permethrin or
                pyrethrin-based shampoos (follow label directions)
              </li>
              <li>
                • <strong>Prescription treatments:</strong> Available from your
                doctor if OTC treatments don't work
              </li>
              <li>
                • <strong>Manual removal:</strong> Wet-combing with a
                fine-toothed lice comb every 3-4 days for 2 weeks
              </li>
              <li>• Treat all infested family members on the same day</li>
              <li>
                • Repeat treatment in 7-10 days to kill newly hatched lice
              </li>
              <li>
                • Do not use multiple treatments at once or more frequently than
                directed
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Home Cleaning</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Wash bedding, clothing, and towels in hot water (130°F) and
                dry on high heat
              </li>
              <li>
                • Soak combs and brushes in hot water (130°F) for 5-10 minutes
              </li>
              <li>• Vacuum floors, furniture, and car seats</li>
              <li>
                • Seal items that can't be washed in plastic bags for 2 weeks
              </li>
              <li>• Focus on items used in the 2 days before treatment</li>
              <li>• No need for extensive house cleaning or fumigation</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">When to See a Doctor</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Over-the-counter treatments don't work after 2 applications
              </li>
              <li>• Severe scalp irritation or infection from scratching</li>
              <li>• Unsure if it's head lice or another condition</li>
              <li>
                • Child is under 2 years old (some treatments not safe for young
                children)
              </li>
              <li>• Pregnant or breastfeeding (need safe treatment options)</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Preventing Re-infestation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Check all family members daily for 2-3 weeks after treatment
              </li>
              <li>• Continue to comb hair with a lice comb regularly</li>
              <li>• Ensure all household members are treated if infested</li>
              <li>• Avoid head-to-head contact until treatment is complete</li>
              <li>• Don't share personal items during and after treatment</li>
              <li>• Notify school when child is lice-free and can return</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
