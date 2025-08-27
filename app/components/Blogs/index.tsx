/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import Image from "next/image";

const BlogsComponent: React.FC = () => {
  const [posts, setPosts] = useState([]);

  const truncateContent = (content: string, length: number) => {
    const textContent = content.replace(/<[^>]+>/g, ""); 
    return content.length > length
      ? textContent.slice(0, length) + "..."
      : textContent;
  };

  const extractImageUrl = (htmlContent: string) => {
    const div = document.createElement("div");
    div.innerHTML = htmlContent;
    const img = div.querySelector("img");
    return img ? img.src : "";
  };

  const extractSnippet = (htmlContent: string) => {
    const div = document.createElement("div");
    div.innerHTML = htmlContent;
    // const snippet = div.querySelector(".medium-feed-snippet");
    return truncateContent(htmlContent, 110);
  };

  const getPostData = () => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@SpeakingBipolar"
      )
      .then((res: any) => {
        setPosts(res.data.items);
      })
      .catch((error: any) => {
        console.error("Error fetching blog posts:", error);
      });
  };

  useEffect(() => {
    getPostData();
  }, []);

  const SamplePrevArrow = () => {
    return <div style={{ display: "none" }} />;
  };

  const SampleNextArrow = () => {
    return <div style={{ display: "none" }} />;
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
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="relative px-4 lg:px-[90px] mt-10 lg:mt-40 mb-10 lg:mb-20">
      <div className="flex flex-col items-start w-full lg:w-[45%] gap-6 ml-3">
        <p className="font-sans font-bold text-2xl lg:text-[32px] tracking-wide lg:tracking-[1.20px] leading-tight lg:leading-[48px]">
          Blogs
        </p>
        {/* <p className="font-body font-normal text-black text-sm lg:text-base text-justify leading-5 lg:leading-6">
          Stay up to date with the latest news and updates from our legal team.
        </p> */}
      </div>
      <div>
        <Slider {...settings}>
          {posts.map((post: any) => {
            const imageUrl = extractImageUrl(post.content);
            const snippet = extractSnippet(post.content);
            return (
              <div
                key={post.guid}
                className="blogs mt-20 flex flex-col lg:flex-row items-center justify-between w-full mb-6"
              >
                <div className="w-full lg:w-3/4 p-4">
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    className="w-full h-[200px] lg:h-[270px] rounded-lg object-cover"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="w-full lg:w-3/4 p-4">
                  <h2 className="font-body text-lg lg:text-lg font-semibold text-gray-800 mb-4">
                    {post.title}
                  </h2>
                  <p
                    className="font-body text-gray-600 mb-4"
                    // dangerouslySetInnerHTML={{
                    //   __html: truncateContent(post.content, 160),
                    // }}
                  >
                    {snippet}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default BlogsComponent;
