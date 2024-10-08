type H1Props = {
  children: React.ReactNode
}

export function H1(props: H1Props) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {props.children}
    </h1>
  )
}
