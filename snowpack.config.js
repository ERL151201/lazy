/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: '/lazy',
        src: '/_dist_',
    },
    buildOptions: {
        baseUrl: '',
    },
}