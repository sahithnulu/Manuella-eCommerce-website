import {Component} from "react";
import setimg from "../img/WhatsApp Image 2023-09-07 at 11.37.25 AM.jpeg"

export class Body extends Component{
    render(){
        return(
            <div className="w-full font-Julius relative xs:h-[40%] md:h-[50%] lg:h-[78%] lg:mt-[10%]">
                <img className="w-full h-[100%]" src={setimg} alt="" />
                <div>
                    <h1 className="text-black absolute top-[15%] right-[3%] xs:text-right xs:text-4xl md:text-center md:text-5xl md:top-[18%] lg:text-7xl lg:right-[1%] xl:right-0 xl:top-[15%] xl:text-8xl xxl:text-8xl xxl:top-[15%] xxl:right-[3%]" >UNIQUENESS <br />IN EVERY <br />PIECE OF <br /> JEWELLERY</h1>
                </div>
            </div>
        )
    }
}
