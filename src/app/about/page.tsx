import Image from 'next/image';

function About() {
    return (
        <main className=" bg-gray-50 py-16">
            <div className=" m-10 p-10 max-w-7xl mx-auto px-4">
                <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
                    About ShareSphere
                </h1>
                <p className="text-lg text-center text-gray-600 mb-12">
                    At ShareSphere, we believe in the power of connections. Our platform is designed to foster friendships, encourage sharing, and create engaging experiences for users worldwide. Join us in building a community where everyone can thrive!
                </p>

                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left Column: Image */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <Image
                            src="/team.jpg" // Replace with your team or relevant image
                            alt="Our Team"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    {/* Right Column: Mission Statement */}
                    <div className="md:w-1/2 md:pl-8">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-600 mb-6">
                            Our mission is to create a dynamic social platform that fosters connections and facilitates meaningful interactions among users. We aim to empower individuals to share their stories, experiences, and knowledge.
                        </p>

                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                        <p className="text-gray-600 mb-6">
                            We envision a world where everyone can find a place to connect, share, and learn from each other. We strive to make ShareSphere the go-to platform for building lasting friendships and networks.
                        </p>

                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Us</h2>
                        <p className="text-gray-600 mb-6">
                            We invite you to join our community of passionate individuals. Together, we can make meaningful connections and create unforgettable experiences.
                        </p>

                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;
