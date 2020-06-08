import styled from "styled-components";

export const ButtonProfile = styled.button`
margin-right: 1rem;
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

export const HeaderReview = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  @media (min-width: 900px) {
    font-size: 2.5rem;
  }
`;

export const InputReview = styled.textarea`
  width: 100%;
  padding: 1rem;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  color: #262626;
`

export const ButtonReview = styled.button`
  margin-top: 1rem;
  width: 12rem;
  height: 3rem;
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
    border: 2px solid #000;
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 900px) {
    width: 30%;
  }
`

export const Form = styled.form`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (min-width: 900px) {
    width: 60%;
  }
`