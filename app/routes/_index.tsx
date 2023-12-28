import type { MetaFunction } from "@remix-run/node";
import { data } from "~/data";
import { Card } from "~/components/card";
import Masonry from 'react-masonry-css'

export const meta: MetaFunction = () => {
  return [
    { title: "Galleria" },
    { name: "description", content: "Welcome to the Galleria" },
  ];
};

const breakpointColumnsObj = {
  default: 4,
  1100: 2,
  500: 1
};

export default function Index() {
  return (
    <main className="masonry">
      <Masonry
  breakpointCols={breakpointColumnsObj}
  className="masonry__grid"
  columnClassName="masonry__grid-column"
>
    {data.map(galleryItem => <Card key={galleryItem.slug} galleryItem={galleryItem} /> )}
    </Masonry>
    </main>
  );
}
