import Articles from 'components/pages/Articles';
import Page2 from 'components/pages/Page2';

interface IRoute {
  path: string,
  exact: boolean,
  component: any
}

const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    component: Articles
  },
  {
    path: '/page2',
    exact: true,
    component: Page2
  }
];

export default routes;
