import React from "react";
import coverPhoto from "../../assets/cover.png"
import styled from "styled-components";
import Header from "../Header/Index";

const CoverImage = styled.div`
    .cover-img {
        width: 100%;
        height: 600px;
        position: relative;
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 600px;
            background: #00000096;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-blend-mode: color;
            background-color: black;
        }
        .content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 999;
            h1 {
                color: white;
                text-decoration-line: overline;
                font-size: 48px;
            }
        }
    }
`


const Cover = () => {
    return (
        <CoverImage>
            <Header />
            <div className="cover-img" >
                <img src={coverPhoto} />
                <div className="content">
                    <h1>ԲԱՐԻ ԳԱԼՈՒՍՏ ՇԻՎԷ</h1>
                </div>
            </div>
        </CoverImage>
    )
}

export default Cover;