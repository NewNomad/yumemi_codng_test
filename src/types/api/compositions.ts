export type CompositionData = {
  year: number;
  value: number;
  rate?: number;
};

export type Composition = {
  data: CompositionData[];
  label: string;
};

export type Compositions = {
  message: string | null;
  result: {
    boundaryYear: number;
    data: Composition[];
  };
};
