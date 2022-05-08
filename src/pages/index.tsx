import * as React from "react";
import { useState } from "react";
import { css, Global } from "@emotion/react";
import { Helmet } from "react-helmet";

// Components
import Narrative from "../components/Narrative";
import Visualization from "../components/Visualization";
import Nav from "../components/Nav";

const IndexPage = () => {
  const [previousPage, setPreviousPage] = useState(0);
  const [activePage, setActivePage] = useState(0);

  /**
   * Use scroll position to update activePage
   */
  const onArticleScroll = (event: React.UIEvent<HTMLElement>) => {
    const article = event.currentTarget;
    const pageHeight = article.offsetHeight;
    const pageIndex = Math.floor((article.scrollTop + 1) / pageHeight);

    if (pageIndex != activePage) {
      setPreviousPage(activePage);
      setActivePage(pageIndex);
    }
  };

  const cssVariables = css`
    @import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
    :root {
      --bg: #fff;
      --text-color: #333;

      --base: #19705e;
      --empty: #ccc;

      --blue0: #8dd68b;
      --blue1: #19705e;
      --blue2: #2e4760;

      // Title Art
      --door: #e56447;
      --sky: #bad8ef;
      --window: #fff;
      --school: #edb023;

      // Ellipse Art
      --ellipse-dark: #333;

      // Question Mark
      --question-bg: #eee;
      --question-fg: #333;

      // Categories
      --city: var(--blue0); // blue from NYC logo
      --state: var(--blue1);
      --federal: var(--blue2);

      --operating-budget: var(--base);
      --debt: #f93; // orange from NYC logo

      --teachers: var(--blue0);
      --admin: var(--blue2);
      --food: #58487a;
      --transportation: #222;

      --district: var(--base);

      --fsf: var(--blue0);
      --fsf-base: var(--blue1);
      --fsf-grade: var(--blue1);
      --fsf-add: var(--blue0);
      --fsf-add2: var(--blue2);
    }
  `;

  const styles = css`
    body {
      margin: 0;
      overflow: hidden;
    }

    html {
      background: var(--bg);
      color: var(--text-color);
      font-family: Ubuntu;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    h1, h2 {
      margin: 2vh 0 1vh;
    }

    h1 {
      font-size: 1.25rem;
    }
    h2 {
      font-size: 1rem;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
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
    .fsf-base {
      background: var(--fsf-base) !important;
    }
    .fsf-grade {
      background: var(--fsf-grade) !important;
    }
    .fsf-add {
      background: var(--fsf-add) !important;
    }
    .fsf-add2 {
      background: var(--fsf-add2) !important;
    }
  `;

  return (
    <>
      <Helmet>
        <title>NYC School Budgets</title>
        <link
          rel="canonical"
          href="https://www.lester-lee.com/fair-student-funding"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon.png" />
      </Helmet>
      <Global styles={[cssVariables, styles, keywordStyles]} />
      <main>
        <Narrative onScroll={onArticleScroll} />
        <Visualization activePage={activePage} previousPage={previousPage} />
      </main>
      <Nav />
    </>
  );
};

export default IndexPage;
