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
    const [output, setoutput] = useState("")
    const [count, setCount] = useState(0)

    var options = [Rock,Paper,Scissor];
    
    let setChoice = (choice) => {
        setUserChoice(choice)
        setCompChoice(options[Math.floor(Math.random() * options.length)])
        setCount(count + 1);
        
    }
    
    useEffect(() => {
        console.log("UScore",userScore);
        console.log("CScore",compScore);
        if (userChoice == Rock) {
            if (compChoice == Scissor) {
                setoutput("You Win!!");
                setUserScore(userScore + 1);
            }else if(compChoice == Paper) {
                setoutput("Computer Wins!!");
                setCompScore(compScore + 1);
            }else {
                setoutput("Draw!!");
            }
        }
        else if (userChoice == Paper) {
            if (compChoice == Rock) {
                setoutput("You Win!!");
                setUserScore(userScore + 1);
            }else if(compChoice == Scissor) {
                setoutput("Computer Wins!!");
                setCompScore(compScore + 1);
            }else {
                setoutput("Draw!!");
            }
        }
        else if (userChoice == Scissor) {
            if (compChoice == Paper) {
                setoutput("You Win!!");
                setUserScore(userScore + 1);
            }else if(compChoice == Rock) {
                setoutput("Computer Wins!!");
                setCompScore(compScore + 1);
            }else {
                setoutput("Draw!!");
            }
        }
        
    },[count])
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
                                    <ChoiceImage src={compChoice} alt="" />
                                </ChoiceContainer>
                            </MidGestureContainer>
                            <BottomScoreConatainer>
                                <Score>{compScore}</Score>
                            </BottomScoreConatainer>
                        </LeftContainer>
                        <MiddleContainer>
                            <WinTag>
                                {output}
                            </WinTag>
                        </MiddleContainer>
                        <RightContainer>
                            <GestureContainer>
                                <RockImage onClick={() => setChoice(Rock)}>
                                    <GestureImage src={Rock} alt="Image" />
                                </RockImage>
                                <PaperImage onClick={() => setChoice(Paper)}>
                                    <GestureImage src={Paper} alt="Image" />
                                </PaperImage>
                                <ScissorImage onClick={() => setChoice(Scissor)}>
                                    <GestureImage src={Scissor} alt="Image" />
                                </ScissorImage>
                            </GestureContainer>
                            <RightMidGestureContainer>
                                <ChoiceContainer>
                                    <ChoiceImage src={userChoice} alt="" />
                                </ChoiceContainer>
                            </RightMidGestureContainer>
                            <BottomScoreConatainer>
                                <Score>{userScore}</Score>
                            </BottomScoreConatainer>
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
    display: flex;
    align-items: center;
    justify-content: center;
`;
const WinTag = styled.h3`
    font-size: 40px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background: -webkit-linear-gradient(top, #8f6B29, #FDE08D, #DF9F28);
	background: linear-gradient(top, #8f6B29, #FDE08D, #DF9F28);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
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
const BottomScoreConatainer = styled.div`
    border: 5px groove yellowgreen;
    border-radius: 2px;
    width: 80%;
    margin: 0 auto;
`;
const Score = styled.h1`
    color: #fff;
    background-color: #000;
    margin: unset;
    padding: 10px 0;
    font-size: 35px;
    font-family: cursive;
    font-weight: bold;
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
    width: 180px;
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
