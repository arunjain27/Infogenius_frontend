// useTyped.js
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const useTyped = (strings, delay = 0) => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 1,
      backSpeed: 1,
      startDelay: delay,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, [strings, delay]);

  return el;
};

export default useTyped;
