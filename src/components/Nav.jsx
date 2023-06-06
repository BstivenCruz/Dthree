import logo from "../assets/D3_Blanco.png";
export default function Nav() {
  const actualUrl = window.location.pathname;

  const navigation = [
    { name: "Home", href: "/", current: actualUrl === "/" },
    { name: "Estudio", href: "/estudio", current: actualUrl === "/estudio" },
    { name: "Crew", href: "/crew", current: actualUrl === "/crew" },
    {
      name: "Entretenimiento",
      href: "/Entretenimiento",
      current: actualUrl === "/Entretenimiento",
    },
    {
      name: "Contactanos",
      href: "/contactanos",
      current: actualUrl === "/Contactanos",
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const position = window.scrollY > 50
 
console.log(position)
  return (
    <>
      <div className={` bg-[rgba(255,255,255,0)] hidden absolute top-0 duration-150  text-red-500 h-fit   md:flex items-center justify-between max-w-screen px-5`}>
        <img
          className="w-[8%] sticky top-0 ml-10 flex object-cover  justify-center items-center"
          src={logo}
        />
        <div className=" w-1/2 h-full flex justify-between items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "border-b-2 border-b-red-500 text-white"
                  : "text-white hover:border-b-red-500 hover:border-b-2 ",
                " px-3 py-2  font-semibold text-xl"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
