
const Item = (props) => {
  return (
    <div className="w-[80%] h-64 bg-white mt-6 ml-8 mb-6 rounded-lg">
        <div className="w-[100%] h-[60%] bg-red-500 rounded-t-lg">
        </div>
        <div className="w-[100%] h-[40%] text-center">
            <p className="text-black">{props.Name}</p>
            <p className="text-black">${props.Price}</p>
            <button onClick={() => props.handleClick(props)} className="w-[80%] h-[40%] bg-black text-white text-center p-0 hover:bg-white hover:text-black hover:border-black">
              Add to cart
            </button>
        </div>
    </div>

  )
}

export default Item