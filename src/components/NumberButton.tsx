
interface NumberButtonProps {
  text: string;
  value: string;
  onClick: (value: string) => void;
}

const NumberButton = ({ value, text, onClick }: NumberButtonProps) => {
  const handleClick = () => {
    onClick(value);
  };
  return (
    <button
      value={value}
      className=" h-full w-full rounded-2xl bg-white text-3xl text-blue shadow-md shadow-lightBlue transition-all hover:shadow-none dark:bg-gray-800 dark:shadow-black"
      onClick={handleClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default NumberButton;
