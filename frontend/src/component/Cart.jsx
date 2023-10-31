
export function Cart({cart, removeFromCart ,clearCart}){
    let total = 0;
    cart.map((item) => {
        total += Number(item.Price * item.quantity);
        return null;
    });

        return(
            <div id="cartWindow" className="font-Julius w-[15%] fixed inset-[85%] z-10 xl:mt-[16.7%] xxl:mt-[12%] bet:h-[130%] xl:h-[95%] lg:mt-[15%] lg:h-[97%] bg-white border-black border-2 top-0 right-0 transform translate-x-full transition-transform duration-700 ">
                <div className="w-full h-[60%] border-b-2 border-black text-black overflow-auto text-center">
                    {cart.map((item,i) => (
                        <div className="flex flex-col border-b-2 border-black p-2" key={i}>
                            <p>{item.Name}</p>
                            <p>Qty: {item.quantity} </p>
                            <p>Unit Price: ${item.Price}</p>          
                            <button className="text-white bg-black w-[44%] h-[5%] ml-16 text-sm" onClick={() => removeFromCart(item._id)}>Remove</button>              
                        </div>
                    ))}
                </div>
                <div className="w-full h-[40%]">
                    <div className="w-full h-[15%] border-b-2 border-black">
                        <button className="text-white bg-black w-full h-full text-sm rounded-none hover:border-black" onClick={() => clearCart()}>Clear Cart</button>
                    </div>
                    <div className="w-full h-[85%]">
                        <h1 className="text-black text-2xl mt-3 ml-3">Total : ${total}</h1>
                        <button className="w-[100%] h-[23%]  bg-black mt-1 text-white rounded-none text-center hover:border-black">
                            <a href="/checkout" className="text-2xl -mt-1 text-white hover:text-white hover:text-3xl ">CheckOut</a>
                        </button>
                    </div>
                </div>
            </div>
        );
}

