import { Activity } from "@/lib/interfaces&types/resources";

const ActivityCard = ({ data }: { data: Activity }) => {
  return (
    <div className="bg-card shadow-md mx-auto p-9 rounded-lg">
      <div className="flex justify-between items-center">
        {data.difficulty && (
          <div className="flex items-center gap-3">
            <h5 className="mb-0">Difficulty:</h5>
            <p>{data.difficulty}</p>
          </div>
        )}

        {data.approximateTime && (
          <div className="flex items-center gap-3">
            <p>~ {data.approximateTime}</p>
          </div>
        )}
      </div>

      <h1 className="font-bold text-2xl">{data.title}</h1>

      <p>{data.introduction}</p>

      <div className="my-3">
        {data.frequency && (
          <div className="flex items-center gap-3">
            <h5 className="mb-0">Frequency:</h5>
            <p>{data.frequency}</p>
          </div>
        )}
      </div>

      {data.howToStart && (
        <div className="my-3">
          <h3>How to Start:</h3>
          <p>{data.howToStart}</p>
        </div>
      )}

      {data.useCases && (
        <div className="mb-6">
          <h3>When to Use:</h3>
          <ul className="mt-2 pl-6 list-disc">
            {data.useCases.map((useCase, index) => (
              <li key={index}>{useCase}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-6">
        <h3>Steps:</h3>
        <ol className="space-y-2 pl-6 list-decimal">
          {data.steps.map((step, index) => (
            <li key={index}>
              <p>
                {step.step.title && (
                  <strong>{step.step.title.replace(".", "")}: </strong>
                )}
                {step.step.description}
              </p>

              {step.note && <i>** {step.note}</i>}

              {step.details &&
                step.details.map((detail, index) => (
                  <p key={index} className="pl-6">
                    {detail}
                  </p>
                ))}
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h3>Conclusion:</h3>
        <p>{data.conclusion}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
