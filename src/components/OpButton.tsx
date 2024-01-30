
interface OpButtonProps {
  text: string;
  value: string;
  onClick: (value: string) => void;
}

const OpButton = ({ text, value, onClick }: OpButtonProps) => {
  const handleClick = () => {
    onClick(value);
  };
  return (
    <button
      value={value}
      className="flex h-full w-full items-center justify-center rounded-2xl bg-lightBlue text-3xl text-blue shadow-md shadow-lightBlue transition-all hover:shadow-none dark:bg-blue-800 dark:text-white dark:shadow-black"
      onClick={handleClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default OpButton;
