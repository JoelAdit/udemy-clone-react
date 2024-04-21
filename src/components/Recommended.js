import card1 from "../assets/images/c1-python.jpg";
import card2 from "../assets/images/c2-java.jpg";
import card3 from "../assets/images/c3-data-science.jpg";
import card4 from "../assets/images/c4-Data-Analytics-.jpg";

function Recommended() {
  return (
    <div className="recommended">
      <h1 className="recommended__titile">Recommended For You</h1>
      <p>Pick The Best Fit</p>

      <div className="recommended__container">
        <div className="course-card">
          <img src={card1} alt="card1"></img>
          <h3>2023 Python Data Visualization Master Class</h3>
          <p>Col Steele</p>
          <p>4.6 ⭐⭐⭐⭐</p>
          <p>
            499 <del>1599</del>
          </p>
        </div>

        <div className="course-card">
          <img src={card2} alt="card2"></img>
          <h3>2023 Java fullstck Master Class</h3>
          <p>Col Steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>
            599<del>1999</del>
          </p>
        </div>

        <div className="course-card">
          <img src={card3} alt="card3"></img>
          <h3>2023 Data Science & Deep learning</h3>
          <p>Col Steele</p>
          <p>4.8 ⭐⭐⭐⭐</p>
          <p>
            699 <del>2999</del>
          </p>
        </div>

        <div className="course-card">
          <img src={card4} alt="card4"></img>
          <h3>2023 Data Analytics for Beginners</h3>
          <p>Col Steele</p>
          <p>4.1 ⭐⭐⭐⭐</p>
          <p>
            499 <del>1499</del>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
