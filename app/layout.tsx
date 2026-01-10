import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://hkleague2026.hkmahjong.org"),
  title: {
    default: "HK-League 2026 香港麻雀協會 香港立直麻雀團體聯賽2026",
    template: "%s | HK-League 2026 香港麻雀協會 香港立直麻雀團體聯賽2026",
  },
  description:
    "《HK-League 2026 香港立直麻雀團體聯賽2026》是由香港麻雀協會在2026年籌備的，在香港內賽程最長的立直麻將隊際競技聯賽，預計將進行近300場半莊戰，從16隊隊伍中決定最佳隊伍。",
  keywords: [
    "HK-League",
    "hkleague",
    "hkleague2026",
    "2026",
    "麻雀",
    "mj",
    "mahjong",
    "mahjong hkleague",
    "日本麻雀",
    "日麻",
    "japan mahjong",
    "riichi",
    "riichimahjong",
    "riichi mahjong",
    "立直",
    "立直麻雀",
    "牌藝攻防",
    "牌藝",
    "hkmj",
    "香港麻雀協會",
    "hkma",
    "Mah-JesTic",
  ],
};

export const viewport: Viewport = {
  themeColor: "#1e223b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@600&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
