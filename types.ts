
export type OptionKey = 'A' | 'B' | 'C' | 'D' | 'E';

export interface Question {
  year: number;
  number: number;
  system: string;
  statement: string;
  options: Record<OptionKey, string>;
  correctAnswer: OptionKey;
  image?: string;
}
