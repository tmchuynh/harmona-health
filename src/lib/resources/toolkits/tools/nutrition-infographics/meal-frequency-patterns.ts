import { Nutrition } from "@/lib/interfaces&types/resources";

export const mealFrequencyPatterns: Nutrition[] = [
  {
    graphType: "pie",
    title: "Meal Frequency Distribution",
    data: {
      labels: [
        "1 Meal a Day",
        "2 Meals a Day",
        "3 Meals a Day",
        "4+ Meals a Day",
      ],
      datasets: [
        {
          label: "Meal Frequency (%)",
          data: [15, 25, 40, 20],
          backgroundColor: ["#023509", "#1d882b", "#d0efb1", "#f79271"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: { display: true, text: "Meal Frequency Distribution" },
      },
    },
  },

  {
    graphType: "bar",
    title: "Meal Frequency by Age Group",
    data: {
      labels: ["Under 18", "18-34", "35-50", "50+"],
      datasets: [
        {
          label: "1 Meal a Day (%)",
          data: [5, 10, 15, 20],
          backgroundColor: "#d0efb1",
        },
        {
          label: "2 Meals a Day (%)",
          data: [20, 25, 30, 20],
          backgroundColor: "#2a7631",
        },
        {
          label: "3 Meals a Day (%)",
          data: [60, 50, 45, 40],
          backgroundColor: "#06290b",
        },
        {
          label: "4+ Meals a Day (%)",
          data: [15, 15, 10, 20],
          backgroundColor: "#f79271",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: { display: true, text: "Meal Frequency by Age Group" },
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
            text: "Meal Frequency (%)",
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
    graphType: "line",
    title: "Meal Frequency Trends Over Time",
    data: {
      labels: ["2018", "2019", "2020", "2021", "2022"],
      datasets: [
        {
          label: "1 Meal a Day (%)",
          data: [10, 12, 15, 20, 18],
          borderColor: "#f79271",
          backgroundColor: "#f79271",
          tension: 0.4,
        },
        {
          label: "2 Meals a Day (%)",
          data: [25, 22, 28, 30, 27],
          borderColor: "#81ed8f",
          backgroundColor: "#81ed8f",
          tension: 0.4,
        },
        {
          label: "3 Meals a Day (%)",
          data: [50, 48, 45, 42, 45],
          borderColor: "#4acf5b",
          backgroundColor: "#4acf5b",
          tension: 0.4,
        },
        {
          label: "4+ Meals a Day (%)",
          data: [15, 18, 12, 8, 10],
          borderColor: "#1d882b",
          backgroundColor: "#1d882b",
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: { display: true, text: "Meal Frequency Trends Over Time" },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Year",
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
            text: "Meal Frequency (%)",
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
    title: "Meal Frequency Preferences",
    data: {
      labels: ["Breakfast", "Lunch", "Dinner", "Snacks"],
      datasets: [
        {
          label: "Meal Frequency Preferences",
          data: [25, 35, 30, 10],
          backgroundColor: ["#1d6226", "#d0efb1", "#f79271", "#023509"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: { display: true, text: "Meal Frequency Preferences" },
      },
    },
  },

  {
    graphType: "bar",
    title: "Meal Frequency and Health Impact",
    data: {
      labels: [
        "1 Meal a Day",
        "2 Meals a Day",
        "3 Meals a Day",
        "4+ Meals a Day",
      ],
      datasets: [
        {
          label: "Energy Level (%)",
          data: [40, 60, 80, 70],
          backgroundColor: "#81ed8f",
        },
        {
          label: "Mental Clarity (%)",
          data: [30, 50, 75, 60],
          backgroundColor: "#d0efb1",
        },
        {
          label: "Digestion (%)",
          data: [25, 55, 80, 65],
          backgroundColor: "#023509",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: { display: true, text: "Meal Frequency and Health Impact" },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Meal Frequency",
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
            text: "Impact (%)",
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

  {
    graphType: "bar",
    title: "Meal Frequency by Work Schedule",
    data: {
      labels: [
        "Morning Shift",
        "Afternoon Shift",
        "Night Shift",
        "Freelancers",
      ],
      datasets: [
        {
          label: "1 Meal a Day (%)",
          data: [16, 24, 17, 8],
          backgroundColor: "#023509",
        },
        {
          label: "2 Meals a Day (%)",
          data: [27, 31, 26, 18],
          backgroundColor: "#d0efb1",
        },
        {
          label: "3 Meals a Day (%)",
          data: [42, 37, 34, 53],
          backgroundColor: "#81ed8f",
        },
        {
          label: "4+ Meals a Day (%)",
          data: [27, 12, 17, 21],
          backgroundColor: "#f79271",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: { display: true, text: "Meal Frequency by Work Schedule" },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Work Schedule",
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
            text: "Meal Frequency (%)",
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
    graphType: "line",
    title: "Meal Frequency",
    data: {
      labels: [
        "1 Meal a Day",
        "2 Meals a Day",
        "3 Meals a Day",
        "4+ Meals a Day",
      ],
      datasets: [
        {
          label: "Productivity (%)",
          data: [25, 66, 83, 91],
          borderColor: "#f79271",
          backgroundColor: "#f79271",
          tension: 0.4,
        },
        {
          label: "Focus Level (%)",
          data: [24, 52, 79, 93],
          borderColor: "#4acf5b",
          backgroundColor: "#4acf5b",
          tension: 0.4,
        },
        {
          label: "Energy Level (%)",
          data: [27, 63, 86, 94],
          borderColor: "#efb4a0",
          backgroundColor: "#efb4a0",
          tension: 0.4,
        },
        {
          label: "Mood Level (%)",
          data: [31, 54, 85, 97],
          borderColor: "#023509",
          backgroundColor: "#023509",
          tension: 0.4,
        },
        {
          label: "Stress Level (%)",
          data: [93, 86, 53, 26],
          borderColor: "#61ef74",
          backgroundColor: "#61ef74",
          tension: 0.4,
        },
        {
          label: "Sleep Quality (%)",
          data: [15, 34, 79, 98],
          borderColor: "#0a200d",
          backgroundColor: "#0a200d",
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: { display: true, text: "Meal Frequency and Productivity" },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Meal Frequency",
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
            text: "Productivity (%)",
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
    title: "Meal Frequency and Sleep Quality",
    data: {
      labels: [
        "Good Sleep Quality",
        "Average Sleep Quality",
        "Poor Sleep Quality",
      ],
      datasets: [
        {
          label: "Sleep Quality Based on Meal Frequency",
          data: [40, 35, 25],
          backgroundColor: ["#06290b", "#d0efb1", "#1d882b"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "right" },
        title: { display: true, text: "Meal Frequency and Sleep Quality" },
      },
    },
  },
];
