import { CompaniesLogos } from "../../components/CompaniesLogos";
import { Header } from "../../components/Header";
import { Testimonials } from "../../components/Testimonials";
import BasicCard from "../../common/Card";

const Home = () => {
  return (
    <>
      <Header />
      <CompaniesLogos />
      <Testimonials />
      <BasicCard />
    </>
  );
};

export default Home;
