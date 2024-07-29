import { useSelector, useDispatch } from "react-redux"
import Price from "../components/Price"
import toast, {Toaster} from "react-hot-toast"

import { removeItemFromCart, calculateTotalPrice } from "../redux/reduce/cart"
function cart() {

    const dispatch = useDispatch()
    const AllItems = useSelector((state) => state.cart.items)


    const handleRemove = (data) => {
        dispatch(removeItemFromCart(data))
        dispatch(calculateTotalPrice())

        toast.success("the item has been deleted",{
            position: "top-right"
        })
      
    }



    return  <div>
       
        <p className="text-center pt-10">This is cart</p>
        {
            AllItems.length > 0 ?
            
            <div className="sm:flex justify-center gap-10">

            <div className="sm:mr-32 mb-20">
                {
                    AllItems.map((items) => {
                        return <div className="flex border-2 border-red-500 sm:gap-6 gap-3 px-4 py-2 rounded sm:ml-0 ml-5 sm:w-[500px] sm:h-[160px] w-[350px] h-[200px] items-center mt-5  justify-between">


                            <div className="">
                                <img className="w-[100px]" src={items.image} />
                            </div>



                            <div className="mt-5">
                                <h1> {items.title} </h1>
                                <h1 className=" font-bold "> ${items.price} </h1>
                            </div>
                            <button onClick={() => handleRemove(items)} className="text-2xl">X</button>


                        </div>
                    })
                }
            </div>
            <Price />
        </div>
            :
            <h1 className="font-serif font-bold text-5xl text-center">There is no data yet</h1>
        }
          <Toaster/>
    </div>
   
}
export default cart