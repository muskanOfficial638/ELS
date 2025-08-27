import { Geist, Geist_Mono, Libre_Baskerville, Open_Sans } from "next/font/google";
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

const openSans  = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

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
        className={`${geistSans.variable} ${geistMono.variable} ${libre.variable} ${openSans.variable} antialiased`}
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
