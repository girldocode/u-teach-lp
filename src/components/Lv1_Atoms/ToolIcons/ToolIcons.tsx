"use client";
import { FC } from "react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ToolIcons.module.scss";

import Image from "next/image";
import img1 from "../../../../public/assets/svgviewer-output (00).svg";
import img2 from "../../../../public/assets/svgviewer-output (01).svg";
import img3 from "../../../../public/assets/svgviewer-output (02).svg";
import img4 from "../../../../public/assets/svgviewer-output (03).svg";
import img5 from "../../../../public/assets/svgviewer-output (04).svg";
import img6 from "../../../../public/assets/svgviewer-output (05).svg";
import img7 from "../../../../public/assets/svgviewer-output (06).svg";
import img8 from "../../../../public/assets/svgviewer-output (07).svg";
import img9 from "../../../../public/assets/svgviewer-output (08).svg";

const ToolIcons: FC = () => {
  const icons = [
    { id: 0, src1: img1 },
    { id: 1, src1: img2 },
    { id: 2, src1: img3 },
    { id: 3, src1: img4 },
    { id: 4, src1: img5 },
    { id: 5, src1: img6 },
    { id: 6, src1: img7 },
    { id: 7, src1: img8 },
    { id: 8, src1: img9 },
  ];

  return (
    <div className={styles["tool-icons__container"]}>
      <div className={styles["tool-icons__swiper"]}>
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            932: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 9,
            },
          }}
          modules={[Pagination]}
        >
          {icons.map((icon, index) => (
            <SwiperSlide
              key={icon.id}
              className={`${styles["tool-icons__swiper-slide"]} ${
                index === 1 ? styles["tool-icons__highlight-second-icon"] : ""
              }`}
            >
              <div className={styles["tool-icons__icon-container"]}>
                <Image src={icon.src1} alt={`icon-${icon.id}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ToolIcons;
