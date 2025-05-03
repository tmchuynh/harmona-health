import { Fitness } from "@/lib/interfaces&types/resources";

export const strengthTraining: Fitness[] = [
  {
    title: "Full-Body Strength & Conditioning",
    duration: "45 minutes",
    format: "Circuit",
    goal: "Enhance overall strength, mobility, and stability",
    rest: "30 seconds between exercises",
    frequency: "3x per week",
    tip: "Focus on controlled movements for better muscle engagement.",
    difficulty: "Intermediate",
    exercises: [
      {
        exercise: {
          title: "Kettlebell Swings",
          description:
            "A dynamic movement that targets the hips, glutes, and core.",
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
                  "Hinge at the hips, lowering the kettlebell between your legs, then explosively drive your hips forward to swing the kettlebell up.",
              },
            },
          ],
          tips: [
            "Use your hips, not your arms, to swing the kettlebell.",
            "Engage your core throughout the movement.",
          ],
        },
        set: 4,
        rep: 15,
      },
      {
        exercise: {
          title: "Push Press",
          description:
            "A compound upper body exercise that targets the shoulders and triceps.",
          howTo: [
            {
              step: {
                description:
                  "Stand with feet shoulder-width apart, holding dumbbells or a barbell at shoulder height.",
              },
            },
            {
              step: {
                description:
                  "Bend your knees slightly, then press the weights overhead as you straighten your legs.",
              },
            },
          ],
          tips: [
            "Use your legs to generate power for the press.",
            "Avoid arching your back when pressing overhead.",
          ],
        },
        set: 3,
        rep: 12,
      },
      {
        exercise: {
          title: "Squat to Overhead Press",
          description:
            "A compound movement that targets the legs, core, and shoulders.",
          howTo: [
            {
              step: {
                description: "Hold a dumbbell or kettlebell at chest height.",
              },
            },
            {
              step: {
                description:
                  "Perform a squat, and as you rise, press the weight overhead.",
              },
            },
          ],
          tips: [
            "Keep your chest lifted throughout the squat.",
            "Engage your core to maintain stability.",
          ],
        },
        set: 3,
        rep: 10,
      },
      {
        exercise: {
          title: "Deadlifts",
          description:
            "A full-body movement that strengthens the posterior chain, especially the hamstrings and lower back.",
          howTo: [
            {
              step: {
                description:
                  "Stand with feet shoulder-width apart, with a barbell or dumbbells in front of you.",
              },
            },
            {
              step: {
                description:
                  "Bend at the hips and knees to grab the weights, keeping your back flat.",
              },
            },
            {
              step: {
                description:
                  "Drive through your heels, standing tall and bringing the weights up to thigh height.",
              },
            },
          ],
          tips: [
            "Maintain a neutral spine throughout the movement.",
            "Avoid rounding your back at the bottom of the lift.",
          ],
        },
        set: 4,
        rep: 10,
      },
      {
        exercise: {
          title: "Lunges",
          description:
            "A lower-body exercise that targets the quads, hamstrings, and glutes.",
          howTo: [
            {
              step: {
                description:
                  "Step forward with one leg and lower your body until both knees are bent at 90-degree angles.",
              },
            },
            {
              step: {
                description:
                  "Push through the front heel to return to standing, then alternate legs.",
              },
            },
          ],
          tips: [
            "Ensure your front knee does not extend past your toes.",
            "Engage your glutes as you push back to the starting position.",
          ],
        },
        set: 3,
        rep: 12,
      },
      {
        exercise: {
          title: "Renegade Rows",
          description:
            "A full-body exercise that targets the back, shoulders, and core.",
          howTo: [
            {
              step: {
                description:
                  "Start in a plank position with a dumbbell in each hand.",
              },
            },
            {
              step: {
                description:
                  "Row one dumbbell towards your hip while stabilizing with the other arm.",
              },
            },
            {
              step: {
                description: "Lower the weight and repeat on the other side.",
              },
            },
          ],
          tips: [
            "Engage your core to prevent your hips from swaying.",
            "Keep your back straight and avoid arching your spine.",
          ],
        },
        set: 3,
        rep: 10,
      },
    ],
  },
  {
    title: "Upper Body Strength & Stability",
    duration: "35 minutes",
    format: "Straight Sets",
    goal: "Improve upper body strength and stability",
    rest: "60 seconds between sets",
    frequency: "2x per week",
    tip: "Focus on slow, controlled movements to increase stability.",
    difficulty: "Intermediate",
    exercises: [
      {
        exercise: {
          title: "Dumbbell Bench Press",
          description:
            "A chest exercise that targets the pectoral muscles and triceps.",
          howTo: [
            {
              step: {
                description:
                  "Lie flat on a bench with a dumbbell in each hand, arms extended straight above your chest.",
              },
            },
            {
              step: {
                description:
                  "Lower the weights to chest level, then press back up to the starting position.",
              },
            },
          ],
          tips: [
            "Keep your elbows at a 45-degree angle to avoid shoulder strain.",
            "Maintain a firm grip on the dumbbells throughout the movement.",
          ],
        },
        set: 3,
        rep: 10,
      },
      {
        exercise: {
          title: "Pull-Ups",
          description:
            "A bodyweight exercise that targets the back and biceps.",
          howTo: [
            {
              step: {
                description:
                  "Grab a pull-up bar with palms facing away from your body.",
              },
            },
            {
              step: {
                description:
                  "Pull your body up towards the bar, focusing on using your back muscles.",
              },
            },
            {
              step: {
                description:
                  "Lower your body with control to the starting position.",
              },
            },
          ],
          tips: [
            "Engage your shoulders and back before pulling up.",
            "Avoid swinging your body; keep the movement controlled.",
          ],
        },
        set: 4,
        rep: 8,
      },
      {
        exercise: {
          title: "Dumbbell Rows",
          description:
            "A back exercise that targets the lats and upper back muscles.",
          howTo: [
            {
              step: {
                description:
                  "Place one knee and hand on a bench for support, holding a dumbbell in the opposite hand.",
              },
            },
            {
              step: {
                description:
                  "Pull the dumbbell towards your waist, keeping your elbow close to your body.",
              },
            },
            {
              step: {
                description: "Lower the weight back to the starting position.",
              },
            },
          ],
          tips: [
            "Keep your core engaged to avoid rotation of your torso.",
            "Squeeze your shoulder blade at the top of the row.",
          ],
        },
        set: 3,
        rep: 12,
      },
      {
        exercise: {
          title: "Overhead Triceps Extension",
          description: "An isolation exercise for the triceps.",
          howTo: [
            {
              step: {
                description:
                  "Hold a dumbbell with both hands overhead, elbows pointing forward.",
              },
            },
            {
              step: {
                description:
                  "Lower the dumbbell behind your head, then extend your arms back overhead.",
              },
            },
          ],
          tips: [
            "Keep your elbows fixed to avoid shoulder strain.",
            "Control the weight during both the lowering and extending phases.",
          ],
        },
        set: 3,
        rep: 10,
      },
    ],
  },
  {
    title: "Lower Body Strength & Mobility",
    duration: "40 minutes",
    format: "Superset",
    goal: "Build leg strength and improve flexibility",
    rest: "45 seconds between supersets",
    frequency: "2x per week",
    tip: "Focus on form and range of motion to increase mobility.",
    difficulty: "Intermediate",
    exercises: [
      {
        exercise: {
          title: "Goblet Squats",
          description: "A squat variation that emphasizes the legs and glutes.",
          howTo: [
            {
              step: {
                description:
                  "Hold a kettlebell or dumbbell close to your chest with both hands.",
              },
            },
            {
              step: {
                description:
                  "Perform a squat, keeping your chest upright and knees tracking over your toes.",
              },
            },
          ],
          tips: [
            "Keep your back straight and core engaged.",
            "Lower your hips below knee level for a deeper squat.",
          ],
        },
        set: 3,
        rep: 12,
      },
      {
        exercise: {
          title: "Romanian Deadlifts",
          description:
            "A hip hinge movement targeting the hamstrings and glutes.",
          howTo: [
            {
              step: {
                description:
                  "Stand with feet shoulder-width apart, holding a barbell or dumbbells.",
              },
            },
            {
              step: {
                description:
                  "Hinge at the hips, lowering the weights towards your shins, then return to standing.",
              },
            },
          ],
          tips: [
            "Keep a slight bend in your knees to protect your joints.",
            "Keep the weights close to your body as you lower them.",
          ],
        },
        set: 4,
        rep: 10,
      },
    ],
  },
  {
    title: "Strength & Power Circuit",
    duration: "40 minutes",
    format: "Circuit Training",
    goal: "Build strength and power while enhancing overall athleticism.",
    rest: "45 seconds between exercises, 2 minutes between rounds",
    frequency: "3x per week",
    tip: "Focus on explosive movements for maximum power output.",
    difficulty: "Advanced",
    exercises: [
      {
        exercise: {
          title: "Deadlifts",
          description:
            "Targets the posterior chain, including the lower back, hamstrings, and glutes.",
          howTo: [
            {
              step: {
                description:
                  "Stand with feet shoulder-width apart and barbell in front of you.",
              },
            },
            {
              step: {
                description:
                  "Grip the bar with hands just outside your knees, keeping your chest up.",
              },
            },
            {
              step: {
                description:
                  "Drive through your heels, extending your hips and knees to lift the bar.",
              },
            },
            {
              step: {
                description:
                  "Lower the bar slowly back to the ground while maintaining a flat back.",
              },
            },
          ],
          tips: [
            "Maintain a neutral spine throughout the lift.",
            "Avoid rounding your back to prevent injury.",
          ],
        },
        set: 4,
        rep: 8,
      },
      {
        exercise: {
          title: "Barbell Bench Press",
          description: "Targets the chest, shoulders, and triceps.",
          howTo: [
            {
              step: {
                description:
                  "Lie on a bench with a barbell in your hands, slightly wider than shoulder-width apart.",
              },
            },
            {
              step: {
                description:
                  "Lower the bar to your chest, keeping your elbows at a 45-degree angle.",
              },
            },
            {
              step: {
                description:
                  "Push the bar back up until your arms are fully extended.",
              },
            },
          ],
          tips: [
            "Keep your feet flat on the floor for stability.",
            "Control the descent of the bar to avoid injury.",
          ],
        },
        set: 4,
        rep: 8,
      },
      {
        exercise: {
          title: "Squat Jumps",
          description:
            "A plyometric move that builds explosive power in the lower body.",
          howTo: [
            {
              step: {
                description:
                  "Start in a squat position with feet shoulder-width apart.",
              },
            },
            {
              step: { description: "Explosively jump up as high as possible." },
            },
            {
              step: {
                description:
                  "Land softly back into a squat position and immediately repeat.",
              },
            },
          ],
          tips: [
            "Focus on landing softly to absorb the impact.",
            "Engage your core throughout the movement.",
          ],
        },
        set: 4,
        rep: 10,
      },
      {
        exercise: {
          title: "Overhead Press",
          description: "Targets the shoulders, arms, and upper chest.",
          howTo: [
            {
              step: {
                description:
                  "Stand with feet shoulder-width apart, holding a barbell at shoulder height.",
              },
            },
            {
              step: {
                description:
                  "Press the bar straight overhead until your arms are fully extended.",
              },
            },
            {
              step: {
                description: "Slowly lower the bar back to shoulder height.",
              },
            },
          ],
          tips: [
            "Keep your core tight to avoid arching your lower back.",
            "Push the bar in a straight line overhead, not forward or backward.",
          ],
        },
        set: 4,
        rep: 8,
      },
      {
        exercise: {
          title: "Bent-Over Rows",
          description: "Targets the back, lats, and biceps.",
          howTo: [
            {
              step: {
                description:
                  "Stand with knees slightly bent and hinge at the hips, keeping your back flat.",
              },
            },
            {
              step: {
                description:
                  "Pull the barbell or dumbbells toward your lower ribs, squeezing your shoulder blades together.",
              },
            },
            {
              step: {
                description:
                  "Slowly lower the weights back to the starting position.",
              },
            },
          ],
          tips: [
            "Keep your chest up and avoid rounding your back.",
            "Pull with your elbows, not your hands, to engage the back muscles.",
          ],
        },
        set: 4,
        rep: 8,
      },
    ],
  },
  {
    title: "Upper Body Strength Builder",
    duration: "30 minutes",
    format: "Superset",
    goal: "Develop upper body strength and muscle endurance.",
    rest: "30 seconds between supersets, 1 minute between rounds",
    frequency: "3x per week",
    tip: "Focus on controlling each rep and maintaining good form.",
    difficulty: "Intermediate",
    exercises: [
      {
        exercise: {
          title: "Pull-Ups",
          description: "Targets the back, biceps, and forearms.",
          howTo: [
            {
              step: {
                description:
                  "Grip the pull-up bar with palms facing away, hands shoulder-width apart.",
              },
            },
            {
              step: {
                description:
                  "Pull yourself up until your chin is above the bar.",
              },
            },
            {
              step: {
                description:
                  "Lower yourself back to the starting position with control.",
              },
            },
          ],
          tips: [
            "Engage your lats to pull yourself up, not just your arms.",
            "Avoid swinging your legs during the movement.",
          ],
        },
        set: 4,
        rep: 6,
      },
      {
        exercise: {
          title: "Dumbbell Chest Press",
          description: "Targets the chest, shoulders, and triceps.",
          howTo: [
            {
              step: {
                description:
                  "Lie on a bench with a dumbbell in each hand, held at chest level.",
              },
            },
            {
              step: {
                description:
                  "Press the dumbbells up, fully extending your arms.",
              },
            },
            {
              step: {
                description:
                  "Lower the dumbbells back down, keeping your elbows at a 45-degree angle.",
              },
            },
          ],
          tips: [
            "Keep your feet flat on the floor for stability.",
            "Avoid locking your elbows at the top of the movement.",
          ],
        },
        set: 4,
        rep: 10,
      },
      {
        exercise: {
          title: "Triceps Dips",
          description: "Targets the triceps and shoulders.",
          howTo: [
            {
              step: {
                description:
                  "Place your hands on a bench or parallel bars with your legs extended in front of you.",
              },
            },
            {
              step: {
                description:
                  "Lower your body by bending your elbows until they form a 90-degree angle.",
              },
            },
            {
              step: {
                description: "Push yourself back up to the starting position.",
              },
            },
          ],
          tips: [
            "Keep your elbows close to your body during the movement.",
            "Engage your core to keep your body steady.",
          ],
        },
        set: 4,
        rep: 10,
      },
      {
        exercise: {
          title: "Bicep Curls",
          description: "Focuses on the biceps and forearms.",
          howTo: [
            {
              step: {
                description:
                  "Hold a dumbbell in each hand with arms fully extended at your sides.",
              },
            },
            {
              step: {
                description:
                  "Curl the weights towards your shoulders, keeping your elbows stationary.",
              },
            },
            {
              step: {
                description:
                  "Slowly lower the weights back to the starting position.",
              },
            },
          ],
          tips: [
            "Do not swing the weights; use a controlled movement.",
            "Keep your elbows close to your torso throughout.",
          ],
        },
        set: 4,
        rep: 12,
      },
      {
        exercise: {
          title: "Lateral Raises",
          description:
            "Targets the shoulders, particularly the lateral deltoid.",
          howTo: [
            {
              step: {
                description:
                  "Hold a dumbbell in each hand, arms by your sides.",
              },
            },
            {
              step: {
                description:
                  "Raise your arms out to the sides until they are level with your shoulders.",
              },
            },
            {
              step: {
                description:
                  "Slowly lower the dumbbells back down to your sides.",
              },
            },
          ],
          tips: [
            "Avoid using momentum; raise the weights slowly and with control.",
            "Keep a slight bend in your elbows.",
          ],
        },
        set: 4,
        rep: 12,
      },
    ],
  },
  {
    title: "Beginner Strength & Endurance",
    duration: "30 minutes",
    format: "Circuit Training",
    goal: "Build strength and endurance with basic functional movements.",
    rest: "30 seconds between exercises, 1 minute between rounds",
    frequency: "2-3x per week",
    tip: "Focus on mastering form and control before adding more intensity.",
    difficulty: "Beginner",
    exercises: [
      {
        exercise: {
          title: "Bodyweight Squats",
          description: "Targets the quadriceps, hamstrings, and glutes.",
          howTo: [
            {
              step: {
                description:
                  "Stand with feet shoulder-width apart, arms extended in front.",
              },
            },
            {
              step: {
                description:
                  "Lower your hips back and down, keeping your chest up.",
              },
            },
            {
              step: {
                description:
                  "Push through your heels to return to the standing position.",
              },
            },
          ],
          tips: [
            "Make sure your knees don’t go past your toes.",
            "Keep your chest lifted and avoid rounding your back.",
          ],
        },
        set: 3,
        rep: 12,
      },
      {
        exercise: {
          title: "Knee Push-Ups",
          description:
            "Targets the chest, shoulders, and triceps with less intensity than standard push-ups.",
          howTo: [
            {
              step: {
                description:
                  "Start in a plank position with knees on the ground and hands placed slightly wider than shoulder-width.",
              },
            },
            {
              step: {
                description:
                  "Lower your body towards the ground by bending your elbows.",
              },
            },
            {
              step: {
                description:
                  "Push back up to the starting position, keeping your body aligned.",
              },
            },
          ],
          tips: [
            "Keep your core tight and your body straight from your head to your knees.",
            "Lower your chest until it's just above the ground.",
          ],
        },
        set: 3,
        rep: 10,
      },
      {
        exercise: {
          title: "Glute Bridges",
          description: "Targets the glutes, hamstrings, and lower back.",
          howTo: [
            {
              step: {
                description:
                  "Lie on your back with your feet flat on the floor, knees bent.",
              },
            },
            {
              step: {
                description:
                  "Lift your hips towards the ceiling, squeezing your glutes at the top.",
              },
            },
            {
              step: {
                description: "Lower your hips back to the ground with control.",
              },
            },
          ],
          tips: [
            "Keep your feet flat and close to your glutes.",
            "Squeeze your glutes at the top to fully engage the muscles.",
          ],
        },
        set: 3,
        rep: 12,
      },
      {
        exercise: {
          title: "Standing Shoulder Press with Dumbbells",
          description: "Targets the shoulders and arms.",
          howTo: [
            {
              step: {
                description:
                  "Stand with a dumbbell in each hand, elbows bent at 90 degrees.",
              },
            },
            {
              step: {
                description:
                  "Press the dumbbells straight overhead until your arms are fully extended.",
              },
            },
            {
              step: {
                description:
                  "Slowly lower the weights back to the starting position.",
              },
            },
          ],
          tips: [
            "Keep your core engaged to support your back.",
            "Don’t lock your elbows at the top.",
          ],
        },
        set: 3,
        rep: 10,
      },
      {
        exercise: {
          title: "Step-Ups (Bodyweight)",
          description: "Targets the glutes, quadriceps, and hamstrings.",
          howTo: [
            {
              step: {
                description:
                  "Stand in front of a bench or step, with feet shoulder-width apart.",
              },
            },
            {
              step: {
                description:
                  "Step one foot up onto the bench, pushing through the heel to lift your body.",
              },
            },
            {
              step: {
                description:
                  "Lower yourself back down and repeat on the other leg.",
              },
            },
          ],
          tips: [
            "Make sure your knee stays in line with your toes as you step up.",
            "Engage your core to maintain balance.",
          ],
        },
        set: 3,
        rep: 10,
      },
    ],
  },
  {
    title: "Basic Full-Body Strength",
    duration: "30 minutes",
    format: "Superset",
    goal: "Build overall body strength with simple movements.",
    rest: "30 seconds between supersets, 1 minute between rounds",
    frequency: "2-3x per week",
    tip: "Start with light weights or bodyweight until you feel confident with each movement.",
    difficulty: "Beginner",
    exercises: [
      {
        exercise: {
          title: "Wall Push-Ups",
          description:
            "A beginner variation of the push-up that targets the chest, shoulders, and triceps.",
          howTo: [
            {
              step: {
                description:
                  "Stand facing a wall, hands placed on the wall at shoulder height.",
              },
            },
            {
              step: {
                description:
                  "Bend your elbows to lower your body towards the wall.",
              },
            },
            {
              step: {
                description:
                  "Push back to the starting position, keeping your body straight.",
              },
            },
          ],
          tips: [
            "Engage your core to prevent your body from sagging.",
            "Perform the push-up slowly to build control.",
          ],
        },
        set: 3,
        rep: 10,
      },
      {
        exercise: {
          title: "Bodyweight Lunges",
          description:
            "Targets the legs, particularly the quadriceps and glutes.",
          howTo: [
            {
              step: {
                description:
                  "Step forward with one leg, lowering your body until both knees are bent at 90 degrees.",
              },
            },
            {
              step: {
                description:
                  "Push through your front heel to return to the starting position.",
              },
            },
            { step: { description: "Repeat with the other leg." } },
          ],
          tips: [
            "Make sure your front knee does not pass your toes.",
            "Keep your back straight and avoid leaning forward.",
          ],
        },
        set: 3,
        rep: 10,
      },
      {
        exercise: {
          title: "Dumbbell Bicep Curls",
          description: "Targets the biceps and forearms.",
          howTo: [
            {
              step: {
                description:
                  "Hold a dumbbell in each hand, arms fully extended at your sides.",
              },
            },
            {
              step: {
                description:
                  "Curl the weights towards your shoulders, keeping your elbows stationary.",
              },
            },
            {
              step: {
                description:
                  "Lower the weights back down slowly to the starting position.",
              },
            },
          ],
          tips: [
            "Avoid swinging your body to lift the weights.",
            "Control the weights during the lowering phase.",
          ],
        },
        set: 3,
        rep: 12,
      },
      {
        exercise: {
          title: "Standing Calf Raises",
          description: "Targets the calves.",
          howTo: [
            {
              step: {
                description:
                  "Stand with your feet shoulder-width apart, standing tall.",
              },
            },
            {
              step: {
                description:
                  "Rise onto the balls of your feet, lifting your heels as high as possible.",
              },
            },
            {
              step: {
                description:
                  "Lower back down to the starting position with control.",
              },
            },
          ],
          tips: [
            "Engage your core to maintain stability.",
            "Avoid using momentum to rise up quickly.",
          ],
        },
        set: 3,
        rep: 15,
      },
      {
        exercise: {
          title: "Superman Hold",
          description: "Strengthens the lower back, glutes, and shoulders.",
          howTo: [
            {
              step: {
                description:
                  "Lie face down on the floor with your arms extended in front of you.",
              },
            },
            {
              step: {
                description:
                  "Lift your arms, chest, and legs off the ground as high as possible.",
              },
            },
            {
              step: {
                description:
                  "Hold this position for a few seconds before lowering back down.",
              },
            },
          ],
          tips: [
            "Engage your core and squeeze your glutes as you lift your body.",
            "Focus on controlled movements to prevent injury.",
          ],
        },
        set: 3,
        time: 20,
      },
    ],
  },
  {
    title: "Core Strength & Stability",
    duration: "20 minutes",
    format: "Circuit",
    goal: "Build core strength and improve stability.",
    rest: "30 seconds between exercises, 1 minute between rounds",
    frequency: "2-3x per week",
    tip: "Keep your core engaged throughout every exercise to maximize effectiveness.",
    difficulty: "Beginner",
    exercises: [
      {
        exercise: {
          title: "Plank",
          description: "Targets the core, shoulders, and back.",
          howTo: [
            {
              step: {
                description:
                  "Start on your forearms and toes, keeping your body in a straight line from head to heels.",
              },
            },
            {
              step: {
                description:
                  "Engage your core, keeping your hips from sagging or lifting.",
              },
            },
            {
              step: {
                description: "Hold for as long as you can with proper form.",
              },
            },
          ],
          tips: [
            "Don’t allow your hips to sag or rise.",
            "Engage your glutes and quads to maintain stability.",
          ],
        },
        set: 3,
        time: 30,
      },
      {
        exercise: {
          title: "Dead Bug",
          description:
            "Targets the core, focusing on stability and coordination.",
          howTo: [
            {
              step: {
                description:
                  "Lie on your back with arms extended towards the ceiling and knees bent at 90 degrees.",
              },
            },
            {
              step: {
                description:
                  "Slowly extend your right leg out straight and lower your left arm overhead.",
              },
            },
            {
              step: {
                description:
                  "Return to the starting position and repeat with the opposite limbs.",
              },
            },
          ],
          tips: [
            "Keep your lower back pressed into the floor.",
            "Move slowly and with control to avoid using momentum.",
          ],
        },
        set: 3,
        time: 60,
      },
      {
        exercise: {
          title: "Side Plank",
          description: "Targets the obliques and core.",
          howTo: [
            {
              step: {
                description:
                  "Lie on your side, propping your body up on your elbow, with feet stacked on top of each other.",
              },
            },
            {
              step: {
                description:
                  "Lift your hips off the ground, keeping your body in a straight line.",
              },
            },
            {
              step: {
                description:
                  "Hold the position for as long as you can, keeping your core engaged.",
              },
            },
          ],
          tips: [
            "Keep your shoulders, hips, and ankles in a straight line.",
            "Don’t let your hips dip down.",
          ],
        },
        set: 3,
        rep: 25,
      },
      {
        exercise: {
          title: "Bird-Dog",
          description: "Improves core stability, balance, and coordination.",
          howTo: [
            {
              step: {
                description:
                  "Start on your hands and knees, with your wrists aligned under your shoulders.",
              },
            },
            {
              step: {
                description:
                  "Extend your right arm forward and your left leg backward simultaneously.",
              },
            },
            {
              step: {
                description:
                  "Hold briefly, then return to the starting position and repeat on the other side.",
              },
            },
          ],
          tips: [
            "Keep your hips square to the ground.",
            "Move slowly and with control, avoiding rocking your body.",
          ],
        },
        set: 3,
        rep: 10,
      },
      {
        exercise: {
          title: "Russian Twists",
          description: "Targets the obliques and core.",
          howTo: [
            {
              step: {
                description:
                  "Sit on the floor with your knees bent and feet flat.",
              },
            },
            {
              step: {
                description:
                  "Lean back slightly and hold your hands together in front of your chest.",
              },
            },
            {
              step: {
                description:
                  "Twist your torso to the right, then to the left, while keeping your core engaged.",
              },
            },
          ],
          tips: [
            "Keep your chest lifted and avoid rounding your back.",
            "Move your torso, not just your arms, to engage your obliques.",
          ],
        },
        set: 3,
        rep: 10,
      },
    ],
  },
  {
    title: "Lower Body Strength Circuit",
    duration: "40 minutes",
    format: "Circuit Training",
    goal: "Build strength in the lower body and improve overall power.",
    rest: "45 seconds between exercises, 2 minutes between rounds",
    frequency: "3x per week",
    tip: "Focus on your technique to build strength safely and effectively.",
    difficulty: "Intermediate",
    exercises: [
      {
        exercise: {
          title: "Barbell Squats",
          description: "Targets the quadriceps, hamstrings, and glutes.",
          howTo: [
            {
              step: {
                description:
                  "Stand with your feet shoulder-width apart, barbell resting on your upper back.",
              },
            },
            {
              step: {
                description:
                  "Bend your knees and lower your hips as if sitting in a chair.",
              },
            },
            {
              step: {
                description:
                  "Push through your heels to return to the standing position.",
              },
            },
          ],
          tips: [
            "Keep your chest lifted and avoid rounding your back.",
            "Make sure your knees track over your toes during the squat.",
          ],
        },
        set: 4,
        rep: 8,
      },
      {
        exercise: {
          title: "Romanian Deadlifts",
          description: "Focuses on the hamstrings, glutes, and lower back.",
          howTo: [
            {
              step: {
                description:
                  "Stand with a barbell in front of you, feet shoulder-width apart.",
              },
            },
            {
              step: {
                description:
                  "Hinge at the hips, lowering the barbell to mid-shin level while keeping a slight bend in your knees.",
              },
            },
            {
              step: {
                description:
                  "Return to standing, focusing on squeezing your glutes at the top.",
              },
            },
          ],
          tips: [
            "Keep your back flat during the hinge motion.",
            "Push your hips back, not your knees forward.",
          ],
        },
        set: 4,
        rep: 8,
      },
      {
        exercise: {
          title: "Step-Ups",
          description:
            "A unilateral leg exercise that targets the glutes and quadriceps.",
          howTo: [
            {
              step: {
                description:
                  "Stand in front of a bench or step, holding dumbbells in each hand.",
              },
            },
            {
              step: {
                description:
                  "Step up onto the bench with one foot, driving through your heel.",
              },
            },
            {
              step: {
                description: "Step back down and repeat on the other side.",
              },
            },
          ],
          tips: [
            "Ensure your knee does not pass your toes as you step up.",
            "Engage your glutes as you push up.",
          ],
        },
        set: 4,
        rep: 10,
      },
      {
        exercise: {
          title: "Lunges",
          description: "Targets the quadriceps, hamstrings, and glutes.",
          howTo: [
            {
              step: {
                description:
                  "Step forward with one leg and lower your hips until both knees are bent at 90 degrees.",
              },
            },
            {
              step: {
                description:
                  "Push through your front heel to return to standing.",
              },
            },
            { step: { description: "Repeat with the other leg." } },
          ],
          tips: [
            "Make sure your front knee stays behind your toes.",
            "Engage your core to help maintain balance.",
          ],
        },
        set: 4,
        rep: 10,
      },
    ],
  },
];
