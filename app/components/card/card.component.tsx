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
    <div className="card">
    <figure className="gallery-card">
      <img src={galleryItem.images.thumbnail} alt={galleryItem.name} className="gallery-card__img" />
      <figcaption className="gallery-card__caption">
        <Link to={`./slideshow/${galleryItem.slug}`} className="galler-card__link">
        <h2 className="gallery-card__heading">{galleryItem.name}</h2>
       <p className="gallery-card__artist"> {galleryItem.artist.name}</p>
        </Link>
      </figcaption>
      </figure>
      </div>
  )
}

