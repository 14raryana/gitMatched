import React from "react";
import { CardTitle } from "react-mdl";
import "./index.css";

function DMHeader() {
    return (
        <div className="dm-header" >
            <CardTitle className="header-title" expand style={{ color: '#fff', background: 'transparent', textAlign: "center" }}>
                <div className="h2"><h2 className='dm-git'>.GIT </h2>
                <h2 className='dm-matched'>MATCHED</h2></div>
            </CardTitle>
            
        </div>
    );
}

export default DMHeader;