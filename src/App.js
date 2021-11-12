import "antd/dist/antd.css";
import "./App.scss";
import RangePicker from "./range-picker";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <RangePicker />
    </div>
  );
}

export default App;
