export interface DeepTrimOptions {
  lastNameUpperCase?: boolean;
}

export function deepTrim(firstName: string, lastName: string, options?: DeepTrimOptions) {
  if (options?.lastNameUpperCase) {
    return firstName + ' ' + lastName.toLocaleUpperCase();
  }
  return firstName + ' ' + lastName;
}
