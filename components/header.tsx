import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [test, setTest] = useState(false)
  const handleClick = (path) => {
    if (path === "/") {
      console.log("I clicked on the About Page");
      setTest(true)
    }
  };
  useEffect(() => {
    console.log(test, 'useEffect activated')
  }, [test])
  return (
    <>
      <Link href="/">
        <a onClick={() => handleClick("/")}>Home</a>
      </Link>
      {test && (
        <p>test</p>
      )}
    </>
  )
}