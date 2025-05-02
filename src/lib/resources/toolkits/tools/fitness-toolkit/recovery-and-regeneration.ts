import { Fitness } from "@/lib/interfaces&types/resources";

export const recoveryAndRegeneration: Fitness[] = [
  {
    title: "Active Stretching Routine",
    duration: "20 minutes",
    format: "Flow",
    goal: "Increase flexibility and promote muscle relaxation",
    rest: "None – transition smoothly between stretches",
    frequency: "3–4x per week",
    tip: "Focus on slow, deep breaths as you move through each stretch.",
    difficulty: "Beginner",
    exercises: [
      {
        exercise: {
          title: "Standing Hamstring Stretch",
          description:
            "A stretch to lengthen the hamstrings and improve flexibility.",
          howTo: [
            {
              step: {
                description: "Stand tall with your feet hip-width apart.",
              },
            },
            {
              step: {
                description:
                  "Hinge at the hips and extend one leg straight in front, keeping a slight bend in the standing leg.",
              },
            },
            {
              step: {
                description:
                  "Reach for the toes of the extended leg, feeling a stretch in your hamstring.",
              },
            },
          ],
          tips: [
            "Keep your back straight as you bend forward.",
            "Don't force the stretch – go only as far as comfortable.",
          ],
        },
        set: 1,
        time: 45,
      },
      {
        exercise: {
          title: "Chest Opener Stretch",
          description:
            "A stretch that targets the chest and shoulders, improving posture and relieving tension.",
          howTo: [
            {
              step: {
                description:
                  "Stand tall and interlace your fingers behind your back.",
              },
            },
            {
              step: {
                description:
                  "Slowly lift your arms behind you, squeezing your shoulder blades together.",
              },
            },
            {
              step: {
                description: "Feel the stretch across your chest and hold.",
              },
            },
          ],
          tips: [
            "Avoid arching your back too much during the stretch.",
            "Keep your neck relaxed and shoulders away from your ears.",
          ],
        },
        set: 1,
        time: 30,
      },
      {
        exercise: {
          title: "Hip Flexor Stretch",
          description:
            "A stretch for the hip flexors to improve mobility and relieve tightness.",
          howTo: [
            {
              step: {
                description:
                  "Kneel on the ground with one foot in front, creating a 90-degree angle at the knee.",
              },
            },
            {
              step: {
                description:
                  "Shift your hips forward to feel a stretch in the hip flexor of the rear leg.",
              },
            },
            {
              step: {
                description: "Hold the stretch, keeping your core engaged.",
              },
            },
          ],
          tips: [
            "Avoid arching your lower back excessively during the stretch.",
            "Keep your hips square and not rotated.",
          ],
        },
        set: 1,
        time: 45,
      },
      {
        exercise: {
          title: "Seated Forward Fold",
          description:
            "A deep stretch for the back and hamstrings that improves flexibility and mobility.",
          howTo: [
            {
              step: {
                description:
                  "Sit on the floor with legs extended straight out in front of you.",
              },
            },
            {
              step: {
                description:
                  "Hinge at your hips and slowly reach forward towards your toes.",
              },
            },
            {
              step: {
                description: "Feel the stretch along your back and hamstrings.",
              },
            },
          ],
          tips: [
            "Keep your back straight as you fold forward, avoiding rounding your spine.",
            "Breathe deeply and relax into the stretch.",
          ],
        },
        set: 1,
        time: 60,
      },
      {
        exercise: {
          title: "Cat-Cow Stretch",
          description:
            "A dynamic stretch to improve spinal mobility and release tension in the back.",
          howTo: [
            {
              step: {
                description:
                  "Start on all fours with your wrists under your shoulders and knees under your hips.",
              },
            },
            {
              step: {
                description:
                  "Inhale, arch your back and look up (Cow position).",
              },
            },
            {
              step: {
                description:
                  "Exhale, round your spine and tuck your chin to your chest (Cat position).",
              },
            },
          ],
          tips: [
            "Move slowly and with control, breathing deeply through each transition.",
            "Focus on articulating the spine with each movement.",
          ],
        },
        set: 1,
        time: 30,
      },
    ],
  },
  {
    title: "Foam Rolling Routine",
    duration: "15 minutes",
    format: "Self-myofascial Release",
    goal: "Release muscle tightness and improve blood flow",
    rest: "None – continue to roll each muscle group without rest",
    frequency: "2–3x per week",
    tip: "Apply moderate pressure and roll slowly over each muscle group.",
    difficulty: "Intermediate",
    exercises: [
      {
        exercise: {
          title: "Upper Back Foam Roll",
          description:
            "Relieves tightness and improves mobility in the upper back.",
          howTo: [
            {
              step: {
                description:
                  "Sit on the floor with the foam roller placed horizontally beneath your upper back.",
              },
            },
            {
              step: {
                description:
                  "Place your hands behind your head for support and lift your hips off the floor.",
              },
            },
            {
              step: {
                description:
                  "Slowly roll up and down your upper back, pausing on tight areas.",
              },
            },
          ],
          tips: [
            "Don't apply too much pressure to your neck or lower back.",
            "Focus on rolling the area between the shoulder blades.",
          ],
        },
        set: 1,
        time: 45,
      },
      {
        exercise: {
          title: "IT Band Foam Roll",
          description:
            "Targets the iliotibial band to release tension in the hips and legs.",
          howTo: [
            {
              step: {
                description:
                  "Lie on your side with the foam roller under your outer thigh.",
              },
            },
            {
              step: {
                description:
                  "Support your upper body with your arms and stack your legs.",
              },
            },
            {
              step: {
                description:
                  "Roll from your hip to just above your knee, pausing on tight spots.",
              },
            },
          ],
          tips: [
            "Avoid rolling directly over the knee joint.",
            "Roll slowly and focus on areas of tightness.",
          ],
        },
        set: 1,
        time: 45,
      },
      {
        exercise: {
          title: "Quad Foam Roll",
          description:
            "Releases tension in the quadriceps to improve mobility.",
          howTo: [
            {
              step: {
                description:
                  "Lie face down with the foam roller placed under your quads.",
              },
            },
            {
              step: {
                description:
                  "Support your upper body on your forearms and slowly roll from your hips to your knees.",
              },
            },
            {
              step: {
                description: "Pause and apply more pressure on tight areas.",
              },
            },
          ],
          tips: [
            "Move slowly over the entire quad area.",
            "Focus on the areas that feel the tightest.",
          ],
        },
        set: 1,
        time: 45,
      },
      {
        exercise: {
          title: "Calf Foam Roll",
          description:
            "Helps release tightness in the calves and improves ankle mobility.",
          howTo: [
            {
              step: {
                description:
                  "Sit on the floor and place the foam roller under your calves.",
              },
            },
            {
              step: {
                description:
                  "Lift your hips and use your hands to support your body as you roll from ankle to knee.",
              },
            },
            {
              step: { description: "Pause on tight spots to release tension." },
            },
          ],
          tips: [
            "Adjust pressure by stacking your legs for more intensity.",
            "Don't roll directly over the Achilles tendon.",
          ],
        },
        set: 1,
        time: 45,
      },
      {
        exercise: {
          title: "Glute Foam Roll",
          description:
            "Releases tightness in the glutes and helps with hip mobility.",
          howTo: [
            {
              step: {
                description:
                  "Sit on the foam roller with one foot crossed over the opposite knee, targeting the glute.",
              },
            },
            {
              step: {
                description:
                  "Slowly roll back and forth, focusing on tight areas.",
              },
            },
            { step: { description: "Switch sides after 45 seconds." } },
          ],
          tips: [
            "Focus on the glute muscle and avoid rolling over the lower back.",
            "Use controlled movements to release tension gradually.",
          ],
        },
        set: 1,
        time: 45,
      },
    ],
  },
  {
    title: "Breathwork and Relaxation",
    duration: "10 minutes",
    format: "Guided Breathing",
    goal: "Promote relaxation, reduce stress, and improve oxygen flow",
    rest: "None – focus on controlled breathing throughout",
    frequency: "Daily",
    tip: "Inhale deeply through your nose and exhale slowly through your mouth.",
    difficulty: "Beginner",
    exercises: [
      {
        exercise: {
          title: "Box Breathing",
          description:
            "A simple breathing technique to reduce stress and promote calm.",
          howTo: [
            {
              step: {
                description: "Inhale through your nose for a count of 4.",
              },
            },
            { step: { description: "Hold your breath for a count of 4." } },
            {
              step: {
                description:
                  "Exhale slowly through your mouth for a count of 4.",
              },
            },
            {
              step: {
                description:
                  "Pause for a count of 4 before starting the cycle again.",
              },
            },
          ],
          tips: [
            "Keep your breath slow and steady.",
            "Focus on relaxing your body with each exhale.",
          ],
        },
        set: 1,
        time: 60,
      },
      {
        exercise: {
          title: "4-7-8 Breathing",
          description:
            "A relaxing technique to reduce anxiety and promote sleep.",
          howTo: [
            {
              step: {
                description: "Inhale through your nose for a count of 4.",
              },
            },
            { step: { description: "Hold your breath for a count of 7." } },
            {
              step: {
                description: "Exhale through your mouth for a count of 8.",
              },
            },
          ],
          tips: [
            "Keep your mouth slightly open when exhaling.",
            "Focus on each breath cycle to calm your mind.",
          ],
        },
        set: 1,
        time: 60,
      },
    ],
  },
];
