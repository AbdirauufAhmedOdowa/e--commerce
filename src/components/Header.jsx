import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


function Header({ Search }) {

    const numberOfItem = useSelector((state) => state.cart.items)

    const [push, setPush] = useState(false)

    const handleMenu = () => {
        setPush(true)
    }

    const handleClose = () => {
        setPush(false)
    }

    return <div className="bg-bomo sm:flex justify-between sm:py-5 sm:px-20 items-center font-serif fixed w-full ">
        <h1 className="sm:text-5xl text-3xl sm:px-0 px-2 sm:py-0 py-5 text-mid">eSuuQ</h1>

        <ul style={{ display: push == true ? "block" : "" }} className="sm:flex gap-10 text-2xl text-black hidden">
            <li>Home</li>
            <li> About</li>
        </ul>

        <form>
            <input onChange={Search} className="sm:w-[300px] w-[200px] bg-black text-white h-[30px] rounded-xl absolute right-16 sm:right-48 top-7" type="text" placeholder="Search  " />
        </form>
        <i style={{ display: push == true ? "none" : "" }} onClick={handleMenu} class="fa-solid fa-bars sm:hidden text-mid text-4xl absolute right-3 top-7"></i>
        <i onClick={handleClose} style={{ display: push == true ? "block" : "" }} class="fa-solid fa-xmark text-mid text-5xl absolute right-3 top-4 hidden"></i>
        <Link to="/Cart">
        <h1><i style={{ display: push == true ? "block" : "" }} class="fa-solid fa-cart-shopping text-5xl text-mid sm:flex hidden"> {numberOfItem.length} </i></h1>
        </Link>
    </div>
}
export default Header