import * as React from 'react';
import { useState } from 'react';
import { css, Global } from '@emotion/react';

// Components
import ImageHeader from '../components/ImageHeader';
import Narrative from '../components/Narrative';
import Visualization from '../components/Visualization';

const IndexPage = () => {
  const [activePage, setActivePage] = useState(0);

  /**
   * Calculate the height of a single page
   * and use to calculate the current page
   * given the scroll offset
   */
  function onScroll() {
    const narrative = document.querySelector('article');
    if (!narrative) return;
    const pageHeight = narrative.scrollHeight - narrative?.scrollTopMax;
    // Offset by 5 for smoother updates
    const pageIndex = Math.floor(
      (narrative.scrollTop + pageHeight / 2) / pageHeight
    );
    setActivePage(pageIndex);
  }

  const styles = css`
    :root {
      --dark-blue: #264653ff;
      --green: #2a9d8fff;
      --yellow: #e9c46aff;
      --orange: #f4a261ff;
      --red: #e76f51ff;
      --light-gray: #eee;
    }
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    body {
      margin: 0;
    }
  `;

  return (
    <>
      <Global styles={styles} />
      <ImageHeader />
      <main>
        <Narrative onScroll={onScroll} />
        <Visualization pageIdx={activePage} />
      </main>
    </>
  );
};

export default IndexPage;
