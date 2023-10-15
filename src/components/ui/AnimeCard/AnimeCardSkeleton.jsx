import React from "react"
import ContentLoader from "react-content-loader"

const AnimeCardSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={186}
    height={259}
    viewBox="0 0 186 259"
    backgroundColor="#161616"
    foregroundColor="#222222"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="186" height="259" />
  </ContentLoader>
)

export default AnimeCardSkeleton