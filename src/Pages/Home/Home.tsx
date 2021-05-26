import React, { useRef, useEffect, useState } from 'react';
import s from './Home.module.scss';
import lottie from 'lottie-web';
// import { animation } from 'data/simpleAnimation';
import { running_line as animation } from 'data/running-line/running-line';
import { HeroBlock } from './HeroBlock/HeroBlock';
import { ProductsList } from './ProductsList/ProductsList';

export default function Home() {

  const animationContainer  = useRef(null);
  const animationRef        = useRef<any>(null);
  const [played, setPlayed] = useState(false);

  // <Lottie Animations Block>
  useEffect(() => {

    let animationContainerEl = animationContainer.current as any;
    animationRef.current = lottie.loadAnimation({
      container: animationContainerEl, // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animation
    });
  }, []);

  const handleMouseEnter = (e: React.SyntheticEvent) => {
    if (!played) {
      animationRef.current.stop();
      animationRef.current.setSpeed(1);
      animationRef.current.play();
      setPlayed(true);
    }
  }

  const handleMouseLeave = (e: React.SyntheticEvent) => {
    setPlayed(false);
    animationRef.current.stop();
  }
  // </Lottie Animations Block>

  return (
    <div className="Home">

      <HeroBlock />

      <ProductsList />

      <section className="container">
        <div className={s.longList} />
      </section>

      <section className="container">

        <div className="muzq-section-hero--animation-wrapper">
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={animationContainer} className="muzq-section-hero--animation" />
        </div>

      </section>
    </div>
  )
}
