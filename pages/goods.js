import Filter from "../components/filter/Filter"
import Layout from "../components/Layout"
import Link from "next/link"
import GoodsCard from "../components/GoodsCard"
import { Button } from "@mui/material"


const GoodsPage = () => {
    return (
        <Layout>
            <div className = 'goodspage'>
                <div className="goodspage__title">
                    <h2>Wedding dresses</h2>
                    <p>Найдено 1475 </p>
                </div>
                <Filter />
                <div className = 'goodspage__content'>
                       <GoodsCard/> 
                </div>
                <div className="goodspage__btn">
                   <Button>Показать больше</Button>
                </div>
                
                
            </div>
            
        </Layout>
    )
}


export default GoodsPage