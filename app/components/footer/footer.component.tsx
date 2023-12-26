import React from 'react'
import { Link , useLoaderData } from '@remix-run/react';
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction , DataFunctionArgs } from "@remix-run/node";
import footerStyles from './footer.css';

import { json } from '@remix-run/node';
import { groupedData } from '~/data';
import { invariantResponse } from '~/lib/utils';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: footerStyles },
];

export async function loader({ params}: DataFunctionArgs) {
  const { slug } = params;
  if (!slug) return null;
  const grouped = groupedData();
  const active = grouped[slug];

  invariantResponse(active, `There is no galler with ${slug} id`);

  return json({ active });
}

export function Footer() {
  const data = useLoaderData<typeof loader>();
  if (!data?.active) return null;
  const {active} = data;
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
