import { Link, Outlet, useLocation } from "react-router-dom";
import Bols from "../assets/icons/bols.svg";
import LinkIcon from "../assets/icons/link.svg";
import Birthday from "../assets/icons/birthday.svg";
import Calendar from "../assets/icons/calendar.svg";
import Perfil from "../assets/perfil.jpg";

const Home = () => {
  const location = useLocation();

  const isActive = (path: any) =>
    location.pathname === path ? "text-[#D32F2F]" : "text-[#495057]";

  return (
    <>
      <main className="max-w-[724px] h-auto flex justify-center bg-[#f9fafba6] m-auto">
        <section className="w-full min-w-48;">
          <div className=" h-[240px] bg-[#d1e6fa]"></div>
          <section className="w-full  flex flex-col items-center">
            <section className="max-w-[608px] min-w-48 px-4 pb-4">
              <div className="h-[74px]  min-w-48 flex justify-between items-center">
                <img
                  className=" rounded-full border-4 w-[140px] h-[140px] border-black relative bottom-[33px]"
                  src={Perfil}
                  alt="Foto de wilmer"
                />
                <a
                  className="bg-[#D32F2F] w-[103px] rounded-full h-[40px] flex justify-center items-center text-white"
                  href="https://www.linkedin.com/in/wilmerev/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
              <h1 className="text-4xl font-family: ui-sans-serif font-bold text-[#030507]">
                Wilmer Espinal
              </h1>
              <p>¡Transforma ideas en realidad con código! ✨</p>
              <p className="leading-5 text-[#030507]">
                Full Stack Developer. Conectando el presente con el futuro.
                Innovando con cada línea de código para llevar proyectos al
                siguiente nivel. 🚀
              </p>
              <div className="flex py-2 justify-between flex-wrap">
                <div className="flex items-center">
                  <img className="w-7" src={Bols} alt="" />
                  <p className="text-[#495057]">Disponible</p>
                </div>

                <div className="flex items-center">
                  <img className="w-7" src={LinkIcon} alt="" />
                  <a href="#">Enlaces</a>
                </div>

                <div className="flex items-center">
                  <img className="w-7" src={Birthday} alt="" />
                  <p className="text-[#495057]">11 De agosto</p>
                </div>

                <div className="flex items-center">
                  <img className="w-7" src={Calendar} alt="" />
                  <p className="text-[#495057]">Se unió en enero de 2022</p>
                </div>
              </div>
            </section>
            <section className="container_nav px-4">
              <div className="div_nav flex justify-evenly h-[48px] items-center">
                <Link
                  className={`font-bold ${isActive(
                    "/"
                  )} w-full h-full flex justify-center items-center hover:bg-[#ff5353]`}
                  to="/"
                >
                  Inicio
                </Link>
                <Link
                  className={`font-bold ${isActive(
                    "/sobre-mi"
                  )} w-full h-full flex justify-center items-center hover:bg-[#ff5353]`}
                  to="sobre-mi"
                >
                  Sobre
                </Link>
                <Link
                  className={`font-bold ${isActive(
                    "/proyectos"
                  )} w-full h-full flex justify-center items-center hover:bg-[#ff5353]`}
                  to="proyectos"
                >
                  Proyectos
                </Link>
                <Link
                  className={`font-bold ${isActive(
                    "/lenguajes"
                  )} w-full h-full flex justify-center items-center hover:bg-[#ff5353]`}
                  to="lenguajes"
                >
                  Lenguajes
                </Link>
              </div>
            </section>
            <section className="max-w-[608px] px-4 mt-2">
              <Outlet />
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
