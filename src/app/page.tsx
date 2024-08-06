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

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <ToolsHighlight />
      <AppFeatures />
      <MeetUp />
      <UserStats />
      <TestimonialCarousel />
      <SpotlightSection />
      <JoinLearning />
      <Footer />
    </div>
  );
}
