import { Fitness } from "@/lib/interfaces&types/resources";

export const bodyweightWorkouts: Fitness[] = [
  {
    title: "Beginner Full-Body Routine",
    duration: "30 minutes",
    format: "Circuit",
    goal: "Build foundational strength and endurance",
    rest: "30–60 seconds between exercises",
    frequency: "3x per week",
    tip: "Focus on form; don’t rush.",
    difficulty: "Beginner",
    exercises: [
      {
        exercise: {
          title: "Bodyweight Squats",
          description:
            "A fundamental lower body exercise to strengthen quads, glutes, and hamstrings.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Stand with feet shoulder-width apart, toes pointing slightly out.",
              },
            },
            {
              step: {
                title: "Squat Down",
                description:
                  "Bend at the knees and hips to lower your body, keeping your back straight.",
              },
            },
            {
              step: {
                title: "Return to Standing",
                description:
                  "Push through the heels to return to standing position.",
              },
            },
          ],
          tips: [
            "Keep your knees behind your toes.",
            "Engage your core during the movement.",
          ],
        },
        set: 3,
        rep: 15,
      },
      {
        exercise: {
          title: "Incline Push-Ups",
          description:
            "A push-up variation targeting the chest and shoulders, with reduced intensity.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Place your hands on an elevated surface, such as a bench or table, keeping your body straight.",
              },
            },
            {
              step: {
                title: "Lower Your Chest",
                description:
                  "Bend your elbows to lower your chest toward the surface.",
              },
            },
            {
              step: {
                title: "Push Back Up",
                description:
                  "Push through your palms to return to the starting position.",
              },
            },
          ],
          tips: [
            "Maintain a straight line from head to heels.",
            "Engage your core to avoid sagging hips.",
          ],
        },
        set: 3,
        rep: 12,
      },
      {
        exercise: {
          title: "Glute Bridges",
          description:
            "A great exercise to activate the glutes and improve hip mobility.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Lie on your back with knees bent and feet flat on the floor.",
              },
            },
            {
              step: {
                title: "Lift Hips",
                description:
                  "Lift your hips toward the ceiling, squeezing your glutes at the top.",
              },
            },
            {
              step: {
                title: "Lower Hips",
                description:
                  "Slowly lower your hips back to the floor while maintaining control.",
              },
            },
          ],
          tips: [
            "Avoid arching your lower back.",
            "Focus on squeezing your glutes at the top.",
          ],
        },
        set: 3,
        rep: 15,
      },
      {
        exercise: {
          title: "Bird Dogs",
          description:
            "An excellent core stability exercise for coordination and balance.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Start on your hands and knees with a neutral spine.",
              },
            },
            {
              step: {
                title: "Extend Arm and Leg",
                description:
                  "Extend your right arm forward and left leg backward, keeping your back straight.",
              },
            },
            {
              step: {
                title: "Return to Start",
                description:
                  "Return to the starting position and repeat on the other side.",
              },
            },
          ],
          tips: [
            "Keep your core tight during the movement.",
            "Avoid letting your lower back sag.",
          ],
        },
        set: 3,
        rep: 10,
      },
      {
        exercise: {
          title: "Wall Sits",
          description:
            "An isometric exercise for building endurance in the legs.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Sit against a wall with your knees at 90 degrees.",
              },
            },
            {
              step: {
                title: "Hold the Position",
                description:
                  "Hold the position as long as possible while maintaining good posture.",
              },
            },
          ],
          tips: [
            "Keep your knees behind your toes.",
            "Engage your core to prevent slouching.",
          ],
        },
        set: 2,
        time: 30,
      },
      {
        exercise: {
          title: "Dead Bug",
          description:
            "A core exercise that helps improve coordination and stability.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Lie on your back with your arms extended toward the ceiling and knees bent at 90 degrees.",
              },
            },
            {
              step: {
                title: "Lower Arm and Leg",
                description:
                  "Slowly extend your right arm back and left leg down, keeping your lower back pressed into the floor.",
              },
            },
            {
              step: {
                title: "Return to Start",
                description:
                  "Return to the starting position and repeat on the other side.",
              },
            },
          ],
          tips: [
            "Keep your core engaged throughout the movement.",
            "Move slowly and with control.",
          ],
        },
        set: 2,
        rep: 10,
      },
      {
        exercise: {
          title: "Side-Lying Leg Raises",
          description:
            "A lower-body exercise that targets the abductors and glutes.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Lie on your side with your legs straight and stacked.",
              },
            },
            {
              step: {
                title: "Lift Leg",
                description:
                  "Lift the top leg toward the ceiling while keeping your body stable.",
              },
            },
            {
              step: {
                title: "Lower Leg",
                description: "Lower your leg back down with control.",
              },
            },
          ],
          tips: [
            "Engage your core to prevent tilting.",
            "Don't let your lower leg touch the floor.",
          ],
        },
        set: 3,
        rep: 12,
      },
      {
        exercise: {
          title: "Knee Push-Ups",
          description:
            "A modified push-up that reduces the intensity by resting on the knees.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Start in a plank position with your knees on the floor and hands placed wider than shoulder-width.",
              },
            },
            {
              step: {
                title: "Lower Body",
                description:
                  "Bend your elbows and lower your chest to the floor.",
              },
            },
            {
              step: {
                title: "Push Up",
                description:
                  "Push through your palms to return to the starting position.",
              },
            },
          ],
          tips: [
            "Maintain a straight line from head to knees.",
            "Keep elbows at a 45-degree angle.",
          ],
        },
        set: 2,
        rep: 10,
      },
      {
        exercise: {
          title: "Standing Calf Raises",
          description:
            "An exercise to strengthen the calves and improve lower leg endurance.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Stand tall with feet hip-width apart, weight on the balls of your feet.",
              },
            },
            {
              step: {
                title: "Lift Heels",
                description:
                  "Raise your heels as high as possible, engaging your calves.",
              },
            },
            {
              step: {
                title: "Lower Heels",
                description: "Lower your heels back down with control.",
              },
            },
          ],
          tips: [
            "Perform the movement slowly to increase time under tension.",
            "Keep your core engaged for balance.",
          ],
        },
        set: 3,
        rep: 15,
      },
    ],
  },
  {
    title: "Intermediate Push Day",
    duration: "35 minutes",
    format: "Straight Sets",
    goal: "Target pushing muscles (chest, shoulders, triceps)",
    rest: "60 seconds between sets",
    frequency: "2x per week",
    tip: "Maintain elbow control during push movements.",
    difficulty: "Intermediate",
    exercises: [
      {
        exercise: {
          title: "Push-Ups",
          description:
            "A fundamental bodyweight exercise to target the chest, shoulders, and triceps.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Start in a high plank position, with your hands placed slightly wider than shoulder-width.",
              },
            },
            {
              step: {
                title: "Lower Chest",
                description:
                  "Bend your elbows to lower your chest toward the floor.",
              },
            },
            {
              step: {
                title: "Push Up",
                description:
                  "Push through your palms to return to the start position.",
              },
            },
          ],
          tips: [
            "Keep your body in a straight line.",
            "Engage your core to avoid sagging hips.",
          ],
        },
        set: 4,
        rep: 15,
      },
      {
        exercise: {
          title: "Pike Push-Ups",
          description:
            "A variation of push-ups that targets the shoulders more intensely.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Start in a downward dog position with hips raised and hands shoulder-width apart.",
              },
            },
            {
              step: {
                title: "Lower Head",
                description:
                  "Bend your elbows to lower your head toward the floor.",
              },
            },
            {
              step: {
                title: "Push Up",
                description:
                  "Push through your hands to return to the starting position.",
              },
            },
          ],
          tips: [
            "Keep your hips high during the movement.",
            "Focus on using your shoulders to press upward.",
          ],
        },
        set: 3,
        rep: 10,
      },
      {
        exercise: {
          title: "Diamond Push-Ups",
          description:
            "A push-up variation that emphasizes the triceps and inner chest.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Place your hands under your chest in a diamond shape, with fingers touching.",
              },
            },
            {
              step: {
                title: "Lower Chest",
                description:
                  "Bend your elbows and lower your chest toward your hands.",
              },
            },
            {
              step: {
                title: "Push Up",
                description:
                  "Push through your palms to return to the starting position.",
              },
            },
          ],
          tips: [
            "Keep your elbows close to your body.",
            "Avoid flaring your elbows out.",
          ],
        },
        set: 3,
        rep: 8,
      },
      {
        exercise: {
          title: "Triceps Dips",
          description:
            "A bodyweight exercise to target the triceps, using a bench or similar surface.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Place your hands on a bench or elevated surface behind you, knees bent.",
              },
            },
            {
              step: {
                title: "Lower Body",
                description:
                  "Lower your body toward the floor by bending your elbows.",
              },
            },
            {
              step: {
                title: "Push Up",
                description:
                  "Push through your palms to return to the start position.",
              },
            },
          ],
          tips: [
            "Keep your elbows pointing straight back.",
            "Avoid shrugging your shoulders.",
          ],
        },
        set: 3,
        rep: 12,
      },
    ],
  },
];
