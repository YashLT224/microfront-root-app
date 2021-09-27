import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";
import PubSub from "pubsub-js";

const publish = (event, data) => PubSub.publish(event, data);
const subscribe = (event, callback) => PubSub.subscribe(event, callback);

registerApplication(
  "@medium/navbar",
  () => System.import("@medium/navbar"),
  isActive.nav,
  { domElement: document.getElementById("nav-container") }
);

registerApplication(
  "@medium/page1",
  () => System.import("@medium/page1"),
  isActive.page1,
  { domElement: document.getElementById("page-1-container") }
);

registerApplication(
  "@medium/page2",
  () => System.import("@medium/page2"),
  isActive.page2,
  { domElement: document.getElementById("page-2-container") }
);

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@medium/navbar",
//   app: () => System.import("@medium/navbar"),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@medium/dashboardr",
//   app: () => System.import("@medium/dashboard"),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@medium/navbar",
//   app: () => System.import("@medium/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
