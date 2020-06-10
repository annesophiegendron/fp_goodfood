import styled from "styled-components"

// =========================================================
//                     WELCOME USER NAVBAR
// =========================================================
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
//                      FORM CONTAINER
// =========================================================
export const FormContainer = styled.div`
background: #fff;
  width: 100%;
  height: 600px;
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
  top: 35%;
`

export const Input = styled.input`
  font-family: "Roboto", sans-serif;
  color: #595959;
  letter-spacing: 1.5px;
  font-size: 15px;
  padding: 1.5rem;
  border: #A6A6A6 solid 1px;
  width: 13rem;
  margin-right: 2rem;
`
 
// =========================================================
//                     COLLECTION CONTAINER
// =========================================================
export const CollectionButton = styled.button`
  idth: 12rem;
  z-index: 100;
  color: #F2F2F2;
  background: #0D0D0D;
  border: 1px solid #0D0D0D;
  text-align: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;
    :hover {
      color: #000;
      background: #fff;
      border: 2px solid #000;
      transition: all 0.4s ease-in-out;
    } 
`

export const Image = styled.img`
  background-position: center;
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;
`

export const DetailsContainer = styled.div`
  text-align: left;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  overflow: hidden;
  border-bottom: #F2F2F2 solid 1px;
`

export const OneCard = styled.div`
  width: 100%;
  background: #fff;
  margin: 0 auto;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: top;
  padding: 25px;
    
  &:hover ${Image} {
    transition: transform 1s;
    transform: scale(1.01); 
    opacity:0.8;
  }
    @media (min-width: 600px) {
    width: 400px;
  }
`

export const DetailsButton = styled.button`
  display: flex;
  width: 4rem;
  color: #F2F2F2;
  background: #0D0D0D;
  border: 1px solid #0D0D0D;
  text-align: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    color: #000;
    background: #fff;
    border: 2px solid #000;
    transition: all 0.4s ease-in-out;
  }
`