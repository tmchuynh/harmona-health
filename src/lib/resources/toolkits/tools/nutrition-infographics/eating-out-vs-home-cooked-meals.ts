import { Nutrition } from "@/lib/interfaces&types/resources";

export const eatingOutVsHomeCookedMeals: Nutrition[] = [
  {
    graphType: "bar",
    title: "Weekly Meal Sources: Home vs. Eating Out",
    data: {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      datasets: [
        {
          label: "Home-Cooked Meals",
          data: [2, 2, 2, 2, 1, 1, 1],
          backgroundColor: "#4CAF50",
        },
        {
          label: "Meals Eaten Out",
          data: [0, 1, 1, 1, 2, 2, 2],
          backgroundColor: "#F44336",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Frequency of Home-Cooked vs. Eaten Out Meals",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Day of the Week",
          },
        },
        y: {
          title: {
            display: true,
            text: "Number of Meals",
          },
        },
      },
    },
  },
  {
    graphType: "bar",
    title: "Average Nutrient Quality Score",
    data: {
      labels: ["Protein", "Fiber", "Sugar", "Sodium", "Saturated Fat"],
      datasets: [
        {
          label: "Home-Cooked Meals",
          data: [8, 9, 3, 4, 2],
          backgroundColor: "#4CAF50",
        },
        {
          label: "Meals Eaten Out",
          data: [5, 3, 8, 9, 6],
          backgroundColor: "#FF5722",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Nutrient Quality: Home vs. Eating Out (Scale 1–10)",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Nutrient Category",
          },
        },
        y: {
          title: {
            display: true,
            text: "Quality Score",
          },
        },
      },
    },
  },
  {
    graphType: "pie",
    title: "Meal Satisfaction Ratings",
    data: {
      labels: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
      datasets: [
        {
          label: "Home-Cooked",
          data: [50, 30, 15, 5],
          backgroundColor: ["#66BB6A", "#A5D6A7", "#FFF176", "#EF5350"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Satisfaction Ratings for Home-Cooked Meals",
        },
      },
    },
  },
  {
    graphType: "line",
    title: "Average Prep Time Per Meal",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Home-Cooked Meals (minutes)",
          data: [35, 30, 40, 33, 25, 20, 25],
          borderColor: "#2196F3",
          backgroundColor: "rgba(33, 150, 243, 0.2)",
          fill: true,
          tension: 0.3,
        },
        {
          label: "Meals Eaten Out (minutes incl. wait)",
          data: [0, 20, 18, 25, 35, 40, 45],
          borderColor: "#FFC107",
          backgroundColor: "rgba(255, 193, 7, 0.2)",
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Meal Preparation Time: Cooking vs. Eating Out",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Day",
          },
        },
        y: {
          title: {
            display: true,
            text: "Time (minutes)",
          },
        },
      },
    },
  },
  {
    graphType: "doughnut",
    title: "Perceived Long-Term Health Impact",
    data: {
      labels: ["Very Healthy", "Somewhat Healthy", "Neutral", "Unhealthy"],
      datasets: [
        {
          label: "Home-Cooked",
          data: [60, 25, 10, 5],
          backgroundColor: ["#43A047", "#8BC34A", "#FFEB3B", "#E53935"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Perception of Long-Term Health Impact of Home-Cooked Meals",
        },
      },
    },
  },
  {
    graphType: "pie",
    title: "Meal Source Distribution (This Week)",
    data: {
      labels: ["Home-Cooked", "Eating Out"],
      datasets: [
        {
          label: "Meal Type",
          data: [11, 6],
          backgroundColor: ["#4CAF50", "#FF9800"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Proportion of Meals Cooked at Home vs. Eaten Out",
        },
      },
    },
  },
  {
    graphType: "line",
    title: "Calorie Comparison: Home vs. Eating Out (per Day)",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Calories from Home-Cooked",
          data: [1500, 1400, 1600, 1550, 1300, 1200, 1100],
          borderColor: "#4CAF50",
          backgroundColor: "rgba(76, 175, 80, 0.2)",
          tension: 0.4,
          fill: true,
        },
        {
          label: "Calories from Eating Out",
          data: [0, 500, 400, 600, 900, 1100, 1200],
          borderColor: "#F44336",
          backgroundColor: "rgba(244, 67, 54, 0.2)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Caloric Intake: Home vs. Eating Out",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Day",
          },
        },
        y: {
          title: {
            display: true,
            text: "Calories",
          },
        },
      },
    },
  },
  {
    graphType: "doughnut",
    title: "Weekly Meal Budget Allocation",
    data: {
      labels: ["Groceries (Home Cooking)", "Dining Out"],
      datasets: [
        {
          label: "Budget ($)",
          data: [65, 85],
          backgroundColor: ["#2196F3", "#FF5722"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Spending Breakdown: Groceries vs. Dining Out",
        },
      },
    },
  },
];
