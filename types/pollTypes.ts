// Types

export type PollOptionTypes = {
  id: number;
  title: string;
  value: string;
};

export interface PollTypes {
  id: number;
  title: string;
  options: Array<PollOptionTypes>;
}
