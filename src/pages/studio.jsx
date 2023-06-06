import Carrousel from "../components/Carrousel";
import Welcome from "../components/Welcome";
export default function Studio() {
  return (
    <>
      <Welcome text="Estudio" />
      <table className=" border h-[50vh] w-full flex items-center justify-center ">
        <h1>horario</h1>
      </table>
      <Carrousel />
      <div className=" h-[50vh] font-semibold border flex flex-col justify-between items-center p-5">
        <h1> trifas</h1>
        <div className="border h-[80%] w-full flex">
          <div className="border w-1/2 flex items-center justify-center">
            <p>clase precios </p>
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
