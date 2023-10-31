import { Component } from "react";
import setimg from "../img/Visa.png"
import setimg2 from "../img/mastercard.jpg"
import setimg3 from "../img/americanexpress.png"
import setimg4 from "../img/stripe.png"

export class Footer extends Component{
    render(){
        return(
            <div className="w-full bg-white font-Julius ">
                <div className="w-full border-b-2 border-black flex flex-row text-black text-center lg:justify-between lg:p-[2%]">
                    <div className="w-[33%] h-full hidden lg:flex lg:flex-col">
                        <h1 className="lg:text-4xl">Useful Links</h1>
                        <h2 className="text-2xl lg:mt-[5%]">Delivery Information</h2>
                        <h2 className="text-2xl lg:mt-[2%]">International Shipping</h2>
                        <h2 className="text-2xl lg:mt-[2%]">Track Your Order</h2>
                        <h2 className="text-2xl lg:mt-[2%]">Returns</h2>
                        <h2 className="text-2xl lg:mt-[2%]">Exchange</h2>
                        <h2 className="text-2xl lg:mt-[2%]">Career</h2>
                    </div>
                    <div className="w-[100%] h-full text-center lg:w-[33%] lg:ml-[2%]">
                        <h1 className="border-b-2 border-black xs:text-4xl xs:p-[2%] lg:border-none lg:p-0">Information</h1>
                        <h2 className="text-2xl xs:pt-[2%] lg:mt-[1%]">About Us</h2>
                        <h2 className="text-2xl xs:pt-[2%] lg:mt-[1%]">Offers</h2>
                        <h2 className="text-2xl xs:pt-[2%] lg:mt-[1%]">FAQ</h2>
                        <h2 className="text-2xl xs:pt-[2%] lg:mt-[1%]">Blog</h2>
                        <h2 className="text-2xl xs:pt-[2%] lg:mt-[1%]">📞343-XXX-XXXX</h2>
                        <h2 className="text-2xl xs:pt-[2%] xs:pb-[2%] lg:mt-[1%]">✉️manuella@gmail.com</h2>
                    </div>
                    <div className="w-[35%] h-full hidden lg:flex lg:flex-col lg:ml-[2%]">
                        <div className="w-full h-[10%] ">
                            <h1 className="lg:text-4xl">Payment Options</h1>
                        </div>
                        <div className="w-full h-[80%] lg:pl-[10%] grid-cols-2 hidden lg:grid lg:grid-cols-2">
                            <img src={setimg} className="w-[90%] h-[90%]" />
                            <img src={setimg2} className="w-[90%] h-[90%]" />
                            <img src={setimg3} className="w-[90%] h-[120%]" />
                            <img src={setimg4} className="w-[90%] h-[120%]" />
                        </div>
                    </div>
                </div>
                <div className="w-full h-[15%] xs:pt-[2%] xs:pb-[2%] bg-white text-black text-lg text-center">
                    <h4>@Manuella Company Ltd 2023 all rights reserved</h4>
                    <h4>Terms and Conditions | Privacy Policy</h4>
                </div>
            </div>
        )
    }
}