export type Stat = {
  value: number;
  suffix: string;
  label: string;
  description: string;
};

export const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Years experience", description: "Over a decade of trusted home improvement expertise" },
  { value: 250, suffix: "+", label: "Projects completed", description: "Over 250 successful projects delivered with quality and care" },
  { value: 30, suffix: "+", label: "Skilled Tradespeople", description: "Our team of 30 experts ensures top-quality results" },
  { value: 100, suffix: "%", label: "Client satisfaction", description: "All of our clients are satisfied with our work" },
];
