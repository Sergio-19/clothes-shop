import bannermen from '../public/bannermen.jpg'
import Image from "next/image";
import Layout from '../components/Layout';


const MenPage = () => {
    return(
        <Layout>
        <div className="main__banner">
            <Image src = {bannermen}/>
            <div className="main__banner-btn">
                <a href="/catalog">Каталог</a>
            </div>

        </div>
        <div className="main__galery">
            <div className="main__galery-card">
                <a href = '/galery' className="main__galery-card-img">
                    <img src="https://content.asos-media.com/-/media/homepages/mw/2022/sept/26/moments/mw_warm_handle_moment_870x1110-v3.png"/>
                </a>
                <div className="main__galery-card-text">
                    <h3>ASOS дизайн</h3>
                    <p>Тёплые уютные пуховики</p>
                </div>
            </div>
            <div className="main__galery-card">
                <a href="/galery" className="main__galery-card-img">
                    <img src="https://content.asos-media.com/-/media/homepages/mw/2022/sept/26/moments/mw_global_winter_essentials_moment_870x1110.jpg"/>
                </a>
                <div className="main__galery-card-text">
                    <h3>Стиль Casual</h3>
                    <p>Тёплые, модные, повседневные</p>
                </div>
            </div>
            <div className="main__galery-card">
                <a href="/galery" className="main__galery-card-img">
                    <img src="https://content.asos-media.com/-/media/homepages/mw/2022/sept/26/moments/mw_weekday_moment_870x1110.jpg"/>
                </a>
                <div className="main__galery-card-text">
                    <h3>Тёплые будние</h3>
                    <p>Победи холодную погоду</p>
                </div>
            </div>
            <div className="main__galery-card">
                <a href="galery" className="main__galery-card-img">
                    <img src="https://content.asos-media.com/-/media/homepages/mw/2022/sept/26/moments/mw_retro_day_and_night_moment_870x1110-2.jpg"/>
                </a>
                <div className="main__galery-card-text">
                    <h3>Путешествие в прошлое</h3>
                    <p>Ностальгия в стиле Диско</p>
                </div>
            </div>
        </div>
        <div className="brends">
            <div className="brends__title">
                <h3>Популярные бренды</h3>
            </div>
            <div className="brends__galery">
                <a href="/brand">
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg"/>
                </a>
                <a href="/brand">
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png"/>
                </a>
                <a href="/brand">
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/nike-hp-logos-256x256.jpg"/>
                </a>
                <a href="/brand">
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg"/>
                </a>
                <a href="/brand">
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg"/>
                </a>
                <a href="/brand">
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg"/>
                </a>

            </div>
        </div>
  
    </Layout>
    )
}


export default MenPage