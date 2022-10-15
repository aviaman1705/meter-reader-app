import { Link as RouterLink, useParams } from "react-router-dom";
import React from "react";

const Level1 = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <>
      {" "}
      <h1> Welcome {params.productId} </h1>{" "}
      <RouterLink to="/level1/level2">Go to Level2</RouterLink>
    </>
  );
};

export default Level1;
