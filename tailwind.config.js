module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'hero-pattern': "url('./assets/home-logo.png')",
                'footer-texture': "url('/img/footer-texture.png')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}