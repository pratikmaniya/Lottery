import {Container, Row, Col} from 'react-bootstrap'

import CashNumber from "./CashNumber";

function LeftPanel(props){
    return <Col xs={3} className="leftPanelContainer">
        <Container>
            <Row>
                <CashNumber
                    cashNumber={1}
                    isCashingDisabled={props.isCashingDisabled}
                    cashClickHandler={props.cashClickHandler}
                />
                <CashNumber
                    cashNumber={5}
                    isCashingDisabled={props.isCashingDisabled}
                    cashClickHandler={props.cashClickHandler}
                />
                <CashNumber
                    cashNumber={10}
                    isCashingDisabled={props.isCashingDisabled}
                    cashClickHandler={props.cashClickHandler}
                />
                <CashNumber
                    cashNumber={20}
                    isCashingDisabled={props.isCashingDisabled}
                    cashClickHandler={props.cashClickHandler}
                />
            </Row>
        </Container>
    </Col>
}

export default LeftPanel;