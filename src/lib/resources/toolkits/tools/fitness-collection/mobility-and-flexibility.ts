import { Fitness } from "@/lib/interfaces&types/resources";

export const mobilityAndFlexibility: Fitness[] = [
  {
    title: "Dynamic Stretching Routine",
    duration: "15 minutes",
    format: "Flow",
    goal: "Improve dynamic mobility and prepare the body for activity",
    rest: "None – move fluidly between stretches",
    frequency: "3–4x per week",
    tip: "Keep your movements controlled and avoid bouncing.",
    difficulty: "Beginner",
    exercises: [
      {
        exercise: {
          title: "Arm Circles",
          description:
            "A dynamic movement to warm up the shoulders and upper back.",
          howTo: [
            {
              step: {
                description: "Stand tall with arms extended to the sides.",
              },
            },
            {
              step: {
                description: "Make small, controlled circles with your arms.",
              },
            },
            {
              step: {
                description: "Gradually increase the size of the circles.",
              },
            },
          ],
          tips: [
            "Focus on smooth and controlled movements.",
            "Engage your core to maintain good posture.",
          ],
        },
        set: 1,
        time: 30,
      },
      {
        exercise: {
          title: "Leg Swings",
          description:
            "A dynamic stretch for the hip flexors, hamstrings, and quads.",
          howTo: [
            {
              step: {
                description:
                  "Stand next to a wall or stable surface for support.",
              },
            },
            {
              step: {
                description:
                  "Swing one leg forward and backward in a controlled motion.",
              },
            },
            {
              step: {
                description:
                  "Keep your torso upright and avoid jerking the leg.",
              },
            },
          ],
          tips: [
            "Don't swing too fast – control the movement.",
            "Engage your core and keep your hips square.",
          ],
        },
        set: 1,
        time: 30,
      },
      {
        exercise: {
          title: "Hip Circles",
          description:
            "A mobility exercise to loosen the hip joint and improve range of motion.",
          howTo: [
            {
              step: {
                description:
                  "Stand with your feet hip-width apart and hands on your hips.",
              },
            },
            {
              step: {
                description:
                  "Move your hips in a circular motion, rotating them clockwise.",
              },
            },
            { step: { description: "After a set time, switch directions." } },
          ],
          tips: [
            "Keep your posture upright while moving your hips.",
            "Focus on smooth and deliberate rotations.",
          ],
        },
        set: 1,
        time: 30,
      },
      {
        exercise: {
          title: "World's Greatest Stretch",
          description:
            "A full-body stretch that targets the hips, hamstrings, and back.",
          howTo: [
            {
              step: {
                description:
                  "Start in a standing position and step one leg into a deep lunge.",
              },
            },
            {
              step: {
                description:
                  "Place your hand on the floor and rotate your torso toward the bent leg.",
              },
            },
            {
              step: {
                description:
                  "Extend your other arm toward the ceiling while deepening the stretch.",
              },
            },
          ],
          tips: [
            "Hold each stretch for a few seconds before switching sides.",
            "Keep your chest open and shoulders back.",
          ],
        },
        set: 1,
        time: 45,
      },
      {
        exercise: {
          title: "Lunge with a Twist",
          description:
            "A dynamic stretch that targets the hips, glutes, and spine.",
          howTo: [
            {
              step: {
                description: "Step forward into a lunge position with one leg.",
              },
            },
            {
              step: {
                description:
                  "Twist your torso toward the bent leg, extending the arms out to the sides.",
              },
            },
            {
              step: {
                description: "Return to standing and repeat on the other side.",
              },
            },
          ],
          tips: [
            "Ensure your knee does not pass your toes during the lunge.",
            "Keep your chest lifted as you twist your torso.",
          ],
        },
        set: 1,
        time: 30,
      },
    ],
  },
  {
    title: "Foundational Movement Pattern Training",
    duration: "30 minutes",
    format: "Circuit",
    goal: "Improve basic movement quality and joint coordination",
    rest: "45 seconds between exercises",
    frequency: "2–3x per week",
    tip: "Control every repetition—focus on movement mechanics.",
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
        rep: 12,
      },
      {
        exercise: {
          title: "Hinge to Stand (Hip Hinge)",
          description:
            "A movement pattern focusing on activating the posterior chain muscles.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description: "Stand tall with your feet hip-width apart.",
              },
            },
            {
              step: {
                title: "Hinge at the Hips",
                description:
                  "Push your hips back while keeping your spine neutral.",
              },
            },
            {
              step: {
                title: "Return to Standing",
                description:
                  "Push through your heels to return to standing, squeezing your glutes.",
              },
            },
          ],
          tips: [
            "Hinge at the hips, not at the waist.",
            "Keep a neutral spine throughout.",
          ],
        },
        set: 3,
        rep: 10,
      },
      {
        exercise: {
          title: "Wall Slides",
          description:
            "A mobility exercise to improve shoulder range of motion and stability.",
          howTo: [
            {
              step: {
                title: "Start Position",
                description:
                  "Stand with your back against the wall, arms at a 90-degree angle.",
              },
            },
            {
              step: {
                title: "Slide Arms Up",
                description:
                  "Slowly slide your arms up the wall, keeping your forearms and hands in contact with it.",
              },
            },
            {
              step: {
                title: "Lower Arms",
                description:
                  "Return to the starting position by sliding your arms down.",
              },
            },
          ],
          tips: [
            "Avoid arching your back.",
            "Keep your head and lower back in contact with the wall.",
          ],
        },
        set: 3,
        rep: 10,
      },
    ],
  },
  {
    title: "Yoga Flow for Flexibility",
    duration: "30 minutes",
    format: "Vinyasa Flow",
    goal: "Increase flexibility and improve balance",
    rest: "None – flow between poses with steady breath",
    frequency: "2–3x per week",
    tip: "Focus on your breath and stay mindful of body alignment.",
    difficulty: "Intermediate",
    exercises: [
      {
        exercise: {
          title: "Downward Dog",
          description:
            "A yoga pose that stretches the hamstrings, calves, and shoulders.",
          howTo: [
            {
              step: {
                description:
                  "Start on all fours, with your hands shoulder-width apart and feet hip-width apart.",
              },
            },
            {
              step: {
                description:
                  "Lift your hips toward the ceiling, forming an upside-down 'V' shape.",
              },
            },
            {
              step: {
                description:
                  "Press your heels toward the ground and keep your head between your arms.",
              },
            },
          ],
          tips: [
            "Keep your back straight and avoid rounding your spine.",
            "Engage your core and focus on even breathing.",
          ],
        },
        set: 1,
        time: 60,
      },
      {
        exercise: {
          title: "Cobra Pose",
          description:
            "A backbend that stretches the chest, shoulders, and spine.",
          howTo: [
            {
              step: {
                description:
                  "Lie on your stomach with your hands under your shoulders.",
              },
            },
            {
              step: {
                description:
                  "Press your palms into the floor and lift your chest off the ground.",
              },
            },
            {
              step: {
                description:
                  "Look up and extend your spine, opening your chest.",
              },
            },
          ],
          tips: [
            "Keep your elbows close to your body as you lift.",
            "Avoid overextending your lower back.",
          ],
        },
        set: 1,
        time: 45,
      },
      {
        exercise: {
          title: "Pigeon Pose",
          description:
            "A deep hip opener that stretches the glutes and hip flexors.",
          howTo: [
            {
              step: {
                description:
                  "Begin in a tabletop position and bring one knee forward toward your hands.",
              },
            },
            {
              step: {
                description:
                  "Extend your back leg straight behind you, keeping your hips square.",
              },
            },
            {
              step: {
                description:
                  "Lower your torso toward the ground to deepen the stretch.",
              },
            },
          ],
          tips: [
            "Keep your back leg extended straight and avoid sinking your lower back.",
            "Breathe deeply and relax into the pose.",
          ],
        },
        set: 1,
        time: 60,
      },
      {
        exercise: {
          title: "Warrior II",
          description:
            "A standing pose that stretches the hips, chest, and shoulders.",
          howTo: [
            {
              step: {
                description:
                  "Stand with feet wide apart and turn your right foot out 90 degrees.",
              },
            },
            {
              step: {
                description:
                  "Bend your right knee, keeping your left leg straight and feet grounded.",
              },
            },
            {
              step: {
                description:
                  "Extend your arms out to the sides, palms facing down.",
              },
            },
          ],
          tips: [
            "Keep your front knee aligned with your ankle.",
            "Engage your core and keep your shoulders relaxed.",
          ],
        },
        set: 1,
        time: 45,
      },
      {
        exercise: {
          title: "Child’s Pose",
          description: "A resting pose that stretches the back and hips.",
          howTo: [
            {
              step: {
                description:
                  "Kneel on the floor with your big toes touching and knees apart.",
              },
            },
            {
              step: {
                description:
                  "Lower your torso to the floor, extending your arms out in front of you.",
              },
            },
            {
              step: {
                description:
                  "Relax your forehead on the ground and breathe deeply.",
              },
            },
          ],
          tips: [
            "Keep your arms extended or place them by your sides for a deeper stretch.",
            "Focus on slow and deep breathing to relax.",
          ],
        },
        set: 1,
        time: 60,
      },
    ],
  },
  {
    title: "Mobility Circuit for Flexibility",
    duration: "20 minutes",
    format: "Circuit",
    goal: "Increase mobility in key areas: hips, shoulders, and ankles",
    rest: "None – transition smoothly between exercises",
    frequency: "2–3x per week",
    tip: "Focus on controlled movement and avoid jerky motions.",
    difficulty: "Intermediate",
    exercises: [
      {
        exercise: {
          title: "Hip Flexor Lunge Stretch",
          description: "Stretches the hip flexors and opens up the hips.",
          howTo: [
            {
              step: {
                description:
                  "Step one foot forward into a deep lunge, with the back knee on the floor.",
              },
            },
            {
              step: {
                description:
                  "Press your hips forward, feeling a stretch in the front of the hip.",
              },
            },
            { step: { description: "Hold and switch sides." } },
          ],
          tips: [
            "Avoid arching your back too much during the stretch.",
            "Keep your chest upright and core engaged.",
          ],
        },
        set: 1,
        time: 45,
      },
      {
        exercise: {
          title: "Thoracic Spine Rotation",
          description: "Improves mobility in the upper back and shoulders.",
          howTo: [
            {
              step: {
                description:
                  "Sit on the floor with your legs crossed and hands behind your head.",
              },
            },
            {
              step: {
                description:
                  "Rotate your torso to one side, bringing your elbow toward the floor.",
              },
            },
            {
              step: {
                description: "Return to center and repeat on the other side.",
              },
            },
          ],
          tips: [
            "Keep your hips and pelvis stationary while rotating your upper body.",
            "Exhale as you rotate for better mobility.",
          ],
        },
        set: 1,
        time: 30,
      },
      {
        exercise: {
          title: "Ankle Dorsiflexion Stretch",
          description: "Improves ankle mobility and flexibility.",
          howTo: [
            {
              step: {
                description:
                  "Kneel with one foot on the floor and the other foot in front.",
              },
            },
            {
              step: {
                description:
                  "Lean forward into the front knee, stretching the ankle of the back leg.",
              },
            },
            {
              step: { description: "Hold for a few seconds and switch sides." },
            },
          ],
          tips: [
            "Keep your knee aligned with your toes to avoid stress on the joints.",
            "Maintain a gentle, controlled stretch.",
          ],
        },
        set: 1,
        time: 30,
      },
    ],
  },
  {
    title: "Advanced Dynamic Flexibility",
    duration: "45 minutes",
    format: "Mobility Flow",
    goal: "Improve flexibility, joint mobility, and overall range of motion.",
    rest: "1 minute between rounds",
    frequency: "3-4x per week",
    tip: "Control the movement through the full range of motion without jerking or bouncing.",
    difficulty: "Advanced",
    exercises: [
      {
        exercise: {
          title: "Pigeon Pose (Advanced)",
          description: "A deep stretch for the glutes, hips, and lower back.",
          howTo: [
            {
              step: {
                description:
                  "Start in a tabletop position, then bring your right knee forward towards your wrist, with your right foot angled toward the left side of your body.",
              },
            },
            {
              step: {
                description:
                  "Extend your left leg behind you, keeping the hips square.",
              },
            },
            {
              step: {
                description:
                  "Lower your upper body toward the floor, reaching your arms forward for a deeper stretch.",
              },
            },
            {
              step: {
                description: "Hold for 30-60 seconds, then switch sides.",
              },
            },
          ],
          tips: [
            "Make sure your hips are square to the floor to avoid strain on the lower back.",
            "Engage your core to avoid collapsing in your lower back.",
          ],
        },
        set: 3,
        time: 60,
      },
      {
        exercise: {
          title: "Thoracic Spine Rotation",
          description:
            "Increases thoracic spine mobility and promotes better posture.",
          howTo: [
            {
              step: {
                description:
                  "Start on your hands and knees in a tabletop position.",
              },
            },
            {
              step: {
                description:
                  "Place your right hand behind your head, and slowly rotate your torso to the right, reaching your right elbow towards the ceiling.",
              },
            },
            {
              step: {
                description:
                  "Return to the starting position and repeat for 8-12 reps per side.",
              },
            },
          ],
          tips: [
            "Focus on rotating the spine, not just moving the arm.",
            "Keep your hips stable and avoid excessive movement.",
          ],
        },
        set: 3,
        rep: 15,
      },
      {
        exercise: {
          title: "Cossack Squats",
          description:
            "Enhances hip mobility, flexibility, and strength in the lower body.",
          howTo: [
            {
              step: {
                description:
                  "Stand with your feet wide apart, toes pointing slightly outward.",
              },
            },
            {
              step: {
                description:
                  "Shift your weight to your left leg and lower into a deep squat, extending the right leg out to the side.",
              },
            },
            {
              step: {
                description:
                  "Hold the position for a few seconds, then return to the standing position and repeat on the other side.",
              },
            },
          ],
          tips: [
            "Make sure your knee tracks over your toes as you squat.",
            "Keep your chest up and avoid leaning forward.",
          ],
        },
        set: 4,
        rep: 15,
      },
      {
        exercise: {
          title: "Straddle Stretch with Forward Fold",
          description:
            "Targets the hamstrings, inner thighs, and lower back for deep flexibility.",
          howTo: [
            {
              step: {
                description:
                  "Sit on the floor with your legs spread wide apart in a straddle position.",
              },
            },
            {
              step: {
                description:
                  "Hinge at your hips and fold your torso forward, reaching your hands toward the floor.",
              },
            },
            {
              step: {
                description:
                  "Hold for 30-60 seconds, then gently return to a seated position.",
              },
            },
          ],
          tips: [
            "Keep your back straight as you fold forward to avoid straining your lower back.",
            "Focus on hinging at the hips, not just reaching with your hands.",
          ],
        },
        set: 3,
        time: 60,
      },
      {
        exercise: {
          title: "Deep Lunge with Spinal Twist",
          description:
            "Opens the hips and improves thoracic spine mobility while strengthening the legs.",
          howTo: [
            {
              step: {
                description:
                  "Step your right foot forward into a deep lunge, with the left leg extended straight behind you.",
              },
            },
            {
              step: {
                description:
                  "Place your left hand on the floor and rotate your upper body to the right, reaching your right arm up toward the ceiling.",
              },
            },
            {
              step: {
                description:
                  "Hold the twist for 10-20 seconds, then switch sides.",
              },
            },
          ],
          tips: [
            "Make sure your front knee is aligned with your ankle and does not extend beyond your toes.",
            "Engage your core to support the spine during the twist.",
          ],
        },
        set: 3,
        time: 30,
      },
    ],
  },
  {
    title: "Advanced Hip and Hamstring Flexibility",
    duration: "40 minutes",
    format: "Dynamic Stretching & Static Hold",
    goal: "Improve flexibility and range of motion in the hips and hamstrings.",
    rest: "1 minute between rounds",
    frequency: "3-4x per week",
    tip: "Perform the dynamic stretches first, followed by the static holds for maximum flexibility gain.",
    difficulty: "Advanced",
    exercises: [
      {
        exercise: {
          title: "Hip Flexor Stretch",
          description:
            "Targets the hip flexors and quads for deeper flexibility.",
          howTo: [
            {
              step: {
                description:
                  "Start in a kneeling position with your right knee on the floor and your left foot in front, forming a 90-degree angle.",
              },
            },
            {
              step: {
                description:
                  "Shift your weight forward, gently pressing your hips down towards the floor.",
              },
            },
            {
              step: {
                description:
                  "Hold for 30 seconds, feeling a stretch in the hip flexors of the right leg.",
              },
            },
          ],
          tips: [
            "Keep your back straight and engage your core to avoid overarching the lower back.",
            "Slightly tilt your pelvis forward for a deeper stretch.",
          ],
        },
        set: 3,
        time: 30,
      },
      {
        exercise: {
          title: "Standing Hamstring Stretch with Elevated Leg",
          description: "Stretches the hamstrings, calves, and lower back.",
          howTo: [
            {
              step: {
                description:
                  "Place your right foot on a bench or elevated surface.",
              },
            },
            {
              step: {
                description:
                  "Keeping your back straight, hinge at the hips to lower your torso towards the elevated leg.",
              },
            },
            {
              step: {
                description:
                  "Hold for 30-45 seconds, feeling a deep stretch in your hamstrings.",
              },
            },
          ],
          tips: [
            "Keep your knee slightly bent if you feel discomfort in the joint.",
            "Focus on hinging at the hips to maximize the stretch.",
          ],
        },
        set: 3,
        time: 45,
      },
      {
        exercise: {
          title: "Lunge with Overhead Reach",
          description: "Opens the hips and stretches the shoulders and spine.",
          howTo: [
            {
              step: {
                description:
                  "Step your left foot forward into a lunge position.",
              },
            },
            {
              step: {
                description:
                  "Reach both arms overhead, keeping your shoulders down and chest lifted.",
              },
            },
            {
              step: {
                description:
                  "Hold the position for 20-30 seconds, then repeat on the other side.",
              },
            },
          ],
          tips: [
            "Ensure your front knee stays behind your toes and tracks over your ankle.",
            "Engage your core to avoid arching your lower back.",
          ],
        },
        set: 3,
        time: 30,
      },
      {
        exercise: {
          title: "Lying Hamstring Stretch with Strap",
          description:
            "Targets the hamstrings and lower back for deep flexibility.",
          howTo: [
            {
              step: {
                description:
                  "Lie on your back with your legs extended and a yoga strap or resistance band around the arch of your right foot.",
              },
            },
            {
              step: {
                description:
                  "Slowly raise your leg towards the ceiling, keeping it straight, while holding the strap.",
              },
            },
            {
              step: {
                description:
                  "Hold the stretch for 30-60 seconds, then switch legs.",
              },
            },
          ],
          tips: [
            "Keep your back and hips flat on the floor during the stretch.",
            "If you feel discomfort in the knee, keep a slight bend in it.",
          ],
        },
        set: 3,
        time: 60,
      },
      {
        exercise: {
          title: "Butterfly Stretch",
          description:
            "Deeply stretches the inner thighs, hips, and lower back.",
          howTo: [
            {
              step: {
                description:
                  "Sit on the floor with your feet together and knees bent outward.",
              },
            },
            {
              step: {
                description:
                  "Gently press your knees toward the ground while leaning forward from your hips.",
              },
            },
            { step: { description: "Hold the stretch for 30-45 seconds." } },
          ],
          tips: [
            "Focus on hinging at the hips to deepen the stretch without rounding your back.",
            "Use your elbows to gently press your knees toward the floor for a deeper stretch.",
          ],
        },
        set: 3,
        time: 45,
      },
    ],
  },
];
