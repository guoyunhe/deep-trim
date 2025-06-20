import { isPlainObject } from 'is-plain-object';

export interface DeepTrimOptions {
  lastNameUpperCase?: boolean;
}

export function deepTrim<T>(input: T): T {
  if (typeof input === 'string') {
    return input.trim() as T;
  } else if (Array.isArray(input)) {
    return input.map((item) => deepTrim(item)) as T;
  } else if (isPlainObject(input)) {
    const obj: any = {};
    Object.entries(input as object).forEach(([key, val]) => {
      obj[key] = deepTrim(val);
    });
    return obj;
  }
  return input;
}
