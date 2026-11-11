import { ComponentProps } from "react"

type Variant = "primary" | "secondary"
type Size = "small" | "large"

interface IButton extends ComponentProps<"button"> {
  variant: "primary" | "secondary"
  size: Size
}

const VARIANT: Record<Variant, string> = {
  primary: "bg-primary-700 text-white",
  secondary: "bg-transparent text-700 border border-primary-700",
}
const SIZE: Record<Size, string> = {
  small: "px-4 h-11",
  large: "px-10 h-14",
}

const Button = ({ variant, size, ...rest }: IButton) => {
  return (
    <button {...rest} className={`${VARIANT[variant]} ${SIZE[size]}`}>
      Click me
    </button>
  )
}

export default Button
