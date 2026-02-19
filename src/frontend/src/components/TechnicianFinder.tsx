import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MapPin, Phone, Briefcase, Search, AlertCircle } from 'lucide-react';
import { useTechniciansByZip } from '../hooks/useQueries';

export function TechnicianFinder() {
  const [zipCode, setZipCode] = useState('');
  const [searchZip, setSearchZip] = useState<bigint | null>(null);
  const [validationError, setValidationError] = useState('');

  const { data: technicians, isLoading, error } = useTechniciansByZip(searchZip);

  const handleSearch = () => {
    // Validate zip code format (5-digit US zip code)
    const zipPattern = /^\d{5}$/;
    if (!zipPattern.test(zipCode)) {
      setValidationError('Please enter a valid 5-digit zip code');
      setSearchZip(null);
      return;
    }

    setValidationError('');
    setSearchZip(BigInt(zipCode));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Helper function to format location display
  const formatLocation = (city: string, state: string, zipCode: bigint) => {
    const parts: string[] = [];
    
    if (city && city !== 'unknown' && city !== 'Unknown') {
      parts.push(city);
    }
    
    if (state && state !== 'unknown' && state !== 'Unknown') {
      parts.push(state);
    }
    
    // Always include zip code if available
    if (zipCode && zipCode > 0n) {
      const cityState = parts.length > 0 ? parts.join(', ') + ' ' : '';
      return cityState + zipCode.toString();
    }
    
    return parts.join(', ') || 'Location not specified';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Find Local Pest Control Technicians
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="zipCode">Enter Your Zip Code</Label>
              <div className="flex gap-2">
                <Input
                  id="zipCode"
                  type="text"
                  placeholder="e.g., 90210"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  onKeyPress={handleKeyPress}
                  maxLength={5}
                  className="max-w-xs"
                />
                <Button onClick={handleSearch} disabled={isLoading}>
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
              {validationError && (
                <p className="text-sm text-destructive">{validationError}</p>
              )}
            </div>

            <p className="text-sm text-muted-foreground">
              Enter your 5-digit zip code to find licensed pest control professionals in your area.
            </p>
          </div>
        </CardContent>
      </Card>

      {isLoading && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center py-8">
              <div className="text-center">
                <div className="mb-2 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
                <p className="text-sm text-muted-foreground">Searching for technicians...</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Failed to load technicians. Please try again later.
          </AlertDescription>
        </Alert>
      )}

      {!isLoading && searchZip !== null && technicians && technicians.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="py-8 text-center">
              <MapPin className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="mb-2 text-lg font-semibold">No Technicians Found</h3>
              <p className="text-sm text-muted-foreground">
                We couldn't find any pest control technicians in zip code {zipCode}.
                <br />
                Try searching a nearby zip code or contact your local directory.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {!isLoading && technicians && technicians.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            Found {technicians.length} {technicians.length === 1 ? 'Technician' : 'Technicians'} in {zipCode}
          </h3>
          {technicians.map((tech) => (
            <Card key={tech.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  {tech.businessName}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a
                      href={`tel:${tech.phoneNumber}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {tech.phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">{tech.address}</p>
                    <p className="text-sm font-semibold text-foreground">
                      {formatLocation(tech.city, tech.state, tech.zipCode)}
                    </p>
                  </div>
                </div>

                {tech.specialties && (
                  <div className="flex items-start gap-2">
                    <Briefcase className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Specialties</p>
                      <p className="text-sm text-muted-foreground">{tech.specialties}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
