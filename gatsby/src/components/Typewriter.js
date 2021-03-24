import React, { useState, useEffect } from "react";

const words = ["Web Developer", "Programmer", "Chemical Engineer"];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  console.log("index: ", index);
  console.log("subIndex: ", subIndex);
  console.log("reverse: ", reverse);


  // typeWriter
  useEffect(() => {
    //if (index === words.length) return;
    /*
    if ( subIndex === words[index].length + 1 && 
        index !== words.length - 1 && !reverse ) {
      setReverse(true);
      return;
    }
    */
    if ( subIndex === words[index].length + 1 && !reverse ) {
      setReverse(true);
      return;
    }

    /*
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }
    */

    if (subIndex === 0 && reverse) {
      if (index >= words.length -1) {
        setReverse(false);
        setIndex(0);
        return;
      }
      else {
        setReverse(false);
        setIndex((prev) => prev + 1);
        return;
      }
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 100 : subIndex === words[index].length ? 1000 :
                150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <p>
        {`→ ${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
      </p>
    </>
  );
}