import * as React from 'react';
import { useState, useEffect } from 'react';
import { css, Global } from '@emotion/react';
import { Helmet } from 'react-helmet';

// Components
import Narrative from '../components/Narrative';
import Visualization from '../components/Visualization';
import Nav from '../components/Nav';

const IndexPage = () => {
  const [prevPage, setPrevPage] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [prevScroll, setPrevScroll] = useState(0);
  const [numPages, setNumPages] = useState(0);

  // Calculate and set num pages
  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;
    setNumPages(Math.floor(article.scrollHeight / article.offsetHeight));
  }, []);

  /**
   * Use scroll position to update activePage
   */
  const onArticleScroll = (event: React.UIEvent<HTMLElement>) => {
    const article = event.currentTarget;
    const scroll = article.scrollTop;
    const pageHeight = article.offsetHeight;
    const scrolledUp = scroll > prevScroll ? false : true;

    const pageIndex = scrolledUp
      ? Math.floor(scroll / pageHeight)
      : Math.floor(scroll / pageHeight + 0.5);

    if (pageIndex != activePage) {
      setPrevPage(activePage);
      setActivePage(pageIndex);
    }
  };

  const cssVariables = css`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    :root {
      --bg: #fff;
      --text-color: #333;

      --empty: #ccc;
      --scale1: #6abf30;
      --scale2: #37946c;
      --scale3: #306082;
      --scale4: #3f3f74;
      --scale5: #222034;
      --accent: #76428a;

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
      --city: var(--scale1);
      --state: var(--scale2);
      --federal: var(--scale3);

      --operating-budget: var(--scale2);
      --debt: var(--accent); // orange from NYC logo

      --teachers: var(--scale1);
      --admin: var(--scale3);
      --food: var(--scale4);
      --transportation: var(--scale5);

      --district: var(--scale2);

      --fsf: var(--scale1);
      --fsf-base: var(--scale2);
      --fsf-grade: var(--scale2);
      --fsf-add: var(--scale1);
      --fsf-add2: var(--scale3);
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

    h1,
    h2 {
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
          rel='canonical'
          href='https://www.lester-lee.com/fair-student-funding'
        />
        <link rel='icon' type='image/png' sizes='32x32' href='favicon.png' />
      </Helmet>
      <Global styles={[cssVariables, styles, keywordStyles]} />
      <main>
        <Narrative onScroll={onArticleScroll} />
        <Visualization activePage={activePage} previousPage={prevPage} />
      </main>
      <Nav activePage={activePage} numPages={numPages} />
    </>
  );
};

export default IndexPage;
