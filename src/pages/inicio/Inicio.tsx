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
          <h2 className="font-bold text-2xl mt-2">Hello, World! 👋</h2>
          <p className="leading-5">
            Bienvenido/a a mi rincón en la web. Aquí comparto mis aventuras,
            aprendizajes y proyectos en el mundo del desarrollo de software.
            Encontrarás ideas, consejos y reflexiones para escribir código más
            limpio.
          </p>
          <p>
            No soy un experto en todo (¡nadie lo es!), pero me encanta aprender
            y compartir lo que voy descubriendo. Si te gusta programar, innovar
            o simplemente curiosear, estoy seguro de que encontrarás algo
            interesante por aquí. ¡Vamos a aprender y crecer juntos! 💻✨
          </p>
          <img className="rounded mt-1" src={Programming} alt="" />
        </div>
      </section>
    </>
  );
};
export default Inicio;
