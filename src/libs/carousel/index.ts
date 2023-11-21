import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** @link https://github.com/akiran/react-slick */

/** 최상단 캐러셀 */
export const MainCarousel = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 300,
  pauseOnDotsHover: true,
};

/** Syncing-: 이번주 TOP10 캐러셀 */
export const SyncingMainCarousel = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  touchThreshold: 300,
  autoplay: true,
  autoplaySpeed: 5000,
};

export const SyncingSubCarousel = {
  slidesToShow: 5,
  slidesToScroll: 5,
  focusOnSelect: true,
  touchThreshold: 1000,
  infinite: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 100,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 100,
      },
    },
  ],
};
