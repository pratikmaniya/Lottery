import {Col, Button} from 'react-bootstrap'

function LotteryNumber(props){
    return <Col xs={2} className="numberContainer">
        {
            props.numbers.includes(props.number)
            ?
            <Button variant="success" onClick={()=>props.removeNumber(props.number)}>{props.number}</Button>
            :
            <Button variant="secondary" onClick={()=>props.addNumber(props.number)}>{props.number}</Button>
        }
    </Col>
}

export default LotteryNumber;