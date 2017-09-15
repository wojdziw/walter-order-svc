import { Validator, ValidatorResult } from './validator';

export function createValidator<T>(
  predicate: (value: T) => boolean,
  error: string,
): Validator<T> {
  return (value: T): ValidatorResult => {
    const isValid = predicate(value);
    if (isValid) {
      return { valid: true };
    }
    return { valid: false, errors: [error] };
  };
}

export function createAsyncValidator<T>(
  predicate: (value: T) => Promise<boolean>,
  error: string,
): Validator<T> {
  return async (value: T): Promise<ValidatorResult> => {
    const isValid = await predicate(value);
    if (isValid) {
      return { valid: true };
    }
    return { valid: false, errors: [error] };
  };
}
