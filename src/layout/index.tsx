import { Link, Outlet, useLocation } from "react-router-dom";
import Bols from "../assets/icons/bols.svg";
import LinkIcon from "../assets/icons/link.svg";
import Birthday from "../assets/icons/birthday.svg";
import Calendar from "../assets/icons/calendar.svg";

const Home = () => {
  const location = useLocation();

  const isActive = (path: any) =>
    location.pathname === path ? "text-[#D32F2F]" : "text-[#495057]";

  return (
    <>
      <main className="max-w-[724px] h-auto flex justify-center bg-[#f9fafba6] m-auto">
        <section className="w-full min-w-48">
          <div className="h-[240px] bg-gradient-to-b from-[#87CEEB] to-[#d1e6fa] relative overflow-hidden rounded-lg shadow-md">
            <div
              className="absolute w-32 h-20 bg-white/70 rounded-full top-1/4 left-[-10%] 
                animate-[cloud_15s_linear_infinite] 
                hover:animate-[cloud-hover_2s_ease-in-out_infinite]
                opacity-80"
            ></div>

            <div
              className="absolute w-40 h-24 bg-white/70 rounded-full top-1/3 left-[-5%] 
        animate-[cloud_20s_linear_infinite_0.5s] 
        hover:animate-[cloud-hover_2.5s_ease-in-out_infinite]
        opacity-80"
            ></div>

            <div
              className="absolute w-28 h-16 bg-white/70 rounded-full top-1/2 left-[-15%] 
        animate-[cloud_25s_linear_infinite_1s] 
        hover:animate-[cloud-hover_3s_ease-in-out_infinite]
        opacity-80"
            ></div>

            <div
              className="absolute w-24 h-16 top-1/2 left-[-10%] 
        animate-[fly_10s_linear_infinite] 
        hover:animate-[airplane-hover_1s_ease-in-out_infinite]"
            >
              <div
                className="absolute w-20 h-8 bg-blue-600 rounded-lg 
          transform -rotate-6 
          animate-[subtle-bounce_3s_ease-in-out_infinite] 
          top-4 left-2 shadow-md"
              >
                <div className="absolute w-2 h-2 bg-white rounded-full top-2 left-2"></div>
                <div className="absolute w-2 h-2 bg-white rounded-full top-2 left-6"></div>
                <div className="absolute w-2 h-2 bg-white rounded-full top-2 left-10"></div>
              </div>

              <div
                className="absolute w-6 h-8 bg-blue-700 
          skew-x-12 
          animate-[tail-wave_2s_ease-in-out_infinite] 
          top-2 right-0 rounded-tr-lg"
              ></div>

              <div
                className="absolute w-16 h-4 bg-blue-500 
          rounded-lg transform -rotate-12 
          animate-[wing-flutter_2.5s_ease-in-out_infinite] 
          top-8 left-4 shadow-md"
              ></div>
            </div>

            <style>{`
        @keyframes fly {
         0% { 
             transform: translateX(0) rotate(-5deg) scaleX(1);
  }
  100% { 
    transform: translateX(calc(100vw + 100px)) rotate(-5deg) scaleX(1);
  }
        }

        @keyframes cloud {
          0% { transform: translateX(0); }
          100% { transform: translateX(120vw); }
        }

        @keyframes cloud-hover {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-5px) rotate(-4deg); }
        }

        @keyframes tail-wave {
          0%, 100% { transform: skew(12deg); }
          50% { transform: skew(8deg); }
        }

        @keyframes wing-flutter {
          0%, 100% { transform: rotate(-12deg); }
          50% { transform: rotate(-8deg); }
        }

        @keyframes airplane-hover {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
          </div>
          <section className="w-full  flex flex-col items-center">
            <section className="max-w-[608px] min-w-48 px-4 pb-4">
              <div className="h-[74px]  min-w-48 flex justify-between items-center">
                <img
                  className=" rounded-full border-4 w-[140px] h-[140px] border-black relative bottom-[33px]"
                  src="https://res.cloudinary.com/dszdc6rh8/image/upload/v1742397626/perfil_hopywq.jpg"
                  alt="Foto de wilmer"
                />
                <div className="flex gap-2">
                  <a
                    className="bg-[#D32F2F] w-[103px] rounded-full h-[40px] flex justify-center items-center text-white"
                    href="https://www.linkedin.com/in/wilmerev/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="bg-[#D32F2F] w-[103px] rounded-full h-[40px] flex justify-center items-center text-white"
                    href="/cv_espinal_villanueva_wilmer.pdf"
                    download="cv_espinal_villanueva_wilmer.pdf"
                    target="_blank"
                  >
                    CV
                  </a>
                </div>
              </div>
              <h1 className="text-4xl font-family: ui-sans-serif font-bold text-[#030507]">
                Wilmer Espinal
              </h1>
              <p>¡Transforma ideas en realidad con código! ✨</p>
              <p className="leading-5 text-[#030507] mb-1">
                No importa cuán complejo sea el problema, siempre hay una
                solución esperando en tu mente. ¡Códifícala!🚀
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
