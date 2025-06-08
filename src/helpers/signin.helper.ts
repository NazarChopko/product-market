export const validateCredentials = (email: string, password: string): boolean => {
  if (email === '' || password === '') {
    return false;
  }
  return true;
};
