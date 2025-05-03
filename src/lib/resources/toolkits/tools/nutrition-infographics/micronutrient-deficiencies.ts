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
            "#FF7043",
            "#FFD54F",
            "#64B5F6",
            "#81C784",
            "#FFEB3B",
            "#B2DFDB",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "bottom" },
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
          backgroundColor: "#FF7043",
        },
        {
          label: "Men (%)",
          data: [25, 20, 10, 10, 5],
          backgroundColor: "#64B5F6",
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
          text: "Prevalence of Micronutrient Deficiencies by Gender",
        },
      },
      scales: {
        x: { title: { display: true, text: "Micronutrient" } },
        y: { title: { display: true, text: "Prevalence (%)" } },
      },
    },
  },

  {
    graphType: "line",
    title: "Micronutrient Deficiencies Over Time",
    data: {
      labels: ["2018", "2019", "2020", "2021", "2022"],
      datasets: [
        {
          label: "Iron Deficiency (%)",
          data: [25, 30, 35, 30, 28],
          borderColor: "#FF7043",
          fill: false,
          tension: 0.4,
        },
        {
          label: "Vitamin D Deficiency (%)",
          data: [20, 25, 28, 22, 24],
          borderColor: "#64B5F6",
          fill: false,
          tension: 0.4,
        },
        {
          label: "Vitamin B12 Deficiency (%)",
          data: [10, 15, 18, 12, 10],
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
        title: { display: true, text: "Micronutrient Deficiencies Over Time" },
      },
      scales: {
        x: { title: { display: true, text: "Year" } },
        y: { title: { display: true, text: "Deficiency (%)" } },
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
          backgroundColor: ["#FF7043", "#FFD54F", "#64B5F6", "#81C784"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "bottom" },
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
          backgroundColor: "#FF7043",
        },
        {
          label: "Vitamin D Deficiency (%)",
          data: [30, 25, 20, 40, 15],
          backgroundColor: "#FFD54F",
        },
        {
          label: "Vitamin A Deficiency (%)",
          data: [10, 5, 25, 35, 15],
          backgroundColor: "#64B5F6",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Micronutrient Deficiency by Region" },
      },
      scales: {
        x: { title: { display: true, text: "Region" } },
        y: { title: { display: true, text: "Deficiency (%)" } },
      },
    },
  },

  {
    graphType: "line",
    title: "Iron Deficiency Trends in Pregnant Women",
    data: {
      labels: ["2018", "2019", "2020", "2021", "2022"],
      datasets: [
        {
          label: "Iron Deficiency (%)",
          data: [40, 45, 50, 55, 50],
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
        title: {
          display: true,
          text: "Iron Deficiency Trends in Pregnant Women",
        },
      },
      scales: {
        x: { title: { display: true, text: "Year" } },
        y: { title: { display: true, text: "Deficiency (%)" } },
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
          text: "Micronutrient Deficiency Impact on Health",
        },
      },
    },
  },

  {
    graphType: "bar",
    title: "Vitamin D Deficiency by Season",
    data: {
      labels: ["Spring", "Summer", "Fall", "Winter"],
      datasets: [
        {
          label: "Vitamin D Deficiency (%)",
          data: [30, 20, 25, 45],
          backgroundColor: "#81C784",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: true, text: "Vitamin D Deficiency by Season" },
      },
      scales: {
        x: { title: { display: true, text: "Season" } },
        y: { title: { display: true, text: "Deficiency (%)" } },
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
          backgroundColor: ["#FF7043", "#FFD54F", "#64B5F6", "#81C784"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "bottom" },
        title: { display: true, text: "Vitamin A Deficiency by Diet Type" },
      },
    },
  },
];
