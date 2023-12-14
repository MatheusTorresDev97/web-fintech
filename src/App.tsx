import "./App.css";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Resumo from "./pages/Resumo";

import { DataContextProvider } from "./hooks/useDataContext";
import Vendas from "./pages/Vendas";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resumo />
          <Vendas />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
