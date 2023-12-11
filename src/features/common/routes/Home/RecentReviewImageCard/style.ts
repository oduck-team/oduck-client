import styled from "@emotion/styled";
import { Star } from "@phosphor-icons/react";

export const RecentReviewImageCardContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.primary[80]};
`;

export const AnimeConatiner = styled.div`
  position: relative;
  overflow: hidden;
  border-bottom-right-radius: 30px;
  filter: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.5));
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 502px;
  object-fit: cover;
  object-position: center 10%;
`;

export const AnimeInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 50%;
  padding: 26px 16px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  color: #fff;
`;

export const GenreList = styled.ul`
  display: flex;
  gap: 2px;
  ${({ theme }) => theme.typo["micro-m"]};
  margin-bottom: 2px;
`;

export const GenreItem = styled.li`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4px 16px;
  border-radius: 4px;
`;

export const AnimeTitle = styled.h4`
  ${({ theme }) => theme.typo["heading-2"]}
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const EvaluationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 13px;
`;

export const Content = styled.p`
  color: #fff;
  ${({ theme }) => theme.typo["body-3-r"]}
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 40px;
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary[50]};
  ${({ theme }) => theme.typo["body-2-r"]}
`;

export const StrarIcon = styled(Star)`
  margin-right: 4px;
  /* color: ${({ theme }) => theme.colors.secondary[50]}; */
`;

export const Score = styled.span``;
