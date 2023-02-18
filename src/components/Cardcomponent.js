

const Cardcomponent = (props) => {
    const {  Judul, Txtp, Img } = props;
    return(
        
            <div className="mb-xxl-5 mb-3">
                <div className="card border-0 mb-3">
                    <div className="row g-0">
                        <div className="col-4">
                            <img src={Img} className="img-fluid rounded-start" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-start">
                                <h5 className="card-title text-success fs-5 fw-semibold">
                                   {Judul}
                                </h5>
                                <p className="card-text fs-6">
                                    {Txtp}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default Cardcomponent;