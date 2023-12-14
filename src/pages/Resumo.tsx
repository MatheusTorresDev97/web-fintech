import { useData } from "../hooks/useDataContext"

const Resumo = () => {
  const { data } = useData()
  console.log(data);
  
  return (
    <div>Resumo</div>
  )
}

export default Resumo