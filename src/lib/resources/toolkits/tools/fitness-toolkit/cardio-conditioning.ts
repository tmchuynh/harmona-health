import { Fitness } from "@/lib/interfaces&types/resources";

export const cardioConditioning: Fitness[] = [
  {
    title: "Beginner Low-Impact Cardio",
    duration: "20 minutes",
    format: "Steady-State",
    goal: "Improve baseline endurance and joint mobility",
    rest: "30–45 seconds between moves",
    frequency: "3–4x per week",
    tip: "Keep your movements light and rhythmic.",
    difficulty: "Beginner",
    exercises: [
      {
        exercise: {
          title: "March in Place",
          description:
            "A low-impact cardio move that helps increase heart rate while engaging the legs.",
          howTo: [
            {
              step: {
                description:
                  "Lift one knee up towards your chest, then lower and repeat on the other leg.",
              },
            },
            {
              step: {
                description: "Keep a steady rhythm and maintain a light pace.",
              },
            },
          ],
          tips: [
            "Keep your core engaged for better stability.",
            "Focus on your posture and avoid slouching.",
          ],
        },
        set: 1,
        time: 120,
      },
      {
        exercise: {
          title: "Step Touch",
          description:
            "A low-impact cardio move that involves stepping from side to side.",
          howTo: [
            {
              step: {
                description:
                  "Step to the side with one foot, then bring the other foot to meet it.",
              },
            },
            { step: { description: "Maintain a smooth, rhythmic movement." } },
          ],
          tips: [
            "Keep your knees slightly bent to absorb impact.",
            "Use your arms to add movement and increase intensity.",
          ],
        },
        set: 1,
        time: 120,
      },
      {
        exercise: {
          title: "Bodyweight Squats",
          description: "A bodyweight exercise targeting the legs and glutes.",
          howTo: [
            {
              step: {
                description:
                  "Stand with feet shoulder-width apart and bend your knees, lowering your hips down.",
              },
            },
            {
              step: {
                description:
                  "Keep your chest up and weight in your heels, then push back up to standing.",
              },
            },
          ],
          tips: [
            "Do not let your knees extend past your toes.",
            "Engage your glutes at the top of the squat for better activation.",
          ],
        },
        set: 2,
        rep: 12,
      },
      {
        exercise: {
          title: "High Knee March",
          description:
            "A cardio move that works the lower body and increases heart rate.",
          howTo: [
            {
              step: {
                description:
                  "Lift your knees high towards your chest in a controlled, marching movement.",
              },
            },
            {
              step: {
                description: "Alternate legs and maintain a steady rhythm.",
              },
            },
          ],
          tips: [
            "Keep your core engaged throughout the movement.",
            "Move at a pace that feels comfortable but challenging.",
          ],
        },
        set: 3,
        time: 30,
      },
      {
        exercise: {
          title: "Arm Circles + Side Steps",
          description:
            "An upper body and lower body combo movement to engage your shoulders and legs.",
          howTo: [
            {
              step: {
                description:
                  "Circle your arms forward in a small motion, while stepping to the side with one foot.",
              },
            },
            {
              step: {
                description:
                  "Alternate side steps while maintaining the arm circles.",
              },
            },
          ],
          tips: [
            "Keep your movements controlled and deliberate.",
            "Make the arm circles larger for a greater challenge.",
          ],
        },
        set: 2,
        time: 30,
      },
      {
        exercise: {
          title: "Wall Push-Ups",
          description:
            "A modified version of push-ups that targets the chest, shoulders, and triceps.",
          howTo: [
            {
              step: {
                description:
                  "Stand facing a wall and place your hands slightly wider than shoulder-width apart.",
              },
            },
            {
              step: {
                description:
                  "Lower your chest towards the wall, then push back up to the starting position.",
              },
            },
          ],
          tips: [
            "Keep your body in a straight line from head to heels.",
            "Engage your core to prevent your back from arching.",
          ],
        },
        set: 2,
        rep: 10,
      },
      {
        exercise: {
          title: "Seated Leg Extensions",
          description:
            "A seated exercise to engage the quadriceps while improving mobility.",
          howTo: [
            {
              step: {
                description:
                  "Sit upright in a chair and extend one leg straight out in front of you.",
              },
            },
            {
              step: {
                description:
                  "Hold for a few seconds before lowering your leg back down, then alternate legs.",
              },
            },
          ],
          tips: [
            "Make sure to keep your back straight and core engaged.",
            "Perform slowly for better muscle engagement.",
          ],
        },
        set: 2,
        rep: 15,
      },
      {
        exercise: {
          title: "Standing Calf Raises",
          description:
            "An exercise to strengthen the calves and improve balance.",
          howTo: [
            {
              step: {
                description:
                  "Stand with feet hip-width apart, then rise up onto the balls of your feet.",
              },
            },
            { step: { description: "Slowly lower back down and repeat." } },
          ],
          tips: [
            "Keep your core tight for better stability.",
            "Perform slowly to maximize calf muscle engagement.",
          ],
        },
        set: 2,
        rep: 15,
      },
    ],
  },
];
