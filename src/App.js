import "antd/dist/antd.css";
import "./App.scss";
import "@natscale/react-calendar/dist/main.css";
import RangePicker from "./range-picker";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <RangePicker />
      {/* <Calendar /> */}
    </div>
  );
}

export default App;
