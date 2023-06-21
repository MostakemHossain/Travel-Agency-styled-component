import styled from "styled-components";
import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appleStore.png";
import screens from "../assets/screens.png";

export default function DownloadApp() {
    return (
        <Section>
            <div className="info">
                <h1>Download Now Travel Community Apps</h1>
                <div className="downloads">
                    <img src={googlePlay} alt="" />
                    <img src={appStore} alt="" />
                </div>
            </div>
            <img className="screens" src={screens} alt="" />
        </Section>
    )
}

const Section = styled.section`
height: 25rem;
width: 100%;
margin: 5rem 0;
background: linear-gradient(to right, #a6f2f2,#ddf181);

display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10rem;
position: relative;
overflow: hidden;
.info{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1{
        font-size: 3rem;
        width: 60%;
    }
    .downloads{
        display: flex;
        gap: 1rem;
        img{
            cursor: pointer;
            height: 3rem;
        }
    }

}
.screens{
    height: 22rem;
    position: absolute;
    bottom: -2rem;
    right: 1rem;

}


`;