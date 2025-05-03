import { Nutrition } from "@/lib/interfaces&types/resources";

export const foodGroupDistribution: Nutrition[] = [
  {
    graphType: "doughnut",
    title: "Daily Food Group Distribution",
    data: {
      labels: [
        "Vegetables",
        "Fruits",
        "Grains",
        "Proteins",
        "Dairy",
        "Oils & Fats",
      ],
      datasets: [
        {
          label: "Percentage of Daily Intake",
          data: [25, 15, 30, 20, 7, 3],
          backgroundColor: [
            "#4CAF50",
            "#FF9800",
            "#FFEB3B",
            "#9C27B0",
            "#03A9F4",
            "#795548",
          ],
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
          text: "Distribution of Daily Food Intake by Group",
        },
      },
    },
  },

  {
    graphType: "bar",
    title: "Food Group Intake by Meal",
    data: {
      labels: ["Breakfast", "Lunch", "Dinner", "Snacks"],
      datasets: [
        {
          label: "Vegetables",
          data: [5, 30, 40, 5],
          backgroundColor: "#4CAF50",
        },
        { label: "Fruits", data: [20, 10, 5, 15], backgroundColor: "#FF9800" },
        { label: "Grains", data: [40, 35, 30, 10], backgroundColor: "#FFEB3B" },
        {
          label: "Proteins",
          data: [20, 15, 20, 5],
          backgroundColor: "#9C27B0",
        },
        { label: "Dairy", data: [10, 10, 5, 5], backgroundColor: "#03A9F4" },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Food Group Contribution by Meal Type" },
      },
      scales: {
        x: { title: { display: true, text: "Meal Type" } },
        y: { title: { display: true, text: "Percentage of Group Consumed" } },
      },
    },
  },

  {
    graphType: "pie",
    title: "Grains Distribution: Whole vs Refined",
    data: {
      labels: ["Whole Grains", "Refined Grains"],
      datasets: [
        {
          label: "Grain Type",
          data: [45, 55],
          backgroundColor: ["#8BC34A", "#FFC107"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Whole vs Refined Grains in Daily Diet" },
      },
    },
  },

  {
    graphType: "bar",
    title: "Food Group Consumption by Age Group",
    data: {
      labels: ["Children", "Teens", "Adults", "Seniors"],
      datasets: [
        {
          label: "Vegetables",
          data: [15, 20, 25, 30],
          backgroundColor: "#4CAF50",
        },
        { label: "Fruits", data: [20, 18, 15, 10], backgroundColor: "#FF9800" },
        {
          label: "Proteins",
          data: [15, 20, 25, 20],
          backgroundColor: "#9C27B0",
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
          text: "Age-Based Trends in Food Group Consumption",
        },
      },
      scales: {
        x: { title: { display: true, text: "Age Group" } },
        y: { title: { display: true, text: "Average % of Daily Diet" } },
      },
    },
  },

  {
    graphType: "line",
    title: "Weekly Vegetable Consumption Trend",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Vegetables",
          data: [22, 24, 20, 25, 30, 35, 32],
          borderColor: "#4CAF50",
          backgroundColor: "rgba(76, 175, 80, 0.2)",
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
        title: {
          display: true,
          text: "Vegetable Consumption Throughout the Week",
        },
      },
      scales: {
        x: { title: { display: true, text: "Day of Week" } },
        y: { title: { display: true, text: "Percentage of Daily Goal" } },
      },
    },
  },

  {
    graphType: "pie",
    title: "Food Budget Distribution by Group",
    data: {
      labels: ["Vegetables", "Fruits", "Grains", "Proteins", "Dairy", "Snacks"],
      datasets: [
        {
          label: "Monthly Spending",
          data: [20, 15, 25, 30, 7, 3],
          backgroundColor: [
            "#4CAF50",
            "#FF9800",
            "#FFEB3B",
            "#9C27B0",
            "#03A9F4",
            "#F06292",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Monthly Food Budget by Group" },
      },
    },
  },

  {
    graphType: "bar",
    title: "Protein Source Distribution",
    data: {
      labels: ["Animal", "Plant-Based", "Supplements"],
      datasets: [
        {
          label: "Protein Sources",
          data: [60, 30, 10],
          backgroundColor: ["#FF7043", "#8BC34A", "#B39DDB"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false, position: "top" },
        title: { display: true, text: "Types of Protein Sources Consumed" },
      },
      scales: {
        x: { title: { display: true, text: "Protein Source" } },
        y: {
          title: { display: true, text: "Percentage of Total Protein Intake" },
        },
      },
    },
  },

  {
    graphType: "doughnut",
    title: "Gender-Based Food Group Preference",
    data: {
      labels: ["Vegetables", "Fruits", "Grains", "Proteins", "Dairy"],
      datasets: [
        {
          label: "Male",
          data: [20, 10, 35, 30, 5],
          backgroundColor: [
            "#4CAF50",
            "#FF9800",
            "#FFEB3B",
            "#9C27B0",
            "#03A9F4",
          ],
        },
        {
          label: "Female",
          data: [30, 20, 25, 20, 5],
          backgroundColor: [
            "#81C784",
            "#FFCC80",
            "#FFF176",
            "#CE93D8",
            "#4FC3F7",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Food Group Preferences by Gender" },
      },
    },
  },
];
