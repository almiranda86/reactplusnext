import React from "react"

//assets
import logo from "../images/logo-10.svg"
import flag_brazil from "../images/flag_brazil.png"
import flag_united_kingdom from "../images/flag_united_kingdom.png"

function renderIdiomButton(lang, toggleLanguage){
    if(lang === "en"){
        return (<img src={flag_united_kingdom} alt="ingles" language="en" onClick={toggleLanguage}/>);
    }else{
        return (<img src={flag_brazil} alt="portugues brasil" language="pt_Br" onClick={toggleLanguage}/>);
    }
};

const Footer = ({lang, toggleLanguage}) => {
    return(
        <div className="text-center" id="footer">
            <h4>
                <img src={logo} alt="" />
            </h4>
            <div className="languages">
                { renderIdiomButton(lang, toggleLanguage) }
            </div>
        </div>
    );
}

export default Footer;