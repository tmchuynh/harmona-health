import { Nutrition } from "@/lib/interfaces&types/resources";

export const hydrationTracking: Nutrition[] = [
  {
    graphType: "bar",
    title: "Recommended VS Actual Daily Hydration by Age Group",
    data: {
      labels: ["Children", "Teens", "Adults", "Seniors"],
      datasets: [
        {
          label: "Recommended Intake (L)",
          data: [1.5, 2.0, 3.0, 2.5],
          backgroundColor: "#043f7e",
        },
        {
          label: "Actual Intake (L)",
          data: [1.0, 1.5, 2.0, 1.8],
          backgroundColor: "#91c1f4",
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
            text: "Liters Per Day",
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
    title: "Hydration Sources Breakdown",
    data: {
      labels: [
        "0-10 yrs old",
        "11-20 yrs old",
        "21-30 yrs old",
        "31-40 yrs old",
        "41+ yrs old",
      ],
      datasets: [
        {
          label: "Water (%)",
          data: [50, 40, 30, 25, 20],
          backgroundColor: "#0a54a2",
        },
        {
          label: "Fruits & Veggies (%)",
          data: [15, 25, 30, 35, 40],
          backgroundColor: "#7abaff",
        },
        {
          label: "Soda (%)",
          data: [10, 15, 20, 25, 30],
          backgroundColor: "#05255d",
        },
        {
          label: "Caffeine (%)",
          data: [5, 10, 15, 20, 25],
          backgroundColor: "#a7d2f5",
        },
        {
          label: "Other Beverages (%)",
          data: [20, 10, 5, 5, 5],
          backgroundColor: "#1a68bc",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: { display: true, text: "Where Hydration Comes From" },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Age Range",
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
            text: "Source Contribution",
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
    title: "Hydration and Performance",
    data: {
      labels: ["Dehydrated", "Hydrated"],
      datasets: [
        {
          label: "Cognitive Performance (%)",
          data: [60, 85],
          backgroundColor: "#134191",
        },
        {
          label: "Physical Performance (%)",
          data: [70, 90],
          backgroundColor: "#12223d",
        },
        {
          label: "Concentration (%)",
          data: [55, 85],
          backgroundColor: "#7694b4",
        },
        {
          label: "Memory (%)",
          data: [65, 90],
          backgroundColor: "#93c7ff",
        },
        {
          label: "Alertness (%)",
          data: [60, 88],
          backgroundColor: "#05255d",
        },
        {
          label: "Reaction Time (%)",
          data: [70, 95],
          backgroundColor: "#195ca4",
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
          text: "Impact of Hydration on Cognitive Performance",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Hydration Status",
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
            text: "Performance (%)",
            font: {
              size: 18,
              weight: "bold",
            },
          },
          grid: { lineWidth: 0.15, color: "#929292" },
        },
      },
      indexAxis: "y",
    },
  },
];
