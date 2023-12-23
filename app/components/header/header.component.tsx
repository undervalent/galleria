import React from 'react';
import { LinksFunction } from '@remix-run/node';
import Icon from '../../assets/logo.svg';
import { Link, NavLink, useParams } from '@remix-run/react';
import headerStyles from './header.styles.css'

export const links: LinksFunction = () => [
  {rel: "stylesheet", href:headerStyles},
]


export function Header() {
  const { slug } = useParams();
  return (
    <header className="main-header">
      <Link to="/">
        <h1>
          <img src={Icon} alt='Galleria logo' />
        </h1>
      </Link>
      <NavLink to={slug? '/':'slideshow/starry-night'} className="slideshow-link">
        {slug ? "Stop slideshow" :"Start slideshow"}
      </NavLink>
    </header>
  )
}
