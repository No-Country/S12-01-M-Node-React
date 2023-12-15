import plus from "@/assets/svg/plusIcon.svg";
import minus from "@/assets/svg/minusIcon.svg";
import Image from "next/image";
import { SetStateAction } from "react";

interface CounterProps {
  count: number;
  setCount: React.Dispatch<SetStateAction<number>>;
}

const Counter = ({ count, setCount }: CounterProps) => {
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-3  border-b border-gray-400 pb-6">
      <button
        onClick={handleDecrement}
        disabled={count === 0}>
        <Image
          src={minus}
          alt="menos"
        />
      </button>
      <span className="font-bold text-2xl">{count}</span>
      <button onClick={handleIncrement}>
        <Image
          src={plus}
          alt="más"
        />
      </button>
    </div>
  );
};

export default Counter;
