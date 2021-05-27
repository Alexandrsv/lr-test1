import 'antd/dist/antd.css';
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import {message} from "antd";
import {useState} from "react";
import s from './App.module.css'
import Objects from "./Objects";


function App() {
    let [counter, setCounter] = useState(5)
    let [answer, setAnswer] = useState('')
    const handleAnswer = (e) => {
        const value = e.currentTarget.value
        setAnswer(value)

        if (parseInt(value) === counter) {
            message.success('Верно');
            setAnswer('')
            setCounter(Math.ceil(Math.random() * 20))
        }
    }
    return (
        <Layout style={{height: '100vh'}}>
            <Header>
                <h1 style={{color: 'white'}}>Посчитай!</h1>
            </Header>
            <Content className={s.Content}>
                <Objects countObj={counter}/>
                <input className={s.Inp} type="text" onChange={handleAnswer} placeholder={'Сколько их?'} value={answer}/>

            </Content>
            <Footer style={{textAlign: 'center'}}>В чем разница между уткой?🦆</Footer>
        </Layout>
    );
}

export default App;
