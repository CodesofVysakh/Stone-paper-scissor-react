import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import UserImage from '../assets/images/user.png'
import CompImage from '../assets/images/computer.png'
import Rock from '../assets/images/rock.png'
import Paper from '../assets/images/paper.png'
import Scissor from '../assets/images/scissor.png'

function Landing() {
    const [userChoice, setUserChoice] = useState("")
    const [compChoice, setCompChoice] = useState("")
    const [userScore, setUserScore] = useState(0)
    const [compScore, setCompScore] = useState(0)


    useEffect(() => {
        
    }, [])

    let setChoice = (choice) => {
        console.log(choice);
        setUserChoice(choice)


    }
    return (
        <Body>
            <Title>Stone-Paper-Scissor</Title>
            <Wrapper>
                <TopContainer>
                    <CompContainer>
                        <Image src={CompImage} alt="Image" />
                    </CompContainer>
                    <HeadingContainer>
                        <CompHeading>
                            Comp
                        </CompHeading>
                        <VSHeading>
                            VS
                        </VSHeading>
                        <UserHeading>
                            You
                        </UserHeading>
                    </HeadingContainer>
                    <UserContainer>
                        <Image src={UserImage} alt="Image" />
                    </UserContainer>
                </TopContainer>
                <BottomContainer>
                    <BodyContainer>
                        <LeftContainer>
                            <GestureContainer>
                                <RockImage>
                                    <GestureImage src={Rock} alt="Image" />
                                </RockImage>
                                <PaperImage>
                                    <GestureImage src={Paper} alt="Image" />
                                </PaperImage>
                                <ScissorImage>
                                    <GestureImage src={Scissor} alt="Image" />
                                </ScissorImage>
                            </GestureContainer>
                            <MidGestureContainer>
                                <ChoiceContainer>
                                    <ChoiceImage src={Rock} alt="" />
                                </ChoiceContainer>
                            </MidGestureContainer>
                        </LeftContainer>
                        <MiddleContainer>

                        </MiddleContainer>
                        <RightContainer>
                            <GestureContainer>
                                <RockImage>
                                    <GestureImage src={Rock} alt="Image" onClick={() => setChoice("Rock")} />
                                </RockImage>
                                <PaperImage>
                                    <GestureImage src={Paper} alt="Image" onClick={() => setChoice("Paper")} />
                                </PaperImage>
                                <ScissorImage>
                                    <GestureImage src={Scissor} alt="Image" onClick={() => setChoice("Scissor")} />
                                </ScissorImage>
                            </GestureContainer>
                            <RightMidGestureContainer>
                                <ChoiceContainer>
                                    <ChoiceImage src={Paper} alt="" />
                                </ChoiceContainer>
                            </RightMidGestureContainer>
                        </RightContainer>
                    </BodyContainer>
                </BottomContainer>
            </Wrapper>
        </Body>
    )
}

const Body = styled.div`
    background-color: #FC997C;
    width: 100vw;
    padding: 20px 0 50px;
    text-align: center;
`;
const Title = styled.h3`
    font-size: 50px;
    margin-bottom: 60px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;
const TopContainer = styled.div`
    position: relative;
    padding: 0 30px;
`;
const Image = styled.img`
    width: 100%;
    display: block;

`;
const UserContainer = styled.div`
    width: 150px;
    z-index: 2;
    position: absolute;
    top: 0;
    right: 10px;
`;
const CompContainer = styled.div`
    width: 150px;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 10px;
`;
const HeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
`;
const CompHeading = styled.h5`
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: #DADDFC;
    padding: 20px;
    border-radius: 5px;
    width: 20%;
`;
const VSHeading = styled.h5`
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: #DADDFC;
    padding: 20px;
    border-radius: 5px;
`;
const UserHeading = styled.h5`
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: #DADDFC;
    padding: 20px;
    border-radius: 5px;
    width: 20%;
`;
const BottomContainer = styled.div``;

const BodyContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;
const LeftContainer = styled.div`
    background-color: #396EB0;
    border-radius: 30px;
    height: 500px;
    width: 45%;
    padding: 30px 0;

`;
const MiddleContainer = styled.div`
    height: 250px;
    width: 30%;
    background-color: #fff;
    border: 2px solid #2E4C6D;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    transform: translateX(50%);
    right: 35%;
    transform: translateY(-50%);
`;
const RightContainer = styled.div`
    background-color: #396EB0;
    border-radius: 30px;
    height: 500px;
    width: 45%;
    padding: 30px 0;
`;
const GestureContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const MidGestureContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    padding: 35px 0;
`;
const RightMidGestureContainer = styled.div`
    width: 70%;
    margin-left: auto;
    padding: 35px 0;
`;
const ChoiceContainer = styled.div`
    background-color: red;
    height: 250px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ChoiceImage = styled.img`
    width: 80%;
    object-fit: contain;
    display: block;
`;
const RockImage = styled.div`
    width: 85px;
    cursor: pointer;
    background-color: #F1C550;
    border: 3px solid #FBE4C9;
    border-radius: 10px;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const PaperImage = styled.div`
    width: 85px;
    cursor: pointer;
    background-color: #F1C550;
    border: 3px solid #FBE4C9;
    border-radius: 10px;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ScissorImage = styled.div`
    width: 85px;
    cursor: pointer;
    background-color: #F1C550;
    border: 3px solid #FBE4C9;
    border-radius: 10px;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const GestureImage = styled.img`
    width: 60%;
    display: block;
    object-fit: contain;
`;



export default Landing
