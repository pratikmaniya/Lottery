import { Container, Col } from "react-bootstrap";

function RightPanel(props){
    return <Col xs={3} className="rightPanelContainer">
        <Container className="rightPanel">
                <h4>Numbers Selected</h4>
                {
                    props.numbers.map(number=>(
                        <h5 key={number}>Mark: {number}</h5>
                    ))
                }
                <h5 className="rightPanelTotal">Total: ${props.isCashTotalVisible?props.cashTotal:''}</h5>
        </Container>
    </Col>
}

export default RightPanel;