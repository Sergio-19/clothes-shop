import HeaderMen from "./HeaderMen";
import HeaderWomen from "./HeaderWomen";
import { useRouter } from "next/router";

const Header = () => {

    const router = useRouter()

    let women = false

    const classes = ["header__logo-sex-item"]
    const cl = ["header__logo-sex-item"]
    if(women){classes.push("header__logo-sex-item-active")}
    if(!women){cl.push("header__logo-sex-item-active")}

    return(
        <><header className="header">
        <div className="header__container">
            <div className="header__logo">
                <div className="header__logo-burger">
                    <div><i className="fa fa-bars"></i></div>
                </div>
                <div className="header__logo-logo">
                    <a href="/">ASOS:<br/>STORE</a>
                </div>
                <div className="header__logo-sex">
                    <div className={classes.join(' ')} onClick = {()=> router.push('/')}><span>WOMEN</span></div>
                    <div className={cl.join(' ')} onClick = {()=> router.push('/men')}><span>MEN</span></div>
                </div>
            </div>
            <div className="header__search">
                <div className="header__search-input">
                    <div className="header__search-input-icon">
                        <i className="fa fa-search"></i>
                    </div>
                    <input type="text" />
                </div>
            </div>
            <div className="header__icons">
                <div className="header__icons-item header__icons-search">
                    <span><i className="fa fa-search"></i></span>
                </div>
                <div className="header__icons-item">
                    <a href = '/'><i className="fa fa-user"></i></a>
                </div>
                <div className="header__icons-item">
                    <a href = '/'><i className="fa fa-heart"></i></a>
                </div>
                <div className="header__icons-item header__icons-bag" onClick = {()=> router.push('/cart')}>
                    <span><i className="fa fa-shopping-bag"></i></span>
                    <small className="header-round">1</small>
                </div>
            </div>
        </div>
    </header>
    {women ? <HeaderWomen /> : <HeaderMen/>}    
    <div className="header__delivery">
        <a href = '/sale' className="header__delivery-sale">
            <strong>Скидки от 25% на всё</strong>
        </a>
        <a href = '/delivery' className="header__delivery-delivery">
            <strong>Доставка в Россию</strong>
        </a>
    </div>
        </>

    )
}



export default Header;