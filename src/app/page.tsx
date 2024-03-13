import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="examples-container">
        <h1> A-Frame/AR.js + Next.js</h1>
        <ul className="examples-list">
          <li className="example">
            <Link href={"/examples/first-example"}>
              Simple Example with A-Frame
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Homepage;
