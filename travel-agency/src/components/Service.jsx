
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png"
import service3 from "../assets/service3.png"
import service4 from "../assets/service4.png"


export default function Service() {
    const data = [
        {
            image: service1,
            title: "Choose Destinations",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, saepe!"
        },
        {
            image: service2,
            title: "Explore the Place",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, saepe!"
        },
        {
            image: service3,
            title: "Start Your Journey",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, saepe!"
        },
        {
            image: service4,
            title: "Let's Enjoy",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, saepe!"
        }
    ]
    return (
        <Section id="services">
            <div className="services">
                {
                    data.map(({ image, title, description }) => {
                        return (
                            <div className="service" key={title}>

                                <img src={image} alt="service1" />
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        )
                    })
                }
            </div>


        </Section>
    )
}

const Section = styled.section`
margin: 8rem 4rem;
.services{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1rem;
    .service{
        padding: 1.5rem 2rem;
        text-align: center;
        background-color: var(--card-gray);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        h1{
            color: var(--primary-color);

        }
        p{
            color: var(--secondary-text);

        }
        img{
            height: 128px;
            width: 128px;
        }
        transition: var(--default-transition);
        &:hover{
            background-color: white;
            box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;

        }

    }
}



`
