import { Home } from "./pages/home";
import { Agenda } from "./pages/agenda";
import { Speaker } from "./pages/speaker";
import { Sponsor } from "./pages/sponsor";
import Layout from "./pages/Layout";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/agenda",
        element: <Agenda />,
      },
      {
        path: "/speaker",
        element: <Speaker />,
      },
      {
        path: "/sponsor",
        element: <Sponsor />,
      },
    ],
  },
];
