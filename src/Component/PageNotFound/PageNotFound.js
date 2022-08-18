import React from 'react';
import { Link } from 'react-router-dom';
import style from './PageNotFound.module.scss';

const PageNotFound = () => {
  const {error_container,page_not_found,home_link} = style

  return (
    <div className={error_container}>
        <h1>404</h1>
        <h2 className={page_not_found}>PageNotFound</h2>
        <Link className={home_link} to='/'>Home Page</Link>
    </div>
  )
}

export default PageNotFound