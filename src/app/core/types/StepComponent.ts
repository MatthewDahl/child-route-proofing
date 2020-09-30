interface FormStepComponent {
  readonly index: number;
  readonly next: string;
  readonly prev: string;
  readonly last: boolean;
}

function isFormStepComponent(obj: any): obj is FormStepComponent {
  return (
    typeof obj?.index === 'number' &&
    typeof obj?.next === 'string' &&
    typeof obj?.prev === 'string' &&
    typeof obj?.last === 'boolean'
  );
}

export { FormStepComponent, isFormStepComponent };
