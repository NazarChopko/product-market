type ErrorType = {
  message: string;
};
const isErrorType = (e: unknown) => typeof e === 'object' && e !== null && 'message' in e;

const errorTypeGuard = (e: unknown): e is ErrorType => {
  if (isErrorType(e)) {
    return true;
  }
  return false;
};

export { errorTypeGuard };
