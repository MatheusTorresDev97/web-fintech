import "./App.css";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Resumo from "./pages/Resumo";

import { DataContextProvider } from "./hooks/useDataContext";

function App() {
  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
