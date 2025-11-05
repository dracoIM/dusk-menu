interface MenuItemProps {
  name: string
  description: string
  price: string
  image?: string
}

export default function MenuItem({ name, description, price, image }: MenuItemProps) {
  return (
    <div className="pb-6 border-b border-border hover:border-accent transition">
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg h-48 w-full">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="flex justify-between items-start gap-4 mb-2">
        <h4 className="font-serif text-xl font-semibold text-foreground">{name}</h4>
        <span className="font-serif text-lg font-bold text-accent whitespace-nowrap">{price}</span>
      </div>
      <p className="font-body text-muted-foreground">{description}</p>
    </div>
  )
}
