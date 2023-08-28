import { ComponentProps, useState } from "react";

import Rating from "@/components/Rating";
import { StrictPropsWithChildren } from "@/types";

import {
  ActionsContainer,
  AnimationContainer,
  Container,
  ContentContainer,
  Image,
  InfoContainer,
  SpoilerButtonContainer,
} from "./ReviewCard.style";

interface AniProps {
  title: string;
  image: string;
  rating: number;
}

export default function ReviewCard({
  children,
  className,
}: StrictPropsWithChildren<{ className?: string }>) {
  return <Container className={className}>{children}</Container>;
}

ReviewCard.Animation = Animation;
ReviewCard.Content = Content;
ReviewCard.Actions = Actions;

function Animation({ title, image, rating }: AniProps) {
  return (
    <AnimationContainer>
      <Image image={image}></Image>
      <InfoContainer>
        <div>{title}</div>
        <Rating color="primary" value={rating} size="sm" readonly />
      </InfoContainer>
    </AnimationContainer>
  );
}

function Content({
  isSpoiler = false,
  children,
}: StrictPropsWithChildren<{ isSpoiler?: boolean }>) {
  const [showContent, setShowContent] = useState(!isSpoiler);
  return (
    <ContentContainer>
      {isSpoiler && !showContent ? (
        <SpoilerButton onClick={() => setShowContent(true)} />
      ) : (
        <>{children}</>
      )}
    </ContentContainer>
  );
}

function SpoilerButton({ onClick }: { onClick: () => void }) {
  return (
    <SpoilerButtonContainer onClick={onClick}>
      스포일러를 포함한 리뷰에요! <span>리뷰 보기</span>
    </SpoilerButtonContainer>
  );
}

function Actions({
  children,
  ...props
}: StrictPropsWithChildren<ComponentProps<"div">>) {
  return <ActionsContainer {...props}>{children}</ActionsContainer>;
}
