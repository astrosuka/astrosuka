import "./App.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import sanityClient from "./client";
import { PortableText } from "@portabletext/react";
import Clock from "./components/Clock";
import AudioWorks from "./components/AudioWorks";

function App() {
  const [loading, setLoading] = useState(true);
  const [linksData, setLinksData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [listOpen, setListOpen] = useState(false);
  function handleListClick() {
    setListOpen(!listOpen);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "link"] | order(order asc) {
        _id,
        linkText,
        linkUrl
      }`,
      )
      .then((data) => setLinksData(data))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "about"] {
        _id,
        body
      }`,
      )
      .then((data) => setAboutData(data))
      .catch(console.error)

      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="p-6">
      <motion.h1
        initial={{ translateX: -1000 }}
        animate={{ translateX: 0 }}
        transition={{ ease: [0.76, 0, 0.24, 1] }}
        className="mb-4 text-3xl"
      >
        Astrosuka
      </motion.h1>
      <motion.div
        className=""
        initial={{ translateX: -1000 }}
        animate={{ translateX: 0 }}
        transition={{ delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="mb-2 text-xs md:text-base">
          {aboutData &&
            aboutData.map((text) => (
              <div key={text._id} className="mb-4">
                <PortableText value={text.body} />
              </div>
            ))}
        </div>

        <button
          onClick={handleListClick}
          className="border-1 mb-2 rounded border border-gray-700 p-1 text-xs"
        >
          audio works
        </button>

        <div className="flex flex-col gap-1 text-sm md:flex-row md:text-base">
          {linksData &&
            linksData.map((link) => (
              <span key={link._id}>
                <a href={link.linkUrl} target="_blank">
                  {link.linkText}
                </a>
                &nbsp;
              </span>
            ))}
        </div>
      </motion.div>
      <Clock />
      <AudioWorks listOpen={listOpen} handleListClick={handleListClick} />
    </div>
  );
}

export default App;
