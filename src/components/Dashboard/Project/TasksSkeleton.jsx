import React from "react"
import ContentLoader from "react-content-loader"

const TasksSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width='100%'
    height={100}
    viewBox="0 0 573 80"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="54" y="6" rx="11" ry="11" width="120" height="24" /> 
    <rect x="56" y="38" rx="13" ry="13" width="497" height="37" /> 
    <rect x="14" y="100" rx="11" ry="11" width="112" height="22" /> 
    <rect x="11" y="215" rx="11" ry="11" width="112" height="22" /> 
    <circle cx="23" cy="19" r="15" />
  </ContentLoader>
)

export default TasksSkeleton