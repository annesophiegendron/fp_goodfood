import styled from "styled-components";

export const Image = styled.img`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  background-position: center;
  object-fit: cover;
  border-radius: 10px;
  width: 200px;
  height: 200px;
  justify-self: center;
  align-self: center;
`

export const TextContainer = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / -1;
  text-align: center;
  color: #262626;
  z-index: 100;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  overflow: hidden;
`

export const DeleteButtonFav = styled.button`
width: 6rem;
height: 2rem;
color: #F2F2F2;
background: #027373;
border: 1px solid #027373;
text-align: center;
font-family: "Roboto", sans-serif;
letter-spacing: 2px;
cursor: pointer;
  z-index: 100;
  grid-row: 4 / span 1;
  grid-column: 2 / span 1;
  :hover {
    color: #000;
     background: #F24822;
     border: 2px solid #F24822;
     transition: all 0.3s ease-in-out;
  }
`

export const FavouriteItem = styled.div`
  width: 230px;
  height: 20rem;
  margin: 0 auto;
  border: 1px solid #D9D9D9;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 10% 15% 60% 10% 5%;
  justify-content: center;
  align-content: top;
  border-radius: 10px;
  :hover {
    opacity: 0.9;
  }
  @media (min-width: 600px) {
    width: 40%;
  }
  @media (min-width: 900px) {
    width: 25%;
  }
`