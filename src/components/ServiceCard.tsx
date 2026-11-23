interface ServiceCardProps {
  title: string
  body: string
}

const ServiceCard = ({ title, body }: ServiceCardProps) => {
  return (
    <div className="flex flex-col border-l-4 border-secondary-400 pl-6 gap-3 w-[358px]">
      <h3 className="text-lg font-semibold text-neutral-900">
        {title}
      </h3>

      <p className="text-sm text-neutral-600">
        {body}
      </p>
    </div>
  )
}

export default ServiceCard
