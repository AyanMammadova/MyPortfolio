import { useEffect, useRef } from "react";

export default function TubesCursorPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    import("https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js")
      .then(({ default: TubesCursor }) => {
        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#f967fb", "#53bc28", "#6958d5"],
            lights: {
              intensity: 200,
              colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
            },
          },
        });

        const getRandomHex = () =>
          "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");

        const generateColors = (count) =>
          Array.from({ length: count }, getRandomHex);

        const handleClick = () => {
          app.tubes.setColors(generateColors(3));
          app.tubes.setLightsColors(generateColors(4));
        };

        document.body.addEventListener("click", handleClick);
        return () => document.body.removeEventListener("click", handleClick);
      });
  }, []);

  return (
    <div className="relative w-full h-screen font-montserrat">
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" />
    </div>
  );
}
