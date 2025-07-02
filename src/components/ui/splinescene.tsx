import Spline from '@splinetool/react-spline';
import { useEffect, useRef } from 'react';

export default function SplineScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleWheel = (e: WheelEvent) => {
      // Permite o scroll da página mesmo quando o mouse está sobre o Spline
      if (container.scrollHeight === container.clientHeight) {
        window.scrollBy({
          top: e.deltaY,
          behavior: 'auto',
        });
      }
    };
    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 w-screen h-screen z-0">
      <Spline scene="https://prod.spline.design/b3xeJC5fCPuQWAqz/scene.splinecode" />
    </div>
  );
}
