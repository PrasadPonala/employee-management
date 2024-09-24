
// import { Bar } from 'react-chartjs-2';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AnalyticsComponent = () => {
//   const [employeeData, setEmployeeData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/v1/employees')
//       .then(response => {
//         setEmployeeData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching salary details:', error);
//       });
//   }, []);

//   // Determine salary ranges
//   const salaryRanges = [
//     { min: 0, max: 50000 },
//     { min: 50001, max: 100000 },
//     { min: 100001, max: 150000 },
//     // Add more ranges as needed
//   ];

//   // Calculate the number of employees in each salary range
//   const salaryStatistics = salaryRanges.map(range => ({
//     range: `${range.min} - ${range.max}`,
//     count: employeeData.filter(employee => employee.salary >= range.min && employee.salary <= range.max).length,
//   }));

//   const chartData = {
//     labels: salaryStatistics.map(stat => stat.range),
//     datasets: [
//       {
//         label: 'Number of Employees',
//         backgroundColor: 'rgba(75,192,192,1)',
//         borderColor: 'rgba(0,0,0,1)',
//         borderWidth: 2,
//         data: salaryStatistics.map(stat => stat.count),
//       },
//     ],
//   };

//   const chartOptions = {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   };

//   return (
//     <div>
//       <h2 className="text-center">Employee Salary Analytics</h2>
//       <div className="chart-container">
//         <Bar data={chartData} options={chartOptions} />
//       </div>
//     </div>
//   );
// };

// export default AnalyticsComponent;
