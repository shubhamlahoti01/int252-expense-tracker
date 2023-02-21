import React from 'react';
import styled from 'styled-components';
import ExpenseItem from './components/content/Expense/ExpenseItem';

import Navbar from './components/Nav/Navbar';

const Content = styled.div`
  background-color: bisque;
  height: 90vh;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  p {
    margin: 10px;
    padding: 1rem;
  }
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
        <h1>Expense</h1>
        {/* ---------------- */}
        {values.map((item) => (
          <ExpenseItem
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        ))}
        {/* ---------------- */}
      </Content>
    </div>
  );
};

export default App;
