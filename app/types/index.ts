// eslint-disable @typescript-eslint/no-explicit-any
export interface StarProps {
  index: number;
  rating: number;
}

export interface ButtonProps {
  onClick: () => void;
}

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  phone: string;
  terms: boolean;
}
