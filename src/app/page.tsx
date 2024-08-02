import Header from "@/components/common/Header";
import Community from "@/components/home/Community";
import Easy from "@/components/home/Easy";
import Hero from "@/components/home/Hero";
import HomeBlog from "@/components/home/HomeBlog";
import SayHello from "@/components/home/SayHello";

export default function Home() {
  return (
    <>
      <Hero />
      <Easy />
      <SayHello />
      <Community />
      <HomeBlog/>
    </>
  );
}
