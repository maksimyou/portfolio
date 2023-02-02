import React, { useState, useEffect } from 'react'
import './Calculator.css'


function Calculator() {


    let [sum, setSum] = useState(0);
    let [expression, setExpression] = useState('')
    let [psevdo, setPsevdo] = useState(true)
    let [current, setCurrent] = useState('...')
    let [result, setResult] = useState('')
    let [switcher, setSwitcher] = useState(true)

    useEffect(() => {
        let widthDisp = document.querySelector('.display_express_line');
        if (widthDisp.clientWidth > 359 && widthDisp.classList[1] != 'display_express_line-2') {
            setPsevdo(!psevdo);
        } else if (widthDisp.clientWidth < 359 && widthDisp.classList[1] == 'display_express_line-2') {
            setPsevdo(!psevdo);
        }

    }, [expression]);

    function expressions(symbol) {
        let lastChar = expression[expression.length - 1];
        let res;
        if (result == 0) {
            res = false;
        } else if (result == '') {
            res = true;
        };

        console.log(res);
        let regExp1 = new RegExp(/[0-9]+[*+-\/]+$/g);
        if (!switcher && regExp1.test(expression)) {
            setResult(eval(expression.match(/[0-9]+[*+-\/]+$/g).toString() + current))
            if (result) {
                setResult(eval(result + lastChar + current))
            }
            setSwitcher(false);
        };


        if ((lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*') && switcher) {
            console.log('1', lastChar);
            setExpression(expression.slice(0, -1) + symbol);
            //setSwitcher(false);
            return;
        } else if (!expression && res) {
            console.log('25', result);
            //setExpression(result);
            setExpression(result + symbol);
            setSwitcher(true);
        } else if (!expression && !res) {
            console.log('2', !expression, !res);
            //setExpression(current);
            setExpression(current + symbol);
            setSwitcher(true);

        } else if (!switcher) {
            console.log('3');
            //setExpression(current);
            setExpression(expression += current + symbol);
            setSwitcher(true);

        }

        //setCurrent(eval(expression.match(/[0-9]+[*+-\/]+[0-9]+$/g).toString()));
    };

    function Current(num) {
        if (current.length < 10) {
            if (switcher) {
                setCurrent(num);
                setSwitcher(false);
            } else {
                setCurrent(current += num);
            }
        }
    };

    function sumOfNumbers() {
        let lastChar = expression[expression.length - 1];

        let regExp1 = new RegExp(/[0-9]+[*+-\/]+$/g)

        if (!switcher && regExp1.test(expression)) {
            setResult(eval(expression.match(/[0-9]+[*+-\/]+$/g).toString() + current))

            if (result) {
                console.log('dsfs')
                setResult(eval(result + lastChar + current))
            }
            setSwitcher(false);
        };
    }

    return (
        <div className='calculator_container'>
            <div className='calculator_content'>
                <div className="display_calculator"><span>{result}</span><span className={psevdo ? 'display_express_line' : 'display_express_line display_express_line-2'}>{expression}</span><span>{current}</span></div>
                <div className="buttons_calculator">
                    <div className="buttons_rows">
                        <div onClick={() => { setExpression(''); setCurrent('...'); setSwitcher(true); setResult(''); }} className="buttons_colums"><span>AC</span></div>
                        <div onClick={() => setCurrent('' + -current)} className="buttons_colums"><span>+/-</span></div>
                        <div onClick={() => setCurrent('')} className="buttons_colums"><span>CE</span></div>
                        <div onClick={() => expressions('/')} className="buttons_colums btn_orange"><span>÷</span ></div>
                    </div>
                    <div className="buttons_rows">
                        <div onClick={() => Current('1')} className="buttons_colums"><span>1</span></div>
                        <div onClick={() => Current('2')} className="buttons_colums"><span>2</span></div>
                        <div onClick={() => Current('3')} className="buttons_colums"><span>3</span></div>
                        <div onClick={() => expressions('*')} className="buttons_colums btn_orange"><span>x</span></div>
                    </div>
                    <div className="buttons_rows">
                        <div onClick={() => Current('4')} className="buttons_colums"><span>4</span></div>
                        <div onClick={() => Current('5')} className="buttons_colums"><span>5</span></div>
                        <div onClick={() => Current('6')} className="buttons_colums"><span>6</span></div>
                        <div onClick={() => expressions('-')} className="buttons_colums btn_orange"><span>-</span></div>
                    </div>
                    <div className="buttons_rows">
                        <div onClick={() => Current('7')} className="buttons_colums"><span>7</span></div>
                        <div onClick={() => Current('8')} className="buttons_colums"><span>8</span></div>
                        <div onClick={() => Current('9')} className="buttons_colums"><span>9</span></div>
                        <div onClick={() => expressions('+')} className="buttons_colums btn_orange"><span>+</span></div>
                    </div>
                    <div className="buttons_rows">
                        <div onClick={() => Current('0')} className="buttons_colums null"><span>0</span></div>
                        <div onClick={() => setCurrent(current + '.')} className="buttons_colums"><span>.</span></div>
                        <div onClick={() => { setExpression(''); sumOfNumbers(); }} className="buttons_colums btn_orange"><span>=</span></div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Calculator