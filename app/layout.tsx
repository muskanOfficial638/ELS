import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

const libre = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"], // adjust weights as needed
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Empowering Legal Solutions | Your Dedicated Legal and Business Counsel",
  description:
    " Empowering Legal Solutions provides expert, scalable legal support for businesses across Business Formation, Fundraising, Intellectual Property (IP), Privacy, Complex Transactions, M&A, Non-profit, and General Counsel. Streamline operations and ensure compliance. Get your legal department set up today.",
  icons: {
    icon: "/ELS_logo.png",
  },
  openGraph: {
    title:
      "Empowering Legal Solutions | Your Dedicated Legal and Business Counsel",
    description:
      " Empowering Legal Solutions provides expert, scalable legal support for businesses across Business Formation, Fundraising, Intellectual Property (IP), Privacy, Complex Transactions, M&A, Non-profit, and General Counsel. Streamline operations and ensure compliance. Get your legal department set up today.",
    url: "https://www.sellyourstartup.com/",
    images: [
      {
        url: "/ELS_logo.png",
        width: 1200,
        height: 630,
        alt: "Empowering Legal Solutions",
      },
    ],
    siteName: "Empowering Legal Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Merriweather Font */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Slick Carousel CSS */}
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        /> */}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${libre.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Voiceflow Chatbot Script */}
        <Script id="voiceflow-chat" strategy="afterInteractive">
          {`
            (function (d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function () {
                window.voiceflow.chat
                  .load({
                    verify: { projectID: "67090569ed4a498299a96fad" },
                    url: "https://general-runtime.voiceflow.com",
                    versionID: "production",
                    // assistant: {
                    //   stylesheet: "./globals.css",
                    // },
                  })
                  .then(() => {
                    window.voiceflow.chat.proactive.push({
                      type: "text",
                      payload: {
                        message: "Hi, I’m Syeda’s Intelligent Assistant! How can I support you today?",
                      },
                    });
                  });
              };
              v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
              v.type = "text/javascript";
              s.parentNode.insertBefore(v, s);
            })(document, "script");
          `}
        </Script>
      </body>
    </html>
  );
}
