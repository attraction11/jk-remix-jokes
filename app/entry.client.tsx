/* Remix uses app/entry.client.tsx as the entry point for the browser bundle. 
  This module gives you full control over the "hydrate" step after JavaScript loads into the document. */
import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";

hydrate(<RemixBrowser />, document);
