import OpButton from "./OpButton";
import EqualButton from "./EqualButton";
import NumberButton from "./NumberButton";

interface KeysProps {
  handleNumber: (value: string) => void;
  handleOp: (value: string) => void;
  handleEqual: () => void;
  handleClear: () => void;
  handleDelete: () => void;
}
const Keys = ({ handleNumber, handleOp, handleEqual, handleClear, handleDelete }: KeysProps) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="col-span-4 grid h-14 grid-cols-4 gap-5">
        <button onClick={handleClear} className="rounded-2xl bg-white bg-opacity-75 text-2xl text-gray-200 shadow-md shadow-lightBlue/70 transition-all hover:shadow-none dark:bg-gray-600 dark:text-red-500 dark:shadow-black">
          Ac
        </button>
        <button onClick={handleDelete} className="rounded-2xl bg-white bg-opacity-75 text-2xl text-gray-200 shadow-md shadow-lightBlue transition-all hover:shadow-none dark:bg-gray-600 dark:shadow-black dark:text-white">
          C
        </button>
        <OpButton onClick={handleOp} text="/" value="/" />
        <OpButton onClick={handleOp} text="*" value="*" />
      </div>
      <div className="col-span-4 grid h-14 grid-cols-4 gap-5">
        <NumberButton onClick={handleNumber} text="7" value="7" />
        <NumberButton onClick={handleNumber} text="8" value="8" />
        <NumberButton onClick={handleNumber} text="9" value="9" />
        <OpButton onClick={handleOp} text="-" value="-" />
      </div>
      <div className="col-span-4 grid h-14 grid-cols-4 gap-5">
        <NumberButton onClick={handleNumber} text="4" value="4" />
        <NumberButton onClick={handleNumber} text="5" value="5" />
        <NumberButton onClick={handleNumber} text="6" value="6" />
        <OpButton onClick={handleOp} text="+" value="+" />
      </div>
      <div className="col-span-3 grid h-14 grid-cols-3 gap-5">
        <NumberButton onClick={handleNumber} text="1" value="1" />
        <NumberButton onClick={handleNumber} text="2" value="2" />
        <NumberButton onClick={handleNumber} text="3" value="3" />
      </div>
      <div className="row-span-2">
        <EqualButton onClick={handleEqual} />
      </div>
      <div className="col-span-3 h-14">
        <NumberButton onClick={handleNumber} text="0" value="0" />
      </div>
    </div>
  );
};

export default Keys;
