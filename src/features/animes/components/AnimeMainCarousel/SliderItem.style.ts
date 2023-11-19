import styled from "@emotion/styled";
import { Star } from "@phosphor-icons/react";

export const SliderItemContainer = styled.section`
  position: relative;
  padding: 24px 16px;
`;

export const Image = styled.img`
  width: 100%;
  height: 497px;
  object-fit: cover;
  border-radius: 10px;
  background: rgb(140, 140, 140);
  background: linear-gradient(
    180deg,
    rgba(140, 140, 140, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const InfoContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 46px;
  padding: 0 32px 24px;
  color: ${({ theme }) => theme.colors.neutral["05"]};
`;

export const Title = styled.h5`
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 8px;
  ${({ theme }) => theme.typo["title-2-m"]}
`;

export const ReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Review = styled.span`
  ${({ theme }) => theme.typo["body-3-r"]}
  display: block;
  width: 70%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary[50]};
`;

export const StarIcon = styled(Star)`
  color: ${({ theme }) => theme.colors.secondary[50]};
  margin-right: 4px;
`;

export const Score = styled.span`
  ${({ theme }) => theme.typo["body-2-r"]}
`;
