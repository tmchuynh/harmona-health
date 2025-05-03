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
          backgroundColor: ["#FF7043", "#FFD54F", "#64B5F6", "#81C784"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "bottom" },
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
          backgroundColor: "#FF7043",
        },
        {
          label: "2 Meals a Day (%)",
          data: [20, 25, 30, 20],
          backgroundColor: "#FFD54F",
        },
        {
          label: "3 Meals a Day (%)",
          data: [60, 50, 45, 40],
          backgroundColor: "#64B5F6",
        },
        {
          label: "4+ Meals a Day (%)",
          data: [15, 15, 10, 20],
          backgroundColor: "#81C784",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Meal Frequency by Age Group" },
      },
      scales: {
        x: { title: { display: true, text: "Age Group" } },
        y: { title: { display: true, text: "Meal Frequency (%)" } },
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
          borderColor: "#FF7043",
          fill: false,
          tension: 0.4,
        },
        {
          label: "2 Meals a Day (%)",
          data: [25, 22, 28, 30, 27],
          borderColor: "#FFD54F",
          fill: false,
          tension: 0.4,
        },
        {
          label: "3 Meals a Day (%)",
          data: [50, 48, 45, 42, 45],
          borderColor: "#64B5F6",
          fill: false,
          tension: 0.4,
        },
        {
          label: "4+ Meals a Day (%)",
          data: [15, 18, 12, 8, 10],
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
        title: { display: true, text: "Meal Frequency Trends Over Time" },
      },
      scales: {
        x: { title: { display: true, text: "Year" } },
        y: { title: { display: true, text: "Meal Frequency (%)" } },
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
          backgroundColor: ["#FF7043", "#FFD54F", "#64B5F6", "#81C784"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "bottom" },
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
          backgroundColor: "#FF7043",
        },
        {
          label: "Mental Clarity (%)",
          data: [30, 50, 75, 60],
          backgroundColor: "#FFD54F",
        },
        {
          label: "Digestion (%)",
          data: [25, 55, 80, 65],
          backgroundColor: "#64B5F6",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Meal Frequency and Health Impact" },
      },
      scales: {
        x: { title: { display: true, text: "Meal Frequency" } },
        y: { title: { display: true, text: "Impact (%)" } },
      },
    },
  },

  {
    graphType: "pie",
    title: "Meal Frequency and Weight Management",
    data: {
      labels: ["Weight Loss", "Maintenance", "Weight Gain"],
      datasets: [
        {
          label: "Weight Management Based on Meal Frequency",
          data: [30, 40, 30],
          backgroundColor: ["#FF7043", "#FFD54F", "#64B5F6"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "bottom" },
        title: { display: true, text: "Meal Frequency and Weight Management" },
      },
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
          data: [15, 25, 20, 10],
          backgroundColor: "#FF7043",
        },
        {
          label: "2 Meals a Day (%)",
          data: [25, 35, 30, 20],
          backgroundColor: "#FFD54F",
        },
        {
          label: "3 Meals a Day (%)",
          data: [40, 30, 35, 50],
          backgroundColor: "#64B5F6",
        },
        {
          label: "4+ Meals a Day (%)",
          data: [20, 10, 15, 20],
          backgroundColor: "#81C784",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Meal Frequency by Work Schedule" },
      },
      scales: {
        x: { title: { display: true, text: "Work Schedule" } },
        y: { title: { display: true, text: "Meal Frequency (%)" } },
      },
    },
  },

  {
    graphType: "line",
    title: "Meal Frequency and Productivity",
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
          data: [50, 65, 80, 85],
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
        legend: { display: false },
        title: { display: true, text: "Meal Frequency and Productivity" },
      },
      scales: {
        x: { title: { display: true, text: "Meal Frequency" } },
        y: { title: { display: true, text: "Productivity (%)" } },
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
          backgroundColor: ["#FF7043", "#FFD54F", "#64B5F6"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "bottom" },
        title: { display: true, text: "Meal Frequency and Sleep Quality" },
      },
    },
  },
];
