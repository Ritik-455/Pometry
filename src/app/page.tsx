import Community from "@/components/home/Community";
import EasyTabs from "@/components/home/EasyTabs";
import Hero from "@/components/home/Hero";
import HomeBlog from "@/components/home/HomeBlog";
import SayHello from "@/components/home/SayHello";

export default function Home() {
  return (
    <>
      <Hero />
      <EasyTabs />
      <SayHello />
      <Community />
      <HomeBlog/>
    </>
  );
}
