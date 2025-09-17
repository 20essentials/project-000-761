import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "bulma/css/bulma.min.css";

const App = () => {
  useEffect(() => {
    Object.assign(document.body.style, {
      height: "100vh",
      width: "100%",
      display: "flex",
      backgroundImage: `
        repeating-conic-gradient(from 0deg at 0% 0%, #00f2fe 0deg, #000 18deg),
        repeating-conic-gradient(from 0deg at 100% 0%, #000 0deg, #00f2fe 18deg),
        repeating-conic-gradient(from 0deg at 100% 100%, #000 0deg, #00f2fe 18deg),
        repeating-conic-gradient(from 0deg at 0% 100%, #000 0deg, #00f2fe 18deg)
      `,
      backgroundSize: "96px 96px",
      backgroundBlendMode: "hard-light"
    });
    Object.assign(document.documentElement.style, {
      scrollBehavior: "smooth",
      scrollbarWidth: "thin",
      scrollbarColor: "transparent transparent"
    });
  }, []);

  return <div className="container is-flex is-justify-content-center is-align-items-center" style={{height: "100%"}}></div>;
};

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
const root = createRoot(rootEl);
root.render(<App />);

export default App;
