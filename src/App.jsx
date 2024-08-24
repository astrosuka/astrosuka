import "./App.css";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import Loading from "./components/Loading";
import sanityClient from "./client";
import { PortableText } from "@portabletext/react";
import Footer from "./components/Footer";
import { LanguageContext } from "./utils/languageContext";

function App() {
  const [loading, setLoading] = useState(true);
  const [linksData, setLinksData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [contactData, setContactData] = useState(null);
  const { language } = useContext(LanguageContext);

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
        body,
        bodyEs,
      }`,
      )
      .then((data) => setAboutData(data))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "contact"] {
        _id,
        text,
        textEs,
        email,
      }`,
      )
      .then((data) => setContactData(data))
      .catch(console.error)

      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="p-6">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
        className="mb-4 text-3xl"
      >
        Astrosuka
      </motion.h1>
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
      >
        <div className="text-xs md:text-base">
          {aboutData &&
            aboutData.map((text) => (
              <div key={text._id} className="mt-4">
                {language === "en" ? (
                  <PortableText value={text.body} />
                ) : (
                  <PortableText value={text.bodyEs} />
                )}
              </div>
            ))}
        </div>
        <div className="mb-4 text-xs md:text-base">
          {contactData &&
            contactData.map((data) => (
              <p key={data._id}>
                {data.text && (language === "en" ? data.text : data.textEs)}:{" "}
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </p>
            ))}
        </div>

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
      <Footer />
    </div>
  );
}

export default App;
