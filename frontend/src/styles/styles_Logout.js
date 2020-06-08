import styled from "styled-components";

export const Button = styled.button`
margin-left: 1rem;
color: black;
height: 3rem;
background: white;
border: 1px solid white;
float: right;
text-align: center;
font-family: "Libre Franklin", sans-serif;
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