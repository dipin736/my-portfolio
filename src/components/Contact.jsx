import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const Contact = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".contact-form", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%"
      }
    });
  }, { scope: container });

  return (
    <section id="contact" ref={container} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>

        <div className="max-w-2xl mx-auto contact-form">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;