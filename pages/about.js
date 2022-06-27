import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => (
  <>
    <Navbar />
    <div className="custom-box-hero">
      <img
        style={{ width: "50px", height: "200px" }}
        className="custom-img-hero"
        src="https://i.picsum.photos/id/171/2048/1536.jpg?hmac=16eVtfmqTAEcr8VwTREQX4kV8dzZKcGWI5ouMlhRBuk"
      />
      <span className="custom-content-hero">About us</span>
    </div>
    <Footer />
  </>
);

export default About;
