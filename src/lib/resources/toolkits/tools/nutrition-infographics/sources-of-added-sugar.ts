import { Nutrition } from "@/lib/interfaces&types/resources";

export const sourcesOfAddedSugar: Nutrition[] = [
  {
    graphType: "pie",
    title: "Sources of Added Sugar in Diet",
    data: {
      labels: [
        "Sugary Beverages",
        "Snacks & Sweets",
        "Breakfast Cereals",
        "Sauces & Condiments",
        "Processed Foods",
      ],
      datasets: [
        {
          label: "Percentage of Total Sugar",
          data: [40, 25, 15, 10, 10],
          backgroundColor: [
            "#FF7043",
            "#FFD54F",
            "#64B5F6",
            "#81C784",
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
        title: { display: true, text: "Sources of Added Sugar in Diet" },
      },
    },
  },

  {
    graphType: "bar",
    title: "Weekly Added Sugar Intake from Different Sources",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Sugary Beverages",
          data: [30, 32, 28, 35],
          backgroundColor: "#FF7043",
        },
        {
          label: "Snacks & Sweets",
          data: [18, 20, 25, 23],
          backgroundColor: "#FFD54F",
        },
        {
          label: "Breakfast Cereals",
          data: [10, 8, 12, 15],
          backgroundColor: "#64B5F6",
        },
        {
          label: "Sauces & Condiments",
          data: [5, 7, 6, 8],
          backgroundColor: "#81C784",
        },
        {
          label: "Processed Foods",
          data: [7, 6, 9, 6],
          backgroundColor: "#FFEB3B",
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
          text: "Weekly Added Sugar Intake from Different Sources",
        },
      },
      scales: {
        x: { title: { display: true, text: "Week" } },
        y: { title: { display: true, text: "Sugar Intake (g)" } },
      },
    },
  },

  {
    graphType: "line",
    title: "Added Sugar Intake vs. Health Symptoms",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Added Sugar Intake (g)",
          data: [50, 60, 55, 70],
          borderColor: "#FF7043",
          fill: false,
          tension: 0.4,
        },
        {
          label: "Reported Health Symptoms (Score)",
          data: [4, 5, 6, 7],
          borderColor: "#81C784",
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
          text: "Added Sugar Intake vs. Health Symptoms",
        },
      },
      scales: {
        x: { title: { display: true, text: "Week" } },
        y: { title: { display: true, text: "Amount/Score" } },
      },
    },
  },

  {
    graphType: "doughnut",
    title: "Proportion of Sugar in Common Food Groups",
    data: {
      labels: ["Beverages", "Snacks", "Cereals", "Condiments", "Others"],
      datasets: [
        {
          label: "Sugar Content",
          data: [35, 25, 15, 10, 15],
          backgroundColor: [
            "#FF7043",
            "#FFD54F",
            "#64B5F6",
            "#81C784",
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
          text: "Proportion of Sugar in Common Food Groups",
        },
      },
    },
  },

  {
    graphType: "bar",
    title: "Added Sugar Consumption by Age Group",
    data: {
      labels: ["Under 18", "18-34", "35-50", "50+"],
      datasets: [
        {
          label: "Added Sugar (g)",
          data: [60, 70, 65, 50],
          backgroundColor: "#FF7043",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: true, text: "Added Sugar Consumption by Age Group" },
      },
      scales: {
        x: { title: { display: true, text: "Age Group" } },
        y: { title: { display: true, text: "Added Sugar (g)" } },
      },
    },
  },

  {
    graphType: "line",
    title: "Added Sugar Intake Trend Over Time",
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Added Sugar Intake (g)",
          data: [120, 130, 115, 140, 125],
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
        title: { display: true, text: "Added Sugar Intake Trend Over Time" },
      },
      scales: {
        x: { title: { display: true, text: "Month" } },
        y: { title: { display: true, text: "Added Sugar (g)" } },
      },
    },
  },
];
