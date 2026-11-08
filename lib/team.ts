export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

// Names and qualifications come from the 06 Nov 2026 Figma frame. Only the director
// has bio copy there (it still names "Dave Phonix"; adapted here to Bilal Ahmed), and
// the portraits are the existing placeholder photos. Replace both when the firm
// supplies real team photos and bios. "Aamira xxxxxxx" is the surname as given in Figma.
export const team: TeamMember[] = [
  {
    id: "bilal-ahmed",
    name: "Bilal Ahmed (FCA. BFP.)",
    role: "Director",
    bio: "Bringing over two decades of practice experience to Cube Accountants, Bilal Ahmed leads client engagements from onboarding through to year end — combining technical rigour with plain-English advice you can act on.",
    image: "/images/team-dave-phonix.jpg",
  },
  {
    id: "kamraan-ahsan",
    name: "Kamraan Ahsan (ACCA)",
    role: "Accountant",
    bio: "Profile coming soon.",
    image: "/images/team-mark-washington.jpg",
  },
  {
    id: "aamira",
    name: "Aamira xxxxxxx (ACCA)",
    role: "Accountant",
    bio: "Profile coming soon.",
    image: "/images/team-sara-whitfield.jpg",
  },
  {
    id: "waleed",
    name: "Waleed (Part Qualified ACCA)",
    role: "Trainee Accountant",
    bio: "Profile coming soon.",
    image: "/images/team-harry-oneill.jpg",
  },
];
