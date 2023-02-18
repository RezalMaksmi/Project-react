import Cardcomponent from "../components/Cardcomponent";
import Hero from "../components/Hero";
import mudah from './../assets/belimudah.png';
import langsung from './../assets/langsungketoko.png';
import bayar from './../assets/pembayaran.png';


import p1 from './../assets/product/bebek.jpg';
import p2 from './../assets/product/gulamerah.jpg';
import p3 from './../assets/product/indomie.jpg';
import p4 from './../assets/product/well.jpg';
import Producthome from "../components/Producthome";
// import { Component } from "react";


const Maincontent = () => {
        return (
            <div className="container">
                <Hero />
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center my-5">
                        <h2 className="txt-layanan m-auto d-flex justify-content-center text-success">
                            Layanan
                        </h2>
                        </div>
                        <div className="row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-1 row-cols-1 m-auto d-flex justify-content-around align-content-center">
                            <Cardcomponent Judul="Anti Ribet" Txtp="Dengan pembelian mudah tinggal klik nyampe tujuan." Img={mudah}/>
                            <Cardcomponent Judul="Toko Kami" Txtp="Pembelian ditoko dan dapatkan diskon yang menarik." Img={langsung} />
                            <Cardcomponent Judul="Pembayaran" Txtp="Dengan sistem pembayaran electronik maupun cash anti ribet." Img={bayar} />
                        </div>
                        <section className="pt-5 pb-5 " id="product">
                            <h2 className="m-auto d-flex justify-content-center text-success">Produk</h2>
                            <div className="bungkus-atas container text-center mt-5">
                                <div class="wrapping row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-2 m-auto d-flex justify-content-center align-content-center">
                                    <Producthome NamaP="Telur Bebek" DeskripsiP="Telur Bebek dari peternak terbaik pilihan" GambarP={p1}/>
                                    <Producthome NamaP="Gula Merah" DeskripsiP="Gula merah jawa asli dibuat dari kelapa pilihan." GambarP={p2}/>
                                    <Producthome NamaP="Indomie Goreng Murah" DeskripsiP="Indomie goreng murah, harga promo." GambarP={p3}/>
                                    <Producthome NamaP="Minyak Well" DeskripsiP="Minyak Well Asli murni dari pabrik terbaik.." GambarP={p4}/>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    
}

export default Maincontent;