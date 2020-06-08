import styled from "styled-components";

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  @media (min-width: 900px) {
    height: 30rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const Button = styled.button`
  width: 80%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  margin: 0 auto;
  height: 20rem;
  margin-bottom: 4rem;
  border: none;
  &:hover ${Image} {
    opacity: 0.7;
  }
  @media (min-width: 900px) {
    height: 30rem;
  }
`

export const Text = styled.p`
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  color: #000;
  font-size: 12px;
  background: #eee
  padding: 15px;
  font-weight: ligther;
  z-index: 100;
`;