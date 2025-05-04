import { Nutrition } from "@/lib/interfaces&types/resources";

export const macronutrientBreakdown: Nutrition[] = [
  {
    graphType: "bar",
    title: "Average Daily Macronutrient Ratios",
    data: {
      labels: [
        "RDA Typical",
        "RDA Athlete",
        "Keto",
        "Weight Loss",
        "Muscle Gain",
      ],
      datasets: [
        {
          label: "Carbohydrates (%)",
          data: [40, 45, 5, 35, 70],
          backgroundColor: "#f79271",
        },
        {
          label: "Proteins (%)",
          data: [30, 35, 30, 35, 15],
          backgroundColor: "#06290b",
        },
        {
          label: "Fats (%)",
          data: [30, 20, 65, 30, 15],
          backgroundColor: "#2a7631",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: { display: true, text: "Average Daily Macronutrient Ratios" },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Diet Type",
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
            text: "% of Daily Intake",
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
    title: "Macronutrient Composition of a Smoothie",
    data: {
      labels: ["Carbohydrates", "Proteins", "Fats"],
      datasets: [
        {
          label: "Smoothie Breakdown",
          data: [35, 15, 10],
          backgroundColor: ["#d0efb1", "#f79271", "#06290b"],
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
          text: "Macronutrients in a Breakfast Smoothie (g)",
        },
      },
    },
  },
];
