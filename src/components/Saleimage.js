import one from "../assets/images/Sale img.png";

function Saleimage() {
  return (
    <div className="sale-img">
      <img src={one} alt="sale img"></img>

      <div className="sale-img__offer">
        <h2>Udamy Falsh Sale...!! End Up Soon</h2>
        <p>
          Get the courses for 499/- just one day to save but life time access
        </p>
      </div>
    </div>
  );
}

export default Saleimage;
