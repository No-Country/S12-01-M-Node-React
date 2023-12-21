/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.evbuc.com",
      },
      {
        protocol: "https",
        hostname: "evbuc.com",
      },
      {
        protocol: "https",
        hostname: "cdn.ticketle.net",
      },
      {
        protocol: "https",
        hostname: "ticketle.net",
      },
      {
        protocol: "https",
        hostname: "diariohoynet.nyc3.cdn.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "www.pronto.com.ar",
      },
      {
        protocol: "https",
        hostname: "imgplateanet.com.ar",
      },
      {
        protocol: "https",
        hostname: "plateanet.com.ar",
      },
      {
        protocol: "https",
        hostname: "cdn.atrapalo.com",
      },
      {
        protocol: "https",
        hostname: "www.atrapalo.com.ar",
      },
      {
        protocol: "https",
        hostname: "pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "cdn.getcrowder.com",
      },

      {
        protocol: "https",
        hostname: "getcrowder.com",
      },

      {
        protocol: "https",
        hostname: "www.oleorevista.com",
      },

      {
        protocol: "https",
        hostname: "alafresca.com.ar",
      },

      {
        protocol: "https",
        hostname: "resizer.iproimg.com",
      },

      {
        protocol: "https",
        hostname: "iproimg.com",
      },

      {
        protocol: "https",
        hostname: "media.timeout.com",
      },

      {
        protocol: "https",
        hostname: "timeout.com",
      },

      {
        protocol: "https",
        hostname: "www.travelnewstalk.com",
      },

      {
        protocol: "https",
        hostname: "www.vcmanagementcouncil.org",
      },

      {
        protocol: "https",
        hostname: "www.vicentelopez.gov.ar",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "calendariodecarrerascentro.ar",
      },
      {
        protocol: "https",
        hostname: "www.clarin.com",
      },
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
