import Welcome from "../components/Welcome";
import Carrousel from "../components/Carrousel";
import { Link as Anchor, useNavigate } from "react-router-dom";
export default function Studio() {
  const navigate = useNavigate();
  return (
    <>
      <Welcome text="Estudio" />
      <table className=" h-[50vh] w-full flex items-center justify-center ">
        <h1>horario</h1>
      </table>
      <h1 className="flex justify-center font-semibold text-3xl capitalize">
        profesores
      </h1>
      <Carrousel />
      <div className="flex justify-center">
        <button className="btn btn-neutral font-semibold text-2xl capitalize">
          send cv
        </button>
      </div>
      <div className=" h-[50vh] font-semibold  flex flex-col justify-between items-center p-5">
        <h1> trifas</h1>
        <div className="border h-[80%] w-full flex">
          <div className="border w-1/2 flex items-center justify-center">
            <Anchor onClick={() => navigate("/clases")}>clases precios</Anchor>
          </div>
          <div className="border w-1/2 flex items-center justify-center">
            <p>clase precios </p>
          </div>
        </div>
        <h1> trifas</h1>
      </div>
      <div className=" h-[50vh] font-semibold border flex flex-col justify-between items-center p-5">
        <h1> cronograma </h1>
        <div className="border h-[80%] w-full flex">
          <div className="border w-1/2 flex items-center justify-center">
            <p>mes </p>
          </div>
          <div className="border w-1/2 flex items-center justify-center">
            <p>proxima actividad </p>
          </div>
        </div>
      </div>
    </>
  );
}
