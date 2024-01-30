import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import Keys from "./components/Keys";

function App() {
  const [theme, setTheme] = useState(0); // 0 for light theme , 1 for dark theme
  const [buffer, setBuffer] = useState("0");
  const [total, setTotal] = useState<null | number>(null);
  const [previousOperator, setPreviousOperator] = useState<null | string>(null);

  useEffect(() => {
    // handle theme change
    if (theme === 0) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = useCallback((theme: number) => {
    //handle theme change
    if (theme === 0) {
      setTheme(1);
      return;
    }
    setTheme(0);
  }, []);

  const handleNumber = useCallback(
    (value: string) => {
      // handle number Click
      if (previousOperator === "=") {
        setBuffer(value);
        setTotal(null);
        setPreviousOperator(null);
      } else {
        setBuffer(buffer === "0" ? value : buffer + value);
      }
    },
    [buffer, previousOperator],
  );

  const handleOp = useCallback(
    (value: string) => {
      //handle operator click
      if (total === null) {
        setTotal(parseInt(buffer));
      } else {
        switch (previousOperator) {
          case "+":
            setTotal(total + parseInt(buffer));
            break;
          case "-":
            setTotal(total - parseInt(buffer));
            break;
          case "*":
            setTotal(total * parseInt(buffer));
            break;
          case "/":
            setTotal(total / parseInt(buffer));
            break;
          default:
            break;
        }
      }
      setPreviousOperator(value);
      setBuffer("0");
    },
    [buffer, total, previousOperator, setTotal, setPreviousOperator, setBuffer],
  );

  const handleEqual = useCallback(() => {
    //calculate the result
    if (previousOperator === null || total === null || isNaN(parseInt(buffer)))
      return;

    let result = 0;
    switch (previousOperator) {
      case "+":
        result = total + parseInt(buffer);
        break;
      case "-":
        result = total - parseInt(buffer);
        break;
      case "*":
        result = total * parseInt(buffer);
        break;
      case "/":
        result = total / parseInt(buffer);
        break;
      default:
        break;
    }

    setTotal(result);
    setBuffer(result.toString());
    setPreviousOperator("=");
  }, [
    buffer,
    total,
    previousOperator,
    setBuffer,
    setTotal,
    setPreviousOperator,
  ]);

  const handleDelete = useCallback(() => {
    //delete last character
    if (buffer === "0") return;
    if (buffer.length === 1) {
      setBuffer("0");
    } else {
      setBuffer(buffer.slice(0, -1));
    }
  }, []);

  const handleClear = useCallback(() => {
    //reset everything
    setBuffer("0");
    setTotal(null);
    setPreviousOperator(null);
  }, []);

  return (
    <main className="min-w-screen min-h-screen bg-background pt-[2vh] transition-all duration-300 dark:bg-gray-800 ">
      <div className="mx-auto w-full max-w-sm rounded-3xl bg-white bg-opacity-30 px-7 py-9 shadow-md shadow-lightBlue dark:bg-bg-dark dark:shadow-black/70">
        <Header theme={theme} changeTheme={handleTheme} />
        <Display buffer={buffer} />
        <div className="py-10">
          <Keys
            handleNumber={handleNumber}
            handleOp={handleOp}
            handleEqual={handleEqual}
            handleClear={handleClear}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
