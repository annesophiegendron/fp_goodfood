import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  width: 80%;
  position: relative;
  top: 70px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: white;

  @media (min-width: 600px) {
    width: 100%;
    height: 100%;
  }
`

export const Title = styled.h1`
  color: #595857;
`

export const Form = styled.div`
  font-family: 'Roboto', sans-serif;
  border: solid 1px #595857;
  border-radius: 10px;
  margin: 50px auto;
  padding: 40px 30px 30px 30px;
  max-width: 500px;
`

export const Label = styled.label`
  color: grey;
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
`

export const Input = styled.input`
  line-height: 25px;
  font-family: 'Roboto', sans-serif;
  margin: 8px 0px;
  font-size: 18px;
  border: none;
  color: #595857;
  width: 95%;
  background: transparent;
  border-bottom: 1px solid black;
    &:focus, &:active {
      outline: none;
    border-color: #F2F2F2;
    border-bottom: 2px solid black;
  }
`

export const SubmitButton = styled.button`
transform: translate(-50 %, -50 %);
display: block;
width: 30%;
margin: 0 auto;
padding: 15px;
cursor: pointer;
outline: none;
overflow: hidden;
border: none;
text-align: center;
position: relative;
font-size: 12px;
font-family: 'Roboto', sans-serif;
font-weight: bold;
text-decoration: none;
border: 3px solid white;
background: #333;
color: white;
text-transform: uppercase;
transition: all .35s;

  :hover{
  background: transparent;
  color: black;
  border: solid black 3px;
}

@media (min-width: 600px) {
  font-size: 15px;
  width: 40%;

  :hover{
    width: 140px;
  }
}
`

export const Error = styled.div`
  grid-column: 2 / span 3;
  grid-row: 5 / span 1;
  text-align: center;
  align-self: center;
  color: red;
  font-family: "Libre Franklin", sans-serif;
`;