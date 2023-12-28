import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@netlify/remix-runtime";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyles from './global.css'
import { links as HeaderLinks, Header } from "./components/header";
import { links as cardLinks } from "./components/card";
export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: globalStyles },
  ...HeaderLinks(),
  ...cardLinks(),
];


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
