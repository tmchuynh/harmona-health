import { useEffect, useState } from "react";

export function useFitnessContent() {
  const [fitnessContent, setFitnessContent] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFitnessContent() {
      const content: Record<string, any> = {};

      try {
        // Dynamically import all fitness modules
        const moduleNames = [
          "bodyweight-workouts",
          "cardio-conditioning",
          "functional-fitness",
          "mobility-and-flexibility",
          "recovery-and-regeneration",
          "strength-training",
        ];

        for (const name of moduleNames) {
          const toolModule = await import(
            `@/lib/resources/toolkits/tools/fitness-toolkit/${name}`
          );
          // Convert kebab-case to camelCase for the export name
          const exportName = name.replace(/-([a-z])/g, (_, letter) =>
            letter.toUpperCase()
          );
          content[exportName] = toolModule[exportName];
        }

        setFitnessContent(content);
      } catch (error) {
        console.error("Failed to load fitness content:", error);
      } finally {
        setLoading(false);
      }
    }

    loadFitnessContent();
  }, []);

  return { fitnessContent, loading };
}
