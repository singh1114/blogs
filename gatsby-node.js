exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;
    createRedirect({
        fromPath: "https://blissful-morse-100479.netlify.com/*",
        toPath: "https://blog.ranvir.xyz/:splat",
        isPermanent: true,
        sforce: true
    });
};