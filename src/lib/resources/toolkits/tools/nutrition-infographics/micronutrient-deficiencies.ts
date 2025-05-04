import { Nutrition } from "@/lib/interfaces&types/resources";

export const micronutrientDeficiencies: Nutrition[] = [
  {
    graphType: "pie",
    title: "Micronutrient Deficiencies in Adults",
    data: {
      labels: [
        "Iron",
        "Vitamin D",
        "Vitamin A",
        "Calcium",
        "Vitamin B12",
        "Other",
      ],
      datasets: [
        {
          label: "Percentage of Deficiencies",
          data: [30, 25, 15, 10, 5, 15],
          backgroundColor: [
            "#d69f7e",
            "#e1bb80",
            "#352208",
            "#9c6644",
            "#ede0d4",
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
        title: { display: true, text: "Micronutrient Deficiencies in Adults" },
      },
    },
  },

  {
    graphType: "bar",
    title: "Prevalence of Micronutrient Deficiencies by Gender",
    data: {
      labels: ["Iron", "Vitamin D", "Vitamin A", "Calcium", "Vitamin B12"],
      datasets: [
        {
          label: "Women (%)",
          data: [35, 30, 20, 15, 10],
          backgroundColor: "#9c6644",
        },
        {
          label: "Men (%)",
          data: [25, 20, 10, 10, 5],
          backgroundColor: "#ede0d4",
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
          text: "Prevalence of Micronutrient Deficiencies by Gender",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Micronutrient",
            font: {
              size: 18,
              weight: "bold",
            },
          },
        },
        y: {
          title: {
            display: true,
            text: "Prevalence (%)",
            font: {
              size: 18,
              weight: "bold",
            },
          },
        },
      },
    },
  },

  {
    graphType: "doughnut",
    title: "Micronutrient Deficiency by Age Group",
    data: {
      labels: ["Under 18", "18-34", "35-50", "50+"],
      datasets: [
        {
          label: "Deficiency Rate",
          data: [15, 25, 20, 40],
          backgroundColor: ["#ede0d4", "#9c6644", "#352208", "#e1bb80"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: { display: true, text: "Micronutrient Deficiency by Age Group" },
      },
    },
  },

  {
    graphType: "bar",
    title: "Micronutrient Deficiency by Region",
    data: {
      labels: ["North America", "Europe", "Asia", "Africa", "South America"],
      datasets: [
        {
          label: "Iron Deficiency (%)",
          data: [20, 15, 30, 35, 25],
          backgroundColor: "#9c6644",
        },
        {
          label: "Vitamin D Deficiency (%)",
          data: [30, 25, 20, 40, 15],
          backgroundColor: "#352208",
        },
        {
          label: "Vitamin A Deficiency (%)",
          data: [10, 5, 25, 35, 15],
          backgroundColor: "#e1bb80",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: { display: true, text: "Micronutrient Deficiency by Region" },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Region",
            font: {
              size: 18,
              weight: "bold",
            },
          },
        },
        y: {
          title: {
            display: true,
            text: "Deficiency (%)",
            font: {
              size: 18,
              weight: "bold",
            },
          },
        },
      },
    },
  },

  {
    graphType: "pie",
    title: "Micronutrient Deficiency Impact on Health",
    data: {
      labels: [
        "Weakened Immune System",
        "Fatigue",
        "Poor Bone Health",
        "Cognitive Decline",
        "Other",
      ],
      datasets: [
        {
          label: "Impact Distribution",
          data: [35, 25, 15, 10, 15],
          backgroundColor: [
            "#9c6644",
            "#e1bb80",
            "#d69f7e",
            "#6f1d1b",
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
          text: "Micronutrient Deficiency Impact on Health",
        },
      },
    },
  },

  {
    graphType: "bar",
    title: "Deficiency by Season",
    data: {
      labels: ["Spring", "Summer", "Fall", "Winter"],
      datasets: [
        {
          label: "Vitamin D Deficiency (%)",
          data: [30, 20, 25, 45],
          backgroundColor: "#6f1d1b",
        },
        {
          label: "Iron Deficiency (%)",
          data: [20, 15, 10, 25],
          backgroundColor: "#e1bb80",
        },
        {
          label: "Vitamin A Deficiency (%)",
          data: [10, 5, 15, 20],
          backgroundColor: "#352208",
        },
        {
          label: "Calcium Deficiency (%)",
          data: [5, 10, 15, 20],
          backgroundColor: "#ede0d4",
        },
        {
          label: "Vitamin B12 Deficiency (%)",
          data: [15, 20, 25, 30],
          backgroundColor: "#d69f7e",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: { display: true, text: "Vitamin D Deficiency by Season" },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Season",
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
            text: "Deficiency (%)",
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
    title: "Vitamin A Deficiency by Diet Type",
    data: {
      labels: ["Vegetarian", "Non-Vegetarian", "Vegan", "Omnivore"],
      datasets: [
        {
          label: "Vitamin A Deficiency Rate",
          data: [10, 5, 15, 8],
          backgroundColor: ["#352208", "#6f1d1b", "#e1bb80", "#ede0d4"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: { display: true, text: "Vitamin A Deficiency by Diet Type" },
      },
    },
  },
];
