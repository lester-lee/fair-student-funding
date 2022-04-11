import * as React from "react";
import { useState, useRef } from "react";
import { css, Global } from "@emotion/react";

// Components
import ImageHeader from "../components/ImageHeader";
import Narrative from "../components/Narrative";
import Visualization from "../components/Visualization";

const IndexPage = () => {

  const [activePage, setActivePage] = useState(0);
  const narrative = useRef();

  function onScroll() {
    console.log(narrative.current?.offsetTop);
  };

  const styles = css`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    body {
      margin: 0;
    }
  `;

  return (
    <>
      <Global styles={styles}/>
      <ImageHeader />
      <main>
        <Narrative ref={narrative} onScroll={onScroll}/>
        <Visualization />
      </main>
    </>
  );
};

export default IndexPage;
