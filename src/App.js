import "./App.scss";
import Head from "./components/Header";
import Assign from "./components/Assignment";
import Assets from "./components/Assets";
import StaticBtn from "./components/StaticBtn";
import Notice from "./components/Notice";
import Arrow from "./components/Arrow";

function App() {
  return (
    <>
      <Head />
      <Assign />
      <Assets />

<Arrow />
      < Notice />
      < StaticBtn />

      <div className="footer"></div>
    </>
  );
}

export default App;
