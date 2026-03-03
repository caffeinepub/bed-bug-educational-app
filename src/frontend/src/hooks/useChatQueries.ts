import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ChatMessage } from "../backend";
import { useActor } from "./useActor";

// Get list of thread IDs for the current user (authenticated only)
export function useGetThreadList(enabled = true) {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ["threadList"],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.getThreadList();
      } catch {
        return [];
      }
    },
    enabled: enabled && !!actor && !isFetching,
  });
}

// Get messages for a specific thread
export function useGetMessagesForThread(threadId: string | null) {
  const { actor, isFetching } = useActor();

  return useQuery<ChatMessage[]>({
    queryKey: ["messages", threadId],
    queryFn: async () => {
      if (!actor || !threadId) return [];
      try {
        return await actor.getMessagesForThread(threadId);
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching && !!threadId,
  });
}

// Get list of active technicians available for chat (public, no auth required)
export function useGetActiveTechnicians() {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ["activeTechnicians"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getActiveTechniciansForChat();
    },
    enabled: !!actor && !isFetching,
  });
}

// Send a message mutation (works for both anonymous and authenticated users)
export function useSendMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      isTechnician,
      content,
      threadId,
    }: {
      isTechnician: boolean;
      content: string;
      threadId: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.sendMessage(isTechnician, content, threadId);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["threadList"] });
      queryClient.invalidateQueries({
        queryKey: ["messages", variables.threadId],
      });
    },
  });
}

// Get user profile to check if user is a technician (authenticated only)
export function useGetCallerUserProfile() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ["currentUserProfile"],
    queryFn: async () => {
      if (!actor) return null;
      try {
        return await actor.getCallerUserProfile();
      } catch {
        return null;
      }
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}
