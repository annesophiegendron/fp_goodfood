import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: white;
`

export const Header = styled.div`
  width: 100%;
  height: 4rem;
  background: white;
  display: flex;
  justify-content: space-between;
`

export const ClearButton = styled.button`
  margin-left: 1rem;
  color: black;
  height: 3rem;
  background: white;
  border: 1px solid white;
  float: right;
  text-align: center;
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
    margin-left: 2rem;
    height: 2.5rem;
    margin-top: 0;
  }
`

export const DeleteButton = styled.button`
  margin-top: 1rem;
  width: 6rem;
  height: 2rem;
  color: #F2F2F2;
  background: #0D0D0D;
  border: 1px solid #0D0D0D;
  text-align: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  cursor: pointer;
    :hover {
     color: #000;
     background: #F23207;
     border: 2px solid #F23207;
     transition: all 0.3s ease-in-out;
    }
  @media (min-width: 900px) {
  width: 30%;
}
`

export const ButtonContainer = styled.div`
  align-self: center;
`;

export const Loader = styled.div`
  margin: 0 auto;
  padding: 50px;
  border-top: 6px double #F2798F; 
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1.5s linear infinite;
    @keyframes spin {
   0% {
    transform: rotate(0deg);
 }
  100% {
    transform: rotate(360deg);
 }
}
`

export const MainTitle = styled.h1`
  color: #000;
  font-size: 1rem;
  text-align: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: #F2F2F2;
  height: 8rem;
  padding-top: 7rem;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const SubmitButton = styled.button`
  width: 6rem;
  height: 2rem;
  margin-top: 1rem;
  color: #F2F2F2;
  background: #027373;
  padding-top: 4px;
  padding-bottom: 2px;
  border: 1px solid #027373;
  text-align: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
    :hover {
     transition: all 0.4s ease-in-out;
     opacity: 0.9;
  } 
    :active {
    background-color: #027373;
    transform: translateY(3px);
    opacity: 0.7;
    }
`
