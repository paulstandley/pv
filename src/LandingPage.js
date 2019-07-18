import React, { useRef } from 'react';
import clamp from 'lodash-es/clamp';
import { useSprings, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import './Carousel.css';

const pages = [
  'https://res.cloudinary.com/pieol2/image/upload/v1555170135/shop-template/resizeimage6.jpg',
  'https://res.cloudinary.com/pieol2/image/upload/v1555170117/shop-template/resizeimage3.jpg',
  'https://res.cloudinary.com/pieol2/image/upload/v1555170110/shop-template/resizeimage2.jpg',
  'https://res.cloudinary.com/pieol2/image/upload/v1555170140/shop-template/resizeimage7.jpg',
  'https://res.cloudinary.com/pieol2/image/upload/v1555170130/shop-template/resizeimage5.jpg'
];

function LandingPage() {
  const index = useRef(0);
  const [props, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }));
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)));
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
      const sc = down ? 1 - distance / window.innerWidth / 2 : 1
      return { x, sc, display: 'block' };
    });
  });
  return props.map(({ x, display, sc }, i) => (
    <animated.div {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
      <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `url(${pages[i]})` }} />
    </animated.div>
  ))
}

export default LandingPage;