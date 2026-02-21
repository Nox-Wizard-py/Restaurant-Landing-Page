import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  { name: 'Rohan Sharma', review: 'The most authentic biryani I have ever tasted. It felt like a journey back in time. Absolutely mesmerizing!', location: 'Mumbai' },
  { name: 'Priya Singh', review: 'Behrouz Biryani is not just food, it\'s an experience. The aroma, the texture, the taste... everything is perfect. Highly recommended!', location: 'Delhi' },
  { name: 'Anjali Mehta', review: 'I ordered for a family gathering and everyone was blown away. The packaging is as royal as the biryani itself. A true 5-star experience.', location: 'Bangalore' },
  { name: 'Vikram Patel', review: 'As a biryani connoisseur, I can say with confidence that this is the real deal. The Dum Gosht Biryani is a masterpiece.', location: 'Hyderabad' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-stone-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-amber-400 mb-16">Words of Our Patrons</h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} style={{ width: '300px', height: 'auto' }}>
              <div className="bg-stone-800 p-8 rounded-xl shadow-lg h-full flex flex-col justify-center">
                <p className="text-stone-300 italic text-lg">"{testimonial.review}"</p>
                <div className="mt-6 text-right">
                  <p className="font-bold text-amber-400 text-xl">- {testimonial.name}</p>
                  <p className="text-stone-400">{testimonial.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
