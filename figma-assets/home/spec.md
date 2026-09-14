# Home page spec — Figma node 1022:6112 (1440 × 5644)

Pulled from get_design_context on 2026-09-14. Tokens live in app/globals.css.
Asset files referenced below live in public/images and public/icons.

## Page order (absolute top in design)
Header 0 (sticky, h 80) · Hero 0 (min-h 738) · Mission 1007 · Services 1830 ·
Sectors 2538 · Stats 3696 · Benefits 4204 · Footer 4870.

## Buttons
- Primary: bg-brand, text-brand-foreground, px 32 py 16, gap 12, text-button uppercase, trailing "→".
- Outline: border 1px ink/30, text-ink, same padding/type.
- Header small: bg-brand, px 24 py 12, text-nav.
- Arrow glyph is "Segoe UI Bold" in the design; render as a text arrow in font-display.

## Header (1022:6489)
bg-white/90, backdrop-blur 12, border-b ink/10, h 80, px 80, max-w 1600, sticky.
Logo cube-partner-logo.svg 184 × 41.6.
Nav gap 36, text-nav uppercase: Home (brand), Services, About, Contact, Client Area (ink/70).
Right gap 20: Partners, Academy (ink/50), "Log In" small button.

## Hero (1022:6280)
bg-white, min-h 738, pt 112 pb 80 px 80, overflow-clip.
- BG photo hero-meeting.jpg over right 62% (inset-left 38%), opacity 14%, desaturated
  (white overlay with mix-blend saturation).
- Gradient overlay left→right: white → white at 48% → transparent.
- Decorative square 420px, border 40px surface, opacity 5, rotate 12°, at (-135, -151).
- Brand rule: bottom-left, h 4, width 33.33%, bg-brand.
Content column max-w 768, gap ~30:
- Eyebrow: "Chartered Accountants · Manchester"
- H1 text-display uppercase, max-w 827: "Your / trusted / partner in / accounting" (last line brand)
- Lead (text-lead, ink/75, max-w 448): "Cube Accountants offers a personal and professional
  service, advising clients on a range of financial solutions."
- Buttons (gap 1px): "Get Started →" primary · "Services →" outline
- Fact strip: border-t/b ink/15, grid 1.4fr / 2fr, h 114.
  Left cell (border-r ink/15, pr 24, py 20): eyebrow "Location" + text-label-lg uppercase
  "Central Manchester · United Kingdom".
  Right: 3 cells w 148 each, border-l ink/15, px 8 pt 20, centred:
  value 16px Outfit Black uppercase + eyebrow ink/45 → ICAEW/Chartered · 500+/Clients · 2015/Established.

## Mission (1022:6115)
bg-surface, py 160 px 80, 12-col grid gap 32.
Col 1-2: eyebrow "Mission".
Col 3-12 (w 1061): text-statement (Outfit Light):
"At Cube Accountants, we aim to simplify accounting for businesses and individuals by providing
expert solutions tailored to your needs. " + brand: "Our mission is to help you navigate complex
financial challenges with confidence and ease."
pt 48: outline button "Learn more →".

## Services (1022:6127)
px 80, gap 64.
Top row justify-between items-end:
- Left (gap 25): eyebrow "Transforming Teamwork" + H2 text-h2 uppercase "Tailor made / services".
- Right (gap 32, pr 14): text-body ink/60 "At Cube Accountants we offer a range of services to suit
  our clients' needs. What makes our services unique is the ability to communicate effectively with
  our clients to understand their needs and build a solid relationship. We provide a service which
  is tailored to you." + primary button "Discover more →".
Grid: 4 equal cards, border surface/14 (outer border-t/l, cells border-b/r), min-h 296, p 40.
Card: row (icon 28 · numeral text-numeral ink/15 "01") · gap 16 · h3 text-h3 uppercase · body-tight opacity-70.
1 Accounts — icon-service-accounts.svg — "Enhance campaign planning, collaboration and performance tracking."
2 Audit — icon-service-audit.svg — "Streamline task assignment, progress tracking and resource allocation."
3 Business Advisory — icon-service-business-advisory.svg — "Facilitate data-driven decision making, scenario analysis and goal tracking."
4 Payroll — icon-service-payroll.svg — "Optimise process automation, documentation and communication."

