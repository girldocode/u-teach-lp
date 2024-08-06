"use client";

import { testimonialCardData } from "@/app/data/app.data";
import { UText } from "@/components/Lv1_Atoms";
import { TestimonialCard } from "@/components/Lv3_Cells";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialCarousalProps } from "./@types";
import styles from "./TestimonialCarousel.module.scss";

const TestimonialCarousal: React.FC<TestimonialCarousalProps> = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const updateIndex = (swiper: SwiperType) => {
    if (swiper) {
      setCurrentIndex(swiper.realIndex);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className={styles.carousal}>
      <div className={styles.carousal__container}>
        <div className={styles.carousal__container__content}>
          <div className={styles.carousal__container__content__title}>
            <UText as="h1" color="blue-gray-900" weight="extrabold">
              What everyone says
            </UText>
          </div>
          <div className={styles.carousal__container__content__icons}>
            <div>
              <button
                onClick={handlePrev}
                className={styles.carousal__container__content__icons__left}
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 12.5H6H18.5ZM6 12.5L12 6.5L6 12.5ZM6 12.5L12 18.5L6 12.5Z"
                    fill="#EA580C"
                  />
                  <path
                    d="M6 12.5L12 18.5M18.5 12.5H6H18.5ZM6 12.5L12 6.5L6 12.5Z"
                    stroke="#EA580C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div>
              <button
                onClick={handleNext}
                className={styles.carousal__container__content__icons__right}
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12.5H18.5H6ZM18.5 12.5L12.5 6.5L18.5 12.5ZM18.5 12.5L12.5 18.5L18.5 12.5Z"
                    fill="#EA580C"
                  />
                  <path
                    d="M18.5 12.5L12.5 18.5M6 12.5H18.5H6ZM18.5 12.5L12.5 6.5L18.5 12.5Z"
                    stroke="#EA580C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.carousal__container__cards}>
          {/* Swiper */}
          <div className="">
            <Swiper
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                816: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1300: {
                  slidesPerView: 2,
                },

                1400: {
                  slidesPerView: 2,
                },
                1550: {
                  slidesPerView: 3,
                },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                updateIndex(swiper);
              }}
              onSlideChange={(swiper) => updateIndex(swiper)}
              spaceBetween={8}
              slidesPerView={1}
              className="mySwiper"
            >
              {testimonialCardData.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard
                    desc={testimonial.desc}
                    imageUrl={testimonial.imageUrl}
                    name={testimonial.name}
                    tagline={testimonial.tagline}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousal;
