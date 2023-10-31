import {Component} from "react";
import setimg from "../img/springSilver.jpg"
import setimg2 from "../img/pearl.avif"
import setimg3 from "../img/diamond.jpg"
import setimg4 from "../img/beaded.avif"

export class LatestReleases extends Component{
    render(){
        return(
            <div className="w-full xs:h-[90%] bet:h-[100%] font-Julius text-white bg-black lg:h-[70%]">
                <div className="text-center w-full h-[10%] xs:pt-[5%] lg:pt-[3%]">
                    <h1 className="xs:text-3xl md:text-5xl">Our Latest Releases!</h1>
                </div>
                <div className="w-full xs:h-[90%] xs:grid xs:grid-cols-2 xs:gap-8 xs:p-[4%] xs:pl-[8%] md:p-[6%] md:pt-[7%] md:pl-[10%] lg:pb-[2%] lg:pl-[3%] lg:pr-[3%] lg:flex lg:flex-row">
                    <div className="xs:w-[90%] xs:h-[90%] md:h-[110%] bg-white rounded-lg lg:w-[110%] lg:h-[100%] xl:h-[110%]">
                        <div className="w-full h-[60%] lg:h-[50%] rounded-t-lg">
                            <img className="w-full h-full rounded-t-lg" src={setimg} alt="" />
                        </div>
                        <div className="w-full h-[40%] lg:h-[50%]">
                            <div className="w-full xs:h-[50%] lg:text-center lg:pt-[10%] lg:pl-[3%] lg:pr-[3%] xl:pt-[5%]">
                                <p className="text-black xs:hidden lg:flex lg:text-sm xl:text-lg">Capture the Spirit of Spring with Our Radiant Silver Creations</p>
                            </div>
                            <div className="w-full xs:h-[50%] lg:mt-[15%] xl:mt-[10%] text-center xs:text-base">
                                <a href="/silverSearch" className="text-black hover:text-black md:text-2xl lg:text-xl xl:text-3xl">Spring Silver {'>'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="xs:w-[90%] xs:h-[90%] md:h-[110%] bg-white rounded-lg lg:w-[110%] lg:h-[100%] xl:h-[110%]">
                        <div className="w-full h-[60%] lg:h-[50%] rounded-t-lg">
                            <img className="w-full h-full rounded-t-lg" src={setimg2} alt="" />
                        </div>
                        <div className="w-full h-[40%] lg:h-[50%]">
                            <div className="w-full xs:h-[50%] lg:text-center lg:pt-[10%] lg:pl-[3%] lg:pr-[3%] xl:pt-[5%]">
                                <p className="text-black xs:hidden lg:flex lg:text-sm xl:text-lg">Adorn yourself with the treasures of the sea, a gift from natures elegance</p>
                            </div>
                            <div className="w-full xs:h-[50%] lg:mt-[15%] xl:mt-[10%] text-center xs:text-base">
                                <a href="/pearlSearch" className="text-black hover:text-black md:text-2xl lg:text-xl xl:text-3xl">Perfect Pearl {'>'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="xs:w-[90%] xs:h-[90%] md:h-[110%] bet:mt-[10%] lg:mt-0 bg-white rounded-lg lg:w-[110%] lg:h-[100%] xl:h-[110%]">
                        <div className="w-full h-[60%] lg:h-[50%] rounded-t-lg">
                            <img className="w-full h-full rounded-t-lg" src={setimg3} alt="" />
                        </div>
                        <div className="w-full h-[40%] lg:h-[50%]">
                            <div className="w-full xs:h-[50%] lg:text-center lg:pt-[10%] lg:pl-[3%] lg:pr-[3%] xl:pt-[5%]">
                                <p className="text-black xs:hidden lg:flex lg:text-sm xl:text-lg">Indulge in the divine allure of our Divine Diamonds Jewellery Colelction</p>
                            </div>
                            <div className="w-full xs:h-[50%] lg:mt-[15%] xl:mt-[10%] text-center xs:text-base">
                                <a href="/diamondSearch" className="text-black hover:text-black md:text-2xl lg:text-xl xl:text-3xl">Divine Diamond {'>'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="xs:w-[90%] xs:h-[90%] md:h-[110%] bet:mt-[10%] lg:mt-0 bg-white rounded-lg lg:w-[110%] lg:h-[100%] xl:h-[110%]">
                        <div className="w-full h-[60%] lg:h-[50%] rounded-t-lg">
                            <img className="w-full h-full rounded-t-lg" src={setimg4} alt="" />
                        </div>
                        <div className="w-full h-[40%] lg:h-[50%]">
                            <div className="w-full xs:h-[50%] lg:text-center lg:pt-[10%] lg:pl-[3%] lg:pr-[3%] xl:pt-[5%]">
                                <p className="text-black xs:hidden lg:flex lg:text-sm xl:text-lg">Experience the Soul of Craftsmanship in Our Beaded Beauty Collection</p>
                            </div>
                            <div className="w-full xs:h-[50%] lg:mt-[15%] xl:mt-[10%] text-center xs:text-base">
                                <a href="/beadSearch" className="text-black hover:text-black md:text-2xl lg:text-xl xl:text-3xl">Beaded Beauty {'>'}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
