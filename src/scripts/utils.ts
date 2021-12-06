export const isNullableType = (nullable: boolean) => (nullable ? '?' : '');

export const toPascalCase = (string: string) =>
  string
    .replace(/[-_\s]+/, ' ')
    .split(' ')
    .map(
      //@ts-ignore
      ([first_char, ...rest_char]) => `${first_char.toUpperCase()}${rest_char}`
    )
    .join('');
