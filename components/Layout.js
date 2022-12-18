import Header from "./Header"
import Head from "next/head"
import Footer from "./Footer"

const Layout = ({children}) => {
    return (
        <>
        <Head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link href= "https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel= "stylesheet" />
            <title>Goods Page</title>
        </Head>
        <div className="main">
            <div className="content">
                <Header />
                <div className="container">
                    {children}
                </div>
                <Footer />
            </div>

        </div>
        </>
    )
}


export default Layout