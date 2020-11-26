import logo from "./logo.svg";
import "./App.css";
import { Page1, Page2, Image, Button } from "./components";

function App() {
  return (
    <>
      <div className="page">
        <Image
          src="/images/relati_logo.svg"
          style={{
            position: "absolute",
            top: 14,
            right: 21
          }}
        />
        <Image
          src="/images/ghost-happy.svg"
          style={{
            position: "absolute",
            top: 43,
            left: 50
          }}
        />
        <div
          style={{
            width: 418,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "absolute",
            left: "calc(50% - 209px)",
            bottom: 90
          }}
        >
          <Button />
          <Button />
          <Button />
        </div>
      </div>
      <div className="page" />
      <div className="page" />
      <div className="page" />
      <div className="page" />
      <div className="page" />
    </>
  );
}

export default App;
