import React from 'react';
import styled from 'styled-components';

const WrapperCont = styled.div`
  height: 30vh;
  font-size: 2rem;
  color: black;
  display: flex;
  justify-content: center;
  border: 20px solid black;
  align-items: center;
  margin: 1rem;
  border-radius: 20%;
`;
const MyWrapper = (props) => {
  return <WrapperCont>{props.children}</WrapperCont>;
};

export default MyWrapper;
