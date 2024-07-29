import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product"
import ClipLoader from "react-spinners/ClipLoader";
import Header from "./Header";
function ProductList() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchItem, setSearchItem] = useState("")

    const handleSearch = (event) => {
        setSearchItem(event.target.value)
    }

    const getAllProducts = () => {
        setLoading(true)
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setData(response.data)
                setLoading(false)
            }).catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getAllProducts()
    }, [])

    return <div>
        <Header Search={handleSearch} />
        {loading === true ? < ClipLoader className="sm:mx-[600px] sm:my-[100px] mx-[180px] my-[100px]" loading={loading} /> : <div className="pt-32 grid sm:grid-cols-[250px_250px_250px_250px] grid-cols-[150px_150px] sm:gap-10 gap-5 justify-center ">

            {
                data.filter((Product) => {
                    return searchItem.toLocaleLowerCase() == "" ? Product :
                        Product.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())

                }).map((item) => {
                    return <Product items={item} />
                })
            }

        </div>
        }
    </div>
}
export default ProductList