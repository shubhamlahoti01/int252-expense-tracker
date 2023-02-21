import React from 'react';
import styled from 'styled-components';
const Expense = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: white;
  font-size: 1rem;
  color: black;
  border-radius: 14px;
  width: 90%;
  text-align: center;
  margin: 0.5rem;
  height: 4rem;
`;
const ExpenseItem = ({ date, title, amount }) => {
  return (
    <>
      <Expense>
        <div>{date.toISOString()}</div>
        <div className='expense_item_price'>
          <h2>{title}</h2>
          <div className='expense_item_price'>{amount}</div>
        </div>
      </Expense>
    </>
  );
};

export default ExpenseItem;
