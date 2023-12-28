import React from 'react'
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import cardStyles from './card.css';
import { GalleryItem } from '~/data';
import { Link } from '@remix-run/react';
export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: cardStyles },
];

interface Props {
  galleryItem: GalleryItem
}

export function Card({galleryItem}:Props) {
  if (!galleryItem) return null;
  return (
    <Link to={`./slideshow/${galleryItem.slug}`} className="gallery-card">
      <figure className="gallery-card__figure">
        <img src={galleryItem.images.thumbnail} alt={galleryItem.name} className="gallery-card__img" />
        <figcaption className="gallery-card__caption">
          <h2 className="gallery-card__heading">{galleryItem.name}</h2>
          <p className="gallery-card__artist"> {galleryItem.artist.name}</p>
        </figcaption>
      </figure>
    </Link>
  );
}

