import React, { Component } from 'react'
import { Container_fluid, Container_padding1 } from './../Styled/Compoment/Container';
import { H1, H3, P } from '../Styled/Compoment/Header';
import { Col_6 } from '../Styled/Compoment/flex';
import { Input, Select } from '../Styled/Compoment/Input';
import { Button, Button1, Button2, Button3 } from '../Styled/Compoment/Button';
import { Table, Tbody, Td, Th, Thead, Tr } from '../Styled/Compoment/Tabled';
import { connect } from 'react-redux';
import { CapNhap, themTask } from '../redux/Action/BaiTapKhoa31Action';
import { Span1 } from '../Styled/Compoment/Span';
import _ from "lodash"
class FormTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      task: { id: " ", username: "", name: "", passwords: "", email: "", sdt: "", customTypes: "Khach Hang" },
      taskErroe: {
        username: " ", name: " ", passwords: " ", email: " ", sdt: " ", customTypes: ""
      },
      update: false,
    }



  }

  static getDerivedStateFromProps(newProps, currentState) {



  }
  shouldComponentUpdate(newProps, newState) {
    const isEmpty = Object.values(newProps.stateBaiTap.taskEdit).every(value => value === "");
   
   
  
    if (isEmpty) {
    
      if (!_.isEqual(newState, this.state)) {
       
        this.setState({
          task: newState.task,
        }, () => {
       
        })
        return true;
      }
    } else {
      console.log(this.state.task.id)
      let { taskEdit } = newProps.stateBaiTap;

      if (newState.task.id !==this.state.task.id) {
       
        this.setState({
          task: newState.task,
          update: true,
        }, () => {
          
        })
        taskEdit ="";
        
        return true;
      }
      if (newState.task.id !==taskEdit.id &&this.state.task.id !="0") {

      
        this.setState({
          task: taskEdit,
          update: true,
        }, () => {
         
        })

        taskEdit ="";
        return true;
      }

      return true;
    }
    
    return true;
  }

  handleEvent = (event) => {
    event.preventDefault();

  }
  NhapThongTin = (event) => {

    let { name, value, type } = event.target;


    let newState = { ...this.state.task };

    let newError = { ...this.state.taskErroe };
    if (value.trim() === "") {
      newError[name] += name + " Khong duoc de trong";
      newState[name] = "";
    } else {
      newError[name] = "";
      newState[name] = value;

    }

    if (name == "email") {
      let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regEmail.test(String(value.trim().toLowerCase()))) {
        newError[name] += name + "  khong trung khop";
       
      }
      else {
        newError[name] = "";
        newState[name] = value;
      }

    }


    this.setState(
      {
        task: newState,
        taskErroe: newError
      }, () => {
     
      });

  }
  renderButtonDangKy = () => {

    const isEmpty = Object.values(this.state.taskErroe).every(value => value === "")
    if (isEmpty) {

      if(!this.state.update){
        return <Button onClick={(event) => {
          let task = { ...this.state.task };
          task.id = Date.now()
          let taskName = {
            task
          }
          this.props.themTask1(taskName);
           this.setState({
            task: { id: "-1", username: "", name: "", passwords: "", email: "", sdt: "", customTypes: "Khach Hang" },
            taskErroe: {
              username: " ", name: " ", passwords: " ", email: " ", sdt: " ", customTypes: ""
            }
           },()=>{
          
           });


        }}>Đăng ký</Button>
      }else{
        return <Button2 disabled style={{ marginTop: "10px", marginLeft: "10px" }}>Đăng ký</Button2>
      }
   
    } else {
      return <Button2 disabled style={{ marginTop: "10px", marginLeft: "10px" }}>Đăng ký</Button2>
    }
  }

  renderButtonCapNhap = () => {
    const isEmpty = Object.values(this.state.task).some(value => value === "")
    if(isEmpty){
      return (
        <Button2 disabled style={{ marginTop: "10px", marginLeft: "10px" }} >Cập nhập</Button2>
        )
    }else{
      if (this.state.update) {
        return (
        <Button1 onClick={()=>{
          this.props.CapNhap1(this.state.task);
          this.setState({
            task: { id: "-1", username: "", name: "", passwords: "", email: "", sdt: "", customTypes: "Khach Hang" },
            update: false,
           },()=>{
              console.log(this.state)
           })
        }}>Cập nhập</Button1>
        )
      } else {
        return (
        <Button2 disabled style={{ marginTop: "10px", marginLeft: "10px" }} >Cập nhập</Button2>
        )
      }
    }
   

  }
  render() {
     
    return (
      <div>
        <Container_padding1 onSubmit={(event) => {
          this.handleEvent(event);
        }}>
          <Col_6>
            <div>
              <P onClick={() => {

              }}>Tài khoản</P>
              <Input placeholder='Tài khoản' value={this.state.task.username} name='username' required onChange={(event) => {
                this.NhapThongTin(event)
              }}></Input>
              <Span1>{this.state.taskErroe.username}</Span1>
            </div>
            <div>
              <P>Mật khẩu</P>
              <Input placeholder='Mật khẩu' value={this.state.task.passwords} name='passwords' required onChange={(event) => {
                this.NhapThongTin(event)
              }}></Input>
              <Span1>{this.state.taskErroe.passwords}</Span1>
            </div>
            <div>
              <P>Email</P>
              <Input placeholder='Email' value={this.state.task.email} required name='email'  onChange={(event) => {
                this.NhapThongTin(event)
              }}></Input>
              <Span1>{this.state.taskErroe.email}</Span1>
            </div>

          </Col_6>
          <Col_6>
            <div>
              <P>Họ tên</P>
              <Input placeholder='Họ Tên' value={this.state.task.name} required name='name' onChange={(event) => {
                this.NhapThongTin(event)
              }}></Input>
              <Span1>{this.state.taskErroe.name}</Span1>
            </div>
            <div>
              <P>Số điện thoại</P>
              <Input placeholder='Số điện thoại' value={this.state.task.sdt} required name='sdt' type='number' onChange={(event) => {
                this.NhapThongTin(event)
              }}></Input>
              <Span1>{this.state.taskErroe.sdt}</Span1>
            </div>
            <div>
              <P>Mã loại người dùng</P>
              <Select placeholder="mã loại người dùng" name='customTypes' value={this.state.task.customTypes} onChange={(event) => {
                this.NhapThongTin(event)
              }}>
                <option value="Khach Hang">Khach Hang</option>
                <option value="VIP 1">VIP 1</option>
                <option value="VIP 2">VIP 2</option>
              </Select>
            </div>

          </Col_6>
          {/* <Button onClick={(event) => {
            let task = { ...this.state.task };
            task.id = Date.now()
            let taskName = {
              task
            }
            console.log(taskName);
           const isEmpty =Object.values(taskName).some(value => {
            if (typeof value === "string") {
            return value.trim() === "";
          } else {
            return value ===""; // Nếu không phải chuỗi, xem xét là giá trị rỗng
          }});
           console.log(isEmpty)
            if(isEmpty){
              alert("Vui long dien du thong tin")
            }else{
              this.props.themTask1(taskName)
            }
         

          }}>Đăng ký</Button> */}

          {this.renderButtonDangKy()}
          {this.renderButtonCapNhap()}

        </Container_padding1>
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    stateBaiTap: state.statebaitap
  }
}

const mapDsipatchToPros = (dispacth) => {
  return {
    themTask1: (dulieu) => {
      dispacth(themTask(dulieu));
      
     
    },
    CapNhap1: (dulieu) => {
      dispacth(CapNhap(dulieu));
    }
  }
}
export default connect(mapStateToProps, mapDsipatchToPros)(FormTable)


