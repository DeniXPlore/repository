import BG from "../images/computer.png"

const Poster = () => {
  return (
    <section className="poster-home">
      <div className="poster-title">BIG SALE 20%</div>
      <div className="poster-product">
        <div className="poster-text">
          <div className="poster-cubtitle">the bestseller of 2023</div>
          <h1 className="poster-head">LENNON r2d2 with NVIDIA 5090 TI</h1>
          <button className="button">Shop Now</button>
        </div>
        <div className="poster-image">
          <img src={BG} alt="" />
        </div>
      </div>
    </section>
  )
}
export default Poster