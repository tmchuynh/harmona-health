import { Nutrition } from "@/lib/interfaces&types/resources";

export const weeklyGroceryCostVsNutrition: Nutrition[] = [
  {
    graphType: "bar",
    title: "Weekly Grocery Cost vs. Protein Intake",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Grocery Cost ($)",
          data: [40, 45, 50, 55],
          backgroundColor: "#81C784",
        },
        {
          label: "Protein Intake (g)",
          data: [150, 170, 180, 160],
          backgroundColor: "#FFD54F",
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
          text: "Weekly Grocery Cost vs. Protein Intake",
        },
      },
      scales: {
        x: { title: { display: true, text: "Week" } },
        y: { title: { display: true, text: "Amount" } },
      },
    },
  },

  {
    graphType: "line",
    title: "Weekly Grocery Cost vs. Nutrient Diversity",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Grocery Cost ($)",
          data: [40, 45, 50, 55],
          borderColor: "#81C784",
          fill: false,
          tension: 0.4,
        },
        {
          label: "Nutrient Diversity Score",
          data: [7, 8, 6, 7],
          borderColor: "#64B5F6",
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
        title: { display: true, text: "Grocery Cost vs. Nutrient Diversity" },
      },
      scales: {
        x: { title: { display: true, text: "Week" } },
        y: { title: { display: true, text: "Amount/Score" } },
      },
    },
  },

  {
    graphType: "pie",
    title: "Weekly Grocery Cost Distribution by Food Category",
    data: {
      labels: ["Fruits", "Vegetables", "Proteins", "Grains", "Dairy"],
      datasets: [
        {
          label: "Cost Distribution",
          data: [30, 25, 20, 15, 10],
          backgroundColor: [
            "#FF7043",
            "#81C784",
            "#64B5F6",
            "#FFD54F",
            "#FFEB3B",
          ],
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
          text: "Weekly Grocery Cost Distribution by Food Category",
        },
      },
    },
  },

  {
    graphType: "bar",
    title: "Weekly Grocery Cost vs. Fat Intake",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Grocery Cost ($)",
          data: [40, 45, 50, 55],
          backgroundColor: "#81C784",
        },
        {
          label: "Fat Intake (g)",
          data: [60, 70, 65, 55],
          backgroundColor: "#FFD54F",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Weekly Grocery Cost vs. Fat Intake" },
      },
      scales: {
        x: { title: { display: true, text: "Week" } },
        y: { title: { display: true, text: "Amount" } },
      },
    },
  },

  {
    graphType: "line",
    title: "Weekly Grocery Cost vs. Vitamin C Intake",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Grocery Cost ($)",
          data: [40, 45, 50, 55],
          borderColor: "#81C784",
          fill: false,
          tension: 0.4,
        },
        {
          label: "Vitamin C Intake (mg)",
          data: [75, 85, 90, 80],
          borderColor: "#FF7043",
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
        title: { display: true, text: "Grocery Cost vs. Vitamin C Intake" },
      },
      scales: {
        x: { title: { display: true, text: "Week" } },
        y: { title: { display: true, text: "Amount (mg)" } },
      },
    },
  },

  {
    graphType: "pie",
    title: "Weekly Grocery Cost vs. Macronutrient Focus",
    data: {
      labels: ["Carbs", "Proteins", "Fats", "Fiber", "Vitamins"],
      datasets: [
        {
          label: "Grocery Cost Allocation",
          data: [35, 30, 20, 10, 5],
          backgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFD54F",
            "#FFEB3B",
            "#FF7043",
          ],
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
          text: "Grocery Cost Allocation by Macronutrient Focus",
        },
      },
    },
  },

  {
    graphType: "bar",
    title: "Weekly Grocery Cost vs. Meal Planning Success",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Grocery Cost ($)",
          data: [40, 45, 50, 55],
          backgroundColor: "#81C784",
        },
        {
          label: "Meal Plan Success (%)",
          data: [85, 80, 75, 90],
          backgroundColor: "#FFD54F",
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
          text: "Weekly Grocery Cost vs. Meal Planning Success",
        },
      },
      scales: {
        x: { title: { display: true, text: "Week" } },
        y: { title: { display: true, text: "Amount/Percentage" } },
      },
    },
  },

  {
    graphType: "line",
    title: "Weekly Grocery Cost vs. Fiber Intake",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Grocery Cost ($)",
          data: [40, 45, 50, 55],
          borderColor: "#81C784",
          fill: false,
          tension: 0.4,
        },
        {
          label: "Fiber Intake (g)",
          data: [30, 35, 25, 40],
          borderColor: "#FFEB3B",
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
        title: { display: true, text: "Grocery Cost vs. Fiber Intake" },
      },
      scales: {
        x: { title: { display: true, text: "Week" } },
        y: { title: { display: true, text: "Amount (g)" } },
      },
    },
  },
];