## Sectors (1022:6326)
bg-white, py 128 px 80, gap 64.
Header gap 24: eyebrow "Sectors" · H2 text-h2 uppercase "Specialist in your / sector" (max-w 672) ·
text-body ink/60 max-w 448 "Deep sector knowledge, applied to the numbers that move your business."
Grid 3 × 2, rows 226, border surface/14. Card p 40 gap 32: icon 28 · gap 12 · h4 text-h4 uppercase ·
body-tight opacity-65 "Specialist accounting, compliance and advisory support built around the way your sector works."
Healthcare (icon-sector-healthcare) · Legal and Professional (icon-sector-legal) ·
Property and Construction (icon-sector-property) · Contractors and Freelancers (icon-sector-contractors) ·
Transport (icon-sector-transport) · Catering (icon-sector-catering).

## Stats (1022:6190)
px 80, flex gap 56 items-end.
Left flex-1 gap 40: eyebrow "Client Satisfaction Score"; 3 cols gap 40, each border-t 2px brand, pt 20, gap 12:
text-stat + text-body-tight ink/60 →
"500+" / "Efficient Schedules Created" · "120M" / "Tasks Organized and Completed" · "98%" / "Exceptional User Satisfaction Rate".
Right: image 520 × 380, hero-meeting.jpg cover, desaturated.

## Benefits (1022:6213)
bg-white, border-t/b ink/10, py 128 px 80, flex gap 56.
Left w 380: eyebrow "Client Benefits" · h2 text-h2-sm uppercase "Why partner / with Cube?" ·
text-body ink/60 max-w 384 "Read some of the benefits that our clients enjoy by joining our network." ·
pt 36 primary button "Explore all →".
Right flex-1 min-h 327: 3 cards border surface/14, p 36; middle card bg-surface.
Card: row (icon 28 · numeral text-numeral-sm opacity-20) · gap 12 · h4 uppercase · body-tight opacity-70 ·
link row gap 4 pt 11.5: "Check here" text-nav ink + icon-arrow-check-here.svg 14.
1 Client Portal — icon-benefit-client-portal — "Access top-notch accounting services tailored to your business needs."
2 Time and Cost Efficiency — icon-benefit-time-cost — "Save valuable time and reduce costs with our streamlined processes."
3 Dedicated Support — icon-benefit-support — "Receive ongoing support from our experienced professionals."

## Footer (1022:6407)
bg-surface, border-t surface-border.
Block 1 (pt 96 px 80 gap 48): logo 184 × 41.6 · wordmark "Cube" text-wordmark uppercase ink/5.
Block 2 (pt 48 pb 64 px 80, 4 equal cols gap 48):
- Contact Us (eyebrow) · text-body ink/70: "Manchester Office: / First Floor / Parkway Two / Manchester / M14 7HR" ·
  text-small "Telephone: 0161 55 22 666" · "Email: / contact@cubeaccountants.com"
- Disclaimer (eyebrow) · text-body ink/60: "Cube Accountants takes no responsibility for information taken from our
  website without prior professional consultation with us." · "Cube Accountants Limited is a company registered in
  England and Wales, Company No: 09408587."
- Useful Links (eyebrow) · list gap 12, text-small ink/75: About Us, Careers, Contact us, Services,
  Forms & Templates, Privacy Policy, Terms & Conditions
- Follow Us (eyebrow) · 3 squares 44 × 44 bg ink/10 gap 1, icons 16 (icon-social-1..3) ·
  pt 16 gap 12: ICAEW box (border ink/15, px 20 py 12: "ICAEW" 14px Outfit Bold tracking .025em + eyebrow ink/60
  "Chartered Accountants") · "BAS" box (bg-white, px 24 py 12, 18px Outfit Black tracking .05em).
Bottom bar: border-t ink/10, px 80 py 24, justify-between, text-legal ink/45:
"© 2026 Cube Accountants Limited" · "Chartered Accountants · Manchester, UK".
WhatsApp FAB: 56 × 56 bg-brand, right 24 bottom 25, shadow-brand, icon-whatsapp.svg 24.
