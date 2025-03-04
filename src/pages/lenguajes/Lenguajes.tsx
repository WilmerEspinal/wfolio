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
  const skills = [
    {
      category: "Front-End",
      items: [
        { src: html5, alt: "HTML5", name: "HTML5" },
        { src: css, alt: "CSS", name: "CSS" },
        { src: javascript, alt: "JavaScript", name: "JavaScript" },
        { src: typescript, alt: "TypeScript", name: "TypeScript" },
        { src: reactIcon, alt: "React", name: "React" },
        { src: tailwindcss, alt: "Tailwind CSS", name: "Tailwind CSS" },
      ],
    },
    {
      category: "Back-End",
      items: [
        { src: laravel, alt: "Laravel", name: "Laravel" },
        { src: php, alt: "PHP", name: "PHP" },
      ],
    },
    {
      category: "Base de Datos",
      items: [{ src: mysql, alt: "MySQL", name: "MySQL" }],
    },
    {
      category: "Otras Herramientas",
      items: [
        { src: git, alt: "Git", name: "Git" },
        { src: githubLight, alt: "GitHub", name: "GitHub" },
      ],
    },
  ];

  return (
    <section className="pb-5 pt-3 bg-gray-100 flex flex-col gap-5 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Lenguajes y Herramientas
      </h2>
      {skills.map((skill) => (
        <div key={skill.category} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-center">
            {skill.category}
          </h3>
          <div className="flex gap-6 justify-center flex-wrap">
            {skill.items.map((item) => (
              <div key={item.name} className="text-center">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-16 h-16 mx-auto mb-2 transition-transform transform hover:scale-110"
                />
                <span className="block text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Lenguajes;
