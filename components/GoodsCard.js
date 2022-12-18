import Link from "next/link";


const GoodsCard = () => {
    return (
    <Link href = '/good/1'>
        <a className = 'goodspage__card'>
            <div className = "goodspage__card-img">
                <img src = "https://images.asos-media.com/products/asos-design-oversized-swing-grandad-blazer-in-magenta/203208418-1-magenta?$n_480w$&wid=476&fit=constrain"/>
            </div>
            <div className = "goodspage__card-text">
                <span>ASOS DESIGN oversized swing grandad blazer in magenta</span>
                <strong>£62.00</strong>
            </div>
        </a>
    </Link>
    )
}

export default GoodsCard;