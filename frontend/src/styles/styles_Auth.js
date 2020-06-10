import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: auto;
  background: #ffffff;

    @media (min-width: 600px) {
     width: 100%;
     height: 100%;
  }
`

export const Title = styled.h1`
  color: #595857;
  font-size: 23px;
  padding-bottom: 4rem;
  letter-spacing: 1px;
`

export const Form = styled.div`
  font-family: 'Roboto', sans-serif;
  border: solid 1px #eee;
  border-radius: 10px;
  margin: 100px auto;
  padding: 40px 30px 30px 30px;
  max-width: 400px;
  height: 490px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow:  5px 5px 50px #d9d9d9, 
             -5px -5px 60px #ffffff;
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
margin-bottom: 3rem;
padding: 14px;
cursor: pointer;
outline: none;
overflow: hidden;
border: none;
text-align: center;
position: relative;
font-size: 12px;
font-family: 'Roboto', sans-serif;
font-weiht: 600;
letter-spacing: 1px;
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
  font-size: 14px;
  width: 40%;

  :hover{
    width: 140px;
  }
} 
`
export const RegisterText = styled.p`
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  font-size: 12px;
`

export const Error = styled.div`
  grid-column: 2 / span 3;
  grid-row: 5 / span 1;
  text-align: center;
  align-self: center;
  color: red;
  font-family: "Roboto", sans-serif;
`