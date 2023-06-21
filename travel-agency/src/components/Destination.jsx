import styled from "styled-components";
import cuba from "../assets/cuba.png";
import paris from "../assets/paris.png";
import japan from "../assets/japan.png";
import Button from "./Button";

export default function Destination() {
    const data = [

        {
            name: "Cuba City",
            image: cuba
        },
        {
            name: "Paris City",
            image: paris
        },
        {
            name: "Japan City",
            image: japan
        },
    ]
    return (
        <Section id="destinations">
            <div className="info">
                <h2> Top <span>Destination</span> In the World</h2>

                <p>
                    It is a long establishment fact that a reaber will be distracted by the readable content  of a page when looking at its layout from it.
                </p>
                <Button text="Discover More" />
            </div>
            <div className="destinations">
                {
                    data.map(({ name, image }) => {
                        return (
                            <div className="destination" key={name}>
                                <img src={image} alt="" />
                                <div className="name">
                                    <h3>{name}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Section>
    )
}

const Section = styled.section`
display: flex;
gap: 5rem;
.info{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem;
    h2{
        font-size: 2rem;
        line-height: 3rem;
        span{
            color: var(--primary-color);
        }
    }
    p{
        color: var(--secondary-text);
    }
}
.destinations{
    flex: 2;
    display: flex;
    gap: 2rem;
    .destination{
        position: relative;
        img{
            height: 20rem;
        }
        .name{
            position: absolute;
            bottom: 0;
            height: 100%;
            width: 100%;
            background: linear-gradient(to bottom, #ffffff14, #000000ae);
            display: flex;
            flex-direction: column-reverse;
            h3{
                margin-left: 1rem;
                font-size: 1.5rem;
                color: white;
            }
        }
    }
}
`;
