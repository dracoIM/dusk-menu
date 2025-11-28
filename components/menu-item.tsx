interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image?: string;
}

export default function MenuItem({
  name,
  description,
  price,
  image,
}: MenuItemProps) {
  return (
    <div className="p-2 transition ">
      {image && (
        <div className="mb-4  rounded-lg  aspect-square overflow-hidden bg-accent/10 h-100vh flex items-center justify-center">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex justify-between items-start gap-4 mb-2">
        <h4 className="font-serif text-2xl font-semibold text-foreground">
          {name}
        </h4>
        <span className="font-serif text-2xl font-semibold text-accent whitespace-nowrap">
          {price}
        </span>
      </div>
      <p className="font-body text-muted-foreground">{description}</p>
    </div>
  );
}
