import styles from "./leaderboard.module.css";
export default function Leaderboard() {
  const leaderboardData = [
    { name: "Alice", assignment: 85, assessment: 90, attendance: 95 },
    { name: "Bob", assignment: 80, assessment: 85, attendance: 90 },
    { name: "Charlie", assignment: 75, assessment: 80, attendance: 85 },
    { name: "David", assignment: 90, assessment: 92, attendance: 98 },
    { name: "Eva", assignment: 88, assessment: 85, attendance: 93 },
  ];

  leaderboardData.forEach((student) => {
    student.aggregate =
      (student.assignment + student.assessment + student.attendance) / 3;
  });
  leaderboardData.sort((a, b) => b.aggregate - a.aggregate);

  const leaderboardBody = document.getElementById("leaderboardBody");
  leaderboardData.forEach((student, index) => {
    const rankCell =
      index < 3
        ? `<td class="top3">${index + 1} <span class="crown"></span></td>`
        : `<td>${index + 1}</td>`;
    const row = `
            <tr>
                ${rankCell}
                <td>${student.name}</td>
                <td>${student.assignment}</td>
                <td>${student.assessment}</td>
                <td>${student.attendance}</td>
                <td>${student.aggregate.toFixed(2)}</td>
            </tr>
        `;
    leaderboardBody.innerHTML += row;
  });

  const ctx = document.getElementById("leaderboardChart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: leaderboardData.map((student) => student.name),
      datasets: [
        {
          label: "Aggregate Score",
          data: leaderboardData.map((student) => student.aggregate),
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Scores",
          },
        },
      },
    },
  });

  return (
    <div className={styles.container}>
      <h1>Leaderboard</h1>
      <canvas id="leaderboardChart" width="400" height="200"></canvas>
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
        <tbody classname={styles.leaderboardBody}></tbody>
      </table>
    </div>
  );
}
