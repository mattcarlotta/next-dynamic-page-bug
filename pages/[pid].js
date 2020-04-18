import React from "react";
import { withRouter } from "next/router";
import Link from "next/link";

const Post = ({ router }) => {
  const { pid } = router.query;

  console.log("rendered dynamic page");

  return (
    <>
      <p>Post: {pid}</p>
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </>
  );
};

export default withRouter(Post);
