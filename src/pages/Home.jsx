import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';


const Section = ({ children, className }) => (
  <section className={`w-full flex flex-col justify-center items-center px-6 ${className}`}>
    {children}
  </section>
);

const cardData = [
    {
      title: "Connect with inspiring mentors",
      text: "Join a vibrant community where you can learn from accomplished women in tech, business, and creative fields. Discover new paths and unlock your potential.",
      image: "/images/asset9.jpeg",
    },
    {
      title: "Discover exciting opportunities",
      text: "Our platform connects you with mentors who can guide you on your career journey. Embrace the possibilities and grow with us.",
      image: "/images/asset10.jpeg",
    },
    {
      title: "Foster meaningful connections",
      text: "Engage with mentors eager to share their wisdom and support your success. Build relationships that empower and inspire.",
      image: "/images/asset11.jpeg",
    },
    {
      title: "Realize your potential",
      text: "Step into a world of growth and inspiration. Our mentors are here to support you every step of the way, helping you achieve your dreams.",
      image: "/images/asset12.jpeg",
    },
  ];
  
  

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
    <div className="bg-egr-gray text-black font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        {/* Left Image */}
        <div className="absolute inset-0 w-1/2 h-full">
          <img
            src="/images/asset8.jpeg"
            alt="Mentor Left"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <img
            src="/images/asset12.jpeg"
            alt="Mentor Right"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Overlay Box */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="bg-black bg-opacity-60 text-white p-8 rounded-xl text-center max-w-2xl space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              CONNECTING GIRLS TO WOMEN<br />WHO’VE BEEN THERE.
            </h1>
            <p className="text-lg md:text-xl">
              Connect with inspiring women mentors in tech, business, and creative fields. Let’s grow and succeed together.
            </p>
            <button
              onClick={() => window.location.href = '/search'}
              className="bg-egr2-cgrey text-black px-6 py-3 rounded-md font-semibold hover:bg-green-300 transition"
            >
              Find a Mentor
            </button>
          </div>
        </div>
      </section>




      <Section className="bg-egr-cglight text-black pt-8 pb-12 mt-[150px]">
        <div className="space-y-10 max-w-6xl mx-auto">
          {[
            {
              title: 'Stories that inspire and empower',
              text: 'Uncover the transformative power of mentorship.',
              img: '/images/asset15.jpeg',
            },
            {
              title: 'Journeys in tech and business',
              text: 'Explore the paths our mentors have taken.',
              img: '/images/asset16.jpeg',
            },
            {
              title: 'Insights from creative leaders',
              text: 'Dive into the creative processes of our mentors.',
              img: '/images/asset17.jpeg',
            },
            {
              title: 'Connections that last a lifetime',
              text: 'Discover how mentorship builds lasting relationships.',
              img: '/images/asset14.jpeg',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                i % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[400px] object-cover object-center rounded-xl"
                />
              </div>


              {/* Text */}
              <div className="w-full md:w-1/2 space-y-4 text-left">
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <p className="text-lg text-black">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>





      

      {/* Scrollable Sections From HomeScroll */}
      <section className="bg-[#FDF6E9] pt-12 pb-16 overflow-hidden">
        <h2 className="text-5xl font-bold mb-10 text-center text-black">Shape your future with guidance</h2>

        <div className="relative overflow-hidden w-full">
          <div className="flex w-max animate-scroll-loop hover:[animation-play-state:paused]">
            {/* Repeat content 3x for smooth loop */}
            {[...Array(3)].flatMap(() => cardData).map((card, index) => (
              <div
                key={index}
                className="bg-[#CFBFA9] text-black rounded-2xl border border-[#2E2E2E] w-[400px] mx-4 flex-shrink-0 shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <img src={card.image} alt={card.title} className="h-56 w-full object-cover rounded-t-2xl" />
                <div className="p-6 space-y-3">
                  <div className="text-2xl">{card.icon}</div>
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="text-sm">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      <section className="bg-egr-cglight text-black py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Heading */}
            <div>
            <p className="uppercase tracking-wide text-sm text-egr-black mb-2">Find the guidance you seek</p>
            <h2 className="text-4xl font-bold mb-4">Your inquiries, our insights</h2>
            <p className="text-lg text-egr-black max-w-3xl">
                Discover answers to frequently asked questions about our mentorship community and learn how to embark on your journey.
            </p>
            </div>

            {/* FAQ Rows */}
            <div className="space-y-10 divide-y divide-[#2E2E2E]">
            <div className="md:flex justify-between pt-6">
                <h3 className="font-semibold text-lg mb-2 md:mb-0">How can I connect with a mentor?</h3>
                <p className="text-egr-black md:ml-8">
                Connecting with a mentor is straightforward! Use our intuitive search tool to find inspiring women in tech, business,
                and creative fields eager to support you.
                </p>
            </div>

            <div className="md:flex justify-between pt-6">
                <h3 className="font-semibold text-lg mb-2 md:mb-0">Can I select my own mentor?</h3>
                <p className="text-egr-black md:ml-8">
                Yes, you can! Browse through mentor profiles and choose someone who matches your interests and aspirations for a tailored experience.
                </p>
            </div>

            <div className="md:flex justify-between pt-6">
                <h3 className="font-semibold text-lg mb-2 md:mb-0">Will there be any fees for this?</h3>
                <p className="text-egr-black md:ml-8">
                Joining our platform is completely free. We are committed to making mentorship accessible to all high school girls ready to learn and grow.
                </p>
            </div>
            </div>
        </div>
        </section>





      <section className="relative h-[500px] w-full overflow-hidden flex items-center justify-center text-white">
        {/* Background Image with overlay */}
        <img
            src="/images/asset1.avif"
            alt="Mentorship background"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Foreground content */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Shape your journey with guidance</h2>
            <p className="text-lg text-gray-200 mb-6">
            Connect with inspiring women mentors in tech, business, and creative fields.
            Explore new paths, share your story, and thrive in a nurturing community.
            </p>
            <button 
            onClick={() => navigate('/search')}
            className="bg-egr2-cgrey text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-300 transition">
            Get started
            </button>
        </div>
        </section>


        <footer className="bg-black bg-opacity-50 text-black py-8 px-6 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
            <img src="/images/logo-white.avif" alt="EGR Logo" className="h-16 w-auto" />
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
            <a href="https://facebook.com/educatedgirlsrock" target="_blank" rel="noreferrer">
                <div className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition">
                <img src="/icons/facebook.svg" alt="Facebook" className="h-5 w-5" />
                </div>
            </a>
            <a href="https://instagram.com/educatedgirlsrock" target="_blank" rel="noreferrer">
                <div className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition">
                <img src="/icons/instagram.svg" alt="Instagram" className="h-5 w-5" />
                </div>
            </a>
            <a href="https://www.educatedgirlsrock.org/" target="_blank" rel="noreferrer">
                <div className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition">
                <img src="/icons/link.svg" alt="X" className="h-5 w-5" />
                </div>
            </a>
            <a href="https://linkedin.com/company/educatedgirlsrock" target="_blank" rel="noreferrer">
                <div className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition">
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
                </div>
            </a>
            <a href="https://youtube.com/@educatedgirlsrock" target="_blank" rel="noreferrer">
                <div className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition">
                <img src="/icons/youtube.svg" alt="YouTube" className="h-5 w-5" />
                </div>
            </a>
            </div>
        </div>
        </footer>



    </div>
    </PageLayout>
  );
};

export default LandingPage;
