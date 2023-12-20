/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "img.evbuc.com",
      "evbuc.com",
      "cdn.ticketle.net",
      "ticketle.net",
      "diariohoynet.nyc3.cdn.digitaloceanspaces.com",
      "pronto.com.ar",
      "imgplateanet.com.ar",
      "plateanet.com.ar",
      "cdn.atrapalo.com",
      "atrapalo.com.ar",
      "pexels.com",
      "images.pexels.com",
      "cdn.getcrowder.com",
      "getcrowder.com",
      "oleorevista.com",
      "alafresca.com.ar",
      "resizer.iproimg.com",
      "iproimg.com",
      "media.timeout.com",
      "timeout.com",
      "travelnewstalk.com",
      "vcmanagementcouncil.org",
      "vicentelopez.gov.ar",
      "res.cloudinary.com",
      "cloudinary.com",
      "calendariodecarrerascentro.ar",
      "clarin.com",
    ],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

/* module.exports = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
}; */
