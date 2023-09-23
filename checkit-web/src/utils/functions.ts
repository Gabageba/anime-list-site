export const getErrorMessage = (e: unknown): string => {
  if (typeof e === 'string') {
    return e.toUpperCase();
  }
  if (e instanceof Error) {
    return e.message; // works, `e` narrowed to Error
  }
  return '';
};
