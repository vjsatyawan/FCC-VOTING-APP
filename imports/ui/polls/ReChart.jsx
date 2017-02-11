import React from 'react';
import {  PieChart, Pie, Sector, Cell, Tooltip} from 'recharts';


const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];

const cData = [{"name":"viru","value":1},{"name":"Sehwag","value":1},{"name":"ggg","value":1},{"name":"ttt","value":1}]


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;  

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



class ReChart extends React.Component {
 

   constructor(props) {
      super(props);
		
      this.state = {
         chartData: []
      }

   };

     componentDidMount() {
	    
	    const answers = this.props.answers
		var answer = {};
		var charData = [];

		for (var i = 0; i < answers.length; i++) {
		  answer = {};
		  answer.name = answers[i].text;
		  answer.value = answers[i].votes;

		  charData.push(answer);
		}


            this.setState({
		        chartData: charData
		        
		      });



   }


   componentWillReceiveProps(newProps) {    

        const answers = this.props.answers
		var answer = {};
		var charData = [];

		for (var i = 0; i < answers.length; i++) {
		  answer = {};
		  answer.name = answers[i].text;
		  answer.value = answers[i].votes;

		  charData.push(answer);
		}


            this.setState({
		        chartData: charData
		        
		      });
     
   }







   render() {

		const { chartData} = this.state

      return (


				<PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
				     
				        <Pie
				          data={this.state.chartData} 
				          cx={150} 
				          cy={150} 
				          labelLine={false}
				          label={renderCustomizedLabel}
				          outerRadius={140} 
				          fill="#8884d8" >

				        	{
				          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
				          }
				        </Pie>
				        <Tooltip/>
				 
				 </PieChart>



      );
   }
}



export default ReChart;