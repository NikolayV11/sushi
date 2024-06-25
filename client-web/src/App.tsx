import { Outlet } from "react-router-dom";
import { Header, CartPanel } from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="content">
          <div className="main-container">
            <Outlet />
            <CartPanel />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
