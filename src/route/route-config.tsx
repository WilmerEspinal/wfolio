import { createBrowserRouter } from "react-router-dom";
import Home from "../layout";
import SobreMi from "../pages/sobre/Sobre";
import Proyectos from "../pages/proyectos/Projeyectos";
import Lenguajes from "../pages/lenguajes/Lenguajes";
import Inicio from "../pages/inicio/Inicio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "inicio",
        element: <Inicio />,
      },
      {
        path: "sobre-mi",
        element: <SobreMi />,
      },
      {
        path: "proyectos",
        element: <Proyectos />,
      },
      {
        path: "lenguajes",
        element: <Lenguajes />,
      },
    ],
  },
]);

export default router;
