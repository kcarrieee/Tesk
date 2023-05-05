import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonProfile = (props) => (
    <ContentLoader 
    speed={2}
    width='100%'
    height={300}
    viewBox="0 0 700 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="3" y="11" rx="3" ry="3" width="506" height="10" /> 
    <rect x="3" y="40" rx="3" ry="3" width="299" height="10" /> 
    <rect x="7" y="86" rx="3" ry="3" width="586" height="11" /> 
    <rect x="7" y="116" rx="3" ry="3" width="543" height="11" /> 
    <rect x="7" y="146" rx="3" ry="3" width="255" height="11" /> 
    <rect x="13" y="228" rx="3" ry="3" width="506" height="10" /> 
    <rect x="13" y="257" rx="3" ry="3" width="299" height="10" /> 
    <rect x="9" y="173" rx="3" ry="3" width="255" height="11" />
  </ContentLoader>
)

export default SkeletonProfile;
