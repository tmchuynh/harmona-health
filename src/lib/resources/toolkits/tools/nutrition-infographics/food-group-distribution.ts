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
            "#352208",
            "#6f1d1b",
            "#9c6644",
            "#e1bb80",
            "#d69f7e",
            "#ede0d4",
          ],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: {
          display: true,
          text: "Distribution of Daily Food Intake by Group",
        },
      },
    },
  },

  {
    graphType: "bar",
    title: "Average Food Group Intake by Meal",
    data: {
      labels: ["Breakfast", "Lunch", "Dinner", "Snacks"],
      datasets: [
        {
          label: "Grains",
          data: [56.4, 36.4, 25.4, 15.4],
          backgroundColor: "#9c6644",
        },
        {
          label: "Proteins",
          data: [30.8, 68.7, 60.7, 14.3],
          backgroundColor: "#ede0d4",
        },
        {
          label: "Vegetables",
          data: [5.3, 16.7, 46.3, 1.5],
          backgroundColor: "#6f1d1b",
        },
        {
          label: "Fruits",
          data: [25.4, 56.4, 13.6, 54.2],
          backgroundColor: "#d69f7e",
        },
        {
          label: "Dairy",
          data: [45.2, 43.6, 13.4, 14.3],
          backgroundColor: "#352208",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: { display: true, text: "Food Group Contribution by Meal Type" },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Meal Type",
            font: {
              size: 18,
              weight: "bold",
            },
          },
          grid: { lineWidth: 0.15, color: "#929292" },
        },
        y: {
          title: {
            display: true,
            text: "Amount Consumed",
            font: {
              size: 18,
              weight: "bold",
            },
          },
          grid: { lineWidth: 0.15, color: "#929292" },
        },
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
          backgroundColor: "#6f1d1b",
        },
        { label: "Fruits", data: [20, 18, 15, 10], backgroundColor: "#d69f7e" },
        {
          label: "Oils & Fats",
          data: [5, 2, 3, 2],
          backgroundColor: "#ede0d4",
        },
        { label: "Grains", data: [30, 25, 20, 15], backgroundColor: "#352208" },
        {
          label: "Proteins",
          data: [15, 20, 25, 20],
          backgroundColor: "#e1bb80",
        },

        { label: "Dairy", data: [20, 15, 10, 5], backgroundColor: "#9c6644" },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: {
          display: true,
          text: "Age-Based Trends in Food Group Consumption",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Age Group",
            font: {
              size: 18,
              weight: "bold",
            },
          },
          grid: { lineWidth: 0.15, color: "#929292" },
        },
        y: {
          title: {
            display: true,
            text: "Average % of Daily Diet",
            font: {
              size: 18,
              weight: "bold",
            },
          },
          grid: { lineWidth: 0.15, color: "#929292" },
        },
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
            "#352208",
            "#9c6644",
            "#e1bb80",
            "#ede0d4",
            "#d69f7e",
            "#6f1d1b",
          ],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
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
          backgroundColor: ["#352208", "#e1bb80", "#d69f7e"],
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
        x: {
          title: {
            display: true,
            text: "Protein Source",
            font: {
              size: 18,
              weight: "bold",
            },
          },
          grid: { lineWidth: 0.15, color: "#929292" },
        },
        y: {
          title: {
            display: true,
            text: "Percentage of Total Protein Intake",
            font: {
              size: 18,
              weight: "bold",
            },
          },
          grid: { lineWidth: 0.15, color: "#929292" },
        },
      },
    },
  },
];
