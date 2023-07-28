type Props = {
  children: string
  className?: string
  onClick?: () => void
}

function Btn({ children, className = '', onClick = () => { } }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-lg border border-transparent bg-[var(--bg-color)] px-5 py-2.5 font-medium transition-[border-color] duration-[0.25s] hover:border-[#646cff] ${className}`}
    >
      {children}
    </button>
  )
}

export default Btn
