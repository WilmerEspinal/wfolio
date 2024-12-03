import Profile from "../../assets/perfil.jpg";
import Programming from "../../assets/programming.jpg";
const Inicio = () => {
  return (
    <>
      <section className="pb-3">
        <div>
          <div className="flex">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={Profile}
              alt="foto de wilmer"
            />
            <p className="font-bold">Wilmer✨</p>
          </div>
          <h2 className="font-bold text-2xl mt-2">¡Hola, Mundo! 👋</h2>
          <p className="leading-5">
            Bienvenido/a a mi sitio personal, donde comparto lo que estoy
            aprendiendo y creando en el apasionante mundo del desarrollo de
            software. Aquí encontrarás contenido sobre proyectos, tecnologías, y
            consejos prácticos para programar mejor.
          </p>
          <img className="rounded mt-1" src={Programming} alt="" />
        </div>
      </section>
    </>
  );
};
export default Inicio;
