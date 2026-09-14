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
  companyNumber: "09408587",
};

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Client Area", href: "/client-area" },
];

// Present in the design header but with no page in the Figma file.
export const secondaryNav: NavItem[] = [
  { label: "Partners", href: "#" },
  { label: "Academy", href: "#" },
];

export const footerLinks: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "#" },
  { label: "Contact us", href: "/contact" },
  { label: "Services", href: "/services" },
  { label: "Forms & Templates", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

export const socialLinks = [
  { label: "Facebook", href: "#", icon: "/icons/icon-social-1.svg" },
  { label: "LinkedIn", href: "#", icon: "/icons/icon-social-2.svg" },
  { label: "Twitter", href: "#", icon: "/icons/icon-social-3.svg" },
];

/** Three office photos used in the About and Contact page heroes. */
export const officePhotos = [
  { src: "/images/about-office-1.jpg", alt: "Cube Accountants Manchester office" },
  { src: "/images/about-office-2.jpg", alt: "Cube Accountants Manchester office" },
  { src: "/images/about-office-3.jpg", alt: "Cube Accountants Manchester office" },
];
