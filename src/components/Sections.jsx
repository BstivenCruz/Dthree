/* eslint-disable react/prop-types */

export default function Sections({ handlerClick }) {
  return (
    <div className=" h-[50vh] flex ">
      <div className="w-1/3 border flex items-center justify-center">
        Studio
      </div>
      <div className="w-1/3 border flex items-center justify-center">
        {handlerClick ? <h1 className=" cursor-pointer font-semibold " onClick={handlerClick}> Crew </h1> : 'seccions'}
      </div>
      <div className="w-1/3 border flex items-center justify-center">
        Entretenimiento
      </div>
    </div>
  );
}
