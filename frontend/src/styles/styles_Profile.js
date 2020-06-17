import styled from "styled-components"

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 2rem;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
  }
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  @media (min-width: 900px) {
    height: 15rem;
    width: 300px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const Button = styled.button`
  width: 20rem;
  height; 20rem;
  text-align: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  margin: 0 auto;
  height: 20rem;
  background: white;
  margin-bottom: 4rem;
  border: none;
  border-radius: 50px;
  background: #ffffff;
  box-shadow:  20px 20px 60px #d9d9d9, 
             -20px -20px 60px #ffffff;
  &:hover ${Image} {
    opacity: 0.7;
  }
`

export const Text = styled.p`
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  color: #0D0D0D;
  font-size: 11px;
  background: #26A653
  font-weight: ligther;
  text-transform: uppercase;
`