import React from "react";
import "./style.css";



function Visual({ icon, title, children, quarter, image }) {
    return (
        <div className="card mt-4">
            <div className="card-header">
                <h3>
                    <strong>
                        <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
                        {/* <image>{image}
                            <img src={require('./Quarterviz.png')} />
                        </image> */}
                    </strong>
                </h3>
            </div>
            <div className="card-body">{children}</div>
        </div>
    );
}

export default Visual;










