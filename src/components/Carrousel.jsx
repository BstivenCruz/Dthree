import Cards from "./Cards";
export default function Carrousel() {
  return (
    <>
      <div className="carousel carousel-center  h-[60vh] p-4 space-x-4 rounded-box">
        <div className="carousel-item">
          <Cards photo={"https://images8.alphacoders.com/712/712496.jpg"} />
        </div>
        <div className="carousel-item">
          <Cards
            photo={
              "https://www.pixel4k.com/wp-content/uploads/2018/11/lion-in-zoo-4k_1542238887.jpg.webp"
            }
          />
        </div>
        <div className="carousel-item">
          <Cards
            photo={
              "https://www.pixel4k.com/wp-content/uploads/2019/11/monochrome-lion_1574938079.jpg.webp"
            }
          />
        </div>

        <div className="carousel-item">
          <Cards
            photo={
              "https://www.pixel4k.com/wp-content/uploads/2021/08/tiger-close-up-4k_1629139703-300x200.jpg.webp"
            }
          />
        </div>
        <div className="carousel-item">
          <Cards
            photo={
              "https://www.pixel4k.com/wp-content/uploads/2021/03/cute-cat-4k_1615884666-300x200.jpg.webp"
            }
          />
        </div>
        <div className="carousel-item">
          <Cards
            photo={
              "https://www.pixel4k.com/wp-content/uploads/2021/03/bulldog-puppy-4k_1615884685-300x200.jpg.webp"
            }
          />
        </div>
        <div className="carousel-item">
          <Cards
            photo={
              "https://www.pixel4k.com/wp-content/uploads/2021/03/tiger-glowing-red-eyes-4k_1616872018-300x200.jpg.webp"
            }
          />
        </div>
      </div>
    </>
  );
}
