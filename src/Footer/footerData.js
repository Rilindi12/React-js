import Footer from "./footer";
import { footerData } from "../data/footerData";
import CurrentData from "./currentData";
import { CiFacebook,CiInstagram } from "react-icons/ci";


export default function FooterData () {
  return (
    <footer className='container-top-footer'>
        <div className = "container-footer">
          {footerData.map((item,index) => ( 
              <Footer
                  key={index}
                  title={item.title}
                  desctription={item.desctription}
              />
              ))}
        </div>
        <div className="current-data">
        <CurrentData />
        <div id='icons'>
        <CiFacebook/><CiInstagram/>
        </div>
        
      </div>    
</footer>
  )
}