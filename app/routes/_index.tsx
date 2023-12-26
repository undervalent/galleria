import type { MetaFunction } from "@remix-run/node";
import { data } from "~/data";
import { Card } from "~/components/card";

export const meta: MetaFunction = () => {
  return [
    { title: "Galleria" },
    { name: "description", content: "Welcome to the Galleria" },
  ];
};



export default function Index() {
  return (
    <main className="masonry">
    {data.map(galleryItem => <Card key={galleryItem.slug} galleryItem={galleryItem} /> )}
    </main>
  );
}
