import React from 'react'
import { json } from '@netlify/remix-runtime';
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { cssBundleHref } from "@remix-run/css-bundle";
import { Footer , links as footerLinks } from '~/components/footer';
import { groupedData } from '~/data';
import { invariantResponse } from '~/lib/utils';
import { useLoaderData } from '@remix-run/react';
import styles from './styles.css';
import { Modal, links as modalLinks } from '~/components/modal';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
  ...footerLinks(),
  ...modalLinks(),
];

export async function loader({ params}: LoaderFunctionArgs) {
  const { slug } = params;
  if (!slug) return null;
  const grouped = groupedData();
  const active = grouped[slug];

  invariantResponse(active, `There is no galler with ${slug} id`);

  return json({ active });
}

export default function Gallery() {
  const { active } = useLoaderData<typeof loader>();

  return (
    <>
    <main className="main-content">
      <section className="gallery">
        <section className="artist">
          <img className="artist__painting" src={active.images.hero.large} alt={active.name} />
          <div className="artist__card">
            <h2 className="heading-l artist__title">{active.name}</h2>
            <p className="artist__name">{active.artist.name}</p>
          </div>
            <img className="artist__portrait" src={active.artist.image} alt={active.artist.name} />
            <div className="artist__modal">
              <Modal image={active.images.gallery} />
              </div>
        </section>
        <article className="gallery__content">
          <div>
          <h3 className="heading-xl gallery__year">{active.year}</h3>
          <p className="gallery__description">
            {active.description}
            </p>
          <a href={active.source} className="gallery__source-link">Go to source</a>
            </div>
        </article>
      </section>
      </main>
      <Footer />
      </>
  )
}
