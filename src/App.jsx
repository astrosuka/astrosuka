import './App.css';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import sanityClient from './client';

function App() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  const [linksData, setLinksData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "link"] | order(order asc) {
        linkText,
        linkUrl
      }`
      )
      .then((data) => setLinksData(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <motion.h1
        initial={{ translateX: -1000 }}
        animate={{ translateX: 0 }}
        transition={{ ease: [0.76, 0, 0.24, 1] }}
      >
        Astrosuka
      </motion.h1>
      <motion.div
        className="mrgn"
        initial={{ translateX: -1000 }}
        animate={{ translateX: 0 }}
        transition={{ delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
      >
        <p>musician, visual artist, developer</p>
        <p>b.1987 ussr. based in south america since 2000</p>
        <p>
          co-founded <a href="https://unun.link">unun</a> &{' '}
          <a href="https://trrueno.bandcamp.com">trrueno</a> experimental music
          labels
        </p>
        <p>
          1/2 of <a href="https://aguja.re">aguja</a>{' '}
        </p>
        <p className="mrgn">
          I&apos;m currently working as freelance web dev & mixing/mastering
          engineer
        </p>
        <p>say hi: astrosuka[at]proton[dot]me</p>

        <div className="mrgn links">
          finde me on:&nbsp;
          {linksData &&
            linksData.map((link, index) => (
              <span key={index}>
                <a href={link.linkUrl} target="_blank">
                  {link.linkText}
                </a>
                &nbsp;
              </span>
            ))}
        </div>
      </motion.div>
      <div className="date">❍ {dateState.toLocaleString()}</div>
    </>
  );
}

export default App;
