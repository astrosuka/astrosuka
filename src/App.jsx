import "./App.css";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import sanityClient from "./client";
import BlockContent from "@sanity/block-content-to-react";
import Clock from "./components/Clock";

function App() {
  const [loading, setLoading] = useState(true);
  const [linksData, setLinksData] = useState(null);
  const [aboutData, setAboutData] = useState(null);

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

    sanityClient
      .fetch(
        `*[_type == "about"] {
        body
      }`
      )
      .then((data) => setAboutData(data))
      .catch(console.error)

      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

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
      <Clock />
    </>
  );
}

export default App;
