"use client";
import { QuadGallery } from "@/components/images/QuadGridImages";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { data } from "@/lib/constants/services/images";
import { subServiceInformation } from "@/lib/constants/services/serviceInformation";
import { subServices } from "@/lib/constants/services/services";
import { serviceTierInformation } from "@/lib/constants/services/tierInformation";
import { cn } from "@/lib/utils";
import { convertMinutesToHoursAndMinutes } from "@/lib/utils/convert";
import { capitalize, formatCurrency } from "@/lib/utils/format";
import { usePathname } from "next/navigation";
import { FaCheckDouble } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
export default function Page() {
  const segments = usePathname().split("/");
  const serviceId = segments[segments.length - 1];

  const isLargeScreen = window.innerWidth > 1024;

  const information = subServiceInformation.find(
    (info) => info.subServiceId === serviceId
  );

  const service = subServices.find((service) => service.id === serviceId);

  const filteredTiers = serviceTierInformation.filter(
    (tier) => serviceId === tier.subServiceId
  );

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      {service && information ? (
        <article className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
          <h1>Blank</h1>
          <h5>Blank blank blank blank</h5>

          <p className="pb-8">
            Ipsum excepteur dolore id velit adipisicing magna quis in commodo
            sint sit nostrud dolor. Eiusmod amet adipisicing consequat ea. Aute
            voluptate sunt sint elit qui aute ea non eiusmod labore. Ea
            voluptate ex ullamco qui aliqua qui minim voluptate ut incididunt
            nostrud. Cillum elit minim cupidatat officia.
          </p>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 pb-3">
            <div>
              <h2>{service.title}</h2>
              <p>{information.introduction}</p>
              <p>{service.description}</p>
            </div>
            <section className="gap-5 grid grid-cols-1 lg:grid-cols-2">
              <div>
                <h3>Key Points</h3>
                <ul>
                  {information.keypoints.map((keypoint, index) => (
                    <li key={`${keypoint}-${index}`}>{keypoint}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Program Outcomes</h3>
                <ul>
                  {information.outcomes.map((outcome, index) => (
                    <li key={`${outcome}-${index}`}>{outcome}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Program Goals</h3>
                <ul>
                  {information.goals.map((goal, index) => (
                    <li key={`${goal}-${index}`}>{goal}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <div className="items-center lg:items-start xl:items-center gap-5 grid grid-cols-1 md:grid-cols-2">
            <section>
              {filteredTiers.map((tier, index) => (
                <div
                  key={`${tier.tier}-${index}`}
                  className={cn("flex flex-col gap-2 py-5", {
                    "border-b-2": index !== filteredTiers.length - 1,
                  })}
                >
                  <div className="flex justify-between gap-4">
                    <h2>{capitalize(tier.tier)} Tier</h2>
                    <p>{formatCurrency(tier.price)}/session</p>
                  </div>
                  <p>{service.description}</p>

                  <div>
                    <h5 className="mb-3 underline underline-offset-2">
                      What’s Included
                    </h5>
                    <ul>
                      <li>
                        <strong>Sessions:</strong> {tier.sessions}
                      </li>
                      <li>
                        <strong>Duration: </strong>
                        {convertMinutesToHoursAndMinutes(
                          tier.durationOfSession
                        )}
                      </li>
                      <li>
                        <strong>Sessions Per Week:</strong>{" "}
                        {tier.sessionsPerWeek}
                      </li>
                      <li>
                        <strong>Total Sessions:</strong> {tier.totalSessions}
                      </li>
                      <li>
                        <strong>Total Price:</strong>{" "}
                        {formatCurrency(tier.price * tier.totalSessions)}
                      </li>
                    </ul>
                  </div>
                  {tier.blackOutDays && (
                    <>
                      <h5 className="mb-3 underline underline-offset-2">
                        Black Out Dates
                      </h5>
                      <Table>
                        <TableHeader>
                          <TableRow className="flex justify-around text-center">
                            <TableHead>S</TableHead>
                            <TableHead>M</TableHead>
                            <TableHead>T</TableHead>
                            <TableHead>W</TableHead>
                            <TableHead>TH</TableHead>
                            <TableHead>F</TableHead>
                            <TableHead>S</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="flex justify-around text-center">
                            {days.map((dayName, dayIndex) => (
                              <TableCell key={dayIndex}>
                                {tier.blackOutDays?.includes(dayName) ? (
                                  <IoCloseSharp
                                    size={20}
                                    className="text-red-500"
                                  />
                                ) : (
                                  <FaCheckDouble
                                    className="text-green-500"
                                    size={20}
                                  />
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableBody>
                      </Table>
                    </>
                  )}
                </div>
              ))}
            </section>
            <section className="xl:gap-2 grid grid-cols-1 py-2">
              <QuadGallery data={data} />
              {isLargeScreen && <QuadGallery data={data} />}
            </section>
          </div>
        </article>
      ) : null}
    </>
  );
}
