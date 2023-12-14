import { CSSProperties } from "react"

const style: CSSProperties = {
    border: "var(--gap-2) solid var(color-1)",
    borderRightColor: "var(--color-4)",
    width: "var(--gap)",
    height: "var(--gap)",
    borderRadius: "50%",
    animation: "spin 1s infinite"
}

const Loading = () => {
  return (
    <div style={style}>
        {`
        @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
    </div>
  )
}

export default Loading