import { useEffect, useRef } from "react";
import SimpleParallax from "simple-parallax-js";

function App() {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    const instance = new SimpleParallax(imageRef.current, {
      scale: 1.5,
      delay: 0.6,
    });

    return () => instance.destroy();
  }, []);

  return (
    <img
      ref={imageRef}
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      alt="test"
    />
  );
}

export default App;