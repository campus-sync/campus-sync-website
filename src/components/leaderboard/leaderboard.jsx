import React from "react";
import styles from "./leaderboard.module.css";
import { Chart } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

const Leaderboard = () => {
  // Initial Data
  const leaderboardData = [
    { name: "Alice", assignment: 85, assessment: 90, attendance: 95 },
    { name: "Bob", assignment: 80, assessment: 85, attendance: 90 },
    { name: "Charlie", assignment: 75, assessment: 80, attendance: 85 },
    { name: "David", assignment: 90, assessment: 92, attendance: 98 },
    { name: "Eva", assignment: 88, assessment: 85, attendance: 93 },
  ];

  // Calculate Aggregate Scores
  leaderboardData.forEach((student) => {
    student.aggregate =
      (student.assignment + student.assessment + student.attendance) / 3;
  });

  // Sort data based on aggregate
  const sortedData = leaderboardData.sort((a, b) => b.aggregate - a.aggregate);

  // Chart Data
  const chartData = {
    labels: sortedData.map((student) => student.name),
    datasets: [
      {
        label: "Aggregate Score",
        data: sortedData.map((student) => student.aggregate),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h1>Leaderboard</h1>
      <Bar
        data={chartData}
        options={{ responsive: true, scales: { y: { beginAtZero: true } } }}
      />
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Assignment</th>
            <th>Assessment</th>
            <th>Attendance</th>
            <th>Aggregate</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((student, index) => (
            <tr key={student.name}>
              <td className={index < 3 ? "top3" : ""}>
                {index + 1}
                {index < 3 && <span className={styles.crown}></span>}
              </td>
              <td>{student.name}</td>
              <td>{student.assignment}</td>
              <td>{student.assessment}</td>
              <td>{student.attendance}</td>
              <td>{student.aggregate.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
