import React from "react";
import "./Slider.css";
const colors = ["#0088FE", "#00C49F", "#FFBB28"];

function NewsSlider({ delation }) {
  const delay = delation === 3 ? 5000;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow" style={{ backgroundColor: "transparent" }}>
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
          backgroundColor: "yellow",
        }}
      >
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index}>
            <div
              style={{
                // width: "100%",
                position: "relative",
                padding: "14px 29px",
                display: "flex",
                background:
                  "radial-gradient(99.52% 532.85% at 84.55% 19.23%, #E3FFEC 0%, #E0FFFC 100%)",
                boxShadow:
                  "22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18)",
                borderRadius: "12px",
                // width: "505px",
                height: "203px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  // backgroundColor: "red",
                  paddingRight: "22px",
                  // marginRight: 26
                  // padding: 16,
                  // width: "50%",
                }}
              >
                <div
                  style={{
                    background: "#FDD717",
                    padding: "3px 10px",
                    borderRadius: "74px",
                    width: "128px",
                    fontStyle: "normal",
                    // fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "#3D3D3D",
                  }}
                >
                  ?? 21 ???? 27 ????????
                </div>
                <div style={{ width: "10%" }}>?????? ???????????? ?????????????? ??????????????</div>
              </div>
              <div
                style={
                  {
                    // width: "80%",
                  }
                }
              >
                <img
                  style={{
                    position: "absolute",
                    top: 17,
                    right: 24,
                  }}
                  //   src={box}
                  alt=""
                />
                <img
                  style={{
                    position: "absolute",
                    top: 112,
                    right: 135,
                  }}
                  //   src={cabel}
                  alt=""
                />
                <div></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default NewsSlider;
