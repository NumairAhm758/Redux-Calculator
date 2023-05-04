import React, { useReducer } from "react";
import "./Main.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const MainPracticeComponent = () => {
  const intialState = {
    result: 0,
    num1: '',
    num2: "",
    operator: "",
  };
  const calculatorReducer = (state, action) => {
    switch (action.type) {
      case "SET_NUM1":
        return {
          ...state,
          num1:state.num1+action.payload,
        };
       
      case "SET_NUM2":
        return {
          ...state,
          num2: state.num2 + action.payload,
        };
      case "SET_OPERATOR":
        return {
          ...state,
          operator: action.payload,
        };
      case "CLEAR":
        return {
          ...intialState,
        };
      case "CALCULATE": {
        const { num1, num2, operator } = state;
        let result;
        switch (operator) {
          case "+":
            result = num1 - -num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num1 / num2;
            break;
          default:
            result=0
        }
        return{
            ...state,
            result:result,
            num1:result,
            num2:'',
            operator:''
        }
       
      }
      default:
        return state
    }
  };
  const [state, dispatch] = useReducer(calculatorReducer, intialState);
    console.log(state.num1)
  const handleNumberClick = (num) => {
   
    if (state.operator === '') {
      dispatch({ type: 'SET_NUM1', payload: num })
    } else {
      dispatch({ type: 'SET_NUM2', payload: num });
    }
  };

  const handleOperatorClick = (operator) => {
    if (state.num1 !== '') {
      dispatch({ type: 'SET_OPERATOR', payload: operator });
    }
  };

  const handleClearClick = () => {
    dispatch({ type: 'CLEAR' });
  };

  const handleCalculateClick = () => {
    dispatch({ type: 'CALCULATE' });
  };
  return (
    <div className="main-div ">
      <div className="counter-text pt-5 text-end me-5 pb-2">
        <h1 className="color-white">{state.num1}{state.operator}{state.num2}</h1>
        
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <button className="calculator-button p-2 ms-2 mb-2"
              onClick={() => handleClearClick()}>AC</button>
            </Col>
            <Col>
              <button className="calculator-button p-2 ms-2 mb-2">+/-</button>
            </Col>
            <Col>
              <button className="calculator-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2">
                %
              </button>
            </Col>
            <Col>
              <button className="calculator-orange-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2"
              onClick={() => handleOperatorClick('/')}>
                ÷
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              <button className="calculator-grey-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2" 
              onClick={() => handleNumberClick('7')}>
                7
              </button>
            </Col>
            <Col>
              <button className="calculator-grey-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2"
              onClick={() => handleNumberClick('8')}>
                8
              </button>
            </Col>
            <Col>
              <button className="calculator-grey-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2"
              onClick={() => handleNumberClick('9')}>
                9
              </button>
            </Col>
            <Col>
              <button className="calculator-orange-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2"
              onClick={() => handleOperatorClick('*')}>
                X
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              <button className="calculator-grey-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2"
              onClick={() => handleNumberClick('6')}>
                6
              </button>
            </Col>
            <Col>
              <button className="calculator-grey-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2"
              onClick={() => handleNumberClick('5')}>
                5
              </button>
            </Col>
            <Col>
              <button className="calculator-grey-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2"
              onClick={() => handleNumberClick('4')}>
                4
              </button>
            </Col>
            <Col>
              <button className="calculator-orange-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2"
              onClick={() => handleOperatorClick('-')}>
                -
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              <button className="calculator-grey-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2"
              onClick={() => handleNumberClick('1')}>
                1
              </button>
            </Col>
            <Col>
              <button className="calculator-grey-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2"
              onClick={() => handleNumberClick('2')}>
                2
              </button>
            </Col>
            <Col>
              <button className="calculator-grey-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2"
              onClick={() => handleNumberClick('3')}>
                3
              </button>
            </Col>
            <Col>
              <button className="calculator-orange-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2"
              onClick={() => handleOperatorClick('+')}>
                +
              </button>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <button className="double-size-button text-center pt-2 pb-2 ms-3 mb-2 me-0"
              onClick={() => handleNumberClick('0')}>
                0
              </button>
            </Col>
            <Col>
              <button
                md="auto"
                className="calculator-grey-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2"
              >
                .
              </button>
            </Col>

            <Col>
              <button
                
                lg={2}
                className="calculator-orange-button pt-2 pb-2 pe-3 ps-3 ms-2 mb-2"
                onClick={() => handleCalculateClick()}
              >
                =
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MainPracticeComponent;
