"use client";
import DynamicButton from "@/components/button/button-dynamic";
import { QuadGallery } from "@/components/images/QuadGridImages";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { icons } from "@/lib/constants/constants";
import { data } from "@/lib/constants/services/images";
import { serviceInformation } from "@/lib/constants/services/serviceInformation";
import { subServices } from "@/lib/constants/services/services";
import { serviceTierInformation } from "@/lib/constants/services/tierInformation";
import { cn, getRandomIndex } from "@/lib/utils";
import { convertMinutesToHoursAndMinutes } from "@/lib/utils/convert";
import { capitalize, formatCurrency } from "@/lib/utils/format";
import { IconDisplay } from "@/lib/utils/IconDisplay";
import { shuffleArray } from "@/lib/utils/sort";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import { FaCheckDouble, FaLeaf } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { PiFlowerLotusFill } from "react-icons/pi";

export default function Page() {
  const url = usePathname();
  console.log("URL", url);
  const segments = url.split("/");
  const serviceId = segments[segments.length - 1];

  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [icon, setIcon] = useState<JSX.Element>(<FaLeaf />);
  const [secondIcon, setSecondIcon] = useState<JSX.Element>(
    <PiFlowerLotusFill />
  );

  useEffect(() => {
    // Check if an icon is already stored in sessionStorage
    const storedMainIconName = sessionStorage.getItem("mainIcon");
    const storedSecondIconName = sessionStorage.getItem("sectionIcon");

    // Shuffle and select a random icon
    let shuffledArray = shuffleArray(icons);
    let index = getRandomIndex(shuffledArray);

    if (storedMainIconName) {
      // Find the icon by its name and set it
      const IconComponent = icons.find(
        (icon) => icon.name === storedMainIconName
      );
      if (IconComponent) {
        setIcon(<IconComponent className="mx-auto text-lg text-primary" />);
      }
    } else {
      const MainIcon = shuffledArray[index];

      if (typeof MainIcon === "function") {
        // Store the icon's name in sessionStorage
        sessionStorage.setItem("mainIcon", MainIcon.name);

        // Set the icon
        setIcon(<MainIcon className="mx-auto text-lg text-primary" />);
      } else {
        console.error("Invalid icon selected:", MainIcon);
      }
    }

    if (storedSecondIconName) {
      // Find the icon by its name and set it
      const IconComponent = icons.find(
        (icon) => icon.name === storedSecondIconName
      );
      if (IconComponent) {
        setIcon(<IconComponent className="mx-auto text-lg text-primary" />);
      }
    } else {
      shuffledArray = shuffleArray(icons);
      index = getRandomIndex(shuffledArray);
      const SecondIcon = shuffledArray[index];
      setSecondIcon(<SecondIcon className="mx-auto text-lg text-primary" />);

      if (typeof SecondIcon === "function") {
        // Store the icon's name in sessionStorage
        sessionStorage.setItem("sectionIcon", SecondIcon.name);

        // Set the icon
        setIcon(<SecondIcon className="mx-auto text-lg text-primary" />);
      } else {
        console.error("Invalid icon selected:", SecondIcon);
      }
    }
  }, []);

  useEffect(() => {
    // Check screen size on the client side
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const information = serviceInformation.find(
    (info) => info.serviceId === serviceId
  );

  const service = subServices.find((service) => service.id === serviceId);

  const filteredTiers = serviceTierInformation.filter(
    (tier) => serviceId === tier.serviceId
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
          <h1>{service.title}</h1>

          <p className="my-8 md:my-4 lg:my-6">{information.introduction}</p>

          <div>
            <h3>Program Benefits</h3>
            <ul>
              {information.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-x-3 mb-1">
                  <div className="flex-shrink-0 mt-1">
                    <IconDisplay Icon={secondIcon} />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <section className="gap-5 grid grid-cols-1 lg:grid-cols-3 py-5">
            <div>
              <h3>Key Points</h3>
              <ul>
                {information.keypoints.map((keypoint, index) => (
                  <li
                    key={`${keypoint}-${index}`}
                    className="flex items-center"
                  >
                    <IconDisplay Icon={icon} />
                    {keypoint}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Program Outcomes</h3>
              <ul>
                {information.outcomes.map((outcome, index) => (
                  <li
                    key={`${outcome}-${index}`}
                    className="flex items-start gap-x-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <IconDisplay Icon={icon} />
                    </div>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Program Goals</h3>
              <ul>
                {information.goals.map((goal, index) => (
                  <li
                    key={`${goal}-${index}`}
                    className="flex items-start gap-x-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <IconDisplay Icon={icon} />
                    </div>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div className="items-center lg:items-start xl:items-center gap-5 grid grid-cols-1 md:grid-cols-2">
            <section>
              <DynamicButton href={`${url}/pricing`}>
                View Pricing
              </DynamicButton>
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
                  {tier.tier === service.tiers[index].tier && (
                    <p>{service.tiers[index].description}</p>
                  )}

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
