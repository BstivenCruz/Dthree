import Carrousel from "../components/Carrousel";

export default function Clases() {
  return (
    <div>
      <div className="border w-full h-screen bg-slate-400 flex">
        <div className=" w-1/2 flex items-center justify-center p-10  ">
          <p className="h-[70%] border w-[80%]">img</p>
        </div>
        <div className=" w-1/2 flex items-center justify-center p-10  ">
          <p>esto es texto </p>
        </div>
      </div>
      <div className="border h-[50vh]">
        <Carrousel></Carrousel>
      </div>
      <table className=" border h-[50vh] w-full flex items-center justify-center ">
        <h1>horario</h1>
      </table>
    </div>
  );
}
