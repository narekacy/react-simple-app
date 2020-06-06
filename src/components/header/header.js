import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
      <header className={s.header}>
        <img src="https://i.pinimg.com/originals/19/7b/36/197b365922d1ea3aa1a932ff9bbda4a6.png" />
        <div className={s.loginBlock}>
            {props.isAuth
                ? props.login
                : <NavLink to={'login'}>Login</NavLink>
            }
        </div>
      </header>
  );
};

export default Header;
