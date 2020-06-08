import styled from "styled-components";

export const Image = styled.img`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  background-position: center;
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;
  opacity: 0.3;
`

export const TextContainer = styled.div`
  grid-row: 3 / span 1;
  grid-column: 1 / -1;
  text-align: center;
  color: #fff;
  z-index: 100;
  font-family: "Libre Franklin", sans-serif;
  overflow: hidden;
`

export const DeleteButtonFav = styled.button`
width: 6rem;
height: 2rem;
color: #F2F2F2;
background: #0D0D0D;
border: 1px solid #0D0D0D;
text-align: center;
font-family: "Roboto", sans-serif;
letter-spacing: 2px;
cursor: pointer;
  z-index: 100;
  grid-row: 4 / span 1;
  grid-column: 2 / span 1;
  :hover {
    color: #000;
     background: #F23207;
     border: 2px solid #F23207;
     transition: all 0.3s ease-in-out;
  }
`

export const FavouriteItem = styled.div`
  width: 70%;
  height: 25rem;
  background: #333;
  margin: 0 auto;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 10% 15% 60% 10% 5%;
  justify-content: center;
  align-content: top;
  border-radius: 10px;
  :hover {
    background: black;
  }
  @media (min-width: 600px) {
    width: 40%;
  }
  @media (min-width: 900px) {
    width: 25%;
  }
`