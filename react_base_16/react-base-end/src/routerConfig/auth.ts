//这一部分可以交给后端处理
interface routerAuthConfigModel {
  path:string,
  authName?:any,
  auth:boolean,
  layout:boolean,
  name?:string,
  children?:[]
}
//导出routerAuthConfig，用于路由鉴权
export const routerAuthConfig:routerAuthConfigModel[] = [
  {
    path: '/',
    authName:'Home',
    auth:true,
    layout:true,
  },
  {
    path: '/login',
    authName:'Login',
    auth:false,
    layout:false,
  },
  {
    path: '/404',
    authName:'NoMatch',
    auth:false,
    layout:false,
  },
  {
    path:'/home',
    authName:'Home',
    name:'首页',
    auth:true,
    layout:true,
    children:[]
  },
  {
    path:'/table',
    authName:'Table',
    name:'表格',
    auth:true,
    layout:true,
    children:[]
  }
]