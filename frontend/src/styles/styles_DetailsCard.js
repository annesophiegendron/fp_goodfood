import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  background: #fff;
  color: #333;
  flex-direction: column;
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 1px;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const DescriptionContainer = styled.div`
  //
  margin-left: 2rem;
  margin-right: 2rem;
  @media (min-width: 900px) {
    padding: 2rem 1rem;
    margin: 0;
    width: 100%;
  }
`

export const Image = styled.img`
  width: 50%;
  margin: 0 auto;
  padding: 2rem 0;
  @media (min-width: 600px) {
    width: 40%;
  }
  @media (min-width: 900px) {
    height: 100%;
    width: 30%;
    padding: 2rem;
  }
`

export const Title = styled.h3`
  margin: 0;
  padding: 0;
`

export const DescriptionText = styled.p`
  margin: 0;
`

export const Label = styled.p`
  margin-bottom: 0.3rem;
`

export const Text = styled.p`
  margin: 0;
  line-height: 1.5rem;
`