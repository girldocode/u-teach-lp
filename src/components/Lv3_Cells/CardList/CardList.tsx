"use client";

import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import { CardListProps } from "./@types";

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <div>
      <div>
        <Swiper
          style={{ overflowY: "visible" }}
          loop={true}
          spaceBetween={16}
          // slidesPerView={2}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
        >
          {data.map((card) => (
            <SwiperSlide key={card.id}>
              <Card
                title={card.title}
                desc={card.desc}
                text={card.text}
                variant={card.variant}
                color={card.color}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardList;
