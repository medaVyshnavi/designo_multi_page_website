import React from "react";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/Map/Map"),
  { ssr: false }
);

const map = () => {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  );
};

export default map;
