const Proyectos = () => {
  const projects = [
    {
      img: "https://res.cloudinary.com/dszdc6rh8/image/upload/v1742397631/crayons-home_dzxnhf.png",
      alt: "Colegio crayons",
      title: "Proyecto Colegio Crayon's",
      description:
        "Este proyecto es un sistema educativo que permite registrar y reportar asistencia, realizar matrículas, y pagar cuotas en línea con Mercado Pago. Todo está diseñado para aprender de manera fácil y con pasión.",
      link: "https://crayons.com.pe/",
    },
    {
      img: "https://res.cloudinary.com/dszdc6rh8/image/upload/v1742397628/idioma-ashaninka_hwgle5.png",
      alt: "pagina para aprender ashaninka",
      title: "Aprende Asháninka",
      description:
        "Una plataforma interactiva para aprender el idioma Asháninka con imágenes y audios. Explora nombres de aves, animales, saludos entre otros, en Asháninka junto a sus significados en español, mejorando tu comprensión del idioma de forma visual y auditiva.",
      link: "https://freddy-idiomas.vercel.app/aves",
    },
    {
      img: "https://res.cloudinary.com/dszdc6rh8/image/upload/v1742397625/todo-app_vo5afx.png",
      alt: "Todo App",
      title: "Todo App - (challenge)",
      description:
        "Una aplicación sencilla y eficiente para organizar tus tareas diarias. Agrega, elimina y gestiona tareas con una interfaz amigable y minimalista.",
      link: "https://wilmerespinal.github.io/todo-app/",
    },
    {
      img: "https://res.cloudinary.com/dszdc6rh8/image/upload/v1742397625/recipe-page_ttfhi6.png",
      alt: "Página de Recetas Deliciosas",
      title: "Página de Recetas Deliciosas - (challenge)",
      description:
        "Descubre recetas con un diseño atractivo. Cada receta incluye ingredientes, instrucciones detalladas y un diseño visual que te inspira a cocinar tus platillos favoritos.",
      link: "https://wilmerespinal.github.io/recipe-page/",
    },
    {
      img: "https://res.cloudinary.com/dszdc6rh8/image/upload/v1742397626/my-team-page_uyljyl.png",
      alt: "Página de Presentación de Equipo",
      title: "Página de Presentación de Equipo - (challenge)",
      description:
        "Una página diseñada para destacar la información de un equipo de trabajo. Incluye detalles de cada miembro, roles y un diseño profesional adaptado para cualquier proyecto corporativo.",
      link: "https://wilmerespinal.github.io/my-team-page/",
    },
    {
      img: "https://res.cloudinary.com/dszdc6rh8/image/upload/v1742397626/my-gallery_gtz9cs.png",
      alt: "Galería de Imágenes Estatica",
      title: "Galería de Imágenes Estatica - (challenge)",
      description:
        "Una galería visual interactiva que presenta imágenes organizadas de forma atractiva. Explora y navega por diferentes colecciones con una experiencia de diseño simple y elegante.",
      link: "https://wilmerespinal.github.io/my-gallery/",
    },
  ];

  return (
    <section className="pb-5 pt-3 bg-gray-100 flex flex-col gap-5 px-2">
      {projects.map((project, index) => (
        <div
          key={index}
          className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <img
            src={project.img}
            alt={project.alt}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-[#D32F2F] text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Ver proyecto
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Proyectos;
