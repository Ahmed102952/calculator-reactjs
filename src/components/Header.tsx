import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

interface HeaderProps {
  theme: number;
  changeTheme: (arg0: number) => void;
}
const Header = ({ theme, changeTheme }: HeaderProps) => {
  return (
    <header className="my-4 flex items-center justify-between">
      <h1 className="text-primary text-lg font-bold uppercase dark:text-blue-800">Calculator</h1>
      <button
        onClick={() => {
          changeTheme(theme);
        }}
      >
        <img src={theme ? moon : sun} alt="theme icon" />
      </button>
    </header>
  );
};

export default Header;
