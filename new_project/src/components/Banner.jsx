import bannerImg from "../images/banner.png";

const Banner = () => {
  return (
    <section className="poster-banner">
      <div className="poster-left">
        <p className="poster-content">
          NEW YEAR <span>SALE</span>{" "}
        </p>
        <button className="poster-more">See more..</button>
      </div>
      <div
        className="poster-right"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <p className="poster-discount">
          save up to <span>50%</span> off
        </p>
      </div>
    </section>
  );
};
export default Banner;
