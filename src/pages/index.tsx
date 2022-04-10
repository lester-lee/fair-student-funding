import * as React from "react";

// Components
import ImageHeader from "../components/Header/ImageHeader";
import Narrative from "../components/Narrative/Narrative";
import Visualization from "../components/Visualization/Visualization";


const IndexPage = () => {
  return (
    <>
      <ImageHeader />
      <main>
        <Narrative />
        <Visualization />
      </main>
    </>
  );
};

export default IndexPage;
