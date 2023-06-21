import styled from "styled-components";
import lighthouse from "../assets/lighthouse.png";
import { BiWorld } from 'react-icons/bi';
import { BsHeadphones, BsPerson } from "react-icons/bs";

export default function Offer() {
    const data = [
        {
            text: "Best Travel guide always for your service",
            icon: <BsPerson />,
            color: "red",
        },
        {
            text: "World class Service Provide for you.",
            icon: <BiWorld />,
            color: "green",
        },
        {
            text: "24/7 Strong Customer Service",
            icon: <BsHeadphones />,
            color: "yellow",
        },
    ]
    return (
        <Section id="offer">

            <div className="image">
                <img src={lighthouse} alt="" />
            </div>
            <div className="content">

                <div className="title">
                    <h1>We are offering in Total  793 Tours Across the World. </h1>
                </div>
                <ul>
                    <div className="list">
                        {
                            data.map(({ text, icon, color }) => {
                                return (
                                    <li key={text}>
                                        <div className={`icon ${color}`} >
                                            {icon}
                                        </div>
                                        <div className="text">
                                            <h3>{text}</h3>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </div>
                </ul>
            </div>

        </Section>
    )
}

const Section = styled.section`
    margin: 8rem 0;
    display: flex;
    gap: 5rem;
    .image{
        img{
            height: 40rem;
        }

    }
    .content{
        .title{
            margin: 2rem 0;
            h1{
                font-size: 3rem;
            }
        }
        .list{
           li{
            display: flex;
            list-style-type: none;
            align-items: center;
            gap: 4rem;
            margin: 4rem 0;
           }
           .icon{
            padding: 0.5rem;
            border-radius: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;

           }
           .red{
            background-color: #ff3010aa;
            color: white;
           }
           .yellow{
            background-color: #ffc01e55;
            color: #ffc01e;
           }
           .green{
            background-color: #65ce5455;
            color: #65ce54;
           }

        }
    }

`;