import { useSelector } from "react-redux"

function Price() {

    const Price = useSelector((state) => state.cart.totalprice)
    const totalprice = useSelector((state) => state.cart.items)
  


    return <div className="sm:mt-5 sm:ml-0 ml-5"> 
        <div className="w-[300px] sm:fixed sm:right-20 h-[300px] p-4 border-2 border-gray-600 rounded">
            <h1>Total Quantity</h1>
            <h1 className="font-bold"> {totalprice.length} </h1>
            <h1 className="mt-8">Total Price</h1>
            <h1 className="font-bold">${Price}</h1>
            <button className="bg-black px-24 py-2 mt-10 text-white">Pay Now</button>
        </div>
       
    </div>
}

export default Price