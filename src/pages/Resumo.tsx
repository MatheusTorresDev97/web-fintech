import { useData } from "../hooks/useDataContext";

const Resumo = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <span>
            <h2>Vendas</h2>

            {data
              .filter((i) => i.status !== "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <span>
            <h2>Recebido</h2>
            {data
              .filter((i) => i.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <span>
            <h2>Processando</h2>
            {data
              .filter((i) => i.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box mb">Gráficos</div>
    </section>
  );
};

export default Resumo;
