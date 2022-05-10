import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().lengt === 0 || enteredAge.trim().lengt === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }



  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' onChange={usernameChangeHandler} value={enteredUserName} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' onChange={ageChangeHandler} value={enteredAge} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;