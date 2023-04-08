// Types

export type pollOptionTypes = {
  id: number;
  title: string;
  value: string;
};

export interface pollTypes {
  id: number;
  title: string;
  options: Array<pollOptionTypes>;
}
