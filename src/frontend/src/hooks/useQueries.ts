import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { QuizSectionType, ContentType, type QuizQuestion, type QuizResult, type PrintableGuide } from '../backend';

// Quiz Queries
export function useQuizQuestionsBySection(sectionType: QuizSectionType) {
  const { actor, isFetching } = useActor();

  return useQuery<QuizQuestion[]>({
    queryKey: ['quizQuestions', sectionType],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getQuizQuestionsBySection(sectionType);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllQuizQuestions() {
  const { actor, isFetching } = useActor();

  return useQuery<QuizQuestion[]>({
    queryKey: ['quizQuestions', 'all'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllQuizQuestions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCalculateQuizResult() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation<QuizResult, Error, { userAnswers: string[]; sectionType: QuizSectionType }>({
    mutationFn: async ({ userAnswers, sectionType }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.calculateQuizResult(userAnswers, sectionType);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quizResults'] });
    },
  });
}

// Printable Guides Queries
export function useGuidesBySection(sectionType: QuizSectionType) {
  const { actor, isFetching } = useActor();

  return useQuery<PrintableGuide[]>({
    queryKey: ['guides', sectionType],
    queryFn: async () => {
      if (!actor) return [];
      // Guides are organized by ContentType, not QuizSectionType
      // For now, all existing guides are for bed bugs
      return actor.getGuidesByContentType(ContentType.bedBugs);
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
