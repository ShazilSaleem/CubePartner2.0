export const site = {
  name: "Cube Accountants",
  tagline: "Chartered Accountants · Manchester",
  phone: "0161 55 22 666",
  phoneIntl: "+44 161 55 22 666",
  phoneHref: "+441615522666",
  whatsappDisplay: "+44 751 33 20 300",
  whatsapp: "https://wa.me/447513320300",
  email: "contact@cubeaccountants.com",
  address: ["Manchester Office:", "First Floor", "Parkway Two", "Manchester", "M14 7HR"],
  officeAddress: "Suite Twelve, First Floor, Parkway Two, Manchester, M14 7HR",
  footerAddress: "Parkway Two, Manchester, M14 7HR",
  officeAddressShort: "First Floor, Parkway Two, Manchester, M14 7HR",
  clientEmail: "client@cubeaccountants.com",
  companyNumber: "09408587",
};

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Client Hub", href: "/client-area" },
];

// "Our Network" dropdown in the header and footer column. No pages exist for
// these in the Figma file, so they stay as placeholders.
export const networkLinks: NavItem[] = [
  { label: "Cube Academy", href: "#" },
  { label: "Cube Partners", href: "#" },
];

// Secure client portal login. The design has no URL for it yet; replace "#" when known.
export const portalUrl = "#";
