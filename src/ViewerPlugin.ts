import type { App } from "vue";

import { Alert, Badge, Breadcrumbs, Button } from "./components";

export default {
  install: (app: App /* options: any */) => {
    app.component("Alert", Alert);
    app.component("Badge", Badge);
    app.component("Breadcrumbs", Breadcrumbs);
    app.component("Button", Button);
  },
};

export { Alert, Badge, Breadcrumbs, Button };
