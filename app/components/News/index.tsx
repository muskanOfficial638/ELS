/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import { extractImageUrl, extractSnippet } from "@/app/utils/blogs";

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// // import { LinkedinPosts } from "../../utils/LinkedinPosts";

// // import dynamic from "next/dynamic";

// // const Slider = dynamic(() => import("react-slick"), { ssr: false });

// const News: React.FC = () => {
//   const [loading, setLoading] = useState(true);
//   const [linkedinPosts, setLinkedinPosts] = useState([]);
//   const GOOGLE_SHEET_URL: any = process.env.VITE_GOOGLE_SHEET_URL;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // const response = await fetch(GOOGLE_SHEET_URL);
//         // const text = await response.text();
//         // const rows = text.split("\n").slice(1);
//         // const posts:any = rows.map((row) => {
//         //   const [id, src] = row.split(",");
//         //   return { id: id.trim(), src: src.trim() };
//         // });
//         // Simulate data normally fetched from Google Sheet CSV
//         const posts: any = [
//           {
//             id: "1",
//             src: "https://www.linkedin.com/embed/feed/update/urn:li:share:1234567890",
//           },
//           {
//             id: "2",
//             src: "https://www.linkedin.com/embed/feed/update/urn:li:share:9876543210",
//           },
//           {
//             id: "3",
//             src: "https://www.linkedin.com/embed/feed/update/urn:li:share:1928374650",
//           },
//         ];
//         setLinkedinPosts(posts);
//       } catch (error) {
//         console.error("Error fetching Google Sheet data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [GOOGLE_SHEET_URL]);

//   // const settings = {
//   //   infinite: true,
//   //   speed: 500,
//   //   slidesToShow: 3,
//   //   slidesToScroll: 2,
//   //   autoplay: false,
//   //   responsive: [
//   //     {
//   //       breakpoint: 1024,
//   //       settings: {
//   //         slidesToShow: 2,
//   //         slidesToScroll: 1,
//   //       },
//   //     },
//   //     {
//   //       breakpoint: 768,
//   //       settings: {
//   //         slidesToShow: 1,
//   //         slidesToScroll: 1,
//   //       },
//   //     },
//   //   ],
//   // };

//   const CustomNextArrow = (props: any) => {
//     const { onClick } = props;
//     return (
//       <button
//         onClick={onClick}
//         className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 cursor-pointer z-10 border border-blue-600 text-white rounded-full w-8 h-8 shadow-md bg-blue-600 hover:text-white transition-colors"
//       >
//         ❯
//       </button>
//     );
//   };

//   const CustomPrevArrow = (props: any) => {
//     const { onClick } = props;
//     return (
//       <button
//         onClick={onClick}
//         className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 cursor-pointer z-10 border border-blue-600 text-white rounded-full w-8 h-8 shadow-md bg-blue-600 hover:text-white transition-colors"
//       >
//         ❮
//       </button>
//     );
//   };

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <CustomPrevArrow />,
//     prevArrow: <CustomNextArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2, slidesToScroll: 1 },
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 1, slidesToScroll: 1 },
//       },
//     ],
//   };

//   return (
//     <div className="flex flex-col gap-8 lg:gap-[25px] relative px-4 lg:px-[90px] mt-10 lg:mt-20 mb-10 lg:mb-20">
//       <h2 className="font-sans font-bold text-black text-2xl lg:text-[32px] tracking-[0px] lg:tracking-[1.20px] leading-normal lg:leading-[48px]">
//         News and Updates
//       </h2>
//       <p className="font-body font-normal text-black text-base tracking-[0.5px] leading-normal ml-0">
//         Stay up to date with the latest news and updates from our legal team.
//       </p>
//       <div className="mt-10 mb-10 lg:mb-20 w-full mx-auto">
//         {loading ? (
//           <div className="px-4 flex flex-row justify-between space-x-4">
//             {[...Array(3)].map((_, index) => (
//               <div
//                 key={index}
//                 className="h-[400px] w-full lg:w-[500px] bg-gray-300 rounded animate-pulse"
//               ></div>
//             ))}
//           </div>
//         ) : (
//           <div className="fade-in">
//             <Slider {...settings}>
//               {linkedinPosts?.map((data: any) => (
//                 <div key={data?.id} className="w-full px-2">
//                   <iframe
//                     src={data?.src}
//                     className="h-[400px] w-auto sm:w-auto md:w-auto lg:w-[360px] 3xl:w-[500px] mx-auto"
//                     allow="encrypted-media"
//                     loading="lazy"
//                   />
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default News;
import Image from "next/image";
import { useEffect, useState } from "react";
import { apiPath } from "@/app/utils/api-path";
import axios from "axios";
import { Loader } from "@/app/utils/loader";

type BlogPost = {
  id: number;
  title: string;
  created_at: string;
  // Add other properties as needed
};

