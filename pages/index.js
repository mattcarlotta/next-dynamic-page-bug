import React from "react";
import Link from "next/link";

const Home = () => {
  console.log("rendered home page");

  return (
    <Link href="/[pid]" as="/1">
      <a>Post 1</a>
    </Link>
  );
};

export default Home;
