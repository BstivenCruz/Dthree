/* eslint-disable react/prop-types */
 
export default function Slide({url}) {
  return (
    <>
      <img src={url} className=" w-full h-[100%] object-cover z-0" />
    </>
  );
}
