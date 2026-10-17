import { createRoot } from "react-dom/client";
import { ScribbleStrip } from "../../components/ScribbleStrip";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

export const pageCache = createCache({
  key: "main",
  nonce: "csp-nonce-placeholder",
});

const root = createRoot(document.body);
root.render(
  <CacheProvider value={pageCache}>
    <ScribbleStrip />
    <h2>Hello from React!</h2>
  </CacheProvider>,
);
