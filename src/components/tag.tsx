import { ComponentProps } from "react"

interface ITag extends ComponentProps<"p"> {
  label: string
}

const TAG_STYLE = "inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2 font-albert text-base font-normal leading-6 tracking-normal text-neutral-900"

const Tag = ({ label, ...rest }: ITag) => {
  return (
    <p {...rest} className={TAG_STYLE}>
      {label}
    </p>
  )
}

export default Tag