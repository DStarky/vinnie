import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={380}
    height={600}
    viewBox="0 0 380 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="37" y="291" rx="0" ry="0" width="1" height="1" /> 
    <rect x="24" y="24" rx="12" ry="12" width="330" height="290" /> 
    <rect x="24" y="330" rx="0" ry="0" width="261" height="30" /> 
    <rect x="24" y="376" rx="0" ry="0" width="125" height="20" /> 
    <rect x="28" y="410" rx="0" ry="0" width="321" height="10" /> 
    <rect x="28" y="430" rx="0" ry="0" width="321" height="10" /> 
    <rect x="28" y="450" rx="0" ry="0" width="321" height="10" /> 
    <rect x="24" y="531" rx="0" ry="0" width="80" height="44" /> 
    <rect x="119" y="553" rx="0" ry="0" width="48" height="21" /> 
    <rect x="266" y="530" rx="12" ry="12" width="80" height="44" /> 
    <rect x="207" y="531" rx="12" ry="12" width="44" height="44" />
  </ContentLoader>
)

export default MyLoader

