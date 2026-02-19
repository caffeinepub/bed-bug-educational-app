import { useHashRoute } from './useHashRoute';

export type NavigationDestination = {
  label: string;
  hash: string;
} | null;

/**
 * Custom hook that determines the next logical navigation destination
 * based on the current route and context.
 */
export function useNextRoute(): NavigationDestination {
  const { currentHash } = useHashRoute();

  // Don't show navigation on QR code page
  if (currentHash === '/qr') {
    return null;
  }

  // Parse the current hash to determine context
  // Normalize hash by removing leading slash and hash symbol
  const normalizedHash = currentHash.replace(/^\//, '').replace(/^#/, '');
  
  // Default route (empty or /) shows scanner tab by default, next is identify
  if (!normalizedHash || normalizedHash === '') {
    return {
      label: 'Go to Identify',
      hash: '#identify',
    };
  }

  // Define the navigation flow for educational tabs
  const tabFlow: Record<string, NavigationDestination> = {
    'scanner': {
      label: 'Go to Identify',
      hash: '#identify',
    },
    'identify': {
      label: 'Go to Habitats',
      hash: '#habitats',
    },
    'habitats': {
      label: 'Go to Prevention',
      hash: '#prevention',
    },
    'prevention': {
      label: 'Go to Treatment',
      hash: '#treatment',
    },
    'treatment': {
      label: 'Go to Guides',
      hash: '#guides',
    },
    'guides': {
      label: 'Find Local Help',
      hash: '#findLocalHelp',
    },
    'findLocalHelp': {
      label: 'Back to Scanner',
      hash: '#scanner',
    },
  };

  // Return the next destination based on normalized hash
  return tabFlow[normalizedHash] || {
    label: 'Go to Scanner',
    hash: '#scanner',
  };
}
