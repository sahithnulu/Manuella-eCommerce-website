import { Component } from "react";

export class Newsletter extends Component{
    render(){
        return(
            <div className="w-full xs:h-[36%] font-Julius">
                <div className=" bg-black border-t-2 border-b-2 border-white text-center xs:pt-[4%] xs:p-[3%] xl:pt-[2%]">
                    <h1 className="xs:text-4xl xl:text-6xl ">NewsLetter</h1>
                    <h1 className="xs:text-base xs:pt-[2%]">Subscribe to our Newsletter to stay informed of our latest deals and collections!</h1>
                    <input className=" xs:w-[90%] pl-[2%] xs:mt-[2%] xl:p-[0.5%] bg-white text-black " type="text" placeholder="xxx@gmail.com" />
                    <button className="w-[90%] xs:mt-[4%] xs:mb-[4%] xl:mt-[2%] border-2 border-white bg-black hover:bg-white hover:text-black hover:border-black">Subscribe</button>
                </div>               
            </div>
        )
    }
}