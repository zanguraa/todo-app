import moonImg from "../images/icon-moon.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full max-w-[520px] items-center mb-10">
      <h1 className="text-2xl text-white font-bold tracking-[.30em]	">TODO</h1>
      <img className="w-5 h-5" src={moonImg} alt="moon" />
    </nav>
  );
}
