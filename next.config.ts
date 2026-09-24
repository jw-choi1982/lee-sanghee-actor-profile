import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 예전 vercel.app 주소로 들어온 방문자를 새 도메인으로 보냄
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "actor-profile-eight.vercel.app" }],
        destination: "https://www.leesanghee.company/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
