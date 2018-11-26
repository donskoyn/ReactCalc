import React, {Component} from 'react';

import './App.css';

class App extends Component {
    operation = (e) => {
        let input = document.getElementById('inputResult');
        input.value += e.target.textContent;
        let arr = [];
        for (let i = 0; i < input.value.length; i++) {
            arr.push(input.value[i]);
            if (input.value[i] === "=") {
                arr.splice(i, 1);
                input.value = arr.join("");
                console.log(input.value)
                try {

                    input.value = eval(input.value);
                    if (input.value === "undefined") {
                        alert("This is no number");
                        input.value=""
                    }

                } catch (err) {

                    alert("You write error " + input.value)


                }


            }
        }


    };
    AddButton = () => {
        let count = this.props.calc.map((elem, index) => {
            return (<div className="buttons" key={index} onClick={this.operation}>{elem}</div>)

        });
        return count


    };


    render() {


        return (

            <div className="mainDiv">
                <div className="nameAutor">By Nikita Donskoy</div>
                <input type="text"size="40" id="inputResult"/>
                <div className="allBtn">{this.AddButton()}</div>
            </div>
        );
    }
}

export default App;
