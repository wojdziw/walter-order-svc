import { InvalidResult, Validator, ValidatorResult } from './validator';

export function combineValidators<T>(validators: Array<Validator<T>>) {
  return (data: T) => {
    const combinedResult: ValidatorResult = { valid: true };
    const results = validators.map((v) => v(data));
    for (const result of results) {
      if (result instanceof Promise) {
        throw new Error('An async validator was found. Use combineAsyncValidators() instead');
      }
      combineResults(combinedResult, result);
    }
    return combinedResult;
  };
}

export function combineAsyncValidators<T>(validators: Array<Validator<T>>) {
  return async (data: T) => {
    const combinedResult: ValidatorResult = { valid: true };
    const results = await Promise.all(validators.map((v) => v(data)));
    for (const result of results) {
      combineResults(combinedResult, result);
    }
  };
}

function combineResults(combined: ValidatorResult, next: ValidatorResult) {
  combined.valid = combined.valid && next.valid;
  if (isInvalid(next)) {
    addValidationErrors(combined, next.errors);
  }
}

function addValidationErrors(res: ValidatorResult, errors: string[]) {
  if (!res.errors) {
    res.errors = [];
  }
  res.errors.push(...errors);
}

function isInvalid(v: ValidatorResult): v is InvalidResult {
  return !v.valid;
}
