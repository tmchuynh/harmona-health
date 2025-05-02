import { Fitness } from "@/lib/interfaces&types/resources";

export const functionalFitness: Fitness[] = [
  {
    title: "Dynamic Functional Flow",
    duration: "35 minutes",
    format: "Flow Circuit",
    goal: "Enhance body control through multi-planar movement",
    rest: "Minimal—flow-based transitions",
    frequency: "2–3x per week",
    tip: "Flow through each movement with intent—no rush.",
    difficulty: "All Levels",
    exercises: [
      {
        exercise: {
          title: "World’s Greatest Stretch",
          description:
            "A dynamic stretch that targets the hips, hamstrings, and thoracic spine.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description: "Start in a standing position.",
              },
            },
            {
              step: {
                title: "Lunge Forward",
                description: "Step one foot forward into a lunge.",
              },
            },
            {
              step: {
                title: "Reach to the Sky",
                description:
                  "Raise your opposite hand toward the ceiling while twisting your torso.",
              },
            },
          ],
          tips: [
            "Engage your core as you twist.",
            "Perform each movement slowly and deliberately.",
          ],
        },
        set: 3,
        rep: 5,
      },
      {
        exercise: {
          title: "Inchworm Walkout with Push-Up",
          description:
            "A dynamic exercise combining flexibility and upper body strength.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description: "Stand tall with feet shoulder-width apart.",
              },
            },
            {
              step: {
                title: "Walk Hands Out",
                description:
                  "Bend at the waist and walk your hands forward into a push-up position.",
              },
            },
            {
              step: {
                title: "Push-Up",
                description:
                  "Perform a push-up, then walk your hands back to your feet.",
              },
            },
          ],
          tips: [
            "Maintain a neutral spine during the walkout.",
            "Engage your core for stability.",
          ],
        },
        set: 3,
        rep: 6,
      },
    ],
  },
  {
    title: "Functional Core & Balance",
    duration: "25–30 minutes",
    format: "Superset",
    goal: "Enhance core strength, postural control, and unilateral stability",
    rest: "30–45 seconds between supersets",
    frequency: "3x per week",
    tip: "Keep core braced and breathing steady during all movements.",
    difficulty: "Intermediate",
    exercises: [
      {
        exercise: {
          title: "Single-Leg Glute Bridge",
          description:
            "A core and glute activation exercise targeting unilateral strength.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Lie on your back, knees bent, one foot flat on the floor, the other leg extended.",
              },
            },
            {
              step: {
                title: "Lift Hips",
                description:
                  "Lift your hips towards the ceiling while keeping the extended leg straight.",
              },
            },
            {
              step: {
                title: "Lower Hips",
                description:
                  "Slowly lower your hips back to the floor, maintaining control.",
              },
            },
          ],
          tips: [
            "Focus on squeezing your glutes at the top.",
            "Avoid letting your lower back arch.",
          ],
        },
        set: 3,
        rep: 10,
      },
      {
        exercise: {
          title: "Side Plank with Reach Under",
          description:
            "A side plank variation that enhances oblique strength and stability.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Start in a side plank position, elbow under shoulder, feet stacked.",
              },
            },
            {
              step: {
                title: "Reach Under",
                description:
                  "Reach your top arm under your body, rotating your torso.",
              },
            },
            {
              step: {
                title: "Return to Plank",
                description:
                  "Rotate back to the starting position, reaching your arm up.",
              },
            },
          ],
          tips: [
            "Keep your hips high and your core tight.",
            "Avoid letting your bottom hip sag.",
          ],
        },
        set: 3,
        time: 30,
      },
      {
        exercise: {
          title: "Bear Crawl",
          description:
            "A full-body movement focusing on core stability and coordination.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Start in a tabletop position with hands under shoulders and knees under hips.",
              },
            },
            {
              step: {
                title: "Crawl Forward",
                description:
                  "Lift opposite hand and foot off the floor and move forward.",
              },
            },
            {
              step: {
                title: "Return",
                description:
                  "Crawl back to the start position, alternating hands and feet.",
              },
            },
          ],
          tips: [
            "Keep your core engaged to avoid sagging hips.",
            "Move slowly and with control.",
          ],
        },
        set: 3,
        time: 30,
      },
    ],
  },
  {
    title: "Functional Full-Body Workout",
    duration: "30 minutes",
    format: "Circuit Training",
    goal: "Improve overall body strength and endurance for daily activities",
    rest: "30 seconds between exercises, 1 minute between rounds",
    frequency: "3x per week",
    tip: "Focus on form over speed to prevent injury.",
    difficulty: "Intermediate",
    exercises: [
      {
        exercise: {
          title: "Squat to Press",
          description:
            "A compound movement that combines a squat with an overhead press.",
          howTo: [
            {
              step: {
                description:
                  "Stand with feet shoulder-width apart, holding a dumbbell in each hand.",
              },
            },
            {
              step: {
                description: "Lower into a squat while keeping your chest up.",
              },
            },
            {
              step: {
                description:
                  "As you stand, press the dumbbells overhead until your arms are fully extended.",
              },
            },
          ],
          tips: [
            "Keep your core engaged throughout the movement.",
            "Avoid arching your back when pressing overhead.",
          ],
        },
        set: 3,
        rep: 12,
      },
      {
        exercise: {
          title: "Kettlebell Deadlift",
          description:
            "Targets the posterior chain, including hamstrings and lower back.",
          howTo: [
            {
              step: {
                description:
                  "Stand with your feet hip-width apart and a kettlebell in front of you.",
              },
            },
            {
              step: {
                description:
                  "Bend at the hips and knees to grip the kettlebell with both hands.",
              },
            },
            {
              step: {
                description:
                  "Drive your hips forward as you lift the kettlebell to standing, squeezing your glutes.",
              },
            },
          ],
          tips: [
            "Keep your back flat during the lift to prevent strain.",
            "Push your hips back, not your knees forward.",
          ],
        },
        set: 3,
        rep: 12,
      },
      {
        exercise: {
          title: "Lunges with Rotation",
          description:
            "A dynamic exercise to build lower body strength and improve balance and flexibility.",
          howTo: [
            {
              step: {
                description: "Step forward into a lunge with your left foot.",
              },
            },
            {
              step: {
                description:
                  "As you lunge, rotate your torso over your front leg to engage your core.",
              },
            },
            {
              step: {
                description:
                  "Push through your front heel to return to standing and repeat on the other side.",
              },
            },
          ],
          tips: [
            "Keep your front knee aligned with your ankle throughout the movement.",
            "Maintain a neutral spine during the rotation.",
          ],
        },
        set: 3,
        rep: 10,
      },
      {
        exercise: {
          title: "Push-Up to Renegade Row",
          description:
            "A full-body exercise that targets the chest, core, and back.",
          howTo: [
            {
              step: {
                description:
                  "Start in a push-up position with a dumbbell in each hand.",
              },
            },
            {
              step: {
                description:
                  "Perform a push-up, then row one dumbbell toward your hip.",
              },
            },
            {
              step: {
                description:
                  "Alternate rows with each arm, keeping your core engaged and hips stable.",
              },
            },
          ],
          tips: [
            "Keep your body in a straight line throughout the movement.",
            "Avoid rotating your torso during the row.",
          ],
        },
        set: 3,
        rep: 8,
      },
      {
        exercise: {
          title: "Box Jumps",
          description: "Explosive movement that builds power and agility.",
          howTo: [
            {
              step: {
                description:
                  "Stand in front of a sturdy box or bench, feet shoulder-width apart.",
              },
            },
            {
              step: {
                description:
                  "Bend your knees and explode upward, landing softly on the box.",
              },
            },
            {
              step: {
                description:
                  "Stand tall on the box, then step or jump down carefully.",
              },
            },
          ],
          tips: [
            "Land softly with a slight bend in your knees to absorb the impact.",
            "Start with a low box and progress as your confidence and strength grow.",
          ],
        },
        set: 3,
        rep: 10,
      },
    ],
  },
  {
    title: "Functional Strength & Conditioning",
    duration: "35 minutes",
    format: "AMRAP (As Many Rounds As Possible)",
    goal: "Build strength, stability, and endurance for functional movements",
    rest: "1 minute between rounds",
    frequency: "2–3x per week",
    tip: "Maintain steady pacing, focusing on completing the rounds with good form.",
    difficulty: "Advanced",
    exercises: [
      {
        exercise: {
          title: "Dumbbell Thrusters",
          description:
            "A full-body exercise that targets the legs, shoulders, and core.",
          howTo: [
            {
              step: {
                description: "Hold a dumbbell in each hand at shoulder height.",
              },
            },
            {
              step: {
                description:
                  "Squat down and then explode upward, pressing the dumbbells overhead.",
              },
            },
            {
              step: {
                description:
                  "Lower the dumbbells back to shoulder height and repeat.",
              },
            },
          ],
          tips: [
            "Engage your core as you press the weights overhead.",
            "Keep your back straight and avoid leaning back during the press.",
          ],
        },
        set: 4,
        rep: 12,
      },
      {
        exercise: {
          title: "Wall Balls",
          description:
            "A total-body workout that targets the legs, core, and upper body.",
          howTo: [
            {
              step: {
                description:
                  "Stand with your feet shoulder-width apart and hold a medicine ball at chest level.",
              },
            },
            {
              step: {
                description:
                  "Squat down and then explosively rise, throwing the ball up to a target on the wall.",
              },
            },
            {
              step: {
                description:
                  "Catch the ball as it comes back down and immediately go into the next squat.",
              },
            },
          ],
          tips: [
            "Use your legs to propel the ball, not your arms.",
            "Keep your chest up and maintain a neutral spine.",
          ],
        },
        set: 4,
        rep: 15,
      },
      {
        exercise: {
          title: "Kettlebell Swings",
          description:
            "A powerful movement that strengthens the hips, glutes, and core.",
          howTo: [
            {
              step: {
                description:
                  "Stand with feet shoulder-width apart, holding a kettlebell with both hands.",
              },
            },
            {
              step: {
                description:
                  "Hinge at the hips to swing the kettlebell between your legs.",
              },
            },
            {
              step: {
                description:
                  "Explosively drive your hips forward to swing the kettlebell to chest height.",
              },
            },
          ],
          tips: [
            "Focus on using your hips to generate the swing, not your arms.",
            "Maintain a neutral spine throughout the movement.",
          ],
        },
        set: 4,
        rep: 15,
      },
      {
        exercise: {
          title: "Renegade Rows",
          description:
            "A full-body exercise that targets the back, chest, and core.",
          howTo: [
            {
              step: {
                description:
                  "Start in a push-up position with a dumbbell in each hand.",
              },
            },
            {
              step: {
                description:
                  "Row one dumbbell towards your hip while maintaining a stable plank position.",
              },
            },
            {
              step: {
                description:
                  "Alternate sides, keeping your core tight to avoid rotating your torso.",
              },
            },
          ],
          tips: [
            "Engage your core to keep your hips stable.",
            "Avoid rotating your body during the row.",
          ],
        },
        set: 4,
        rep: 8,
      },
      {
        exercise: {
          title: "Burpees",
          description:
            "A high-intensity full-body exercise that builds strength and conditioning.",
          howTo: [
            { step: { description: "Start in a standing position." } },
            {
              step: {
                description:
                  "Drop down into a squat position and place your hands on the ground.",
              },
            },
            {
              step: {
                description:
                  "Kick your feet back into a plank position, perform a push-up, and then jump your feet forward.",
              },
            },
            {
              step: {
                description:
                  "Jump up to a standing position, reaching for the sky.",
              },
            },
          ],
          tips: [
            "Maintain a steady pace and avoid rushing the movement.",
            "Land softly on your feet to reduce impact on your knees.",
          ],
        },
        set: 4,
        rep: 10,
      },
    ],
  },
];
