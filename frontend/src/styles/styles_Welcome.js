import styled from "styled-components";

// Welcome user messsage Navbar
export const HeaderName = styled.button`
margin-left: 1rem;
  color: black;
  background: white;
  border: 1px solid white;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  cursor: pointer;
  margin-top: 0.3rem;

  :after {
    content: "";
    display: block;
    margin: auto;
    height: 2px;
    width: 0;
    background: transparent;
      transition: width .5s ease, background-color .5s ease;
  }
  :hover {
    color: black;
  }
  :hover:after {
    width: 100%;
  background: black;
  }
  
  @media (min-width: 900px) {
    margin-top: 0;
    margin-right: 2rem;
  }
  `
// =========================================================
// //                   FORM CONTAINER
// =========================================================
export const FormContainer = styled.div`
background: #fff;
  width: 100%;
  height: 500px;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: row-reverse;
  background: #000;

  @media (min-width: 900px) {
    flex-direction: inherit;
    justify-content: center;
  }
`

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.;
  object-fit: cover;
`

export const FormTitle = styled.h2`
  color: #0D0D0D;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1.5px;
  font-size: 18px;
`

export const Form = styled.form`
  text-align: left;
  margin-right: 2rem;
  position: absolute;
  top: 30%;

`

export const Input = styled.input`
  font-family: "Roboto", sans-serif;
  color: #595959;
  letter-spacing: 1.5px;
  font-size: 15px;
  padding: 1.5rem;
  border: #A6A6A6 solid 1px;
  width: 15rem;
  margin-right: 2rem;
`

// =========================================================
// //                   COLLECTION CONTAINER
// =========================================================
export const HeartButton = styled.button`
  font-size: 1.5rem;
  z-index: 100;
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  cursor: pointer;
  text-decoration: none;
  background: transparent;
  border: none;
  :hover {
    opacity: 0.5;
  }
`

export const Image = styled.img`
  grid-row: 1 / span 2;
  grid-column: 1 / span 3;
  background-position: center;
  object-fit: contain;
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;
`

export const DetailsContainer = styled.div`
  grid-row: 3 / -1;
  grid-column: 1 / -1;
  text-align: left;
  z-index: 100;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  overflow: hidden;
  border-bottom: #F2F2F2 solid 1px;
`

export const OneCard = styled.div`
  width: 70%;
  height: 25rem;
  background: #FFFFF;
  margin: 0 auto;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 10% 45% 30% 10% 5%;
  justify-content: center;
  align-content: top;
  border: 1px solid white;
  border-radius: 10px;
  &:hover ${Image} {
    transition: transform 1s;
    transform: scale(1.01); 
    opacity:0.8;
  }
  @media (min-width: 568px) {
    width: 45%;
  }
  @media (min-width: 900px) {
    width: 22%;
  }
`

export const DetailsButton = styled.button`
  width: 14rem;
  grid-row: 4 / span 1;
  grid-column: 2 / span 1;
  z-index: 100;
  color: #F2F2F2;
  background: #0D0D0D;
  border: 1px solid #0D0D0D;
  text-align: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  cursor: pointer;
  :hover {
    color: #000;
    background: #fff;
    border: 4px solid #fff;
    transition: all 0.4s ease-in-out;
  }
`