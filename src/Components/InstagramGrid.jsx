import { useEffect } from "react";

const InstagramGrid = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      src="//lightwidget.com/widgets/b7f2a79dca2c5f56bad33f9239430e48.html"
      scrolling="no"
      allowTransparency="true"
      className="lightwidget-widget"
      style={{
        width: "100%",
        border: 0,
        overflow: "hidden",
        aspectRatio: "1 / 1",
      }}
      title="Instagram Feed"
    ></iframe>
  );
};

export default InstagramGrid;