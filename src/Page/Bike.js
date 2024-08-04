import React, { useEffect, useState } from 'react';
import style from "./Bike.module.css"
import { useNavigate } from 'react-router-dom';


function Bike() {
  const [imageIndex, setImageIndex] = useState(0);
  const navi=useNavigate();
  const handleSubmitTest = () => {
      navi("/testdrive")
    };

  const images = [
    'assets/Red.jpg',
    'assets/Blue.jpg',
    'assets/Green.jpg',
  ];

  const handleButtonClick = (index) => {
    setImageIndex(index);
  };

  useEffect(()=>{
    console.log(style)
  },[])

  return (
    <div className={style.container_bike}>
      <p className={style.RoyalEnfield_bike}>The RoyalEnfield</p>
<p className={style.Meteor_bike}>Meteor 350</p>
<p className={style.p_bike}>The Royal Enfield Meteor is an Indian cruiser-style motorcycle manufactured by Royal Enfield in India. The model was developed by engineers based at Royal Enfield's two state-of-the-art technical centres, in Chennai. The Meteor is a direct replacement to Thunderbird 350.
</p>
      <div className={style.image_container_bike}>
        <img
          src={images[imageIndex]}
          alt="Transition"
          className={style.image_transition_bike}
        />
      </div>
      <p className={style.color_bike}>Choose your colour</p>
      <div className={style.button_container_bike}>
        <button
          className={style.button_red}
          onClick={() => handleButtonClick(0)}
        >
        </button>
        <button
          className={style.button_blue}
          onClick={() => handleButtonClick(1)}
        >
        </button>
        <button
          className={style.button_green}
          onClick={() => handleButtonClick(2)}
        >
        </button>
      </div>
      <div>
      <button className={style.testdrive_bike}onClick={() => handleSubmitTest()}>TestDrive</button>
      </div>
    </div>
  );
}

export default Bike;
