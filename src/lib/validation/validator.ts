export type Validator<T> = (data: T) => ValidatorResult | Promise<ValidatorResult>;

export interface ValidatorResult {
  valid: boolean;
  errors?: string[];
}

export interface InvalidResult extends ValidatorResult {
  valid: false;
  errors: string[];
}
