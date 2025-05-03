import { Nutrition } from "@/lib/interfaces&types/resources";

export const macronutrientBreakdown: Nutrition[] = [
  {
    graphType: "doughnut",
    title: "Average Daily Macronutrient Ratio",
    data: {
      labels: ["Carbohydrates", "Proteins", "Fats"],
      datasets: [
        {
          label: "Macronutrient Ratio (%)",
          data: [50, 25, 25],
          backgroundColor: ["#64B5F6", "#81C784", "#FFD54F"],
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
          text: "Macronutrient Distribution in a Balanced Diet",
        },
      },
    },
  },

  {
    graphType: "bar",
    title: "Macronutrient Content per Meal",
    data: {
      labels: ["Breakfast", "Lunch", "Dinner", "Snacks"],
      datasets: [
        {
          label: "Carbs (g)",
          data: [45, 60, 50, 30],
          backgroundColor: "#64B5F6",
        },
        {
          label: "Proteins (g)",
          data: [20, 35, 30, 10],
          backgroundColor: "#81C784",
        },
        {
          label: "Fats (g)",
          data: [15, 25, 20, 12],
          backgroundColor: "#FFD54F",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Nutrient Composition by Meal Type" },
      },
      scales: {
        x: { title: { display: true, text: "Meal" } },
        y: { title: { display: true, text: "Grams" } },
      },
    },
  },

  {
    graphType: "pie",
    title: "Macronutrient Focus in Popular Diets",
    data: {
      labels: ["Keto", "Mediterranean", "High-Protein", "Balanced"],
      datasets: [
        {
          label: "Primary Macronutrient",
          data: [70, 40, 50, 33],
          backgroundColor: ["#FFD54F", "#64B5F6", "#81C784", "#90A4AE"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "bottom" },
        title: {
          display: true,
          text: "Macronutrient Emphasis Across Diet Types",
        },
      },
    },
  },

  {
    graphType: "line",
    title: "Macronutrient Intake Over a Week",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Carbs (g)",
          data: [200, 180, 220, 190, 210, 230, 205],
          borderColor: "#64B5F6",
          fill: false,
          tension: 0.4,
        },
        {
          label: "Proteins (g)",
          data: [90, 85, 95, 88, 92, 100, 94],
          borderColor: "#81C784",
          fill: false,
          tension: 0.4,
        },
        {
          label: "Fats (g)",
          data: [70, 65, 80, 72, 75, 78, 74],
          borderColor: "#FFD54F",
          fill: false,
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
          text: "Daily Macronutrient Consumption Over 7 Days",
        },
      },
      scales: {
        x: { title: { display: true, text: "Day" } },
        y: { title: { display: true, text: "Grams" } },
      },
    },
  },

  {
    graphType: "bar",
    title: "Macronutrient Needs by Fitness Goal",
    data: {
      labels: ["Weight Loss", "Muscle Gain", "Maintenance"],
      datasets: [
        {
          label: "Carbs (g)",
          data: [100, 250, 200],
          backgroundColor: "#64B5F6",
        },
        {
          label: "Proteins (g)",
          data: [120, 200, 150],
          backgroundColor: "#81C784",
        },
        {
          label: "Fats (g)",
          data: [50, 80, 70],
          backgroundColor: "#FFD54F",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "bottom" },
        title: { display: true, text: "Recommended Macronutrients by Goal" },
      },
      scales: {
        x: { title: { display: true, text: "Goal" } },
        y: { title: { display: true, text: "Grams per Day" } },
      },
    },
  },

  {
    graphType: "doughnut",
    title: "Macronutrient Composition of a Smoothie",
    data: {
      labels: ["Carbohydrates", "Proteins", "Fats"],
      datasets: [
        {
          label: "Smoothie Breakdown",
          data: [35, 15, 10],
          backgroundColor: ["#64B5F6", "#81C784", "#FFD54F"],
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
          text: "Macronutrients in a Breakfast Smoothie (g)",
        },
      },
    },
  },

  {
    graphType: "line",
    title: "Macronutrient Distribution by Age Group",
    data: {
      labels: ["Children", "Teens", "Adults", "Seniors"],
      datasets: [
        {
          label: "Carbs (%)",
          data: [55, 50, 45, 40],
          borderColor: "#64B5F6",
          fill: false,
        },
        {
          label: "Proteins (%)",
          data: [20, 25, 30, 35],
          borderColor: "#81C784",
          fill: false,
        },
        {
          label: "Fats (%)",
          data: [25, 25, 25, 25],
          borderColor: "#FFD54F",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Macronutrient Needs by Age" },
      },
      scales: {
        x: { title: { display: true, text: "Age Group" } },
        y: { title: { display: true, text: "Percentage (%)" } },
      },
    },
  },

  {
    graphType: "bar",
    title: "Macronutrient Sources by Food Type",
    data: {
      labels: ["Grains", "Meats", "Dairy", "Fruits", "Vegetables", "Nuts"],
      datasets: [
        {
          label: "Carbohydrates (g)",
          data: [60, 5, 12, 25, 10, 15],
          backgroundColor: "#64B5F6",
        },
        {
          label: "Proteins (g)",
          data: [10, 40, 25, 2, 5, 12],
          backgroundColor: "#81C784",
        },
        {
          label: "Fats (g)",
          data: [5, 20, 15, 1, 2, 30],
          backgroundColor: "#FFD54F",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "bottom" },
        title: {
          display: true,
          text: "Macronutrient Contribution from Common Foods",
        },
      },
      scales: {
        x: { title: { display: true, text: "Food Type" } },
        y: { title: { display: true, text: "Grams per Serving" } },
      },
    },
  },
];
