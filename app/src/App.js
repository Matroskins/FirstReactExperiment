import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


class App extends Component {

  render() {
    return (
      <div className="App">
        <MainWrapper></MainWrapper>
      </div>
    );
  }
}

class MainWrapper extends Component {

  render() {
    return (
      <div className='mainWrapper'>
        <h1>Клиенты</h1>
        <AddClientElement></AddClientElement>
        <AddForm></AddForm>
        <DataTable data={exampleData}></DataTable>
      </div>
    )
  }
}

class AddClientElement extends Component {

  render() {
    return (
      <button className='AddNewButton'>
        <FontAwesomeIcon icon={faPlusCircle} style={{fontSize:'1.8rem'}}/>
        <b>Добавить клиента</b>
      </button>
    )
  }
}

class AddForm extends Component {
  render() {
    return (
      <div className='AddFormWrapper'>
        <div className='formGrid'>
          <InputElement title='Имя'></InputElement>
          <InputElement title='Телефон'></InputElement>
          <InputElement title='E-Mail'></InputElement>
          <div className='butWrap'>
            <button className='SaveButton'><b>Сохранить</b></button>
          </div>
        </div>
        <div className='HideButtonsWrapper'>
          <AddFormHideButton column='1'></AddFormHideButton>
          <AddFormHideButton column='3'></AddFormHideButton>
        </div>
        <hr noshade='true' size='1' color='#ABABAD'/>
      </div>
    )
  }
}

class InputElement extends Component {
  render() {
    return (
      <div className='InputElementWr'>
        <p>{this.props.title}</p>
        <div className='inWrapper'>
          <input></input>
        </div>
      </div>
    )
  }
}

class AddFormHideButton extends Component {
  render() {
    return (
      <button className='HideButton'
        style={{
          gridColumn: (this.props.column)
        }}>
        <FontAwesomeIcon icon={faAngleUp} size='3x'/>
      </button>
    )
  }
}

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {data: props.data};
  }

  render() {
    const rows = this.state.data.map( (item, i) => (
      <TableRow row={i + 3} data={item}></TableRow>
    ) );

    return (
      <div className='TableWrapper'>
        <div
          className='title'
          style={{gridColumn: 2}}>
          Клиент
        </div>
        <div
          className='title'
          style={{gridColumn: 3}}>
          Телефон
        </div>
        <div
          className='title'
          style={{gridColumn: 4}}>
          E-Mail
        </div>
        <div
          className='title'
          style={{gridColumn: 5}}>
          Дата последнего посещения
        </div>
        <div
          className='title'
          style={{gridColumn: 6}}>
          Сумма оплат
        </div>
        <div
          className='title'
          style={{gridColumn: 7}}>
          Количество посещений
        </div>
        <div
          className='title'
          style={{gridColumn: 8}}>
          Активный абонемент
        </div>

        <div className='line'></div>

        {rows}
      </div>
    )
  }
}

class TableRow extends Component {
  render() {
    let _list = [];
    _list.push(
      <div
        className='cell'
        style={{gridColumn: 1, gridRow: this.props.row}}>
        <button>
          <FontAwesomeIcon icon={faPencilAlt}/>
        </button>
        <button>
          <FontAwesomeIcon icon={faTimes}/>
        </button>
      </div>
    );
    _list.push(
      <div
        className='cell'
        style={{gridColumn: 2, gridRow: this.props.row}}>
        {this.props.data.name}
      </div>
    );
    _list.push(
      <div
        className='cell'
        style={{gridColumn: 3, gridRow: this.props.row}}>
        {this.props.data.phoneNumber}
      </div>
    );
    _list.push(
      <div
        className='cell'
        style={{gridColumn: 4, gridRow: this.props.row}}>
        {this.props.data.email}
      </div>
    );

    for (var i = 5; i <= 8; i++) {
      _list.push(
        <div
          className='cell'
          style={{gridColumn: i, gridRow: this.props.row}}>
          ------
        </div>
      );
    }

    return (_list);
  }
}

const exampleData = [
  {
    name: 'Иванов Иван Иванович',
    phoneNumber: '+71116662233',
    email: 'example@mail.com'
  },
  {
    name: 'Петр Алексеевич Гердяев',
    phoneNumber: '+100099292123',
    email: 'sample@gmail.com'
  },
  {
    name: 'Аноним',
    phoneNumber: '+71111111111',
    email: '2222@dwdwd.ru'
  }
];

export default App;
