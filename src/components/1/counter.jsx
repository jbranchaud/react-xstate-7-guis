import * as React from "react";
import { useMachine } from "@xstate/react";
import { countingMachine } from "../../machines/counter";

const Counter = () => {
  const [state, send] = useMachine(countingMachine);

  return (
    <>
      <div className="p-2 w-1/2">
        <div className="relative">
          <input
            value={state.context.count}
            type="text"
            id="name"
            name="name"
            className={inputStyles}
          ></input>
        </div>
      </div>
      <div className="p-2 w-1/2">
        <div className="relative">
          <button
            onClick={() => send("INCREMENT")}
            type="button"
            className={buttonStyles}
          >
            Count
          </button>
        </div>
      </div>
    </>
  );
};

const inputStyles =
  "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";
const buttonStyles =
  "flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg";

export default Counter;
