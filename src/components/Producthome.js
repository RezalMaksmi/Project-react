// eslint-disable-next-line no-unused-vars
import css from './../assets/Hero.css';
import React from 'react';

const Producthome = (props) => {
    const {NamaP, DeskripsiP, GambarP} = props;
    return(
        <div className="wrap-kartu mb-xxl-5 mb-4 d-flex justify-content-center align-content-center col-4 col-13">
            <div className="kartu card card-product" >
                <div className="img gambar gambar-product">
                    <img src={GambarP} className="card-img-top" alt="dumy" />
                </div>
                <div className="card-body p-1">
                    <p className="nama-barang mb-1 mt-1 fw-semibold">{NamaP}</p>
                    <p className="deskripsi mb-2 card-text">{DeskripsiP}</p>
                </div>
            </div>
        </div>
    );
}

export default Producthome;