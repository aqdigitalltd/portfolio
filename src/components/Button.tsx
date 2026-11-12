
import { ComponentProps } from "react"

type Variant = "primary" | "secondary"
type Size = "small" | "large"

interface IButton extends ComponentProps<"button"> {
  variant: Variant
  size: Size
  label: string
}


const VARIANT: Record<Variant, string> = {

  primary: "border rounded-sm border-primary-600 text-base font-semibold bg-primary-600 text-white enabled:hover:bg-primary-700 enabled:hover:border-primary-700 active:bg-primary-700 active:border focus-visible:bg-primary-600 disabled:opacity-55 disabled:hover:bg-primary-600 disabled:hover:border-primary-600",
  secondary: "border rounded-sm border-primary-700 text-base font-semibold bg-transparent text-primary-700 enabled:hover:bg-primary-100 active:bg-primary-100 focus-visible:bg-primary-600 disabled:opacity-55 disabled:bg-primary-100 disabled:hover:bg-primary-100 disabled:active:bg-primary-100 disabled:border-primary-100 disabled:text-primary-600",
}

const SIZE: Record<Size, string> = {
  small: "px-4 h-10 ",
  large: "px-10 h-13",
}


const Button = ({ variant, size, label,...rest }: IButton) => {
  return (
    <button {...rest} className={`${VARIANT[variant]} ${SIZE[size]}`}>
      {label}
    </button>
  )
}
export default Button


