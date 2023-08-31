import React from "react";
import { useOutletContext } from "react-router-dom";
import "./HostVanInfo.css"

function HostVanPhotos(){
  const {currentVan} = useOutletContext()
  return (
    <img src={currentVan.imageUrl} className="host-van-detail-image" alt="details" />
  )
}

export default HostVanPhotos;