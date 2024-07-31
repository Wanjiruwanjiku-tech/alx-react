import React from "react";
import { getFullYear, getFooterCopy } from "../utils";
import "./Footer.css";

const Footer = () => {
    return (
        <div className='App-footer'>
            <footer>
                <hr/>
                {/* Add the footer */}
                {/* Update to use functions in utils.js */}
                <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
            </footer>
      </div>
    )

}

export default Footer;