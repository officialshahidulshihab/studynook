import Banner from "@/Components/Banner";
import BannerBottom from "@/Components/BannerBottom";
import Featured from "@/Components/Featured";
import ReadyToFind from "@/Components/ReadyToFind";
import Review from "@/Components/Review";
import SimpleProcess from "@/Components/SimpleProcess";
import WhyStudy from "@/Components/WhyStudy";


export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <BannerBottom></BannerBottom>
     <Featured></Featured>
     <WhyStudy></WhyStudy>
     <SimpleProcess></SimpleProcess>
     <Review></Review>
     <ReadyToFind></ReadyToFind>
    </div>
  );
}
