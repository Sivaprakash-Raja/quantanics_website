import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";


export const metadata: Metadata = {
  title: "About Page | Quantanics",
  description: "This is About Page for Quantanics",
};

const AboutPage = () => {
  return (
    <>
      <section id="iotPage" className="pb-[120px] pt-[160px]">
        <div className="container">
          <div className=" w-full m-auto flex-col gap-y-8 z-10 h-full">
            <SectionTitle 
              title="What is IOT?"
              paragraph="Network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet."
              center
            />
            <div className="relative aspect-[37/22] m-auto mb-20  xs:w-full sm:w-3/4">
              <Image src="/images/about/IOTGif.webp" alt='iot' fill/>
            </div>
            <SectionTitle 
              title="Our Capabilites"
              paragraph="Our capabilities encompass a diverse range of skills and expertise, allowing us to deliver comprehensive solutions tailored to your needs."
              center
            />
            <div className=" relative aspect-[37/22] m-auto mb-20 xs:w-full sm:w-3/4">
              <Image src="/images/about/IOTImage.png" alt='iot' fill/>
            </div>
            <SectionTitle 
              title="Our Approach"
              paragraph="Our capabilities encompass a diverse range of skills and expertise, allowing us to deliver comprehensive solutions tailored to your needs."
              center
            />
            <div className=" relative aspect-[37/22] m-auto  xs:w-full sm:w-3/4">
              <Image src="/images/about/IOTApproachImage.png" alt='iot' fill/>
            </div>
          </div>  
        </div>
      </section>
    </>
  );
};

export default AboutPage;
