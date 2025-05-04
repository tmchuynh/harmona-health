import { Nutrition } from "@/lib/interfaces&types/resources";

export const eatingOutVsHomeCookedMeals: Nutrition[] = [
  {
    graphType: "bar",
    title: "Average Nutrient Quality Score",
    data: {
      labels: [
        "Protein",
        "Fiber",
        "Sugar",
        "Sodium",
        "Carbs",
        "Fat",
        "Vitamins",
      ],
      datasets: [
        {
          label: "Home-Cooked Meals",
          data: [8.2, 9.2, 6.4, 3.9, 5.1, 4.5, 7.5],
          backgroundColor: "#2b2d42",
        },
        {
          label: "Meals Eaten Out",
          data: [9.6, 5.7, 4.2, 4.3, 1.5, 2.3, 2.4, 5.2],
          backgroundColor: "#8d99ae",
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
            text: "Quality Score",
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
    title: "Average Time Per Meal",
    data: {
      labels: ["Preparation", "Cooking", "Eating", "Cleaning"],
      datasets: [
        {
          label: "Home-Cooked Meals",
          data: [10, 45, 30, 15],
          backgroundColor: "#8d99ae",
        },
        {
          label: "Meals Eaten Out",
          data: [0, 0, 105, 0],
          backgroundColor: "#2b2d42",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point: {
          radius: 5,
          hoverRadius: 7,
        },
      },
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
            text: "Time (minutes)",
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
    title: "Perceived Long-Term Health Impact",
    data: {
      labels: ["Very Healthy", "Somewhat Healthy", "Neutral", "Unhealthy"],
      datasets: [
        {
          label: "Home-Cooked",
          data: [60, 25, 10, 5],
          backgroundColor: ["#2b2d42", "#8d99ae", "#edf2f4", "#ef233c"],
          borderWidth: 0,
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
];
