export type CompositionData = {
  year: number;
  value: number;
};

export type Composition = {
  data: CompositionData[];
  label: string;
};

export type Compositions = {
  message: string | null;
  result: Composition[];
};
