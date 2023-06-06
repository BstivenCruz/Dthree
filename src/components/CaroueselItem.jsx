/* eslint-disable react/prop-types */

const CaroueselItem = ({  text }) => {
  return (
    <div className={` border w-[300px] bg-[url('https://images8.alphacoders.com/712/712496.jpg')  h-[80%] rounded-[10px] overflow-hidden `}>
      <h1 className=" top-1/2 z-20 ">{text}</h1>
    </div>
  );
};

export default CaroueselItem;
