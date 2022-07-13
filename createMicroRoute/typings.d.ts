import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    microName?:string
  }
}