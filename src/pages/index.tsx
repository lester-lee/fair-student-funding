import * as React from "react";
import { css, Global } from "@emotion/react";

// Components
import ImageHeader from "../components/ImageHeader";
import Narrative from "../components/Narrative";
import Visualization from "../components/Visualization";

const IndexPage = () => {
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
        <Narrative />
        <Visualization />
      </main>
    </>
  );
};

export default IndexPage;
