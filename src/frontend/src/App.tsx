import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AdmissionsPage from './pages/AdmissionsPage';
import AcademicsPage from './pages/AcademicsPage';
import CampusLifePage from './pages/CampusLifePage';
import NewsEventsPage from './pages/NewsEventsPage';
import ContactPage from './pages/ContactPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const admissionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admissions',
  component: AdmissionsPage,
});

const academicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/academics',
  component: AcademicsPage,
});

const campusLifeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/campus-life',
  component: CampusLifePage,
});

const newsEventsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/news-events',
  component: NewsEventsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  admissionsRoute,
  academicsRoute,
  campusLifeRoute,
  newsEventsRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
