import Galery from "../../components/goodpage/Galery";
import Layout from "../../components/Layout";
import Select from '../../components/filter/Select'
import Rating from "../../components/Rating";
import InfoSection from "../../components/goodpage/InfoSection";

const GoodPage = () => {

    return(
        <Layout>
           <div className = 'goodpage__wrapper'>
                <div className = 'goodpage__top'>
                    <Galery />
                    <div className="goodpage__top__text-wrap">
                        <div className = "goodpage__top__text-title">
                            <h1>Topman stretch slim jeans in mid wash</h1>
                        </div>
                        <div className = "goodpage__top__text-price">
                            <span>£29.00 </span>
                        </div>
                        <div className = "goodpage__top__text-rating">
                            <Rating rating = {5}/>
                        </div>
                        <div className = 'goodpage__top__text-promo'>
                            <span>
                            Get 15% off everything*<br/>
                            With code: <strong>HELLOASOS</strong>
                            </span>

                        </div>
                        <div className = 'goodpage__top__text-color'>
                            <strong>COLOR:</strong>
                            &nbsp;
                            <span>Цвет товара</span>
                        </div>
                        <div className = 'goodpage__top__text-size'>
                            <strong>SIZE:</strong>
                           <Select name = 'size' options = {[]}/>
                        </div>
                        <div className = 'goodpage__top__text-btn'>
                           <button>ADD TO BAG</button>
                        </div>
                        <div className = 'goodpage__top__text-delivery'>
                            <i className='fa fa-truck' />&nbsp;
                           <span>
                                Delivery to Russia
                           </span>
                        </div>
                    </div>
                </div>
                <div className = 'goodpage__bottom'>
                    <InfoSection title= 'product code' text = '104513376'/>
                    <InfoSection title= 'brand' text = 'Welcome to the new chapter of Topman. Championing the very best of its heritage, this next phase celebrates cherished pieces, while embracing the new, and retaining that unique London spirit. Firmly cementing themselves as fashion authority, allow Topman to take you on a journey of exploration and discovery. Shop the entire collection only at ASOS, expect T-shirts, sweatshirts, suits and of course, jeans.'/>
                    <InfoSection title='size' text = {`Model's height: 179cm/5'10.5"Model is wearing: Size Medium`} />
                    <InfoSection title = 'about me' text = 'Lining: 72% Polyester, 28% Cotton, Main: 99% Cotton, 1% Elastane.' />

                </div>
           </div>
        </Layout>
    )
}



export default GoodPage;