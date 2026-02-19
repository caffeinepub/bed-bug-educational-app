import { useHashRoute } from './useHashRoute';

export function useNextRoute() {
  const { currentHash } = useHashRoute();

  const getNextRoute = (): string => {
    const hash = currentHash.replace('/', '').replace('#', '');
    
    const routeOrder = [
      'scanner',
      'identify',
      'habitats',
      'prevention',
      'treatment',
      'guides',
      'findLocalHelp',
    ];

    const currentIndex = routeOrder.indexOf(hash);
    
    if (currentIndex === -1 || currentIndex === routeOrder.length - 1) {
      return routeOrder[0];
    }

    return routeOrder[currentIndex + 1];
  };

  const navigateToNext = () => {
    const nextRoute = getNextRoute();
    window.location.hash = `#${nextRoute}`;
  };

  return {
    nextRoute: getNextRoute(),
    navigateToNext,
  };
}
