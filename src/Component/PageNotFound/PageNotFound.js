import React from 'react';
import { Link } from 'react-router-dom';
import style from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={style.error_container}>
        <h1>404</h1>
        <h2>PageNotFound</h2>
        <Link to='/'>Home Page</Link>
    </div>
  )
}

export default PageNotFound