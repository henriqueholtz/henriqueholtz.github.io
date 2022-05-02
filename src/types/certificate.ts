export type Certificate = {
  id: number;
  title: string;
  description?: string;
  date: string;
  url: string;
  instituition: Instituition;
  tags?: string[];
};

type Instituition = {
  name: string;
};
