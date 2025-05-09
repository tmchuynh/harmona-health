import { successStories } from "@/lib/constants/services/successStories";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import Image from "next/image";
export default function Page() {
  const groupedAndSorted = groupAndSortByProperties(
    successStories,
    "program", // Group by "program"
    "name", // Sort each group by "name"
    true // Sort in ascending order
  );
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Real Stories. Real Transformations.</h1>
      <h5>
        Discover How Our Programs Have Empowered Individuals and Organizations
        to Thrive
      </h5>

      <p>
        At Harmona Health, we believe in the power of transformation. Every
        journey is unique, but the results speak for themselves. From
        revitalizing your body through fitness, to nourishing your mind and soul
        with mental health support, our programs have made a lasting impact on
        countless individuals. Explore these success stories and see how our
        holistic approach has helped people unlock their true potential,
        overcome obstacles, and create lives filled with health, happiness, and
        purpose. These are more than just success stories—they are the proof
        that positive change is possible, and it begins with the first step.
      </p>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7">
        {groupedAndSorted.map((story) => (
          <div key={story.id} className="shadow-md mb-4 p-4 border rounded-lg">
            <div className="flex mb-4 w-full">
              <Image
                src={story.image}
                alt={story.name}
                className="rounded-2xl w-3/4 object-cover object-center aspect-video"
                width={300}
                height={300}
              />
            </div>
            <h3>{story.name}</h3>
            <h5>{story.program}</h5>
            <p>{story.story}</p>
            <p>
              <strong>Results:</strong> {story.results}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
