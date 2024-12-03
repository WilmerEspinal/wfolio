import css from "../../assets/icons/css.svg";
import git from "../../assets/icons/git.svg";
import githubLight from "../../assets/icons/github-light.svg";
import html5 from "../../assets/icons/html5.svg";
import javascript from "../../assets/icons/javascript.svg";
import laravel from "../../assets/icons/laravel.svg";

import mysql from "../../assets/icons/mysql.svg";
import php from "../../assets/icons/php.svg";
import reactIcon from "../../assets/icons/react.svg";
import tailwindcss from "../../assets/icons/tailwindcss.svg";
import typescript from "../../assets/icons/typescript.svg";

const Lenguajes = () => {
  return (
    <section className="pb-5 pt-3 bg-gray-100 flex flex-col gap-5 px-6">
      <h2 className="text-2xl font-bold text-center">
        Lenguajes y Herramientas
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Front-End</h3>
        <div className="flex gap-6 justify-center flex-wrap">
          <div className="text-center">
            <img src={html5} alt="HTML5" className="w-16 h-16 mx-auto mb-2" />
            <span>HTML5</span>
          </div>
          <div className="text-center">
            <img src={css} alt="CSS" className="w-16 h-16 mx-auto mb-2" />
            <span>CSS</span>
          </div>
          <div className="text-center">
            <img
              src={javascript}
              alt="JavaScript"
              className="w-16 h-16 mx-auto mb-2"
            />
            <span>JavaScript</span>
          </div>
          <div className="text-center">
            <img
              src={typescript}
              alt="typescript"
              className="w-16 h-16 mx-auto mb-2"
            />
            <span>TypeScript</span>
          </div>
          <div className="text-center">
            <img
              src={reactIcon}
              alt="React"
              className="w-16 h-16 mx-auto mb-2"
            />
            <span>React</span>
          </div>
          <div className="text-center">
            <img
              src={tailwindcss}
              alt="Tailwind CSS"
              className="w-16 h-16 mx-auto mb-2"
            />
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Backend Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-5">
        <h3 className="text-xl font-semibold mb-4">Back-End</h3>
        <div className="flex gap-6 justify-center flex-wrap">
          <div className="text-center">
            <img
              src={laravel}
              alt="Laravel"
              className="w-16 h-16 mx-auto mb-2"
            />
            <span>Laravel</span>
          </div>
          <div className="text-center">
            <img src={php} alt="PHP" className="w-16 h-16 mx-auto mb-2" />
            <span>PHP</span>
          </div>
        </div>
      </div>

      {/* Database Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-5">
        <h3 className="text-xl font-semibold mb-4">Base de Datos</h3>
        <div className="flex gap-6 justify-center flex-wrap">
          <div className="text-center">
            <img src={mysql} alt="MySQL" className="w-16 h-16 mx-auto mb-2" />
            <span>MySQL</span>
          </div>
        </div>
      </div>

      {/* Other Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-5">
        <h3 className="text-xl font-semibold mb-4">Otras Herramientas</h3>
        <div className="flex gap-6 justify-center flex-wrap">
          <div className="text-center">
            <img src={git} alt="Git" className="w-16 h-16 mx-auto mb-2" />
            <span>Git</span>
          </div>
          <div className="text-center">
            <img
              src={githubLight}
              alt="GitHub"
              className="w-16 h-16 mx-auto mb-2"
            />
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lenguajes;
