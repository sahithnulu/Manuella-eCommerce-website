import { Component } from "react";
import { FaWhatsapp,FaFacebook,FaInstagram } from "react-icons/fa";

export class Contact extends Component{
    render(){
        return(
            <div className="w-full xs:h-[40%] lg:h-[35%] xl:h-[40%] md:pt-[5%] font-Julius bg-black">
                <div className="w-full xs:h-[5%]">
                    <h1 className="text-white text-4xl text-center">Contact Us</h1>
                </div>
                <div className="w-full flex xs:flex-col justify-between xs:h-[95%] xs:pt-[10%] xs:pb-[5%] md:h-[100%] lg:flex-row md:pt-[5%] md:pb-[5%] lg:pb-[4%] lg:pr-[5%]">
                    <button className="w-[90%] xs:ml-[5%] xs:h-[30%] lg:h-[100%] bg-white text-black hover:bg-whatsapp hover:text-white hover:border-black">
                        <FaWhatsapp className="xs:text-4xl xs:ml-[45%] md:ml-[47%] md:-mt-[1%] lg:text-6xl lg:ml-[38%] xl:ml-[42%]"/>
                    </button>
                    <button className="w-[90%] xs:ml-[5%] xs:h-[30%] lg:h-[100%] bg-white text-black hover:bg-facebook hover:text-white hover:border-black">
                        <FaFacebook className="xs:text-4xl xs:ml-[45%] md:ml-[47%] md:-mt-[1%] lg:text-6xl lg:ml-[38%] xl:ml-[42%]"/>
                    </button>
                    <button className="w-[90%] xs:ml-[5%] xs:h-[30%] lg:h-[100%] bg-white text-black hover:bg-gradient-to-b hover:from-purple-700 hover:to-yellow-400 hover:text-white hover:border-black">
                        <FaInstagram className="xs:text-4xl xs:ml-[45%] md:ml-[47%] md:-mt-[1%] lg:text-6xl lg:ml-[38%] xl:ml-[42%]"/>
                    </button>
                </div>
            </div>
        )
    }
}