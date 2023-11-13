import { Pages } from "../pages";

export const PUBLIC_ROUTES = [
  {
    id: 1,
    route: '/',
    page: <Pages.Main />
  },
  {
    id: 2,
    route: '/recordsmen/',
    page: <Pages.Recordsmen />
  },
  {
    id: 3,
    route: '/parliament/',
    page: <Pages.Parliament />
  }
]

export const NavList = [
  {
    id: 1, 
    title: 'Главная',
    path: '/'
  },
  {
    id: 2, 
    title: 'Рекордсмены',
    path: '/recordsmen/'
  },
  {
    id: 3, 
    title: 'Парламент',
    path: '/parliament/'
  }
]