import { CardSingle } from "@/components/Lv3_Cells/CardList/@types";

export const cardsData: CardSingle[] = [
  {
    id: 0,
    title: "The map of mathematics",
    desc: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    text: "Featured",
    variant: "purple",
    color: "purple-800",
  },
  {
    id: 0,
    title: "Design for how people think",
    desc: "Aliquam ut euismod condimentum elementum ultricies volutpat sit non. ",
    text: "Popular",
    variant: "blue",
    color: "blue-800",
  },
  {
    id: 0,
    title: "International & commercial law",
    desc: "Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.",
    text: "New",
    variant: "green",
    color: "green-800",
  },
];
export const Boxdata = [
  {
    id: 0,
    imageSrc: "/assets/svgviewer-output (012).svg",
    altText: "heart",
    number: "195",
    label: "user countries",
  },
  {
    id: 1,
    imageSrc: "/assets/svgviewer-output (013).svg",
    altText: "diamond",
    number: "1M",
    label: "valued teachers",
  },
  {
    id: 2,
    imageSrc: "/assets/svgviewer-output (014).svg",
    altText: "graduateCap",
    number: "17M",
    label: "happy students",
  },
];

export const testimonialCardData = [
  {
    id: 0,
    desc: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    imageUrl: "/assets/svgviewer-output (14).svg",
    name: "Hellen Jummy",
    tagline: "Financial Counselor",
  },
  {
    id: 1,
    desc: "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
    imageUrl: "/assets/svgviewer-output (015).svg",
    name: "Ralph Edwards",
    tagline: "Math Teacher",
  },
  {
    id: 3,
    desc: "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
    imageUrl: "/assets/svgviewer-output (016).svg",
    name: "Hellena John",
    tagline: "Psychology Student",
  },
  {
    id: 4,
    desc: "Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.",
    imageUrl: "/assets/svgviewer-output (016).svg",
    name: "John Doe",
    tagline: "Product Manager",
  },
];

// footerData.ts
interface FooterSection {
  title: string;
  content: { text: string; hasIcon?: boolean; isBeta?: boolean }[];
}

export const footerData: FooterSection[] = [
  {
    title: "Product",
    content: [
      { text: "Pricing" },
      { text: "Overview" },
      { text: "Accessibility", isBeta: true },
      { text: "Browse" },
    ],
  },
  {
    title: "Solutions",
    content: [
      { text: "Brainstorming" },
      { text: "Ideation" },
      { text: "Wireframing" },
      { text: "Research" },
    ],
  },
  {
    title: "Resources",
    content: [
      { text: "Help Center" },
      { text: "Tutorials" },
      { text: "Blog" },
      { text: "FAQs" },
    ],
  },
  {
    title: "Support",
    content: [
      { text: "Contact Us" },
      { text: "Documentation" },
      { text: "Developers" },
      { text: "Integrations" },
    ],
  },
  {
    title: "Company",
    content: [
      { text: "About" },
      { text: "Press" },
      { text: "Events" },
      { text: "Request Demo", hasIcon: true },
    ],
  },
];
