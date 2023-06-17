import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonProfile = (props) => (
  <ContentLoader 
    speed={2}
    width={800}
    height={300}
    viewBox="0 0 800 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="132" rx="12" ry="12" width="590" height="72" /> 
    <rect x="14" y="50" rx="11" ry="11" width="112" height="22" /> 
    <rect x="10" y="3" rx="13" ry="13" width="220" height="37" /> 
    <rect x="8" y="245" rx="12" ry="12" width="590" height="49" /> 
    <rect x="14" y="100" rx="11" ry="11" width="112" height="22" /> 
    <rect x="11" y="215" rx="11" ry="11" width="112" height="22" />
  </ContentLoader>
)

export default SkeletonProfile;
