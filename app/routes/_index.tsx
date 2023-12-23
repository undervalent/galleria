import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Galleria" },
    { name: "description", content: "Welcome to the Galleria" },
  ];
};

export default function Index() {
  return (
    <section>
    MAIN
    </section>
  );
}
