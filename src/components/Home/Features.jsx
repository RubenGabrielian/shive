import React from "react";
import poolImage from "../../assets/pool.jpg"
import bacotyaTaghavarImage from "../../assets/bacotya-taxavar.jpg";
import greenPlace from "../../assets/green.jpg";
import styled from "styled-components";
import FeatureItem from "./FeatureItem";

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

const Row = styled.div`
    position: relative;
    top: -70px;
`

const Features = () => {
    return (
        <div className="container" style={{ paddingBottom: "50px" }}>
            <Row className="row">
                <FeatureItem 
                    img={poolImage}
                    title="Բացոթյա լողավազան" 
                    description="Բացոթյա լողավազանը հրաշալի հնարավորություն է ընձեռում ազատվել ամառվա տապից, զովանալ և հանգստանալ ընտանիքի անդամների կամ ընտանիքի հետ։"
                />
                 <FeatureItem 
                    img={bacotyaTaghavarImage}
                    title="Բացոթյա Տաղավար" 
                    description="Բացոթյա լողավազանը հրաշալի հնարավորություն է ընձեռում ազատվել ամառվա տապից, զովանալ և հանգստանալ ընտանիքի անդամների կամ ընտանիքի հետ։"
                />
                <FeatureItem 
                    img={greenPlace}
                    title="Կանաչ տարածք" 
                    description="Բացոթյա լողավազանը հրաշալի հնարավորություն է ընձեռում ազատվել ամառվա տապից, զովանալ և հանգստանալ ընտանիքի անդամների կամ ընտանիքի հետ։"
                />
            </Row>
        </div>
    )
}

export default Features;