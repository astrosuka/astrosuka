import './App.css';
import { motion } from 'framer-motion';

function App() {
  const fecha = new Date();
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

        <div className="mrgn">
          finde me on: <a href="https://astrosuka.bandcamp.com">bandcamp</a>{' '}
          <a href="https://soundcloud.com/astrosuka">soundcloud</a>{' '}
          <a href="https://www.ninaprotocol.com/hubs/astrosuka">nina</a>{' '}
          <a href="https://instagram.com/astrosuka">instagram</a>{' '}
          <a href="https://twitter.com/astrosuka">twitter</a>{' '}
        </div>
      </motion.div>
      <div className="date">❍ {fecha.toString()}</div>
    </>
  );
}

export default App;
