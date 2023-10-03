import { SnackBarContainer } from "./style";

interface SnackBarProps {
  text: string;
}

export default function SnackBar({ text }: SnackBarProps) {
  return <SnackBarContainer>{text}</SnackBarContainer>;
}
