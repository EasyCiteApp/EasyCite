import { reverse, isPalindrome } from "../utils/StringUtils";
import { useState, useEffect } from 'react';

type PlaygroundProps = {
  name: string
}

function Playground(props: PlaygroundProps) {
  const [value, setValue] = useState('');

  const newLocal = (e: React.ChangeEvent<HTMLInputElement>): void => setValue(e.target.value);
  return (
    <div className="h-screen max-w-5xl mt-20 mx-auto">
      <h1 className="text-2xl font-bold">This is a playground</h1>
      <div className="mt-6 text-base font-light">
        <h1>Enter your name</h1>
        <input className="border bg-gray-100" value={value} onChange={newLocal}></input>
      </div>
    </div>
  );
};

export default Playground;
