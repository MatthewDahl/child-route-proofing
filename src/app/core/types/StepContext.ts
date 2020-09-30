interface StepContext {
  index: number;
  next: string;
  prev: string;
  last: boolean;
}

function isStepContext(obj: any): obj is StepContext {
  return (
    typeof obj?.index === 'number' &&
    typeof obj?.next === 'string' &&
    typeof obj?.prev === 'string' &&
    typeof obj?.last === 'boolean'
  );
}

export { StepContext, isStepContext };
