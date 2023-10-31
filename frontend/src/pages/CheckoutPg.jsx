import axios from "axios";

const CheckoutPg = ({cart, removeFromCart ,clearCart}) => {
    let total = 0;
    cart.map((item) => {
        total += Number(item.Price * item.quantity);
        return null;
    });
    let shipping = 0;
    let tax = 0;
    if (total < 10){
        shipping = 0;
        tax = 0;
    }
    else{
        shipping = 20;
        tax = 30;
    }
    console.log(cart);
    
    const handleCheckout = () => {
        axios.post(`http://localhost:3001/stripe/create-checkout-session`, {cart})
        .then((res) => {
            console.log(res.data);
            window.location.href = res.data.url;
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
      <div className="w-screen h-screen bg-slate-100 overflow-x-hidden flex flex-row pt-10 pb-10 font-Julius">
        <div className="w-[70%] h-full text-center">
            <h1 className="text-black text-4xl">Shipping Address</h1>
            <div className="w-full h-[10%]  flex flex-row p-5">
                <input className="w-[36%] h-10 bg-white border-black border-2 ml-36 pl-2" type="text" placeholder="FirstName" />
                <input className="w-[36%] h-10 bg-white border-black border-2 ml-2 pl-2" type="text" placeholder="LastName" />
            </div>
            <input className="w-[70.5%] h-10 bg-white border-black border-2 ml-[1%] pl-2 mt-1" type="text" placeholder="Street Name" />
            <input className="w-[70.5%] h-10 bg-white border-black border-2 ml-[1%] pl-2 mt-4" type="text" placeholder="Apartment / Suite / Unit /etc " />
            <input className="w-[70.5%] h-10 bg-white border-black border-2 ml-[1%] pl-2 mt-4" type="text" placeholder="City " />
            <input className="w-[70.5%] h-10 bg-white border-black border-2 ml-[1%] pl-2 mt-4" type="text" placeholder="Country " />
            <input className="w-[70.5%] h-10 bg-white border-black border-2 ml-[1%] pl-2 mt-4" type="text" placeholder="Postal Code " />
            <input className="w-[70.5%] h-10 bg-white border-black border-2 ml-[1%] pl-2 mt-4" type="text" placeholder="Email Address " />
            <input className="w-[70.5%] h-10 bg-white border-black border-2 ml-[1%] pl-2 mt-4" type="text" placeholder="Phone Number " />
            <div className="w-full h-[20%] pt-5 ">
                <button className="w-[34%] bg-black text-white ">
                <a href='/productSearch' className="text-white hover:text-white">Return To Search</a>
                </button>
                <button className="w-[34%] bg-black ml-5">
                    <a onClick={() => {handleCheckout()}} id="payment" className="text-white hover:text-white">Proceed To Payment</a>
                </button>
            </div>
        </div>
        <div className="w-[30%] h-full border-l-2 border-black pl-10">
            <div className="w-[80%] h-[100%] ml-7 bg-white border-black border-2">
                <div className="w-full h-[60%] overflow-auto">
                    {cart.map((item,i) => (
                        <div className="flex flex-col text-black border-b-2 border-black p-2" key={i}>
                            <p className="text-black">{item.Name}</p>
                            <p>Qty: {item.quantity} </p>
                            <p>Unit Price: ${item.Price}</p>          
                        </div>
                    ))}
                </div>
                <div className="w-full h-[40%] border-t-2 border-black pl-5 pr-5">
                    <div className="w-full h-[68%] border-b-2 border-black">
                        <div className="w-full h-[25%] pt-2">
                            <input className="bg-white h-[120%] w-[65%] text-black border-black border-2 pl-2 text-sm" type="text" placeholder="Enter Discount Code" />
                            <button className="ml-3 mt-1">Apply</button>
                            <div className="w-full h-[25%] pt-5 flex flex-row justify-between pr-2">
                                <h1 className="text-black text-base">Inital Cost :</h1>
                                <h1 className="text-black text-base">${total}</h1>
                            </div>
                            <div className="w-full h-[25%] pt-8 flex flex-row justify-between pr-2">
                                <h1 className="text-black text-base">Shipping & Handling :</h1>
                                {
                                    total>10?<h1 className="text-black text-base">${shipping}</h1>:<h1 className="text-black text-base">$0</h1>
                                }
                            </div>
                            <div className="w-full h-[25%] pt-8 flex flex-row justify-between pr-2">
                                <h1 className="text-black text-base">Tax :</h1>
                                {
                                    total>10?<h1 className="text-black text-base">${tax}</h1>:<h1 className="text-black text-base">$0</h1>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[32%]">
                        <div className="w-full h-[25%] pt-7 flex flex-row justify-between pr-2">
                            <h1 className="text-black text-2xl">Total :</h1>
                            <h1 className="text-black text-2xl">${total + shipping + tax}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default CheckoutPg