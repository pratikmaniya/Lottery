import React from 'react'

import { Row } from 'react-bootstrap'

import LeftPanel from './LeftPanel/LeftPanel'
import MiddlePanel from './MiddlePanel/MiddlePanel'
import RightPanel from './RightPanel/RightPanel'

const defaultStates = {
    numbers: [],
    cashTotal: 0,
    isCashTotalVisible: false
}

class Lottery extends React.Component{
    state = {
        ...defaultStates
    }
    addNumber = number =>{
        if(this.state.numbers.length>=5){
            alert('Maxiumum 5 numbers can be selected')
        }else{
            this.setState({numbers: [...this.state.numbers, number]})
        }
    }
    removeNumber = number => {
        const tempNumbers = this.state.numbers.filter(n=>number!==n)
        this.setState({numbers: [...tempNumbers]})
    }
    cashHandler = cash =>{
        this.setState({cashTotal: this.state.cashTotal+cash})
    }
    clearClickHandler = _ =>{
        this.setState({...defaultStates})
    }
    randomClickHandler = _ => {
        const randomArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        this.setState({numbers:[...randomArray.sort(() => Math.random() - 0.5).slice(0,5)]})
    }
    cashClickHandler = _ =>{
        if(this.state.numbers.length<5){
            alert('Please select 5 numbers first.')
        }else if(this.state.cashTotal===0){
            alert('Please select cash amount from left panel.')
        }else{
            this.setState({isCashTotalVisible:true})
        }
    }
    render(){
        return <div className='container-fluid'>
            <Row>
                <LeftPanel isCashingDisabled={this.state.numbers.length!==5} cashClickHandler={this.cashHandler} />
                <MiddlePanel 
                    numbers={this.state.numbers} 
                    addNumber={this.addNumber} 
                    removeNumber={this.removeNumber} 
                    clearClickHandler={this.clearClickHandler} 
                    randomClickHandler={this.randomClickHandler} 
                    cashClickHandler={this.cashClickHandler}
                />
                <RightPanel numbers={this.state.numbers} cashTotal={this.state.cashTotal} isCashTotalVisible={this.state.isCashTotalVisible} />
            </Row>
        </div>
    }
}

export default Lottery;