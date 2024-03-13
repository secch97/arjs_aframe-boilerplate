import Footer from "@/components/Footer/Footer";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <>
      <NavigationBar></NavigationBar>

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
      <Footer></Footer>
    </>
  );
};

export default Homepage;
