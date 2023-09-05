async function getVans() {
  const res = await fetch("/api/vans");
  if (!res.ok) {
    const errorMessage = {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
    throw errorMessage
  }
  const data = await res.json();
  return data.vans;
}

export default getVans;
