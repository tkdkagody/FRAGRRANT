import styled from 'styled-components';

export const Wrap = styled.section`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;    
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1.5rem ;
  width: 35rem;
  height: 41rem;
  z-index: 20;
  border-radius: 10px;
`;

export const Close = styled.div`
    position: absolute;
    right: 2rem;
    width: 1.5rem;
    height: 1.5rem; 
    border-radius: 10%;
    border:1px solid gray;
    cursor: pointer;
    
    & > img {
        text-align: center;
        width: 100%;
        height: 100%;
      
    }
`;

export const Header = styled.header`
  text-align: center;
  font-size: 2.5rem;
  line-height: 46px;
  letter-spacing: -0.75px;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  color:  rgb(90, 90, 90);
 
`;

export const Form = styled.form`
    margin: 0 auto;
    width: 23rem;
    max-width: 23rem;    
`;


export const Label = styled.label`
  margin-bottom: 16px;
  

  & > span {
    color: rgb(90, 90, 90);
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 0.8rem;
    line-height: 1.4;
    font-weight: 700;
  }

  
`;

export const Input = styled.input`
  border-radius: 0.2rem;
  border: 1px solid  rgb(90, 90, 90);
  box-sizing: border-box;
  margin: 0 0 1.5rem;
  width: 100%;
  padding: 0.5rem;
  height: 3rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  font-size: 1rem;
  line-height: 1.33333333;
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 0.2rem rgba(57, 66, 70, 0.3);
  }
`;

export const Button = styled.button`
  margin-bottom: 3rem;
  width: 100%;
  max-width: 100%;
  color: black;
  background-color: white;
  border: 1px solid gray;
  font-size: 0.9rem;
  height: 3rem;
  padding: 0.2rem 0.2rem;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.2rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color:  rgb(90, 90, 90);
    color: white;
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 0.2rem rgba(57, 66, 70, 0.3);
  }
`;