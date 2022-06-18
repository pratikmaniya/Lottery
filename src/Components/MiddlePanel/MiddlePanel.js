import {Row, Col, Button} from 'react-bootstrap'

import LotteryNumber from './LotteryNumber'

function MiddlePanel(props){
    return <Col xs={6} className="middlePanelContainer">
        <Row>
            <LotteryNumber number={1} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber} />
            <LotteryNumber number={2} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={3} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={4} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={5} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={6} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={7} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={8} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={9} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={10} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={11} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={12} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={13} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={14} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={15} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={16} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={17} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={18} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={19} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <LotteryNumber number={20} numbers={props.numbers} addNumber={props.addNumber} removeNumber={props.removeNumber}/>
            <Col xs={4} className='numberContainer'>
                <Button variant='secondary' onClick={props.cashClickHandler}>CASH</Button>
            </Col>
            <Col xs={4} className='numberContainer'>
                <Button variant='secondary' onClick={props.clearClickHandler}>CLEAR</Button>
            </Col>
            <Col xs={12} className='numberContainer'>
                <Button variant='secondary' onClick={props.randomClickHandler}>RANDOM</Button>
            </Col>
        </Row>
    </Col>
}

export default MiddlePanel;