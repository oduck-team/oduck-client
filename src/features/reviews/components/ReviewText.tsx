import { Text } from "./ReviewText.style";

interface ReviewTextProps {
  text: string;
}

export default function ReviewText({ text }: ReviewTextProps) {
  return <Text>{text}</Text>;
}
