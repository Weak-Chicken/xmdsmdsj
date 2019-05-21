function getAllPosts() {
  let allPosts = [
    {
      id: '01',
      html: '',
      title: '01'
    },

    {
      id: '02',
      html: '',
      title: '02'
    },
  ]

  allPosts.forEach((item, index, arr) => {
    import('@/temp/data/topics/' + item.id + '.html').then(module => item.html = module.default);
  });

  return allPosts;
}

export { getAllPosts };