import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    
  <ContentLoader 
    speed={2}
    width='100%'
    height={280}
    viewBox="0 0 388 242"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="47" cy="43" r="23" /> 
    <rect x="25" y="100" rx="12" ry="12" width="324" height="52" /> 
    <rect x="24" y="185" rx="0" ry="0" width="323" height="10" /> 
    <rect x="29" y="217" rx="11" ry="11" width="112" height="22" /> 
    <rect x="251" y="22" rx="13" ry="13" width="90" height="29" /> 
    <circle cx="292" cy="222" r="16" /> 
    <circle cx="310" cy="222" r="16" /> 
    <circle cx="329" cy="222" r="16" />
  </ContentLoader>

)

export default MyLoader