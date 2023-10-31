import { CAP_NHAP, CHINH_SUA, THEM_USER, XOA } from "../Types/BaiTapKhoa31Text"

 export const themTask =(dulieu)=>({
    type: THEM_USER,
    dulieu
 })
  
 export const xoaTask =(id)=>({
    type: XOA,
    id
 })
 export const CapNhap =(dulieu)=>({
    type: CAP_NHAP,
    dulieu
 })
  
 export const chinhXua  =(id)=>({
    type: CHINH_SUA,
    id
 })
  
 