import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  margin: auto;
  border-radius: 50px;
  background: #ffffff;
  box-shadow:  5px 5px 50px #d9d9d9, 
             -5px -5px 60px #ffffff;
  
  @media (min-width: 900px) {
      width: 70%;
      padding: 2rem;
  }          
`

export const Container = styled.div`
  width: 90%;
  padding: 20px;
  display: flex;
  color: #0D0D0D;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`

export const DescriptionContainer = styled.div`
  margin-left: 3rem;
  margin-right: 3rem;
  justify-content: center;

  @media (min-width: 900px) {
    padding: 2rem 1rem;
    margin: 0;
    width: 100%;
  }
`

export const Image = styled.img`
  width: 60%;
  margin: 0 auto;
  padding: 2rem 0;
  @media (min-width: 600px) {
    width: 40%;
  }
  @media (min-width: 900px) {
    width: 50%;
    height: 320px;
    padding: 2rem;
  }
`

export const Title = styled.h3`
  margin: 0;
  padding: 0;
`

export const DescriptionText = styled.p`
  margin: 0;
  color: #3C3D40;
`

export const Label = styled.p`
  margin-bottom: 0.3rem;
`

export const Text = styled.p`
  margin: 0;
  line-height: 1.5rem;
`

export const Link = styled.a`
  cursor: pointer; 
  text-decoration: none;
`