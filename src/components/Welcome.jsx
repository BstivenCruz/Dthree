/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";


const img = [
  "https://p4.wallpaperbetter.com/wallpaper/583/92/973/digital-art-landscape-mountains-palm-trees-wallpaper-preview.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/658/800/994/simple-simple-background-minimalism-black-background-wallpaper-preview.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/416/223/614/girl-sunset-mountains-mood-dance-hd-wallpaper-preview.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/71/196/981/digital-art-minimalism-nature-hills-wallpaper-preview.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/817/186/571/dancing-dancer-silhouette-digital-art-wallpaper-preview.jpg",
];
export default function Welcome({text}) {
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
  console.log(photo);

  return (
    <div className={` bg-cover h-[100vh] bg-[url('${img[photo]}')]`}>
      <div className=" bg-[rgba(47,45,45,0.87)] w-full h-full flex items-center">
        <p className="text-white  flex w-1/2  justify-center font-semibold text-6xl">
          {text}
        </p>
      </div>
    </div>
  );
}
