const Service = ({ icon, text }) => {
    return (
        <div className="col-md-3">
            <div className="service">
                <img src={icon} width={"20%"} />
                <span>{text}</span>
            </div>
        </div>
    )
}

export default Service;