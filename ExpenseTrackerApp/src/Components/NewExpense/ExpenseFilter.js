import React, { useState } from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const filterYearHandler = (event) => {
        props.onChangeYear(event.target.value); 
    };

    return (
        <div className='expense-filter'>
            <div className='expense-filter__control'>
                <label>Filter by year</label>
                <select value={props.optionVal} onChange={filterYearHandler}> 
                    <option value='2022' >2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;