import React from 'react'
import { Link } from '@remix-run/react';
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";

import type { GalleryItem } from '~/data';
import footerStyles from './footer.css'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: footerStyles },
];

export function Footer({active}:{active:GalleryItem}) {

  return (
    <footer className="main-footer">
      <div style={{ width: active.percentage }} className="main-footer__percent"></div>
      <section className="main-footer__info">
        <div>
        <h2 className="heading-s">{active.name}</h2>
          <p>{active.artist.name}</p>
        </div>
      <nav className="main-footer__navigation">
        <Link to={`../slideshow/${active.previousSlug}`} aria-disabled={!active.previousSlug} className={`main-footer__link ${!active.previousSlug ? 'disabled' : ''}`}>
          Previous
        </Link>

        <Link to={`../slideshow/${active.nextSlug}`} aria-disabled={!active.nextSlug} className={`main-footer__link ${!active.nextSlug ? 'disabled' : ''}`}>
          Next
        </Link></nav>
      </section>
    </footer>
  );
}
