import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import { Header, IconButton, ReviewsRecentContainer, Title } from "./style";

export default function ReviewsRecent() {
  const navigate = useNavigate();

  return (
    <ReviewsRecentContainer>
      <Header>
        <IconButton type="button" onClick={() => navigate(-1)}>
          <CaretLeft size={24} />
        </IconButton>
        <Title> 최근 한줄리뷰</Title>
      </Header>
    </ReviewsRecentContainer>
  );
}
