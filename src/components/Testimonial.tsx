import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

type UserReview = {
  id: number;
  name: string;
  image: string;
  comment: string;
};

const Testimonial: React.FC = () => {
  const [reviews, setReviews] = useState<UserReview[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=5"
      ); // Replace with your API
      const data = await response.json();

      const formattedData: UserReview[] = data.map(
        (item: any, index: number) => ({
          id: item.id,
          name: item.name,
          image: `https://i.pravatar.cc/150?img=${index + 1}`,
          comment: item.body,
        })
      );

      setReviews(formattedData);
    };

    fetchReviews();
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full max-w-lg mx-auto  overflow-hidden">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-full h-96"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="flex flex-col justify-center items-center bg-gray-800 text-white rounded-lg p-6 shadow-lg"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <p className="text-sm text-gray-300 mt-2 text-center">
              "{review.comment}"
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
