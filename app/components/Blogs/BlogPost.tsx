"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import axios from "axios";
import RelatedArticles from "./RelatedArticles";
import FeaturedArticle from "./FeaturedArticle";

const BlogPost: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const mediumAccountURL = process.env.VITE_MEDIUM_ACCOUNT_URL ||"https://medium.com/feed/@syeda_59202";
  
  useEffect(() => {
    const getPostData = () => {
    setLoading(true);
    axios
      .get(`https://api.rss2json.com/v1/api.json?rss_url=${mediumAccountURL}`)
      .then((res: any) => {
        setPosts(res.data.items);
      })
      .catch((error: any) => {
        console.error("Error fetching blog posts:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
    getPostData();
  }, [mediumAccountURL]);

  return (
    <>
      {loading ? (
        <div className="px-4 lg:px-[90px] mb-10 h-[80vh] flex flex-col ">
          <div className="w-full h-16 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-full h-[600px] bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="flex flex-col space-y-2">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="w-full h-6 bg-gray-300 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <FeaturedArticle featuredArticle={posts[0]} />
          <RelatedArticles relatedArticles={posts} />
        </>
      )}
    </>
  );
};

export default BlogPost;
