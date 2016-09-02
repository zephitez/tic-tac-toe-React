import React from 'react';
import ReactDOM from 'react-dom';

let turn = 'X';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
           value: '',
         };
    this.switch = this._switchTurn.bind(this);
  }


    _switchTurn(e) {

      let input = e.target.id;
      let ansInput = document.getElementById(input);
      let inputValue = ansInput.innerText;

      switch (turn) {
         case 'X':
         if(!winner('O')) {
         if (!inputValue) {
         ansInput.innerText = 'X';
         turn = 'O';
        }
      } else {
        let x = confirm(' Sorry.. O  win liao');
        if (x == true) {
          location.reload();
        } else {
          alert('Don\'t play lor');
        }
      }
        break;
        case 'O':
        if(!winner('X')) {
        if (!inputValue) {
          ansInput.innerText = 'O';
          turn = 'X';
        }
      } else {
         let y = confirm(' Sorry.. X  win liao');
        if (y == true) {
          location.reload();
        } else {
          alert('Don\'t play lor');
        }
      }
       break;
    }
  }

  render() {
    let names = [1, 2, 3, 4, 5, 6, 7, 8, 9];

          return (
          	<div className="ticborder text-center" >
          		{names.map((name, index) => {
              		return <div key={ index } id={name} className="well" onClick={this.switch} >

                  </div>;
            		})}
          	</div>
          )
  }

}




//if turn = x, check winner("X")

function winner(cons) {
  if (winCombo(1, 2, 3, cons) ||
    winCombo(4, 5, 6, cons) ||
    winCombo(7, 8, 9, cons) ||
    winCombo(1, 4, 7, cons) ||
    winCombo(2, 5, 8, cons) ||
    winCombo(3, 6, 9, cons) ||
    winCombo(3, 5, 7, cons) ||
    winCombo(1, 5, 9, cons)) {
    return true;
  }
}

//check three Same Selection in a row, column, diagonal
function winCombo(a, b, c, cons) {
  if (getBox(a) == cons && getBox(b) == cons && getBox(c) == cons) {
    return true;
  }
}

//get div id
function getBox(number) {
return document.getElementById(number).innerText;
}


ReactDOM.render(<App />, document.getElementsByClassName('container')[0])
