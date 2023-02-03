import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';


//Fetches user input
const AddUsers = props => {

    const [getUserName, setUserName] = useState('');
    const [getAge, setAge] = useState('');
    const [getError, setError] = useState();

    const  addUserHandler = (event) => {
        event.preventDefault();
        if(getUserName.trim().length === 0 || getAge.trim().length === 0){
           setError({
            title: 'Invalid Input',
            message: 'Please Enter a Valid Input!'
           });
            return;
        }
        if(+getAge < 1){ //+getAge ensures the input is a number
            setError({
                title: 'Invalid Age!',
                message: 'Please Enter a Valid Age (> 0) !!!'
            });
            return;
        }
            
        props.onAddUser(getUserName, getAge);
        //Resets Fields Value
        setUserName('');
        setAge('');
    };

    const userNameChangeHandler = (event) =>{
        setUserName(event.target.value);
    };

    const ageFieldHandler = (event) =>{
        setAge(event.target.value);
    };

    const errorHandler = () =>{
        setError(null);
    }

    return (
        <div>
            { getError && <ErrorModal title={getError.title} message={getError.message} onConfirm = {errorHandler}>
            </ErrorModal> }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username"> UserName </label>
                    <input id="username" type="text" value={getUserName} onChange={userNameChangeHandler} />
                    <label htmlFor="age"> Age (Years) </label>
                    <input id="age" type="number" value={getAge} onChange={ageFieldHandler}/>
                    <Button type="submit"> Add User </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUsers;