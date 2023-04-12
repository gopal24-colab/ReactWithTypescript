export type InputProps = {
  InputFor: string;
  title: string;
  type: string;
  changeHandel: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
