import React, { Component } from 'react';

import Korea from './korea.png';
import Japan from './japan.png';
import Singapore from './singapore.png';

import {BoxPackage} from './BoxPackage';
import {ShowInfo} from './ShowInfo';

import './css/animate.css';
import './bulma-css/css/bulma.css';
import './bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'; 
import './App.css';

export class SelectPackage extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      path:"",
      num:2,
      bool:false,
      pricePackage:{
        Korea:{
          morning: "15,000", 
          afternoon:"18,000",
          evening: "20,000",
          fullDay:"30,000"
        },
        Japan:{
          morning: "12,000", 
          afternoon:"16,000",
          evening: "20,000",
          fullDay:"26,000"
        },
        Singapore:{
          morning: "10,000", 
          afternoon:"13,000",
          evening: "15,000",
          fullDay:"18,000"
        },
        Select:{
          morning: "", 
          afternoon:"",
          evening: "",
          fullDay:""
        },
      },
      result:{
          morningPrice:'',
          afterPrice:'',
          eveningPrice:'',
          fullDayPrice:''
      }
    };
    this.handleChangeContent = this.handleChangeContent.bind(this);
  }
  handleChangeContent =(event)=>{
      if (event.target.options[event.target.selectedIndex].id == 1) {
          this.setState({
              path:event.target.value,
              result:{
                morningPrice : this.state.pricePackage.Korea.morning,
                afterPrice : this.state.pricePackage.Korea.afternoon,
                eveningPrice : this.state.pricePackage.Korea.evening,
                fullDayPrice : this.state.pricePackage.Korea.fullDay
              },
              bool:false
          });
      }
      else if (event.target.options[event.target.selectedIndex].id == 2) {
          this.setState({
              path:event.target.value,
              result:{
                morningPrice : this.state.pricePackage.Japan.morning,
                afterPrice : this.state.pricePackage.Japan.afternoon,
                eveningPrice : this.state.pricePackage.Japan.evening,
                fullDayPrice : this.state.pricePackage.Japan.fullDay

              },
              bool:false
          });
      }
      else if (event.target.options[event.target.selectedIndex].id == 3) {
          this.setState({
              path:event.target.value,
              result:{
                morningPrice : this.state.pricePackage.Singapore.morning,
                afterPrice : this.state.pricePackage.Singapore.afternoon,
                eveningPrice : this.state.pricePackage.Singapore.evening,
                fullDayPrice : this.state.pricePackage.Singapore.fullDay
              },
              bool:false
          });
      }
      else{
          this.setState({
              path:event.target.value,
              result:{
                morningPrice : this.state.pricePackage.Select.morning,
                afterPrice : this.state.pricePackage.Select.afternoon,
                eveningPrice : this.state.pricePackage.Select.evening,
                fullDayPrice : this.state.pricePackage.Select.fullDay
              },
              bool:false
          });
      }
  }
  handleChangeValue = () =>{
      this.setState({
        bool:true
      });
  }
  render() {
    let {img , headPack , path , Package , number , num, showInfo , result} = this.state;
    if (this.state.bool) {
        showInfo = (<ShowInfo morningPackage={result.morningPrice}
                              afternoonPackage={result.afterPrice}
                              eveningPackage={result.eveningPrice}
                              fullDayPackage={result.fullDayPrice} />);
    }
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2" >
              <h1>Wedding Package</h1>
              <div className="jumbotron App-background">
                <select className="form-control" onChange={this.handleChangeContent}>
                  <option id={0} value="" >Select Package</option>
                  <option id={1} value={Korea} >Korea</option>
                  <option id={2} value={Japan} >Japan</option>
                  <option id={3} value={Singapore} >Singapore</option>
                </select>
                <BoxPackage imgPack={path}/>
                <button onClick={this.handleChangeValue} className="btn btn-primary">Show Info</button>
              </div>
            </div>
          </div>
          {showInfo}
        </div>
      </div>
    );
  }
}


