/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
// import { placeholderImage } from "../../assets";
import { extractImageUrl, extractSnippet, formatDate } from "../../utils/blogs";
import {  FaChevronCircleLeft,  FaChevronCircleRight } from "react-icons/fa";
// import Image from "next/image";

const RelatedArticles = ({ relatedArticles }: any) => {
  const SamplePrevArrow = ({ onClick }: any) => {
    return (
      <div
        onClick={onClick}
        className="absolute z-10 left-[-25px] top-1/2 transform -translate-y-1/2 cursor-pointer text-[#0B2B66]"
      >
        <FaChevronCircleLeft size={30} className="hover:text-[#56B3B1]" />
      </div>
    );
  };

  const SampleNextArrow = ({ onClick }: any) => {
    return (
      <div
        onClick={onClick}
        className="absolute z-10 right-[-25px] top-1/2 transform -translate-y-1/2 cursor-pointer text-[#0B2B66]"
      >
        <FaChevronCircleRight size={30} className="hover:text-[#56B3B1]"/>
      </div>
    );
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const handleNavigateToPost = (link: string) => {
    window.open(link);
  };

  return (
    <div className="relative pl-4 pr-4 mb-10 lg:mb-20 w-[90vw] mx-auto">
      <Slider {...settings} className="mx-auto">
        {relatedArticles?.map((article: any) => {
          const imageUrl: any = extractImageUrl(article?.content);
          const snippet = extractSnippet(article?.content);
          return (
            <div key={article?.id} className="p-4">
              <div className="bg-white shadow-xl rounded-2xl bg-cover bg-no-repeat border border-gray-200">
                <div className="overflow-hidden hover:shadow-md transition relative mx-auto h-auto rounded-t-2xl">
                  <img
                    src={imageUrl}
                    alt={article?.title}
                    className="w-full h-80 relative z-0 rounded-t-2xl transition-all duration-300 hover:scale-110 object-cover"
                  />
                </div>
                <div className="text-gray-600 text-xs md:text-sm font-body p-4">
                  <div className="mb-1 mt-4 leading-[30px] ml-2">
                    <span>
                      Date:{" "}
                      <span className="text-black font-semibold mr-3">
                        {formatDate(article?.pubDate)}
                      </span>
                    </span>
                    <span>
                      Author:{" "}
                      <span className="text-black font-semibold mr-3">
                        {article?.author}
                      </span>
                    </span>
                    <span className="text-xs md:text-sm text-gray-500 mb-2">
                      Category:{" "}
                      <span className="text-black font-semibold">
                        {article?.categories[0]}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3
                    className="text-lg font-semibold text-[#0B2B66] mb-2 cursor-pointer line-clamp-1"
                    onClick={() => handleNavigateToPost(article?.link)}
                  >
                    {article?.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                    {snippet}
                  </p>
                  <h3
                    className="text-sm font-semibold text-[#0B2B66] font-sans cursor-pointer"
                    onClick={() => handleNavigateToPost(article?.link)}
                  >
                    {"Read More>>"}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default RelatedArticles;
