import { Loader2, UserCircle } from "lucide-react";
import { useState } from "react";
import { useGetActiveTechnicians } from "../hooks/useChatQueries";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { Alert, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface TechnicianSelectorProps {
  onSelectTechnician: (threadId: string) => void;
}

export function TechnicianSelector({
  onSelectTechnician,
}: TechnicianSelectorProps) {
  const { identity } = useInternetIdentity();
  const { data: technicians = [], isLoading } = useGetActiveTechnicians();
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const handleSelectTechnician = (technicianName: string) => {
    if (!identity) return;

    // Create a thread ID combining user principal and technician name
    const userPrincipal = identity.getPrincipal().toString();
    const threadId = `${userPrincipal}-${technicianName.replace(/\s+/g, "-")}`;

    setSelectedTech(technicianName);
    onSelectTechnician(threadId);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full p-6">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (technicians.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6">
        <Alert>
          <AlertDescription>
            No technicians are currently available for chat. Please try again
            later or use the Location Finder to contact technicians directly.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Select a Pest Technician</h3>
        <p className="text-sm text-muted-foreground">
          Choose a technician to start a conversation
        </p>
      </div>

      <div className="space-y-3">
        {technicians.map((technicianName) => (
          <Card
            key={technicianName}
            className="cursor-pointer hover:border-primary transition-colors"
            onClick={() => handleSelectTechnician(technicianName)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <UserCircle className="h-10 w-10 text-primary" />
                <div>
                  <CardTitle className="text-base">{technicianName}</CardTitle>
                  <CardDescription className="text-sm">
                    Available for chat
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                disabled={selectedTech === technicianName}
              >
                {selectedTech === technicianName
                  ? "Starting chat..."
                  : "Start Chat"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
