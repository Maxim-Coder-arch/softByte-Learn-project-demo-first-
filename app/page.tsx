import Loader from './components/defaultComponents/loader';
import Footer from './components/footer/footer';
import HeroSection from './components/hero/heroSection';
import AboutUs from './components/main/aboutUs/aboutUs';
import MainCourses from './components/main/courses/coursesCards/mainCourses';
import TitleCourses from './components/main/courses/titleCourses';
import ForWhom from './components/main/forWhom/forWhom';
import SectionWork from './components/main/sectionWork/sectionWork';
import TitleSectionWork from './components/main/sectionWork/titleSectionWork';
import Menu from './components/sidebar/menu';
import './scss/main/main.css';
export default function Home() {
  return (
    <>
      <Loader />

      <Menu />

      <HeroSection />

      <AboutUs />
      <TitleSectionWork />
      <SectionWork />
      <ForWhom />
      <TitleCourses />
      <MainCourses />

      <Footer />
    </>
  );
}
