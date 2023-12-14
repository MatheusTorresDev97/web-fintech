import "./App.css";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Resumo from "./pages/Resumo";
import Vendas from "./pages/Vendas";
import Venda from "./pages/Venda";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataContextProvider } from "./hooks/useDataContext";


function App() {
  return (
    <BrowserRouter>
        <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Resumo />} />
            <Route path="/vendas" element={<Vendas />} />
            <Route path="/vendas/:id" element={<Venda />} />
          </Routes>
        </main>
      </div>
    </DataContextProvider>
    </BrowserRouter>

  );
}

export default App;
