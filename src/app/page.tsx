import {
  AppFeatures,
  Footer,
  Header,
  Hero,
  JoinLearning,
  MeetUp,
  SpotlightSection,
  TestimonialCarousel,
  ToolsHighlight,
  UserStats,
} from "@/components";

import { testimonialCardData } from "./data/app.data";

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <ToolsHighlight />
      <AppFeatures />
      <MeetUp />
      <UserStats />
      <TestimonialCarousel data={testimonialCardData} />
      <SpotlightSection />
      <JoinLearning />
      <Footer />
    </div>
  );
}
