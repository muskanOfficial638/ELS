/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { apiPath } from "@/app/utils/api-path";
import { Loader } from "@/app/utils/loader";
import axios from "axios";
import { use, useEffect, useState } from "react";
import { type FC } from "react";

interface PageProps {
  params: {
    slug: string;
  };
}
type BlogPost = {
  id: number;
  title: string;
  created_at: Date | any;
  feature_image: string;
  body: any;
  author?: string;
  categories?: [{ id: string; name: string }];
};

const BlogPage: FC<{ params: Promise<PageProps["params"]> }> = ({ params }) => {
  const { slug } = use(params);
  const [blogData, setBlogData] = useState<BlogPost>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${apiPath}/api/posts/${slug}`, {
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "tbs-6zQ6v8m4J2q9p3X7",
          },
        });
        setBlogData(response?.data?.[0]);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false); // 👈 stop loading
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {}, [blogData]);

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Loader />;
      </div>
    );
  }

  if (!blogData) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <div className="text-red-500 text-lg">Blog post not found.</div>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{blogData?.title}</h1>

      <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
        <span>By {blogData?.author || "Sayeda"}</span>
        <span>•</span>
        <span>{new Date(blogData?.created_at).toLocaleDateString()}</span>
      </div>

      <div className="w-full mb-8 overflow-hidden rounded-lg">
        <img
          src={`${apiPath}/storage/${blogData?.feature_image}`}
          alt={blogData?.title}
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </div>

      <div
        className="prose font-sans blog-details text-black leading-[28px] prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blogData?.body }}
      />

      <div className="mt-10">
        <h3 className="text-sm font-semibold text-gray-700 uppercase">Tags:</h3>
        <div className="flex flex-wrap mt-2 gap-2">
          {blogData?.categories?.map((data) => (
            <span
              key={data?.id}
              className="px-3 py-1 text-sm bg-gray-200 rounded-full"
            >
              #{data?.name || "Law-school"}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
