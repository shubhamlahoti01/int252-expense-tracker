import React from 'react';
import styled from 'styled-components';
import ExpenseItem from './components/content/Expense/ExpenseItem';

import Navbar from './components/Nav/Navbar';
import MyWrapper from './components/MyWrapper';

const Content = styled.div`
  background-color: bisque;
  min-height: 90vh;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  p {
    margin: 10px;
    padding: 1rem;
  }
`;
const ExpenseCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  color: white;
  width: 95%;
  background-color: black;
  border-radius: 10%;
`;
const App = () => {
  const values = [
    {
      title: 'expense1',
      date: new Date(),
      amount: 2342,
    },
    {
      title: 'expense2',
      date: new Date(),
      amount: 42,
    },
    {
      title: 'expense3',
      date: new Date(),
      amount: 232,
    },
    {
      title: 'expense4',
      date: new Date(),
      amount: 92342,
    },
  ];
  return (
    <div className='App'>
      <Navbar />
      <Content className='content'>
        {/* ---------------- */}
        <ExpenseCard>
          <h1>Expense</h1>
          {values.map((item) => (
            <ExpenseItem
              title={item.title}
              date={item.date}
              amount={item.amount}
            />
          ))}
        </ExpenseCard>
        {/* ---------------- */}
      </Content>
      <MyWrapper>
        <h1>hello i am in the wrapper</h1>
      </MyWrapper>
    </div>
  );
};

export default App;
