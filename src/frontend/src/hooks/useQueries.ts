import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { ContentType, type PrintableGuide, type Technician } from '../backend';

// Printable Guides Queries
export function useGuidesByContentType(contentType: ContentType) {
  const { actor, isFetching } = useActor();

  return useQuery<PrintableGuide[]>({
    queryKey: ['guides', contentType],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGuidesByContentType(contentType);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllGuides() {
  const { actor, isFetching } = useActor();

  return useQuery<PrintableGuide[]>({
    queryKey: ['guides', 'all'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllGuides();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGuide(id: string) {
  const { actor, isFetching } = useActor();

  return useQuery<PrintableGuide | null>({
    queryKey: ['guide', id],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getGuide(id);
    },
    enabled: !!actor && !isFetching && !!id,
  });
}

// Technician Queries
export function useTechniciansByZip(zipCode: bigint | null) {
  const { actor, isFetching } = useActor();

  return useQuery<Technician[]>({
    queryKey: ['technicians', zipCode?.toString()],
    queryFn: async () => {
      if (!actor || zipCode === null) return [];
      return actor.getTechniciansByZip(zipCode);
    },
    enabled: !!actor && !isFetching && zipCode !== null,
  });
}
