function nomeMes(n:number) {
  const date = new Date()
  console.log(date.getMonth() + n)
  return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date)
}

const MesBtn = ({n}: {n:number}) => {
  return (
   <button>{nomeMes(n)}</button>
  )
}

export default MesBtn