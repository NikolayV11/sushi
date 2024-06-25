import { Outlet } from "react-router-dom";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
