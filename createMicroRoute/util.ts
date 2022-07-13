import { RouteRecordRaw } from "vue-router";
import MicroComponent from "./MicroComponent.vue";
export interface route {
  name: string;
  url: string;
  baseroute?: string;
}
interface microsView {
  [key: string]: Required<route>;
}

// microsView 用来给通用组件使用 ，routes 用来给 vue-router 使用（增加了 meta.microName)
export const registerMicroApps = (rawRoutes: route[]) => {
  let routes: Array<RouteRecordRaw> = [];
  let microsView: microsView = {};
  for (const { name, url, baseroute } of rawRoutes) {
    // 处理 vue-routes
    routes.push({
      path: `/${name}/:chapters*`,
      component: MicroComponent,
      meta: {
        microName: name,
      },
    });
    // 处理成一个 视图 list
    microsView[name] = {
      name,
      baseroute: baseroute || name,
      url,
    };
  }
  return {
    microsView,
    routes,
  };
};
