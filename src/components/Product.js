// eslint-disable-next-line no-unused-vars
import css from './../assets/Hero.css';
import React from 'react';

const Product = (props) => {
    // const {NamaP, DeskripsiP, GambarP, remove} = props;
    const tambah = `/tambah`
    return(
        <div className="wrap-kartu mb-xxl-5 mb-4 d-flex justify-content-center align-content-center col-4 col-13">
            <div className="kartu card card-product" >
                <div className="img gambar gambar-product">
                    <img src={props.GambarP} className="card-img-top" alt="dumy" />
                </div>
                <div className="card-body p-1">
                    <p className="nama-barang mb-1 mt-1 fw-semibold">{props.data.title}</p>
                    <p className="deskripsi mb-2 card-text">{props.data.body}</p>
                    <button className="btn btn-success mb-3" onClick={() => props.update(props.data)}>Edit</button>
                    <button className="btn btn-danger mb-3" onClick={() => props.remove(props.data.id)}>Hapus</button>
                </div>
            </div>
        </div>
    );
}

export default Product;