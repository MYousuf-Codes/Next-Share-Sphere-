import Image from 'next/image';
import TrustedBy from '@/components/TrustedBy';

function Hero() {
  return (
    <main className="m-10 overflow-hidden flex flex-col items-center justify-between space-y-16">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center md:flex-row md:items-start justify-between m-10 space-y-15 md:space-y-0 md:space-x-10 w-full">
        {/* Text Section */}
        <div className="max-w-[600px]">
          <h1 className="m-8 text-5xl md:text-7xl text-black font-bold text-center md:text-left">
            Make <br /> New Friends
          </h1>
          <p className="m-8 p-0 text-gray-700 text-center md:text-left">
            ShareSphere is a dynamic social platform that fosters connections, encourages sharing, and creates engaging experiences for users worldwide.
          </p>
          <button className="text-xl m-10 p-2 rounded-xl border border-blue-500 hover:border-white hover:bg-blue-500 hover:text-white active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out">
            Join Now
          </button>
        </div>

        {/* Image Section */}
        <div className="m-8 relative order-first md:order-none">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-8 border-blue-300 rounded-full overflow-hidden m-20 top-15 shadow-lg scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src="/bg.png"
              alt="Friends Image"
              fill
              className="absolute top-10"
            />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* App Feedback Section */}
      <section className="w-full bg-gray-50 py-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          What People Are Saying
        </h2>
        <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Feedback Card 1 */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform hover:scale-105 duration-300 ease-in-out">
            <h3 className="font-semibold text-2xl text-gray-700 mb-4">John Doe</h3>
            <p className="text-gray-600">
              &quot;ShareSphere is an amazing platform! I've made so many new connections and learned a lot. Highly recommend!&quot;
            </p>
          </div>

          {/* Feedback Card 2 */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform hover:scale-105 duration-300 ease-in-out">
            <h3 className="font-semibold text-2xl text-gray-700 mb-4">Jane Smith</h3>
            <p className="text-gray-600">
              &quot;The user experience is top-notch. The design is sleek, and the community is incredibly welcoming.&quot;
            </p>
          </div>

          {/* Feedback Card 3 */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform hover:scale-105 duration-300 ease-in-out">
            <h3 className="font-semibold text-2xl text-gray-700 mb-4">Emily Johnson</h3>
            <p className="text-gray-600">
              &quot;I love how easy it is to navigate and connect with like-minded individuals. A must-try!&quot;
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
