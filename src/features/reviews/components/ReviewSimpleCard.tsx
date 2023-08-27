import { ComponentProps, useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "@/components/Avatar";
import Rating from "@/components/Rating";
import { StrictPropsWithChildren } from "@/types";

import {
  Container,
  ContentContainer,
  HeaderContainer,
  UserContainer,
  SpoilerButtonContainer,
  ActionsContainer,
} from "./ReviewSimpleCard.style";

export default function ReviewSimpleCard({
  children,
}: StrictPropsWithChildren) {
  return <Container>{children}</Container>;
}

ReviewSimpleCard.Header = Header;
ReviewSimpleCard.Content = Content;
ReviewSimpleCard.Actions = Actions;

// =================================== Header ===================================
interface HeaderProps {
  readonly rating: number;
  readonly userId: string;
  readonly userName: string;
  readonly userImage?: string;
}
function Header({ rating, userId, userName, userImage }: HeaderProps) {
  return (
    <HeaderContainer>
      <Rating value={rating} size="sm" readonly />
      <User id={userId} name={userName} image={userImage} />
    </HeaderContainer>
  );
}

interface UserProps {
  readonly id: string;
  readonly name: string;
  readonly image?: string;
  readonly onClick?: () => void;
}
function User({ id, name, image }: UserProps) {
  return (
    <UserContainer>
      <Link to={`/users/${id}`}>
        <span>{name}</span>
        <Avatar userName={name} src={image} size="sm" />
      </Link>
    </UserContainer>
  );
}

// =================================== Content ===================================
function Content({
  isSpoiler = false,
  children,
}: StrictPropsWithChildren<{ isSpoiler: boolean }>) {
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

// =================================== Actions ===================================
function Actions({
  children,
  ...props
}: StrictPropsWithChildren<ComponentProps<"div">>) {
  return <ActionsContainer {...props}>{children}</ActionsContainer>;
}
