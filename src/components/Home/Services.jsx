import styled from "styled-components";
import Service from "./Service";
// Icons
import garden from "../../assets/garden.png";
import kitchen from "../../assets/kitchen.png";
import fork from "../../assets/fork.png";
import barbecue from "../../assets/barbecue.png";
import hut from "../../assets/hut.png";
import pool from "../../assets/pool.png";
import room from "../../assets/room.png";
import bathroom from "../../assets/bathroom.png";
import playround from "../../assets/playground.png";
import tenis from "../../assets/tenis.png";
import parking from "../../assets/parking.png";
import wifi from "../../assets/wifi.png";


const StyledServices = styled.div`
    padding-top: 40px;
    h2 {
        text-align: center;
        padding-bottom: 25px;
    }
    .service {
        display: flex;
        align-items: center;
        padding: 15px;
        justify-content: center;
        margin-bottom: 30px;
        text-align: center;
        flex-direction: column;
        span {
            padding-top: 5px;
        }
    }
`
const Services = () => {
    return (
        <StyledServices className="container">
            <h2>ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</h2>
            <div className="row">
                <Service
                    icon={garden}
                    text={"Խնամված ու գողեցիկ այգի (300քմ)"}
                />
                <Service
                    icon={kitchen}
                    text={"Խոհանոց"}
                />
                <Service
                    icon={fork}
                    text={"Սպասք և անհրաժեշտ պարագաներ"}
                />
                <Service
                    icon={barbecue}
                    text={"Խորոված պատրաստելու հարմարանք"}
                />
                <Service
                    icon={hut}
                    text={"Ամառային և ձմեռային տաղավարներ"}
                />
                <Service
                    icon={pool}
                    text={"Լողավազան"}
                />
                <Service
                    icon={room}
                    text={"Հանգստի սենյակ"}
                />
                <Service
                    icon={bathroom}
                    text={"Սանհանգույց"}
                />
                <Service
                    icon={playround}
                    text={"Խաղահրապարակ"}
                />
                 <Service
                    icon={tenis}
                    text={"Սեղանի Թենիս"}
                />
                 <Service
                    icon={parking}
                    text={"Ավտոկայանատեղի"}
                />
                 <Service
                    icon={wifi}
                    text={"WiFi"}
                />
            </div>
        </StyledServices>
    )
}

export default Services;