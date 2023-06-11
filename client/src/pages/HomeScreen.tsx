import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { createTask, getTodo, updateTask } from '../utils/APIs'
import { iTask } from '../utils/interfaces'

const HomeScreen = () => {
    const [todo, setTodo] = useState<iTask[]>([])
    const [todos, setTodos] = useState<string>("")

    useEffect(() => {
        getTodo().then((res: any) => {
            setTodo(res)
        })

    }, [])

    console.log(todo)
    return (
        <div>
            <Container>
                <Main>
                    <Text>Our Todo Entries</Text>

                    <Card>
                        <Date>
                            <DateTime>Mon</DateTime>
                            <DateTime>Tue</DateTime>
                            <DateTime>Wed</DateTime>
                            <DateTime>Thr</DateTime>
                            <DateTime>Fri</DateTime>
                            <DateTime>Sat</DateTime>
                            <DateTime>Sun</DateTime>
                        </Date>
                        <Block>
                            {
                                todo?.map((props: any) => (
                                    <Box
                                        key={props._id} bg={props.complete ? "2" : ""}

                                    />
                                ))
                            }


                        </Block>
                    </Card>


                    <br />
                    <br />
                    <br />
                    <InputHolder>
                        <Input
                            placeholder='Enter a Todo'
                            value={todos}
                            onChange={(e) => {
                                setTodos(e.target.value)
                            }}
                        />
                        <Button
                            onClick={() => {
                                createTask({ title: todos })

                                setTodos('')

                                window.location.reload()
                            }}
                        >Add To do</Button>
                    </InputHolder>

                    <br />
                    <br />
                    <br />
                    <br />
                    {/* <TaskHolder>
                        {
                            todo?.map((props: iTask) => (
                                <Task key={props.id}>
                                    <Title>{props.title}</Title>
                                    <Button
                                        onClick={() => {
                                            updateTask(props.id, { complete: true })

                                            window.location.reload()
                                        }}
                                    >Update</Button>
                                    <Button>Delete</Button>
                                </Task>
                            ))
                        }
                    </TaskHolder> */}

                    <br />
                    <br />
                    <br />
                    {
                        todo?.map((props => (
                            <Timeline>
                                <Line>
                                    <Boxed bg={props.complete ? "ll" : ''} />
                                    <Lined />
                                </Line>
                                <Content>
                                    <div>
                                        <Texted>{props.title}</Texted>
                                        <SubTexted>Sub Title</SubTexted>
                                    </div>
                                    <But>
                                        <Button1 bg="n"
                                            onClick={() => {
                                                updateTask(props.id, { complete: true })

                                                window.location.reload()
                                            }}
                                        >Update</Button1>
                                        <Button1 bg="">Delete</Button1>
                                    </But>
                                </Content>
                            </Timeline>
                        )))
                    }



                </Main>
            </Container>
        </div>
    )
}

export default HomeScreen


const Button1 = styled.div<{ bg: string }>`
display: flex;
align-items: center;
justify-content: center;
width: 60px;
height: 40px;
padding: 0 10px;
background-color: ${({ bg }) => bg ? "purple" : "red"};
border-radius: 3px;
color: white;
transition: all 350ms;
margin-left: 10px;
font-size: 12px;

:hover{
    cursor: pointer;
    transform: translate(0, 5px);
}
`

const But = styled.div`
display: flex;
`

const SubTexted = styled.div`
font-size: 12px;
`

const Texted = styled.div`
font-weight: 600;
`

const Content = styled.div`
display: flex;
/* align-items: center; */
justify-content: space-between;
flex:1
`

const Lined = styled.div`
width: 1px;
height: 40px;

background-color: silver;
`

const Boxed = styled.div<{ bg: string }>`
width: 10px;
height: 10px;
border-radius: 50%;
background-color: ${({ bg }) => bg ? "#40C463" : "silver"} ;

`

const Line = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 10px;
margin-top: 6px;
`

const Timeline = styled.div`
display: flex;
width: 400px;
margin-top: -10px;
`

const Title = styled.div`
font-weight: 600px;
font-size: 30px;
text-transform: capitalize;
width: 300px;

`

const Task = styled.div`
display: flex;
align-items: center;
margin: 10px 0;
border-bottom: 1px solid silver;
padding-bottom: 10px
`

const TaskHolder = styled.div``

const Button = styled.div`
padding: 10px 20px;
background-color: purple;
border-radius: 3px;
color: white;
transition: all 350ms;
margin-left: 10px;

:hover{
    cursor: pointer;
    transform: translate(0, 5px);
}
`

const Input = styled.input`
width: 200px;
height: 35px;
border: 1px solid silver;
outline: none;
border-radius: 3px;
padding-left: 10px;
`

const InputHolder = styled.div`
display: flex;
justify-content: center;
`

const Box = styled.div<{ bg: string }>`
font-weight: 700;
font-size: 10px;
width: 15px;
height: 15px;
margin: 5px ;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({ bg }) => bg ? "#40C463" : "lightgray"};
/* border: 1px solid silver; */
`

const Block = styled.div`
height: 180px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`

const DateTime = styled.div`
font-weight: 700;
font-size: 10px;
width: 15px;
height: 15px;
margin:5px ;
display: flex;
justify-content: center;
align-items: center;



`

const Date = styled.div`
height: 180px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`

const Card = styled.div`
width: 500px;
height: 180px;
border:1px solid silver;
border-radius:3px;
padding: 2px;
display: flex;
`

const Text = styled.pre`
font-weight: 900;
font-size: 20px;
letter-spacing: 5px;
`

const Main = styled.div`
padding: 10px 20px ;
display: flex;
align-items: center;
flex-direction: column;
`

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 50px;
width: 100%;
`