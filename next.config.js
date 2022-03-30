/** @type {import('next').NextConfig} */

// This import don't work yet
// import { /*Pages*/ Paths, PathsDevelopment } from './src/config/index.ts';
const Pages = {
  home: { page: '/Home' },
  about: { page: '/About' },
};

// module.exports = (phase, { defaultConfig }) => {
const nextConfig = {
  reactStrictMode: true,
  // exportTrailingSlash: true,
  // swcMinify: true, //try later
  compiler: {
    // removeConsole: true, //try later
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    let devPaths = {};
    if (dev) {
      devPaths = {
        '/Dev': Pages.about,
      };
    }

    //WARNING: This looks lose the SPA feel
    return {
      ...devPaths,
      '/About': Pages.about,
      '/': Pages.home,
      '/Home': Pages.home,
    };
  },
};

module.exports = nextConfig;
