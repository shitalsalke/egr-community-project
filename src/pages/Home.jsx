import React from 'react';

const Section = ({ children, className }) => (
  <section className={`min-h-screen w-full flex flex-col justify-center items-center px-6 ${className}`}>
    {children}
  </section>
);

const Card = ({ title, text, image, icon, className }) => (
    <div className={`bg-[#121212] border border-[#2E2E2E] rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm ${className}`}>
      <div className="flex-1 space-y-3">
        {icon && <div className="text-green-400 text-2xl">{icon}</div>}
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">{text}</p>
      </div>
      <img src={image} alt={title} className="w-48 h-auto rounded-lg object-cover" />
    </div>
  );
  

const cardData = [
    {
      title: "Connect with inspiring mentors",
      text: "Join a vibrant community where you can learn from accomplished women in tech, business, and creative fields. Discover new paths and unlock your potential.",
      image: "/images/asset2.avif",
      icon: "💬",
    },
    {
      title: "Discover exciting opportunities",
      text: "Our platform connects you with mentors who can guide you on your career journey. Embrace the possibilities and grow with us.",
      image: "/images/asset3.avif",
      icon: "🧭",
    },
    {
      title: "Foster meaningful connections",
      text: "Engage with mentors eager to share their wisdom and support your success. Build relationships that empower and inspire.",
      image: "/images/asset4.avif",
      icon: "✅",
    },
    {
      title: "Realize your potential",
      text: "Step into a world of growth and inspiration. Our mentors are here to support you every step of the way, helping you achieve your dreams.",
      image: "/images/asset5.avif",
      icon: "✨",
    },
  ];
  
  

const LandingPage = () => {
  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <img src="/images/logo-white.avif" alt="Educated Girls Rock" className="h-16 w-auto" />
        </div>
        <div className="space-x-4">
          <button className="bg-egr-green hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md">Search Mentors</button>
          <button className="bg-egr-green hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md">About Us</button>
          <button className="bg-egr-green hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md">Become a Mentor</button>
          <button className="bg-yellow-300 hover:bg-yellow-600 text-black font-medium px-5 py-2 rounded-md">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16 lg:px-32 py-24 w-full">
        {/* Left Text */}
        <div className="flex-1 max-w-full md:max-w-2xl space-y-8">
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            CONNECTING GIRLS TO WOMEN<br />WHO’VE BEEN THERE.
            </h1>
            <p className="text-2xl md:text-1xl text-gray-300">
            Connect with inspiring women mentors in tech, business, and creative fields. Let’s grow and succeed together.
            </p>
            <br />
            <button className="bg-egr-green hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md">Find a mentor</button>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full flex justify-center">
            <img
            src="/images/asset1.avif"
            alt="Mentors"
            className="rounded-lg w-full max-w-6xl object-cover"
            />
        </div>
        </section>

      {/* Scrollable Sections From HomeScroll */}
      <Section>
        <h2 className="text-4xl font-bold mb-10 text-center">Shape your future with guidance</h2>
        <div className="flex flex-wrap gap-8 w-full max-w-7xl">
        {cardData.map((card, index) => (
        <Card
            key={index}
            title={card.title}
            text={card.text}
            image={card.image}
            icon={card.icon}
            className={`${
            index === 0 || index === 3
                ? 'md:w-[55%] w-full md:min-h-[360px]'
                : 'md:w-[40%] w-full md:min-h-[300px]'
            }`}
        />
        ))}
        </div>
        </Section>


        <Section className="bg-white text-black py-12 min-h-[550px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl">
          {[
            {
              title: 'Stories that inspire and empower',
              text: 'Uncover the transformative power of mentorship.',
              img: '/images/asset7.avif',
            },
            {
              title: 'Journeys in tech and business',
              text: 'Explore the paths our mentors have taken.',
              img: '/images/asset2.avif',
            },
            {
              title: 'Insights from creative leaders',
              text: 'Dive into the creative processes of our mentors.',
              img: '/images/asset6.avif',
            },
            {
              title: 'Connections that last a lifetime',
              text: 'Discover how mentorship builds lasting relationships.',
              img: '/images/asset4.avif',
            },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <img src={item.img} alt={item.title} className="mb-5 rounded-lg mx-auto" />
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-lg text-gray-700 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>


      <section className="bg-egr-black text-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Heading */}
            <div>
            <p className="uppercase tracking-wide text-sm text-egr-gray mb-2">Find the guidance you seek</p>
            <h2 className="text-4xl font-bold mb-4">Your inquiries, our insights</h2>
            <p className="text-lg text-egr-gray max-w-3xl">
                Discover answers to frequently asked questions about our mentorship community and learn how to embark on your journey.
            </p>
            </div>

            {/* FAQ Rows */}
            <div className="space-y-10 divide-y divide-[#2E2E2E]">
            <div className="md:flex justify-between pt-6">
                <h3 className="font-semibold text-lg mb-2 md:mb-0">How can I connect with a mentor?</h3>
                <p className="text-egr-gray md:ml-8">
                Connecting with a mentor is straightforward! Use our intuitive search tool to find inspiring women in tech, business,
                and creative fields eager to support you.
                </p>
            </div>

            <div className="md:flex justify-between pt-6">
                <h3 className="font-semibold text-lg mb-2 md:mb-0">Can I select my own mentor?</h3>
                <p className="text-egr-gray md:ml-8">
                Yes, you can! Browse through mentor profiles and choose someone who matches your interests and aspirations for a tailored experience.
                </p>
            </div>

            <div className="md:flex justify-between pt-6">
                <h3 className="font-semibold text-lg mb-2 md:mb-0">Will there be any fees for this?</h3>
                <p className="text-egr-gray md:ml-8">
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
            <button className="bg-egr-green text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition">
            Get started
            </button>
        </div>
        </section>


        <footer className="bg-grey-200 text-black py-8 px-6">
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
  );
};

export default LandingPage;
