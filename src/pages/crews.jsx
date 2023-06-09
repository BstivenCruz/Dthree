import { useNavigate } from "react-router-dom";
export default function Crews() {
  const navigate = useNavigate();
  const navi = () => {
    navigate("/llegue");
  };
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
      <div className=" border h-[50vh] flex items-center justify-center">
        <p className=" text-2xl  flex ">video</p>
      </div>
      <div className=" border h-[50vh] flex items-center justify-center">
        <p className=" text-2xl  flex cursor-pointer " onClick={navi}>
          entrenos
        </p>
      </div>
    </div>
  );
}
