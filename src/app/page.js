import Banner from "@/Components/Banner";
import BannerBottom from "@/Components/BannerBottom";
import Review from "@/Components/Review";
import SimpleProcess from "@/Components/SimpleProcess";
import WhyStudy from "@/Components/WhyStudy";


export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <BannerBottom></BannerBottom>
     <WhyStudy></WhyStudy>
     <SimpleProcess></SimpleProcess>
     <Review></Review>
    </div>
  );
}
