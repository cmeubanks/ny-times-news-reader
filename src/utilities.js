export const cleanData = (data) => {
  return data.results.map((story, index) => {
    return {
      id: index,
      title: story.title,
      abstract: story.abstract,
      author: story.byline,
      image: story.multimedia[0].url,
      url: story.short_url
    }
  })
}
