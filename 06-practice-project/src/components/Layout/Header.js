import HeaderCardButton from './HeaderCardButton';

import mealsImage from '../../assests/meals.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="a table full of delicious food!" />
      </div>
    </>
  )
}

export default Header;