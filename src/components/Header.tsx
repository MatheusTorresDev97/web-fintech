import { useData } from "../hooks/useDataContext"

const Header = () => {
  const { data } = useData()

  console.log(data);
  
  return (
    <div>Header</div>
  )
}

export default Header