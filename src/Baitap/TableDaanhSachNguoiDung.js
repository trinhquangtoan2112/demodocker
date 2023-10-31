import React, { Component } from 'react'
import { Container_fluid, Container_padding1 } from './../Styled/Compoment/Container';
import { H1, H3, P } from '../Styled/Compoment/Header';
import { Col_6 } from '../Styled/Compoment/flex';
import { Input, Select } from '../Styled/Compoment/Input';
import { Button, Button1, Button2, Button3 } from '../Styled/Compoment/Button';
import { Table, Tbody, Td, Th, Thead, Tr } from '../Styled/Compoment/Tabled';
import { connect } from 'react-redux';
import { chinhXua, xoaTask } from '../redux/Action/BaiTapKhoa31Action';
class TableDaanhSachNguoiDung extends Component {
  handleEvent = (event) => {
    event.preventDefault();

  }
  renderThongTin = () => {
    return this.props.stateThongTIn.map((item, index) => {
      return (
        <Tr key={index}>
          <Td>{item.id}</Td>
          <Td>{item.username}</Td>
          <Td>{item.name}</Td>
          <Td>{item.passwords}</Td>
          <Td>{item.email}</Td>
          <Td>{item.sdt}</Td>
          <Td>{item.customTypes}</Td>
          <Td><Button2 onClick={() => {
            this.props.chinhsua1(item.id)
          }}>Chỉnh sửa</Button2>
            <Button3 onClick={() => {
              this.props.xoatask1(item.id)
            }}>Xóa</Button3></Td>
        </Tr>
      )
    })
  }
  render() {


    return (
      <div className='text-center'>
        <Container_padding1 onSubmit={(event) => {
          this.handleEvent(event)
        }}>
          <Table>
            <Thead>
              <Tr>
                <Th>STT</Th>
                <Th>Tài khoản</Th>
                <Th>Họ tên</Th>
                <Th>Mật Khẩu</Th>
                <Th>Email</Th>
                <Th>Số điện thoại</Th>
                <Th>Loại người dùng</Th>
              </Tr>
            </Thead>
            <Tbody>
              {this.renderThongTin()}
            </Tbody>
          </Table>
        </Container_padding1>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    stateThongTIn: state.statebaitap.taskTaiKhoan,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    xoatask1: (id) => {
      dispatch(xoaTask(id))
    },
    chinhsua1: (id) => {
      dispatch(chinhXua(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableDaanhSachNguoiDung);
