import { Comment } from "./ReviewComent.style";

interface ReviewTextProps {
  text: string;
}

export default function ReviewComent({ text }: ReviewTextProps) {
  return <Comment>{text}</Comment>;
}
