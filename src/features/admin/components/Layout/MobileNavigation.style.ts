import styled from "@emotion/styled";

export const Container = styled.div`
  position: sticky;
  top: 0;
  height: 3.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #ffffff;
  border-bottom: 1px solid #cccccc;

  @media (min-width: 640px) {
    display: none;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin-left: 0.5rem;
    font-size: 1.125rem;
    font-weight: bold;
  }
`;
