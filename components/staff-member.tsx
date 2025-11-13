export interface StaffMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

interface StaffMemberProps {
  member: StaffMember;
}

export function StaffMember({ member }: StaffMemberProps) {
  return (
    <div className="text-center">
      <div className="mb-4 rounded-lg overflow-hidden bg-accent/10 h-64 flex items-center justify-center border border-accent/20">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-serif text-2xl font-bold text-primary mb-2">
        {member.name}
      </h3>
      <p className="font-body text-accent font-semibold mb-3">
        {member.position}
      </p>
      <p className="font-body text-foreground/80 text-sm leading-relaxed">
        {member.bio}
      </p>
    </div>
  );
}
