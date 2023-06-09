/* eslint-disable react/prop-types */
export default function Cards({ photo }) {
  return (
    <div className="carousel-item card image-full overflow-hidden ">
      <figure>
        <img src={photo} alt="Shoes" className="rounded-box w-[35vw] h-full z-20 object-cover " />
      </figure>
      <div className="card-body bg-[rgba(3,3,3,0.46)]  h-1/3 self-end">
        <h2 className="card-title text-white text-3xl">profesor</h2>
        <p className=" text-white text-xl ">Estilo</p>
      </div>
    </div>
  );
}

/* 
<div className="carousel-item ">
<Cards photo="https://images8.alphacoders.com/712/712496.jpg" />
</div>
<div className="carousel-item">
<Cards photo="https://www.pixel4k.com/wp-content/uploads/2018/11/lion-in-zoo-4k_1542238887.jpg.webp" />
</div>
<div className="carousel-item">
<Cards photo="https://www.pixel4k.com/wp-content/uploads/2019/11/monochrome-lion_1574938079.jpg.webp" />
</div>
<div className="carousel-item">
<Cards photo="https://www.pixel4k.com/wp-content/uploads/2021/08/tiger-close-up-4k_1629139703-300x200.jpg.webp" />
</div>
<div className="carousel-item">
<Cards photo="https://www.pixel4k.com/wp-content/uploads/2021/03/cute-cat-4k_1615884666-300x200.jpg.webp" />
</div>
<div className="carousel-item">
<Cards photo="https://www.pixel4k.com/wp-content/uploads/2021/03/bulldog-puppy-4k_1615884685-300x200.jpg.webp" />
</div>
<div className="carousel-item">
<Cards photo="https://www.pixel4k.com/wp-content/uploads/2021/03/tiger-glowing-red-eyes-4k_1616872018-300x200.jpg.webp" />
</div> */
