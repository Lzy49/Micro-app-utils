import { registerMicroApps, route } from "./util";
import microApp from "@micro-zoe/micro-app";
const routesRaw: route[] = [
  {
    name: "create",
    // baseroute:'',
    url: "http://localhost:8082/",
  },
  {
    name: "frontend",
    url: "http://localhost:8081/",
  },
];
export const { microsView, routes } = registerMicroApps(routesRaw);
// 预加载
microApp.preFetch(routesRaw);
