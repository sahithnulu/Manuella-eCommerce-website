import {Component} from "react";
import {FaShoppingCart} from "react-icons/fa";

export class Nav extends Component{
    render(){
        const Cartslide = () =>{
            const cartWindow = document.getElementById("cartWindow");
            cartWindow.classList.toggle("translate-x-full");
        }
        if (location.pathname === "/checkout" || location.pathname === "/checkout-success") {
            return null
        }
        return(
            <div className="w-full font-Julius text-white bg-black border-b-2 border-white lg:fixed z-10">
                <div className="w-full xs:text-5xl xl:text-6xl xl:p-[1%] text-center xs:p-[2%] border-b-2">
                    <a href="/" className="text-white hover:text-white">Manuella</a>
                </div>
                <div className="w-full flex xs:flex-col xs:text-center xs:pt-[3%] lg:pt-0 lg:pl-[3%] lg:pr-[3%] lg:flex-row lg:justify-between xl:text-3xl">
                    <a className="text-white hover:text-white xs:border-b-2 border-white xs:pb-[2%] lg:border-none lg:pt-[1.9%]" href="/">New Arrivals</a>
                    <a className="text-white hover:text-white xs:border-b-2 border-white xs:p-[2%] lg:border-none" href="/earringSearch">Earrings</a>
                    <a className="text-white hover:text-white xs:border-b-2 border-white xs:p-[2%] lg:border-none" href="/braceletSearch">Braceletes</a>
                    <a className="text-white hover:text-white xs:border-b-2 border-white xs:p-[2%] lg:border-none" href="/necklaceSearch">Necklaces</a>
                    <a className="text-white hover:text-white xs:border-b-2 border-white xs:p-[2%] lg:border-none" href="/ringSearch">Rings</a>
                    <a className="text-white hover:text-white xs:border-b-2 border-white xs:p-[2%] lg:border-none" href="/productSearch">Search</a>
                    <button onClick={Cartslide} className="bg-black hover:border-diamond">
                         <FaShoppingCart className="xs:ml-[48%]"/>                   
                    </button>
                </div>
            </div>
        )
    }
}