import { useState } from "react";
import "./practice.css";
export default function Picture() {

    const [isActive,setActive] = useState(false);
    let backgroundClass = "background"
    let pictureClass = "picture"

    if(isActive){
        pictureClass = "picture-active"
    }else{
        backgroundClass = "background-active"
    }


    return (
      <div className={backgroundClass} onClick={()=> setActive(false)}>
        <img
          className={pictureClass}
          onClick={e =>  {e.stopPropagation();
                        setActive(true);}}
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
        />
      </div>
    );
  }
  