import card5 from "../assets/images/c5-UI-UX-scaled.jpg";
import card6 from "../assets/images/c6-web-developments.jpg";
import card7 from "../assets/images/c7-Ai.jpg";
import card8 from "../assets/images/c8-cyber.jpg";
import card9 from "../assets/images/c9-Networking.jpg";
import card10 from "../assets/images/c10-mern stack.jpg";
import card11 from "../assets/images/c11-dot net.jpg";
import card12 from "../assets/images/c12-react.jpg";

function Papular() {
  return (
    <div className="papular">
      <h1 className="papular__titile">Most Papular</h1>
      <p>Pick the best fit</p>

      <div className="papular__container">
        <div className="course-card">
          <img src={card5} alt="card5"></img>
          <h3>UI/US Designer</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>
            999 <del>3999</del>
          </p>
        </div>

        <div className="course-card">
          <img src={card6} alt="card6"></img>
          <h3>Web Development for Beginners</h3>
          <p>Col Steele</p>
          <p>3.8 ⭐⭐⭐</p>
          <p>
            499 <del>999</del>
          </p>
        </div>

        <div className="course-card">
          <img src={card7} alt="card7"></img>
          <h3>Beginner to Intermediate Artificial Intelligent course</h3>
          <p>Col Steele</p>
          <p>4.8 ⭐⭐⭐⭐</p>
          <p>
            799 <del>1999</del>
          </p>
        </div>

        <div class="course-card">
          <img src={card8} alt="card8"></img>
          <h3>Learn cyber Security</h3>
          <p>Col Steele</p>
          <p>4,1 ⭐⭐⭐</p>
          <p>
            899 <del>2499</del>
          </p>
        </div>

        <div class="course-card">
          <img src={card9} alt="card9"></img>
          <h3>Networking</h3>
          <p>Col Steele</p>
          <p>3.6 ⭐⭐⭐</p>
          <p>
            499 <del>1499</del>
          </p>
        </div>

        <div class="course-card">
          <img src={card10} alt="card10"></img>
          <h3>become Master of Meran Stack</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐⭐</p>
          <p>
            1100 <del>4999</del>
          </p>
        </div>

        <div class="course-card">
          <img src={card11} alt="card11"></img>
          <h3>DotNet fullstck Development</h3>
          <p>4 ⭐⭐⭐</p>
          <p>
            499 <del>1499</del>
          </p>
          <p>499</p>
        </div>

        <div class="course-card">
          <img src={card12} alt="card12"></img>
          <h3>Master in React</h3>
          <p>Col Steele</p>
          <p>4.5 ⭐⭐⭐⭐⭐</p>
          <p>
            999 <del>2599</del>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Papular;
