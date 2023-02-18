// eslint-disable-next-line no-unused-vars
import css from './../assets/Hero.css';

const Footer = () =>{
    return(
        <footer className="text-center text-lg-start bg-color text-muted">
        <section className="pt-3">
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            BELANJAMUDAH
                        </h6>
                        <p>
                            Belanja kebutuhan rumah tangga mudah dan praktis, hanya di
                            BELANJAMUDAH.COM dengan berbagai macam kebutuhan pasar yang
                            lengkap.
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Follow Use</h6>
                        <p>
                            <a href="/" className="text-reset">Instagram</a>
                        </p>
                        <p>
                            <a href="/" className="text-reset">Facebook</a>
                        </p>
                        <p>
                            <a href="/" className="text-reset">Youtube</a>
                        </p>
                        <p>
                            <a href="/" className="text-reset">Tiktok</a>
                        </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                        <p>
                            <a href="/" className="text-reset">Pricing</a>
                        </p>
                        <p>
                            <a href="/" className="text-reset">Settings</a>
                        </p>
                        <p>
                            <a href="/" className="text-reset">Orders</a>
                        </p>
                        <p>
                            <a href="/" className="text-reset">Help</a>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p>Kec. Kesamben Kab. Blitar desa tapakrejo Rt.04 Rw.03</p>
                        <p>rezalnurscc@gmail.com</p>
                        <p> +6282141329712</p>
                        <p> +6282141329716</p>
                    </div>
                </div>
            </div>
        </section>

        <div className="text-center p-4 name-footer" >
            ©2022 Copyright:
            <a className="text-reset fw-bold" href="/">BELANJAMUDAH.COM</a>
        </div>
    </footer>
    )
}

export default Footer;