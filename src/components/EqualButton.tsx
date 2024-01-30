interface EqualButtonProps {
  onClick: () => void;
}
const EqualButton = ({ onClick }: EqualButtonProps) => {

  return (
    <button className="h-full w-full rounded-2xl bg-blue text-3xl text-white shadow-md shadow-lightBlue transition-all hover:shadow-none dark:bg-blue-800 dark:text-white dark:shadow-black"
    onClick={onClick}>
      =
    </button>
  );
};

export default EqualButton;
