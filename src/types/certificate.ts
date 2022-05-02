export type Certificate = {
  id: number;
  title: string;
  description?: string;
  date: string;
  url: string;
  instituition: Instituition;
};

type Instituition = {
  name: string;
};
