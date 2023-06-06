/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
{
  /* <div className={` bg-cover h-[100vh] bg-[url('${img[photo]}')]`}> */
}

const img = [
  "https://www.tuexperto.com/wp-content/uploads/2022/01/paginas-descargar-fondos-de-pantalla-1080x608.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/583/92/973/digital-art-landscape-mountains-palm-trees-wallpaper-preview.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/658/800/994/simple-simple-background-minimalism-black-background-wallpaper-preview.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/416/223/614/girl-sunset-mountains-mood-dance-hd-wallpaper-preview.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/71/196/981/digital-art-minimalism-nature-hills-wallpaper-preview.jpg",
  "https://images8.alphacoders.com/712/712496.jpg",
];
export default function Welcome({ text }) {
  const [photo, setPhoto] = useState(0);
  if (photo > img.length - 1) {
    setPhoto(0);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setPhoto((photo) => photo + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`  bg-cover h-[100vh] bg-[url('${img[photo]}')] font-semibold`}
    >
      <div className=" bg-[rgba(34,31,31,0.75)] w-full h-full flex items-center">
        <p className="text-white  flex w-1/2  justify-center font-semibold text-6xl">
          {text}
        </p>
      </div>
    </div>
  );
}
