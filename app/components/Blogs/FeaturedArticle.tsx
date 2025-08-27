/* eslint-disable @next/next/no-img-element */
{
  /* eslint-disable @typescript-eslint/no-explicit-any */
}
import { useState } from "react";
// import { placeholderImage } from "../../assets";
import { extractImageUrl, extractSnippet, formatDate } from "../../utils/blogs";
// import Image from "next/image";

const FeaturedArticle = ({ featuredArticle }: any) => {
  const imageUrl: any = extractImageUrl(featuredArticle?.content);
  const content = extractSnippet(featuredArticle?.content);
  const [expanded, setExpanded] = useState(false);

  const handleNavigateMedium = () => {
    window.open("https://medium.com/@syeda_59202");
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-[90px] py-16">
      <section className="mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          {featuredArticle?.title}
        </h1>
        <div className="text-gray-600 mb-4 font-body text-sm md:text-base">
          <span>
            Date:{" "}
            <span className="text-black font-bold mr-2">
              {formatDate(featuredArticle?.pubDate)}
            </span>{" "}
          </span>
          <span>
            Author:{" "}
            <span className="text-black font-bold mr-2">
              {featuredArticle?.author}
            </span>{" "}
          </span>
          <span>
            Category:{" "}
            <span className="text-black font-bold">
              {featuredArticle?.categories[0]}
            </span>{" "}
          </span>
        </div>
        <img
          src={imageUrl}
          alt="Featured"
          className="w-full h-48 sm:h-60 md:h-[50vh] lg:h-[60vh] object-cover rounded-lg mb-6"
          width={1200}
          height={630}
        />
        <p
          className={`text-gray-700 mb-6 font-body text-sm sm:text-base md:text-lg text-justify ${
            !expanded ? "line-clamp-5" : ""
          }`}
        >
          {content}
        </p>
        <button
          className="text-sm text-[#0B2B66] font-sans text-center md:text-left lg:text-left cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read less<<" : "Read more>>"}
        </button>
      </section>

      <div className="flex justify-center mb-8">
        <button
          className="bg-[#1C4A87] text-white px-6 py-3 rounded-full font-medium font-sans hover:bg-[#56B3B1] font-sans cursor-pointer"
          onClick={handleNavigateMedium}
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default FeaturedArticle;
