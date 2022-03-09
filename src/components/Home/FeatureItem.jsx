import styled from "styled-components";

const Feature = styled.div`
    width: 100%;
    height: 450px;
    background-size: cover;
    background-position: center;
    border-radius: 18px;
    position: relative;
    &:hover {
        cursor: pointer;
        .content {
            height: 180px;
            color: #3a3a3a;
            background: white;
            padding: 15px;
        }
    }
    .content {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: white;
        height: 30px;
        overflow: hidden;
        transition: 300ms ease-in-out;
        width: 88%;
        border-radius: 10px;
        h4 {
            font-size: 20px;
            font-weight: 700;
            margin: 0;
            padding:0;
        }
        p {
            font-size: 15px;
        }
    }
`

const FeatureItem = ({img, title, description}) => {
    return (
        <div className="col-md-4">
            <Feature className="feature" style={{ backgroundImage: `url("${img}")` }}>
                <div className="content">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </Feature>
        </div>
    )
}

export default FeatureItem;