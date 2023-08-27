import React from "react";
import { useParams } from "react-router-dom";

function HostVansDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, [id]);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <img src={currentVan.imageUrl} alt="current van" width={150} />
      <h2>{currentVan.name}</h2>
      <p>{currentVan.price}</p>
      <p>{currentVan.type}</p>
    </div>
  );
}

export default HostVansDetail;
