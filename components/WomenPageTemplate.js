import bannerwomen from '../public/bannerwomen.jpg'
import Image from "next/image";


const WonemPage = () => {

    return (
        <>
        <div className="main__banner">
            <Image src= {bannerwomen}/>
            <div className="main__banner-btn">
                <a href="/catalog">Каталог</a>
            </div>

        </div>
        <div className="main__galery">
            <div className="main__galery-card">
                <a href = '/galery' className="main__galery-card-img">
                    <img src="https://content.asos-media.com/-/media/homepages/ww/2022/sept/26/moments/ww_global_ultimate_tailoring_moment_870x1110.jpg"/>
                </a>
                <div className="main__galery-card-text">
                    <h3>Красивая жизнь</h3>
                    <p>На стиле с ASOS</p>
                </div>
            </div>
            <div className="main__galery-card">
                <a href="/galery" className="main__galery-card-img">
                    <img src="https://content.asos-media.com/-/media/homepages/ww/2022/sept/26/moments/ww_global_corsage_dressing_moment_870x1110.jpg"/>
                </a>
                <div className="main__galery-card-text">
                    <h3>Королева сцены</h3>
                    <p>Костюмы и корсеты</p>
                </div>
            </div>
            <div className="main__galery-card">
                <a href="/galery" className="main__galery-card-img">
                    <img src="https://content.asos-media.com/-/media/homepages/ww/2022/sept/26/moments/ww_global_colour_and_shine_pu_moment_870x1110.jpg"/>
                </a>
                <div className="main__galery-card-text">
                    <h3>Подъем и блеск</h3>
                    <p>Победи холодную погоду</p>
                </div>
            </div>
            <div className="main__galery-card">
                <a href="galery" className="main__galery-card-img">
                    <img src="https://content.asos-media.com/-/media/homepages/ww/2022/sept/26/hero/tstm_refresh3_mob_ww_v2.png"/>
                </a>
                <div className="main__galery-card-text">
                    <h3>Клубный стиль</h3>
                    <p>ASOS Дизайн</p>
                </div>
            </div>
        </div>
        <div className="brends">
            <div className="brends__title">
                <h3>Популярные бренды</h3>
            </div>
            <div className="brends__galery">
                <a href="/brand">
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg"/>
                </a>
                <a href="/brand">
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/never-fully-dressed-hp-logos-256x256.png"/>
                </a>
                <a href="/brand">
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x---test.png"/>
                </a>
                <a href="/brand">
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg"/>
                </a>
                <a href="/brand">
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg"/>
                </a>
                <a href="/brand">
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg"/>
                </a>

            </div>
        </div>
  
    </>
    )
}


export default WonemPage