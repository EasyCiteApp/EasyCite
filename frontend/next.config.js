const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
        baseApiUrl: "http://localhost:4000/api/v1",
        baseUrl: "http://localhost:3000",
      },
    };
  }

  return {
    /* config options for all phases except development here */
    env: {
      baseApiUrl: "https://easy-cite-backend.herokuapp.com/api/v1",
      baseUrl: "https://easy-cite.vercel.app",
    },
  };
};
