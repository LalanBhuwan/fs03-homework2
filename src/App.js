import "./App.css";

function App() {
  return (
    <div className="card">
      <div>
        <div className="online"></div>
      <img
        src="https://w0.peakpx.com/wallpaper/794/29/HD-wallpaper-best-whatsapp-dp-boy-walking-alone-birds.jpg"
        alt="dp_image"
      />

      </div>
      
      <h2>Alexandra Caulea</h2>
      <p>I enjoy drinking a cup of coffee every day</p>
      <div className="container dis_flex">
      <div className="dis_flex flex_direction">
        <span className="col_darkmagenta">172</span>
        <span>POSTS</span>
      </div>
      <div className="dis_flex flex_direction">
        <span className="col_darkmagenta">47</span>
        <span>FOLLOWERS</span>
      </div>
      <div className="dis_flex flex_direction">
        <span className="col_darkmagenta">20</span>
        <span >FOLLOWING</span>
      </div>
      </div>
      
      <div className="btn_div dis_flex">
        <button className="btn bgcol_darkmagenta">FOLLOW</button>
        <button className="btn bgcol_lightpink col">MESSAGE</button>
      </div>
    </div>
  );
}

export default App;
