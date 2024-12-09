import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonial: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="relative flex justify-center items-center w-full max-w-md mx-auto">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-full h-72"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide className="flex justify-center items-center bg-gray-800 text-white text-lg font-semibold rounded-md">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-gray-800 text-white text-lg font-semibold rounded-md">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-gray-800 text-white text-lg font-semibold rounded-md">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-gray-800 text-white text-lg font-semibold rounded-md">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-gray-800 text-white text-lg font-semibold rounded-md">
          Slide 5
        </SwiperSlide>
      </Swiper>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full hover:scale-110 transition-all"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full hover:scale-110 transition-all"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default Testimonial;
