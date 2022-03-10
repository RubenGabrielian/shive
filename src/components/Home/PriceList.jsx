import styled from "styled-components";
import people from "../../assets/people.png";
import table from "../../assets/table.png";
import lights from "../../assets/lights.png";


const StyledPriceList = styled.div`
    padding: 40px 0;
    h2 {
        text-align: center;
        padding-bottom: 25px;
    }
    .price {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 25px;
        border-radius: 31px;
        box-shadow: 0px 0px 23px -19px;
        h4 {
            margin: 0;
            padding: 0;
        }
        p {
            padding-bottom: 5px;
            margin: 0;
        }
        img {
            width: 90px;
            margin: 0 auto;
        }
    }
`


const PriceList = () => {
    return (
        <StyledPriceList className="container">
            <h2>ԳՆԱՑՈՒՑԱԿ</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="price">
                        <img src={people} />
                        <p> մինչև 45 անձ</p>
                        <h4>150.000 դր․ / օրավարձ</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="price">
                        <img src={table} />
                        <p> +  1 սեղան</p>
                        <h4>25.000 դր․ / 6 - 8 անձի համար</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="price">
                        <img src={lights} />
                        <p>Լուսային ձևավորում</p>
                        <h4>60.000 դր․</h4>
                    </div>
                </div>

            </div>
        </StyledPriceList>
    )
}


export default PriceList;