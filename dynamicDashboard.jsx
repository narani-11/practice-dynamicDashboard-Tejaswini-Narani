import React from "react";

const dynamicDashboard = () => {
  // 1. Dynamic Greeting
  const userName = "Tejaswini Narani";

  // 2. Conditional Content
  const isPremiumUser = true; // change to false to test non-premium message

  // 3. Task List
  const tasks = [
    { taskName: "Complete React practice", completed: true },
    { taskName: "Submit assignment", completed: false },
    { taskName: "Review JavaScript notes", completed: true },
  ];

  // 4. Optional: Task counts
  const completedTasks = tasks.filter((task) => task.completed).length;
  const incompleteTasks = tasks.length - completedTasks;

  // 5. Optional: Current date
  const currentDate = new Date().toLocaleDateString();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      /* Stretch Goal 1: Date */
      <p> Today: {currentDate}</p>

      /* 1. Dynamic Greeting */
      <h1>Hello, {userName}!</h1>

      /* 2. Conditional Content */
      <p>
        {isPremiumUser
          ? "Thank you for being a premium member! "
          : "Upgrade to premium to enjoy exclusive features!"}
      </p>

      /* 3. Render Task List */
      <h2>Task List:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ color: task.completed ? "green" : "black" }} // Stretch Goal 2
          >
            {task.completed ? "✅" : "❌"} {task.taskName}
          </li>
        ))}
      </ul>

      /* Stretch Goal 3: Task counts */
      <p>Completed Tasks: {completedTasks}</p>
      <p>Incomplete Tasks: {incompleteTasks}</p>
    </div>
  );
};

export default dynamicDashboard;
