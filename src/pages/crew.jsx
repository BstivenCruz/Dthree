import Welcome from "../components/Welcome";
import Sections from "../components/Sections";
import Carrousel from "../components/Carrousel";
import { useNavigate } from "react-router-dom";
export default function Crew() {
  const navigate = useNavigate();
  const navi = () => {
    navigate("/crews");
  };
  const navi2 = () => {
    navigate("/llegue");
  };
  return (
    <div>
      <Welcome text="Crew" />
      <div className="h-[50vh] w-full bg-[url('https://images8.alphacoders.com/712/712496.jpg')] bg-cover bg-center ">
        <div className="w-full relative top-0 h-full bg-[rgba(40,39,39,0.48)] flex items-center justify-center">
          <div className=" w-[90%] flex  items-center justify-between px-10 h-[80%] ">
            <h1 className=" text-white">esto es info de manchi </h1>
            <h1 className=" text-white">esto es info de manchi </h1>
          </div>
        </div>
      </div>
      <Sections handlerClick={navi} />
      <Carrousel />
      <div className=" border h-[50vh] flex items-center justify-center">
        <p className=" text-2xl  flex cursor-pointer " onClick={navi2}>
          entrenos
        </p>
      </div>
    </div>
  );
}
