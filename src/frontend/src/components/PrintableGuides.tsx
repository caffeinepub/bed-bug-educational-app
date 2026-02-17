import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, FileText, Loader2, Info } from 'lucide-react';
import { useGuidesBySection } from '@/hooks/useQueries';
import { QuizSectionType } from '../backend';

interface PrintableGuidesProps {
  sectionType: QuizSectionType;
  sectionTitle: string;
}

export function PrintableGuides({ sectionType, sectionTitle }: PrintableGuidesProps) {
  const { data: guides, isLoading } = useGuidesBySection(sectionType);

  const handleDownload = async (guide: any) => {
    try {
      const url = guide.file.getDirectURL();
      const link = document.createElement('a');
      link.href = url;
      link.download = `${guide.title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading guide:', error);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  if (!guides || guides.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Printable Guides Coming Soon</CardTitle>
          <CardDescription>
            Downloadable guides for {sectionTitle} are being prepared.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Check back soon for PDF guides you can download and print for offline reference.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          Download these guides for offline reference. Perfect for printing and keeping handy during inspections or treatments.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 sm:grid-cols-2">
        {guides.map((guide) => (
          <Card key={guide.id} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription className="mt-1 line-clamp-2">
                    {guide.content}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button onClick={() => handleDownload(guide)} className="w-full" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
