import {Button, Col} from 'react-bootstrap'

function CashNumber(props){
    return <Col xs={6} className="cashButtonContainer">
        <Button variant="primary" onClick={_=>props.cashClickHandler(props.cashNumber)} disabled={props.isCashingDisabled}>${props.cashNumber}</Button>
    </Col>
}

export default CashNumber;