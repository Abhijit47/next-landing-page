import Navbar from '@/compoments/Navbar';
import Hero from '@/compoments/Hero';
import Features from '@/compoments/Features';
import Story from '@/compoments/Story';
import WhyChooseUs from '@/compoments/WhyChooseUs';
import DigitalServices from '@/compoments/DigitalServices';
import SeoServices from '@/compoments/SeoServices';
import OtherServices from '@/compoments/OtherServices';

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        style={{
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(90deg, rgba(10, 86, 241, 0.10) 0%, rgba(230, 143, 80, 0.10) 100%)',
        }}>
        <Hero />
        {/* <Divider></Divider> */}
        <Features />
        {/* <Divider></Divider> */}
        <Story />
        {/* <Divider></Divider> */}
        <WhyChooseUs />
        {/* <Divider></Divider> */}
        <DigitalServices />
        {/* <Divider></Divider> */}
        <SeoServices />
        {/* <Divider></Divider> */}
        <OtherServices />
      </main>
    </>
  );
}
