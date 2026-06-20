'use client';

import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let globe: ReturnType<typeof createGlobe> | undefined;

    const init = () => {
      try {
        const w = canvas.offsetWidth;
        if (w < 1) return;
        globe?.destroy();
        globe = createGlobe(canvas, {
          devicePixelRatio: 2,
          width: w * 2,
          height: w * 2,
          phi: 0,
          theta: 0,
          dark: 0,
          diffuse: 1.2,
          scale: 1,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [0.9, 0.92, 0.96],
          markerColor: [0.2, 0.53, 0.95],
          glowColor: [0.75, 0.8, 0.85],
          markers: [],
          onRender: (state) => {
            state.phi = phi;
            phi += 0.005;
          },
        });
      } catch {
        // WebGL unavailable
      }
    };

    init();
    window.addEventListener('resize', init);

    return () => {
      globe?.destroy();
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
