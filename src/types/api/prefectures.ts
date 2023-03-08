export type Prefecture = {
  prefCode: number;
  prefName: string;
  checked?: boolean;
};

export type Prefectures = {
  message: string | null;
  result: Prefecture[];
};
