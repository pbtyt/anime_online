import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={350}
    height={250}
    viewBox="0 0 350 250"
    backgroundColor="#161616"
    foregroundColor="#222222"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="175" height="250" /> 
    <rect x="207" y="0" rx="0" ry="0" width="170" height="29" /> 
    <rect x="207" y="38" rx="0" ry="0" width="170" height="16" /> 
    <rect x="207" y="65" rx="0" ry="0" width="170" height="195" />
  </ContentLoader>
)

export default MyLoader