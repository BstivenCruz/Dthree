export default function Nav() {
  const actualUrl = window.location.pathname;

  const navigation = [
    { name: "Home", href: "/", current: actualUrl === "/" },
    { name: "Studio", href: "/studio", current: actualUrl === "/studio" },
    { name: "Crew", href: "crew", current: actualUrl === "/crew" },
    {
      name: "Entretenimiento",
      href: "/Entretenimiento",
      current: actualUrl === "/Entretenimiento",
    },
    {
      name: "Contactanos",
      href: "/Contactanos",
      current: actualUrl === "/Contactanos",
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className=" bg-[rgb(255,255,255)]  hidden  text-red-500 h-[10vh]  md:flex items-center justify-between w-screen px-5">
        <h1 className="w-1/6  h-full flex justify-center items-center">logo</h1>
        <div className=" w-1/2 h-full flex justify-between items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "border-b border-b-red-500 text-black"
                  : "text-black hover:border-b-red-500 hover:border-b ",
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
