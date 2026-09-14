export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    id: "dave-phonix",
    name: "Dave Phonix",
    role: "Lead Engineer Of Building",
    bio: "Bringing over two decades of practice experience to Cube Accountants, Dave Phonix leads client engagements from onboarding through to year end — combining technical rigour with plain-English advice you can act on.",
    image: "/images/team-dave-phonix.jpg",
  },
  // The Figma design only carries copy for Dave Phonix. The roles and bios
  // below are placeholders until the client supplies the real text.
  {
    id: "mark-washington",
    name: "Mark Washington",
    role: "Team Member",
    bio: "Profile coming soon.",
    image: "/images/team-mark-washington.jpg",
  },
  {
    id: "sara-whitfield",
    name: "Sara Whitfield",
    role: "Team Member",
    bio: "Profile coming soon.",
    image: "/images/team-sara-whitfield.jpg",
  },
  {
    id: "harry-oneill",
    name: "Harry O'Neill",
    role: "Team Member",
    bio: "Profile coming soon.",
    image: "/images/team-harry-oneill.jpg",
  },
];
