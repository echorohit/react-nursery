import React from 'react';
export default class TableRow extends React.Component {
    abc(){
        let rows = [];
        for(let i=0;i<10;i++){
            rows.push(<tr key={"r" + i}>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>);
        }
        return rows; 
    }
    render(){
        return (
            <tbody>
                {this.abc()}
            </tbody>
        );
    }
}