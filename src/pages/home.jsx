import Welcome from "../components/Welcome";
import Sections from "../components/Sections";
import Seccions from "../components/Seccions";
export default function Home() {
  {
    /*   <Welcome text="Experiencia D-three" /> */
  }

  return (
    <>
      <div className="h-fit bg-opacity-70 bg-slate-900">
       
        <Welcome text="Experiencia D-three" />
        {/* <div className=" border h-[50vh] flex justify-between items-center">
          <p className="  text-2xl w-2/3 flex justify-center  ">
            somos la mejor academia de la puta vida
          </p>
          <h1
            id="aqui"
            className="text-5xl  w-1/3 flex justify-center items-center"
          >
            quienes somos
          </h1>
        </div> */}
        <Seccions />
        <Sections />
        <div className=" border h-[50vh] flex items-center justify-center">
          <p className=" text-2xl  flex ">conocenos</p>
        </div>
        <div className="  h-[50vh] flex items-center justify-center">
          <p className=" text-2xl  flex ">alquiler de espacio </p>
        </div>
      </div>
    </>
  );
}
