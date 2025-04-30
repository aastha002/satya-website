import Hero from '../components/Hero';
import Aim from '@/components/Aim';
import About from '../components/About';
import SoulOfSatya from '@/components/SoulOfSatya';
import OurProducts from '@/components/OurProducts';
import People from '../components/People';
import StatsSection from '@/components/StatsSection';
import ClientsSpeak from '@/components/ClientsSpeak';
import GetInTouch from '@/components/GetInTouch';
import NewsletterSection from '@/components/Newsletter';
import Video from '@/components/Video';
import AwardsShowcase from '@/components/AwardsShowcasee';
import PartnersCarousel from '@/components/Partners';
import Facebookpost from '@/components/Facebookpost';
import Footer from '@/components/Footer';

const boardOfDirectors = [
  { name: "Mr. Sanjay Gandhi", title: "Nominee Director", image: "/directors/sanjay.png" },
  { name: "Ms. Surekha Marandi", title: "Independent Director", image: "/directors/surekha.png" },
  { name: "Mr. Vivek Tiwari", title: "MD & CEO", image: "/directors/vivek.png" },
  { name: "Mr. C.P. Mohan", title: "Independent Director", image: "/directors/mohan.png" },
  { name: "Mr. Arun Sharma", title: "Independent Director", image: "/directors/arun.png" },
  { name: "Ms. Radhika Menon", title: "Nominee Director", image: "/directors/radhika.png" },
];

const teamAtSatya = [
  { name: "Riya Sharma", title: "Software Engineer", image: "/team/riya.png" },
  { name: "Amit Joshi", title: "Product Manager", image: "/team/amit.png" },
  { name: "Neha Mehra", title: "UX Designer", image: "/team/neha.png" },
];

const employeeSpeaks = [
  { name: "Rakesh Patel", title: "‘A great place to grow!’", image: "/employees/rakesh.png" },
  { name: "Anita Desai", title: "‘Supportive team & leadership’", image: "/employees/anita.png" },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SoulOfSatya />
      <Aim />
      <OurProducts />

      <People title="Our Board of Directors" people={boardOfDirectors} />
      <People title="At Satya, Our Team is Our Strength" people={teamAtSatya} />
      <People title="Employee Speaks" people={employeeSpeaks} />

      <Video />

      <StatsSection />
      <ClientsSpeak />
      <AwardsShowcase />
      <PartnersCarousel />
      <Facebookpost />
      <GetInTouch />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
