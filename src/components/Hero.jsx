import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
  id="about"
  style={{
    backgroundImage: "url('/dolomites-night.jpg')",
    backgroundSize: "cover",             // ✅ always fills, crops if needed
    backgroundPosition: "center",        // ✅ keeps subject centered
    backgroundRepeat: "no-repeat",       // ✅ no tiling
    minHeight: "100vh",                  // ✅ fill full screen height
    width: "100%",                       // ✅ full width
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    textAlign: "center"
  }}
>

  <h2 data-aos="fade-up" style={{paddingTop: '120px'}}>~/aarush</h2>

  <p data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: '800px', margin: '0 auto' }}>
    I'm a second-year <strong>Software Engineering</strong> student at <strong>Western University</strong> with a thing for 
    <strong> algorithms, financial systems</strong>, and building ideas that outlive codebases.
  </p>

  <p data-aos="fade-up" data-aos-delay="200" style={{ maxWidth: '800px', margin: '20px auto' }}>
    My journey into tech started not with code, but with curiosity...
  </p>

  <p data-aos="fade-up" data-aos-delay="400" style={{ maxWidth: '800px', margin: '20px auto' }}>
    I'm fluent in <strong>Python, Java, C++, Swift</strong>, and dangerously curious about <strong>machine learning and algorithmic trading</strong>.
  </p>

  <p data-aos="fade-up" data-aos-delay="500" style={{ maxWidth: '800px', margin: '20px auto' }}>
    Whether it's a hackathon, a product prototype, or a 3 AM idea scribbled on my iPad — if it's worth building, I'm all in.
  </p>

  <p data-aos="fade-up" data-aos-delay="600" style={{ fontStyle: 'italic', maxWidth: '800px', margin: '20px auto' }}>
    “The best way to predict the future is to create it.”
  </p>
</section>

  );
};

export default Hero;

