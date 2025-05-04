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
            "#293241",
            "#3d5a80",
            "#98c1d9",
            "#ee6c4d",
            "#e0fbfc",
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
          label: "Snacks & Sweets",
          data: [18, 20, 25, 23],
          backgroundColor: "#293241",
        },
        {
          label: "Breakfast Cereals",
          data: [10, 8, 12, 15],
          backgroundColor: "#e0fbfc",
        },
        {
          label: "Sugary Beverages",
          data: [30, 32, 28, 35],
          backgroundColor: "#98c1d9",
        },
        {
          label: "Sauces & Condiments",
          data: [5, 7, 6, 8],
          backgroundColor: "#3d5a80",
        },
        {
          label: "Processed Foods",
          data: [7, 6, 9, 6],
          backgroundColor: "#98c1d9",
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
          text: "Weekly Added Sugar Intake from Different Sources",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Week",
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
            text: "Sugar Intake (g)",
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
    graphType: "doughnut",
    title: "Proportion of Sugar in Common Food Groups",
    data: {
      labels: ["Beverages", "Snacks", "Cereals", "Condiments", "Others"],
      datasets: [
        {
          label: "Sugar Content",
          data: [35, 25, 15, 10, 15],
          backgroundColor: [
            "#293241",
            "#e0fbfc",
            "#ee6c4d",
            "#98c1d9",
            "#3d5a80",
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
          text: "Proportion of Sugar in Common Food Groups",
        },
      },
    },
  },

  {
    graphType: "bar",
    title: "Sources of Added Sugar Consumption by Age Group",
    data: {
      labels: ["Under 18", "18-34", "35-50", "50+"],
      datasets: [
        {
          label: "Snacks & Sweets",
          data: [30, 35, 25, 20],
          backgroundColor: "#3d5a80",
        },
        {
          label: "Sugary Beverages",
          data: [50, 40, 30, 20],
          backgroundColor: "#ee6c4d",
        },
        {
          label: "Processed Foods",
          data: [5, 5, 10, 15],
          backgroundColor: "#293241",
        },
        {
          label: "Breakfast Cereals",
          data: [10, 15, 20, 25],
          backgroundColor: "#98c1d9",
        },
        {
          label: "Sauces & Condiments",
          data: [5, 10, 15, 20],
          backgroundColor: "#e0fbfc",
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
            text: "Added Sugar (g)",
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
