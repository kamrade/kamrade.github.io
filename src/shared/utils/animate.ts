export const animate = ({timing, draw, duration, animationRef, onAnimationEnd}: any) => {
  const start = performance.now();
  animationRef.current = requestAnimationFrame(function animate(time: number) {

    let timeFraction = (time - start) / duration;
    timeFraction = timeFraction > 1 ? 1 : timeFraction;
    let progress = timing(timeFraction); // progress === 1 means 100% completed.
    draw(progress);

    if (timeFraction < 1) { // if less than 1 - continue animation
      requestAnimationFrame(animate);
    } else { // if 1 or more - stop animation and invoke callback onAnimationEnd
      onAnimationEnd && onAnimationEnd();
      cancelAnimationFrame(animationRef.current);
    }
  })
}
