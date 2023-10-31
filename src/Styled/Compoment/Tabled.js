import styled from "styled-components";



export const Table = styled.table`
    color: ${props => props.theme.color1};
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
  
    border-spacing: 2px;
    border-color: ${props => props.theme.color1};
  
`
export const Thead = styled.thead`
    display: table-header-group;
    vertical-align: middle;
    border:1px solid ${props => props.theme.color1};
    border-left:none !important;
    border-right:none !important;
`

export const Tbody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    border-left:none !important;
    border-right:none !important;   
    
`
export const Tr = styled.tr`
    display: table-row;
    vertical-align: inherit;
    border:1px solid ${props => props.theme.color1};
    border-left:none !important;
    border-right:none !important;

`
export const Td = styled.td`
    padding: .75rem;
    vertical-align: top;
  
`


export const Th = styled.th`
    color: ${props => props.theme.color1};
    vertical-align: bottom;
    text-align: inherit;
    border-top: 1px solid ${props => props.theme.color1};
    padding: .75rem;
    vertical-align: middle;
    border-bottom: 1px solid ${props => props.theme.color1};
`