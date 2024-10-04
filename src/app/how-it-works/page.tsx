import React from 'react';
import Image from 'next/image';

const HowItWorks: React.FC = () => {
    return (
        <main className="bg-white md:p-6 lg:p-8">
            <h1 className="m-10 p-10 text-5xl md:text-3xl lg:text-4xl font-bold text-center mb-6">How it Works</h1>
            <section className="max-w-2xl mx-auto">
                {[
                    {
                        src: "/signup.jpg",
                        alt: "Step 1",
                        title: "Step 1: Sign Up",
                        description: "Create an account by providing your basic information and setting up a secure password."
                    },
                    {
                        src: "/buildnetwork.jpg",
                        alt: "Step 2",
                        title: "Step 2: Customize Your Profile",
                        description: "Add personal details and preferences to tailor your experience."
                    },
                    {
                        src: "/coming-soon.jpg",
                        alt: "Step 3",
                        title: "Step 3: Explore Features",
                        description: "Discover the various features and tools available to enhance your productivity."
                    },
                    {
                        src: "/coming-soon.jpg",
                        alt: "Step 4",
                        title: "Step 4: Connect with Others",
                        description: "Engage with a community of like-minded individuals and share your experiences."
                    },
                    {
                        src: "/coming-soon.jpg",
                        alt: "Step 5",
                        title: "Step 5: Enjoy the Benefits",
                        description: "Take advantage of all the benefits and resources available to you."
                    }
                ].map((step, index) => (
                    <div key={index} className="bg-gray-100 shadow-md rounded-lg p-4 mb-4 flex flex-col md:flex-row items-center hover:scale-105 duration-300 ease-in-out">
                        <div className="md:w-1/2">
                            <h2 className="font-semibold text-2xl text-gray-700 mb-4">{step.title}</h2>
                            <p className="text-gray-700 text-xs md:text-sm">{step.description}</p>
                        </div>
                        <div className="md:w-1/2 md:pl-4">
                            <Image 
                                src={step.src} 
                                alt={step.alt} 
                                layout="responsive" 
                                width={1200} 
                                height={700} 
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default HowItWorks;