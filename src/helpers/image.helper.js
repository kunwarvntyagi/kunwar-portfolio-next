export const loader = ({ src, quality }) => {
  function isImage(url) {
    return /\.(svg||gif||png)$/.test(url)
  }
  function isJPG(url) {
    return /\.(jpg||jpeg)$/.test(url)
  }
  if (isJPG(src)) {
    return `${src}?fm=webp&q=${quality || 95}`
  } else if (isImage(src)) {
    return src
  } else return `${src}&q=${quality || 95}`
}
