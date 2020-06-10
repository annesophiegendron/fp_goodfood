import styled from "styled-components"

//MAIN COMPONENT
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #eee;
`

export const Video = styled.video`
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const Middle = styled.div`
  position: absolute;
  width: 100%;
  top: 40%;
  text-align: center; 
  @media (min-width: 600px) {
    width: 50%;
  }
  `

export const WelcomeMessage = styled.h1`
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 40%;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  color: #262321;
  background: white;
  opacity: 0.75;
  padding: 4rem;
  letter-spacing: 1px;
  font-weight: lighter;
  position: relative;
  animation: slidein 3s;

    @keyframes slidein {
      from{ left: -700px};
      to { left: 45px };
    };

  @media (min-width: 600px) {
    width: 80%;
    font-size: 26px;
  }
`

export const Link = styled.button`
  border: none;
  margin-left: 1rem;
  width: 5.5rem;
  color: #F2F2F2;
  font-size: 15px;
  background: none;
  letter-spacing: 0.5px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;

  :hover{
    color: white;
    font-size: 18px;
  }

  @media (min-width: 600px) {
    width: 6rem;
    font-size: 17px;
    letter-spacing: 1px;
  }
`

export const Navbar = styled.div`
  position: absolute;
  top: 5%;
  margin-top: -5px;
  text-align: right;
  right: 1rem;
  width: 100%;
  @media (min-width: 600px) {
    right: 3rem;
  }
`

