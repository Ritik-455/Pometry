import CommonBlog from "@/components/common/CommonBlog";
import Community from "@/components/home/Community";
import Easy from "@/components/home/Easy";
import Hero from "@/components/home/Hero";
import SayHello from "@/components/home/SayHello";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Easy />
      <SayHello />
      <Community />
      <CommonBlog />
    </div>
  );
}
