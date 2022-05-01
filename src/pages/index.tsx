import * as React from "react";
import { useState } from "react";
import { css, Global } from "@emotion/react";

// Components
import ImageHeader from "../components/ImageHeader";
import Narrative from "../components/Narrative";
import Visualization from "../components/Visualization";

const IndexPage = () => {
  const [previousPage, setPreviousPage] = useState(0);
  const [activePage, setActivePage] = useState(0);

  /**
   * Calculate the height of a single page
   * and use to calculate the current page
   * given the scroll offset
   */
  function onScroll() {
    const narrative = document.querySelector("article");
    if (!narrative) return;
    const pageHeight = narrative.scrollHeight - narrative?.scrollTopMax;
    // Offset by 5 for smoother updates
    const pageIndex = Math.floor(
      (narrative.scrollTop + pageHeight / 2) / pageHeight
    );

    if (pageIndex != activePage) {
      setPreviousPage(activePage);
      setActivePage(pageIndex);
    }
  }

  const styles = css`
    @import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
    :root {
      --bg: #fff;
      --text-color: #333;

      --base: #19705e;
      --empty: #ccc;

      // Categories
      --city: #69c; // blue from NYC logo
      --state: #3f6993;
      --federal: #2e4760;

      --operating-budget: var(--base);
      --debt: #f93; // orange from NYC logo

      --teachers: #1acc76;
      --food: var(--federal);
      --admin: var(--city);
      --transportation: var(--state);

      --district: var(--base);

      --fsf: var(--city)
    }
    body {
      margin: 0;
    }
    html {
      background: var(--bg);
      color: var(--text-color);
    }
  `;

  const keywordStyles = css`
    .city {
      background: var(--city) !important;
    }
    .state {
      background: var(--state) !important;
    }
    .federal {
      background: var(--federal) !important;
    }
    .operating-budget {
      background: var(--operating-budget) !important;
    }
    .debt {
      background: var(--debt) !important;
    }
    .teachers {
      background: var(--teachers) !important;
    }
    .admin {
      background: var(--admin) !important;
    }
    .food {
      background: var(--food) !important;
    }
    .transportation {
      background: var(--transportation) !important;
    }
    .district {
      background: var(--district) !important;
    }
    .fsf {
      background: var(--fsf) !important;
    }
  `;

  return (
    <>
      <Global styles={[styles, keywordStyles]} />
      <ImageHeader />
      <main>
        <Narrative onScroll={onScroll} />
        <Visualization activePage={activePage} previousPage={previousPage} />
      </main>
    </>
  );
};

export default IndexPage;
