import CrayonIMG from "../../assets/crayons-home.png";
import Idioma from "../../assets/idioma-ashaninka.png";
import TodooApp from "../../assets/todo-app.png";
import RecipePage from "../../assets/recipe-page.png";
import MyTeam from "../../assets/my-team-page.png";
import MyGallery from "../../assets/my-gallery.png";

const Proyectos = () => {
  return (
    <>
      <section className="pb-5 pt-3 bg-gray-100 flex flex-col gap-5 px-2">
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden ">
          <img
            src={CrayonIMG}
            alt="Colegio crayons"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">
              Proyecto Colegio Crayon's
            </h3>
            <p className="text-gray-600 mt-2">
              Este proyecto es un sistema educativo que permite registrar y
              reportar asistencia, realizar matrículas, y pagar cuotas en línea
              con Mercado Pago. Todo está diseñado para aprender de manera fácil
              y con pasión.
            </p>
            <a
              href="https://crayons.com.pe/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-[#D32F2F] text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Ver proyecto
            </a>
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={Idioma}
            alt="pagina para aprender ashaninka"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">
              Aprende Asháninka
            </h3>
            <p className="text-gray-600 mt-2">
              Una plataforma interactiva para aprender el idioma Asháninka con
              imágenes y audios. Explora nombres de aves,animales, saludos entre
              otros, en Asháninka junto a sus significados en español, mejorando
              tu comprensión del idioma de forma visual y auditiva.
            </p>
            <a
              href="https://freddy-idiomas.vercel.app/aves"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-[#D32F2F] text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Ver proyecto
            </a>
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={TodooApp}
            alt="pagina para aprender ashaninka"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">
              Todo App - (challenge){" "}
            </h3>
            <p className="text-gray-600 mt-2">
              Una aplicación sencilla y eficiente para organizar tus tareas
              diarias. Agrega, elimina y gestiona tareas con una interfaz
              amigable y minimalista.
            </p>
            <a
              href="https://wilmerespinal.github.io/todo-app/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-[#D32F2F] text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Ver proyecto
            </a>
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={RecipePage}
            alt="pagina para aprender ashaninka"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">
              Página de Recetas Deliciosas - (challenge)
            </h3>
            <p className="text-gray-600 mt-2">
              Descubre recetas con un diseño atractivo. Cada receta incluye
              ingredientes, instrucciones detalladas y un diseño visual que te
              inspira a cocinar tus platillos favoritos.
            </p>
            <a
              href="https://wilmerespinal.github.io/recipe-page/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-[#D32F2F] text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Ver proyecto
            </a>
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={MyTeam}
            alt="pagina para aprender ashaninka"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">
              Página de Presentación de Equipo - (challenge)
            </h3>
            <p className="text-gray-600 mt-2">
              Una página diseñada para destacar la información de un equipo de
              trabajo. Incluye detalles de cada miembro, roles y un diseño
              profesional adaptado para cualquier proyecto corporativo.
            </p>
            <a
              href="https://wilmerespinal.github.io/my-team-page/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-[#D32F2F] text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Ver proyecto
            </a>
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={MyGallery}
            alt="pagina para aprender ashaninka"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">
              Galería de Imágenes Estatica - (challenge)
            </h3>
            <p className="text-gray-600 mt-2">
              Una galería visual interactiva que presenta imágenes organizadas
              de forma atractiva. Explora y navega por diferentes colecciones
              con una experiencia de diseño simple y elegante.
            </p>
            <a
              href="https://wilmerespinal.github.io/my-gallery/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-[#D32F2F] text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Ver proyecto
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Proyectos;
