
interface DisplayProps {
  buffer: string;
}

const Display = ({ buffer }: DisplayProps) => {
  return (
    <div className="shadow-inner shadow-lightBlue/70 p-4 dark:shadow-black/70 rounded-md">
      <p className='text-2xl text-blue-800'>{buffer}</p>
    </div>
  );
};

export default Display;
