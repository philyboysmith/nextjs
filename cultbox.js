module.exports = {
    // used by ./services/wpapi to create api url
    wordpressApiUrl: 'http://admin.cultbox.test/wp-json',
    siteInformations: {
      name: 'Cultbox',
      slogan: 'Create a SEO-friendly React front-end in minutes for your Wordpress API.',
    },
    mainMenuLinks: [
      {
        title: 'News',
        href: '/category?slug=news',
        as: '/category/news',
      },
      {
        title: 'Reviews',
        href: '/category?slug=reviews',
        as: '/category/reviews',
      },
      {
        title: 'Interviews',
        href: '/category?slug=interviews',
        as: '/category/interviews',
      },
      {
        title: 'Features',
        href: '/category?slug=features',
        as: '/category/features',
      },
      {
        title: 'Spoilers',
        href: '/category?slug=spoilers',
        as: '/category/spoilers',
      },
      {
        title: 'Videos',
        href: '/category?slug=videos',
        as: '/category/videos',
      },
      {
        title: 'Win',
        href: '/category?slug=win',
        as: '/category/win',
      },
    ],
    ui: {
      breakpoints: {
        smallScreen: '@media (max-width: 1000px)',
      },
    },
  };
  