/**
 * Type-safe guard helpers to reduce TypeScript narrowing issues
 * and prevent undefined access across key flows.
 */

/**
 * Asserts that a condition is truthy, throwing an error if not.
 * Useful for runtime invariant checks.
 */
export function invariant(
  condition: unknown,
  message: string,
): asserts condition {
  if (!condition) {
    throw new Error(`Invariant violation: ${message}`);
  }
}

/**
 * Marks a code path as unreachable. Useful for exhaustive switch statements.
 */
export function never(value: never, message?: string): never {
  throw new Error(message || `Unexpected value: ${JSON.stringify(value)}`);
}

/**
 * Safely checks if a value is defined (not null or undefined).
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/**
 * Safely gets a value or returns a default.
 */
export function getOrDefault<T>(
  value: T | null | undefined,
  defaultValue: T,
): T {
  return isDefined(value) ? value : defaultValue;
}
