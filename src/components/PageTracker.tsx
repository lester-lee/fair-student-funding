import * as React from 'react';



type Props = {
    activePage: number;
}

const PageTracker = ({activePage}: Props)=>{
    const narrative = document.querySelector('article');
    const numPages = narrative!.scrollHeight / narrative!.offsetHeight;
    console.log(activePage, numPages);
    return (
        <nav></nav>
    )
};

export default PageTracker;