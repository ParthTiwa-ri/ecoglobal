import { useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();
  return (
    // <Dragger className="mx-10" text={"Check Carbon Footprint with our AI"} />
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 mx-10 shadow-xl image-full">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Upload Picture</h2>
          <p>check Carbon Footprint of any object ?</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/recognize");
              }}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 mx-10 shadow-xl image-full">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>Get Personalize recommendation ?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
