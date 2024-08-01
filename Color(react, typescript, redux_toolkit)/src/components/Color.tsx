import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../features/store";
import { setTypeOfColor, setColor } from "../features/colorSlice";


const Color = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { typeOfColor, color } = useSelector((state: RootState) => state.color);

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRgbColor();
    } else {
      handleCreateHexColor();
    }
  }, [typeOfColor]);

  function randomColorUtility(length: number) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    dispatch(setColor(`rgb(${r}, ${g}, ${b})`));
  }

  function handleCreateHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    dispatch(setColor(hexColor));
  }

  return (
    <div className="wrapper" style={{ background: color }}>
      <div className="buttons">
        <button
          className={`button ${typeOfColor === "hex" ? "selected" : ""}`}
          onClick={() => dispatch(setTypeOfColor("hex"))}
        >
          Hex Color
        </button>
        <button
          className={`button ${typeOfColor === "rgb" ? "selected" : ""}`}
          onClick={() => dispatch(setTypeOfColor("rgb"))}
        >
          RGB Color
        </button>
        <button
          className="button"
          onClick={
            typeOfColor === "hex" ? handleCreateHexColor : handleCreateRgbColor
          }
        >
          Random Color
        </button>
      </div>
      <div className="showColor">
        <h3>{typeOfColor === "rgb" ? "RGB color: " : "HEX color: "}</h3>
        <h3>{color}</h3>
      </div>
    </div>
  );
};

export default Color;

