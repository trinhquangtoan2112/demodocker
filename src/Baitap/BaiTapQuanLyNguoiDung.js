import React, { Component } from 'react'
import FormTable from './FormTable'
import { ThemeProvider } from 'styled-components'
import { theme } from './../Styled/Theme/Theme';
import { Container_fluid } from './../Styled/Compoment/Container';
import { H1, H3 } from '../Styled/Compoment/Header';

import TableDaanhSachNguoiDung from './TableDaanhSachNguoiDung';

export default class BaiTapQuanLyNguoiDung extends Component {
  render() {
    return (
     <ThemeProvider theme={theme}>
          
              <Container_fluid>
              <H1>Form Dang Ky</H1>
              <FormTable></FormTable>
         
              <H3>Danh sách người dùng</H3>
              <TableDaanhSachNguoiDung>

              </TableDaanhSachNguoiDung>
           
              </Container_fluid>
     </ThemeProvider>
    )
  }
}
