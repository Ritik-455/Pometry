import CommonBlog from "@/components/common/CommonBlog";
import Community from "@/components/home/Community";
import EasyTabs from "@/components/home/EasyTabs";
import Hero from "@/components/home/Hero";
import SayHello from "@/components/home/SayHello";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <EasyTabs />
      <SayHello />
      <Community />
      <CommonBlog />
    </div>
  );
}
