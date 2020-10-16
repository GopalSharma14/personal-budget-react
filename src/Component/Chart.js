import React from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: [],
            datasets: [
              {
                label: 'Budget',
                backgroundColor: [
                  '#B21F00',
                  '#C9DE00',
                  '#2FDE00',
                  '#00A6B4',
                  '#6800B4',
                  '#F82D0D',
                  '#2F895E'
                ],
                hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F',
                '#003350',
                '#35014F'
                ],
                data: []
              }
            ]
          }
      }


    componentDidMount() {
        axios.get('http://localhost:3000/budget')
          .then(res => {
              let theTitle = [];
              let theBudget = [];
              for (var i = 0; i < res.data.myBudget.length; i++) {
                  theTitle.push(res.data.myBudget[i].title)
                  theBudget.push(res.data.myBudget[i].budget)
              }
            this.setState({ labels: theTitle,
                datasets: [
                  {
                    label: 'Budget',
                    backgroundColor: [
                      '#B21F00',
                      '#C9DE00',
                      '#2FDE00',
                      '#00A6B4',
                      '#6800B4',
                      '#F82D0D',
                      '#2F895E'
                    ],
                    hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F',
                    '#003350',
                    '#35014F'
                    ],
                    data: theBudget
                  }
                ]

            })
          })
      }

  render() {
    return (
      <div >       
        <Pie
          data={this.state}
          options={{
            title:{
              display:true,
              text:'The Budget',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          width = {400}
          height = {400}
        />
      </div>
    );
  }
}