import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'The quality of the fabric is amazing! The dress fits perfectly and looks even better than in the pictures. Will definitely shop again!',
      image: 'https://randomuser.me/api/portraits/women/43.jpg'
    },
    {
      name: 'Rahul Patel',
      location: 'Delhi',
      rating: 4,
      comment: 'Great collection and timely delivery. The only reason I gave 4 stars is because the color was slightly different than shown online.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Ananya Gupta',
      location: 'Bangalore',
      rating: 5,
      comment: 'Absolutely love my new jumpsuit! The embroidery work is exquisite and it got so many compliments at the party. Highly recommend!',
      image: 'https://randomuser.me/api/portraits/women/65.jpg'
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">WHAT OUR CUSTOMERS SAY</h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Cards */}
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-lg shadow-md mb-8 transition-opacity duration-500 ${index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 right-0'}`}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.comment}"</p>
            </div>
          ))}

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-red-600' : 'bg-gray-300'}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;