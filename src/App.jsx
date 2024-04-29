import './App.css';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import sanityClient from './client';
import BlockContent from '@sanity/block-content-to-react';

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

  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"] {
        body
      }`
      )
      .then((data) => setAboutData(data))
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
        {aboutData &&
          aboutData.map((text, index) => (
            <span className="mrgn" key={index}>
              <BlockContent
                blocks={text.body}
                projectId="42d1k3c6"
                dataset="production"
              />
            </span>
          ))}

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
