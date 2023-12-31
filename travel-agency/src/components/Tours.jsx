import styled from "styled-components";
import tour1 from "../assets/tour1.png";
import tour2 from "../assets/tour2.png";
import tour3 from "../assets/tour3.png";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import ellipse from "../assets/ellipse.png";
import { BsFillStarFill } from "react-icons/bs";

export default function Tours() {
    const data = [
        {
            image: tour1,
            title: "Santorini,Oia Greece",
            price: 2000,
            reviews: "5K reviews",
        },
        {
            image: tour2,
            title: "LightHouse,Bellwood",
            price: 3000,
            reviews: "2K reviews",
        },
        {
            image: tour3,
            title: "Riverfront, Japan",
            price: 4000,
            reviews: "6K reviews",
        },
    ];
    return (
        <Section id="tour">
            <h2>Choose Your Destination</h2>
            <div>
                <img className="ellipse" src={ellipse} alt="" />
            </div>
            <div className="tours">
                {data.map(({ image, title, price, reviews }, index) => {
                    return (
                        <div className="tour" key={index}>
                            <div className="image">
                                <img src={image} alt="" />
                                {index === 1 && (
                                    <div className="vectors">
                                        <img className="vector1" src={vector1} alt="" />
                                        <img className="vector2" src={vector2} alt="" />
                                    </div>
                                )}
                            </div>
                            <div className="info">
                                <div className="details">
                                    <h4>{title}</h4>
                                    <div className="price-details">
                                        <span className="price">{price}</span>
                                        <div className="reviews">
                                            <div className="stars">
                                                <BsFillStarFill></BsFillStarFill>
                                                <BsFillStarFill></BsFillStarFill>
                                                <BsFillStarFill></BsFillStarFill>
                                                <BsFillStarFill></BsFillStarFill>
                                                <BsFillStarFill></BsFillStarFill>
                                            </div>
                                            <span className="review">{reviews}</span>
                                        </div>
                                    </div>
                                </div>
                                <button>+</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}

const Section = styled.section`
  margin-top: 15rem;
  margin-bottom: 5rem;
  position: relative;
  .ellipse {
    position: absolute;
    right: -5rem;
    top: -20rem;
    height: 30rem;
  }
  h2 {
    text-align: center;
    transform: translateY(-150px);
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  .tours {
    display: flex;
    gap: 1rem;
    justify-content: center;

    .tour {
      position: relative;
      &:nth-of-type(2) {
        transform: translateY(-150px);
      }
      .image {
        img {
          height: 25rem;
        }
        .vectors {
          .vector1 {
            position: absolute;
            height: 8rem;
            top: 0;
            left: -9rem;
          }
          .vector2 {
            position: absolute;
            height: 8rem;
            top: 0;
            right: -8rem;
          }
        }
      }
      .info {
        position: absolute;
        bottom: -30px;
        right: 0;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        button {
          padding: 0.5rem 0.7rem;
          background-color: var(--primary-color);
          border: none;
          font-size: 1.1rem;
          color: white;
          cursor: pointer;
        }
        .details{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            .price-details{
                display: flex;
                gap: 1rem;
            }
            .price{
                color: var(--primary-color);
                font-weight: bolder;
            }
            .reviews{
                display: flex;
                gap: 0.5rem;
                .stars{
                    svg{
                        color: #ffc01e;
                    }
                }
                .review{
                    color: var(--secondary-text);
                }
            }
        }
      }
    }
  }
`;
