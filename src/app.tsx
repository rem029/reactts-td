import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

import "./app.scss";

const App = (): JSX.Element => {
  return (
    <div className="app" id="app">
      <Header id="appHeader" />
      <Main id="appMain" />
      <Footer id="appFooter" />
    </div>
  );
};

export default App;
