import { reverse, isPalindrome } from "../utils/StringUtils";
import { useState, useEffect } from 'react';

type PlaygroundProps = {
  name: string
}

function Playground(props: PlaygroundProps) {
  return (
    <div className="h-screen max-w-5xl mt-20 mx-auto">
      <h1 className="text-2xl font-bold">This is a playground</h1>
    </div>
  );
};

export default Playground;
