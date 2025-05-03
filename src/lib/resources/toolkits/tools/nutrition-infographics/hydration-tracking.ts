import { Nutrition } from "@/lib/interfaces&types/resources";

export const hydrationTracking: Nutrition[] = [
  {
    graphType: "line",
    title: "Weekly Water Intake (Liters)",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Actual Intake",
          data: [1.8, 2.2, 2.0, 2.5, 1.6, 2.7, 2.3],
          borderColor: "#2196F3",
          backgroundColor: "rgba(33, 150, 243, 0.2)",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Hydration Trend Over the Week" },
      },
      scales: {
        x: { title: { display: true, text: "Day" } },
        y: { title: { display: true, text: "Liters of Water" } },
      },
    },
  },

  {
    graphType: "bar",
    title: "Average Daily Hydration by Age Group",
    data: {
      labels: ["Children", "Teens", "Adults", "Seniors"],
      datasets: [
        {
          label: "Avg. Daily Intake (L)",
          data: [1.2, 1.8, 2.5, 2.0],
          backgroundColor: "#03A9F4",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false, position: "top" },
        title: { display: true, text: "Hydration by Age Group" },
      },
      scales: {
        x: { title: { display: true, text: "Age Group" } },
        y: { title: { display: true, text: "Liters Per Day" } },
      },
    },
  },

  {
    graphType: "doughnut",
    title: "Hydration Sources Breakdown",
    data: {
      labels: ["Water", "Fruits & Veggies", "Other Beverages"],
      datasets: [
        {
          label: "Source Contribution",
          data: [70, 20, 10],
          backgroundColor: ["#2196F3", "#8BC34A", "#FF9800"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Where Hydration Comes From" },
      },
    },
  },

  {
    graphType: "pie",
    title: "Hydration Goal Achievement",
    data: {
      labels: ["Met Goal", "Below Goal"],
      datasets: [
        {
          label: "Goal Tracking",
          data: [62, 38],
          backgroundColor: ["#4CAF50", "#F44336"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Daily Hydration Goal Completion Rate" },
      },
    },
  },

  {
    graphType: "bar",
    title: "Hydration by Gender",
    data: {
      labels: ["Men", "Women", "Nonbinary", "Other"],
      datasets: [
        {
          label: "Average Daily Intake (L)",
          data: [3.0, 2.2, 2.4, 2.3],
          backgroundColor: ["#42A5F5", "#EC407A", "#AB47BC", "#FFB74D"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false, position: "top" },
        title: { display: true, text: "Average Water Intake by Gender" },
      },
      scales: {
        x: { title: { display: true, text: "Gender" } },
        y: { title: { display: true, text: "Liters Per Day" } },
      },
    },
  },

  {
    graphType: "line",
    title: "Hourly Water Intake (Typical Day)",
    data: {
      labels: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
      datasets: [
        {
          label: "Cumulative Intake (ml)",
          data: [200, 600, 1200, 1600, 2000, 2400],
          borderColor: "#00BCD4",
          backgroundColor: "rgba(0, 188, 212, 0.3)",
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Hydration Pattern Throughout the Day" },
      },
      scales: {
        x: { title: { display: true, text: "Time" } },
        y: { title: { display: true, text: "Cumulative ml" } },
      },
    },
  },

  {
    graphType: "bar",
    title: "Water Intake vs Recommended Levels",
    data: {
      labels: ["User A", "User B", "User C", "User D"],
      datasets: [
        {
          label: "Actual Intake",
          data: [2.1, 1.6, 2.8, 2.0],
          backgroundColor: "#64B5F6",
        },
        {
          label: "Recommended Intake",
          data: [2.5, 2.5, 2.5, 2.5],
          backgroundColor: "#C8E6C9",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: {
          display: true,
          text: "Comparison of Water Intake with Recommendations",
        },
      },
      scales: {
        x: { title: { display: true, text: "Users" } },
        y: { title: { display: true, text: "Liters" } },
      },
    },
  },
  {
    graphType: "bar",
    title: "Hydration Levels by Physical Activity",
    data: {
      labels: ["Sedentary", "Moderate", "Active", "Highly Active"],
      datasets: [
        {
          label: "Avg. Water Intake (L)",
          data: [1.6, 2.2, 2.8, 3.4],
          backgroundColor: ["#81D4FA", "#4FC3F7", "#29B6F6", "#03A9F4"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false, position: "top" },
        title: { display: true, text: "Hydration by Activity Level" },
      },
      scales: {
        x: { title: { display: true, text: "Activity Level" } },
        y: { title: { display: true, text: "Liters" } },
      },
    },
  },

  {
    graphType: "line",
    title: "Seasonal Water Intake Trends",
    data: {
      labels: ["Jan", "Apr", "Jul", "Oct"],
      datasets: [
        {
          label: "Avg. Daily Intake (L)",
          data: [2.0, 2.3, 2.8, 2.1],
          borderColor: "#0288D1",
          backgroundColor: "rgba(2, 136, 209, 0.3)",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Water Intake by Season" },
      },
      scales: {
        x: { title: { display: true, text: "Month" } },
        y: { title: { display: true, text: "Liters" } },
      },
    },
  },

  {
    graphType: "pie",
    title: "Preferred Hydration Methods",
    data: {
      labels: ["Water Bottle", "Glass", "Infused Water", "Electrolyte Drink"],
      datasets: [
        {
          label: "Method Preference",
          data: [50, 25, 15, 10],
          backgroundColor: ["#2196F3", "#90CAF9", "#4DB6AC", "#FFC107"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Hydration Methods Used Most Often" },
      },
    },
  },

  {
    graphType: "bar",
    title: "Hydration Before and After Exercise",
    data: {
      labels: ["Before Workout", "After Workout"],
      datasets: [
        {
          label: "Avg. Intake (ml)",
          data: [400, 700],
          backgroundColor: ["#42A5F5", "#1E88E5"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false, position: "top" },
        title: { display: true, text: "Exercise Hydration Patterns" },
      },
      scales: {
        x: { title: { display: true, text: "Time Relative to Exercise" } },
        y: { title: { display: true, text: "Milliliters" } },
      },
    },
  },

  {
    graphType: "doughnut",
    title: "Hydration Habits by Time of Day",
    data: {
      labels: ["Morning", "Afternoon", "Evening", "Night"],
      datasets: [
        {
          label: "Hydration Distribution",
          data: [30, 35, 25, 10],
          backgroundColor: ["#BBDEFB", "#64B5F6", "#2196F3", "#1565C0"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "When People Tend to Drink Water" },
      },
    },
  },

  {
    graphType: "line",
    title: "Hydration and Sleep Quality Correlation",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Water Intake (L)",
          data: [2.1, 1.8, 2.3, 2.4, 2.0, 2.6, 2.2],
          borderColor: "#0288D1",
          fill: false,
        },
        {
          label: "Sleep Quality (1–10)",
          data: [7, 6, 8, 8, 7, 9, 7],
          borderColor: "#66BB6A",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: {
          display: true,
          text: "Correlation Between Water Intake and Sleep Quality",
        },
      },
      scales: {
        x: { title: { display: true, text: "Day" } },
        y: { title: { display: true, text: "Liters / Sleep Score" } },
      },
    },
  },

  {
    graphType: "bar",
    title: "Hydration Awareness Survey Results",
    data: {
      labels: [
        "Know Daily Target",
        "Use Reminder",
        "Track Intake",
        "Know Symptoms of Dehydration",
      ],
      datasets: [
        {
          label: "Percent of Respondents",
          data: [60, 45, 30, 70],
          backgroundColor: "#4FC3F7",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false, position: "top" },
        title: { display: true, text: "Survey: Hydration Awareness" },
      },
      scales: {
        x: { title: { display: true, text: "Metric" } },
        y: { title: { display: true, text: "%" } },
      },
    },
  },

  {
    graphType: "pie",
    title: "Dehydration Symptom Experience",
    data: {
      labels: ["Headache", "Fatigue", "Dry Mouth", "Dizziness", "Other"],
      datasets: [
        {
          label: "Reported Symptoms",
          data: [30, 25, 20, 15, 10],
          backgroundColor: [
            "#E57373",
            "#F06292",
            "#BA68C8",
            "#7986CB",
            "#AED581",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Symptoms Reported from Dehydration" },
      },
    },
  },

  {
    graphType: "line",
    title: "Daily Hydration vs Caffeine Intake",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [
        {
          label: "Water Intake (L)",
          data: [2.0, 1.8, 2.2, 2.4, 1.9],
          borderColor: "#29B6F6",
          fill: false,
        },
        {
          label: "Caffeine (mg)",
          data: [150, 180, 120, 100, 160],
          borderColor: "#FF7043",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Impact of Caffeine on Hydration" },
      },
      scales: {
        x: { title: { display: true, text: "Day" } },
        y: { title: { display: true, text: "Liters / Milligrams" } },
      },
    },
  },

  {
    graphType: "bar",
    title: "Hydration by Geographic Region",
    data: {
      labels: ["North", "South", "East", "West"],
      datasets: [
        {
          label: "Avg. Daily Intake (L)",
          data: [2.3, 2.0, 2.4, 2.1],
          backgroundColor: ["#4DD0E1", "#26C6DA", "#00BCD4", "#00ACC1"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false, position: "top" },
        title: {
          display: true,
          text: "Regional Differences in Water Consumption",
        },
      },
      scales: {
        x: { title: { display: true, text: "Region" } },
        y: { title: { display: true, text: "Liters" } },
      },
    },
  },
  {
    graphType: "doughnut",
    title: "Hydration Reminders Compliance",
    data: {
      labels: ["Reminders Followed", "Missed Reminders"],
      datasets: [
        {
          label: "Reminder Compliance",
          data: [75, 25],
          backgroundColor: ["#4CAF50", "#FF5722"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Hydration App Reminder Effectiveness" },
      },
    },
  },
];
