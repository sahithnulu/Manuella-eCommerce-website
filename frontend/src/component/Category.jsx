import {Component} from "react";
import setimg from "../img/earring.avif"
import setimg2 from "../img/bracelet.jpg"
import setimg3 from "../img/necklace.jpg"
import setimg4 from "../img/ring.avif"

export class Category extends Component{
    render(){
        return(
            <div className="w-full xs:h-[90%] md:h-[100%] mdlg:pt-[5%] mdlg:h-[110%] bet:h-[140%] bet:pt-[10%] font-Julius text-white bg-black lg:-mt-[10%] lg:pb-[2%] lg:h-[80%] xl:h-[80%] xxl:h-[100%]">
                <div className="text-center w-full h-[10%] xs:pt-[5%] lg:pt-[3%]">
                    <h1 className="xs:text-3xl md:text-5xl">Shop by Category</h1>
                </div>
                <div className="w-full xs:h-[90%] xs:grid xs:grid-cols-2 xs:gap-8 xs:p-[4%] xs:pl-[8%] md:p-[6%] md:pt-[7%] md:pl-[10%] lg:pb-[2%] lg:pl-[3%] lg:pr-[3%] lg:flex lg:flex-row">
                    <div className="xs:w-[90%] xs:h-[90%] md:h-[110%] mdlg:h-[100%] bg-white rounded-lg lg:w-[110%] lg:h-[100%]">
                        <div className="w-full h-[60%] lg:h-[50%] rounded-t-lg">
                            <img className="w-full h-full rounded-t-lg" src={setimg} alt="" />
                        </div>
                        <div className="w-full h-[40%] lg:h-[50%]">
                            <div className="w-full xs:h-[50%] lg:text-center lg:pt-[10%] lg:pl-[3%] lg:pr-[3%] xl:pt-[5%]">
                                <p className="text-black xs:hidden lg:flex lg:text-sm xl:text-lg">Discover the art of fine jewelry with our earrings</p>
                            </div>
                            <div className="w-full xs:h-[50%] lg:mt-[10%] xl:mt-[5%] text-center xs:text-base">
                                <a href="/earringSearch" className="text-black hover:text-black md:text-2xl lg:text-xl xl:text-3xl">Earrings {'>'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="xs:w-[90%] xs:h-[90%] md:h-[110%] mdlg:h-[100%] bg-white rounded-lg lg:w-[110%] lg:h-[100%]">
                        <div className="w-full h-[60%] lg:h-[50%] rounded-t-lg">
                            <img className="w-full h-full rounded-t-lg" src={setimg2} alt="" />
                        </div>
                        <div className="w-full h-[40%] lg:h-[50%]">
                            <div className="w-full xs:h-[50%] lg:text-center lg:pt-[10%] lg:pl-[3%] lg:pr-[3%] xl:pt-[5%]">
                                <p className="text-black xs:hidden lg:flex lg:text-sm xl:text-lg">Wrap your wrist in luxury with our premium bracelets</p>
                            </div>
                            <div className="w-full xs:h-[50%] lg:mt-[10%] xl:mt-[5%] text-center xs:text-base">
                                <a href="/braceletSearch" className="text-black hover:text-black md:text-2xl lg:text-xl xl:text-3xl">Bracelets {'>'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="xs:w-[90%] xs:h-[90%] md:h-[110%] mdlg:h-[100%] bg-white rounded-lg lg:w-[110%] lg:h-[100%]">
                        <div className="w-full h-[60%] lg:h-[50%] rounded-t-lg">
                            <img className="w-full h-full rounded-t-lg" src={setimg3} alt="" />
                        </div>
                        <div className="w-full h-[40%] lg:h-[50%]">
                            <div className="w-full xs:h-[50%] lg:text-center lg:pt-[10%] lg:pl-[3%] lg:pr-[3%] xl:pt-[5%]">
                                <p className="text-black xs:hidden lg:flex lg:text-sm xl:text-lg">Shine Bright with our Dazzling Necklace Designs</p>
                            </div>
                            <div className="w-full xs:h-[50%] lg:mt-[10%] xl:mt-[5%] text-center xs:text-base">
                                <a href="/necklaceSearch" className="text-black hover:text-black md:text-2xl lg:text-xl xl:text-3xl">Necklaces {'>'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="xs:w-[90%] xs:h-[90%] md:h-[110%] mdlg:h-[100%] bg-white rounded-lg lg:w-[110%] lg:h-[100%]">
                        <div className="w-full h-[60%] lg:h-[50%] rounded-t-lg">
                            <img className="w-full h-full rounded-t-lg" src={setimg4} alt="" />
                        </div>
                        <div className="w-full h-[40%] lg:h-[50%]">
                            <div className="w-full xs:h-[50%] lg:text-center lg:pt-[10%] lg:pl-[3%] lg:pr-[3%] xl:pt-[5%]">
                                <p className="text-black xs:hidden lg:flex lg:text-sm xl:text-lg">Timeless design meets modern elegance in this exquisite ring</p>
                            </div>
                            <div className="w-full xs:h-[50%] lg:mt-[10%] xl:mt-[5%] text-center xs:text-base">
                                <a href="/ringSearch" className="text-black hover:text-black md:text-2xl lg:text-xl xl:text-3xl">Rings {'>'}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
