function Main({props}) {
  console.log(props)
  return (
    <div className="main">
      <div className="condition">{props.text}</div>
      <div className="location-info">{props.icon}</div>
    </div>
  );
}

export default Main;
