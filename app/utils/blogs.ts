// export const truncateContent = (content: string, length: number) => {
//   const textContent = content?.replace(/<[^>]+>/g, "");
//   return content?.length > length
//     ? textContent?.slice(0, length) + "..."
//     : textContent;
// };

// export const extractImageUrl = (htmlContent: string, demoImageUrl: string) => {
//   const div = document.createElement("div");
//   div.innerHTML = htmlContent;
//   const img = div.querySelector("img");
//   const isValidImageUrl =
//     img && img?.src && img.src.includes("https://medium.com/_/stat");
//   return isValidImageUrl ? demoImageUrl : img?.src;
// };

// export const extractSnippet = (htmlContent: string) => {
//   const div = document.createElement("div");
//   div.innerHTML = htmlContent;
//   // const snippet = div.querySelector(".medium-feed-snippet");
//   return truncateContent(htmlContent, 3000);
// };

// export const formatDate = (dateTimeString: string) => {
//   const date = dateTimeString?.split(" ")[0];
//   return date;
// };


import { load } from "cheerio";

export const extractImageUrl = (htmlContent: string, demoImageUrl?: string) => {
  const $ = load(htmlContent || "");
  const img = $("img").first();
  const src = img.attr("src") || "";
  const isValidImageUrl = src.includes("https://medium.com/_/stat");
  return isValidImageUrl ? demoImageUrl : src || null;
};

// export const extractImageUrl = (htmlContent: string) => {
//     const div = document.createElement("div");
//     div.innerHTML = htmlContent;
//     const img = div.querySelector("img");
//     return img ? img.src : "";
//   };


export const truncateContent = (content: string, length: number) => {
  const textContent = content?.replace(/<[^>]+>/g, "");
  return textContent?.length > length
    ? textContent.slice(0, length) + "..."
    : textContent;
};

export const extractSnippet = (htmlContent: string) => {
  // Use cheerio here if you want to manipulate DOM too
  return truncateContent(htmlContent, 3000);
};

export const formatDate = (dateTimeString: string) => {
  const date = dateTimeString?.split(" ")[0];
  return date;
};