const News = () => {
  // const articles = [
  //   {
  //     id: 1,
  //     title: "The standard Lorem Ipsum passage, used since",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
  //     image: "/news1.png", // 🔁 Replace with your image path
  //   },
  //   {
  //     id: 2,
  //     title: "The standard Lorem Ipsum passage, used since",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
  //     image: "/news2.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "The standard Lorem Ipsum passage, used since",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
  //     image: "/news3.jpg",
  //   },
  // ];

  const [blogData, setBlogData] = useState([] as any[]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${apiPath}/api/posts`, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "tbs-6zQ6v8m4J2q9p3X7",
        },
      });
      // Sort by created_at descending and get the latest 3
      const sortedData = response?.data.sort((a: BlogPost, b: BlogPost) => {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      });

      const latestThree = sortedData.slice(0, 3);

      setBlogData(latestThree); // Only set the latest 3 blogs
      // console.log("Latest 3 Blogs:", latestThree);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // 👈 stop loading
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState<boolean>(false);

  // const mediumAccountURL =
  //   process.env.VITE_MEDIUM_ACCOUNT_URL ||
  //   "https://medium.com/feed/@syeda_59202";

  // useEffect(() => {
  //   const getPostData = () => {
  //     // setLoading(true);
  //     axios
  //       .get(`https://api.rss2json.com/v1/api.json?rss_url=${mediumAccountURL}`)
  //       .then((res: any) => {
  //         setPosts(res.data.items);
  //       })
  //       .catch((error: any) => {
  //         console.error("Error fetching blog posts:", error);
  //       })
  //       .finally(() => {
  //         // setLoading(false);
  //       });
  //   };
  //   getPostData();
  // }, [mediumAccountURL]);

  // const handleNavigateToPost = (link: string) => {
  //   window.open(link);
  // };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B2B66] mb-2 text-center">
          Our Blog
        </h2>
        <p className="text-black mb-10 text-center font-sans leading-[28px]">
          Stay Informed: Read Our Latest Legal Articles
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {articles.map(({ id, title, description, image }) => (
            <div
              key={id}
              className="bg-white shadow-sm rounded-2xl bg-cover bg-no-repeat"
            >
              <div className="overflow-hidden hover:shadow-md transition relative mx-auto h-auto rounded-t-2xl">
                <Image
                  src={image}
                  alt={title}
                  className="w-full h-auto relative z-0 rounded-t-2xl transition-all duration-300 hover:scale-110"
                  width={500}
                  height={400}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#0B2B66] mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{description}</p>
                <h3 className="text-sm font-semibold text-[#0B2B66] font-sans">
                  {"Read More>>"}
                </h3>
              </div>
            </div>
          ))} */}
          {isLoading && <Loader />}

          {!blogData && (
            <section className="max-w-3xl mx-auto px-4 py-12 text-center">
              <div className="text-red-500 text-lg">Blog post not found.</div>
            </section>
          )}
          {blogData.map((blog: any) => (
            <div
              key={blog?.id}
              className="bg-white shadow-sm rounded-2xl bg-cover bg-no-repeat"
            >
              <div className="overflow-hidden hover:shadow-md transition relative mx-auto h-auto rounded-t-2xl">
                <Image
                  src={`${apiPath}/storage/${blog?.feature_image}`}
                  alt={`blogImage`}
                  className="w-full h-[257px] relative z-0 rounded-t-2xl transition-all duration-300 hover:scale-110 object-cover"
                  width={500}
                  height={400}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#0B2B66] mb-2 line-clamp-2">
                  <a href={`/blogs/${blog?.slug}`}>{blog?.title}</a>
                </h3>
                <div
                  className="font-sans leading[28px] text-black mb-2 line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: blog?.body }}
                />
                <a
                  href={`/blogs/${blog?.slug}`}
                  className="text-sm font-semibold text-[#0B2B66] font-sans cursor-pointer"
                >
                  {"Read More>>"}
                </a>
              </div>
            </div>
          ))}
          {/* {posts.slice(0, 3).map((post: any, index: number) => {
            const imageUrl: any = extractImageUrl(post?.content);
            const snippet = extractSnippet(post?.content);
            return (
              <div
                key={index}
                className="bg-white shadow-sm rounded-2xl bg-cover bg-no-repeat"
              >
                <div className="overflow-hidden hover:shadow-md transition relative mx-auto h-auto rounded-t-2xl">
                  <img
                    src={imageUrl}
                    alt={post?.title}
                    className="w-full h-80 relative z-0 rounded-t-2xl transition-all duration-300 hover:scale-110 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className="text-lg font-semibold text-[#0B2B66] mb-2 cursor-pointer"
                    //  onClick={() => handleNavigateToPost(post?.link)}
                  >
                    {post?.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                    {snippet}
                  </p>
                  <h3
                    className="text-sm font-semibold text-[#0B2B66] font-sans cursor-pointer"
                    // onClick={() => handleNavigateToPost(post?.link)}
                  >
                    {"Read More>>"}
                  </h3>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </section>
  );
};

export default News;
