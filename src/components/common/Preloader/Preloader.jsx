import preloader from "../../../assets/images/tube-spinner.svg";
import React from "react";

const Preloader = (props) => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader} width='150px'/>
    </div>
}

export default Preloader;