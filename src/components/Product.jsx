import { useDispatch } from "react-redux";
import { AddItemsToCart, calculateTotalPrice } from "../redux/reduce/cart";
import toast, { Toaster } from 'react-hot-toast';



function Product({ items }) {

    const dispatch = useDispatch()

    const handleCartItem = () =>{
        dispatch(AddItemsToCart(items))
        dispatch(calculateTotalPrice())


        toast.success("Item has been aded",{
            position: "top-right"
        })
    }

    return <div id="box" className="w-full border-2 border-black sm:m-3 sm:p-2 p-0 rounded">
        <img className=" rounded sm:h-48 h-28" src={items.image} />

        <div className=" flex justify-between sm:pt-5">
            <h1 >{items.title} </h1>
            <h1>{items.category} </h1>
        </div>

        <div className="flex justify-between mt-5">
            <h1 className="font-semibold ">${items.price} </h1>
            <button id="btn" onClick={handleCartItem} className="w-[40px] h-[40px] hidden bg-slate-600 rounded-full  text-white text-3xl ">+</button>
        </div>
        <Toaster />
    </div>
}
export default Product;