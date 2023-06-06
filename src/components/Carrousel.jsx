import CaroueselItem from "./CaroueselItem";

export default function Carrousel() {
  return (
    <>
      <div className="border border-black h-[50vh] flex items-center px-5 justify-between ">
        <CaroueselItem
          photo={"https://images8.alphacoders.com/712/712496.jpg"}
          text="buenas tardes "
        />
        <CaroueselItem
          photo={"https://images8.alphacoders.com/712/712496.jpg"}
          text="buenas tardes "
        />
        <CaroueselItem
          photo={"https://images8.alphacoders.com/712/712496.jpg"}
          text="buenas tardes "
        />
      </div>
    </>
  );
}
