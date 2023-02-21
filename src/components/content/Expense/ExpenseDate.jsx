import React from 'react';

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-Us', { month: 'long' });
  const day = date.toLocaleString('en-Us', { day: '2-digit' });
  const year = date.getFullYear();
  return (
    <div className='expense-div'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
      nfad
    </div>
  );
};

export default ExpenseDate;
