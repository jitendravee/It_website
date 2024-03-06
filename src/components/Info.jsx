import React from "react";
import { GoDot } from "react-icons/go";

const Info = () => {
  return (
    <div className="mt-3 flex flex-col items-center">
      <h1 className="font-semibold text-[20px] md:text-[27px]">

      </h1>
      <div className="mt-3">
        <h1 className="md:text-[23px] md:mx-5 font-semibold mb-3">
          Network Infrastructure
        </h1>

        <div className="flex flex-row gap-2 ">
          <img
            src="https://img.freepik.com/free-vector/abstract-technology-network-concept_1284-3496.jpg?w=1060&t=st=1709694969~exp=1709695569~hmac=cab7b378d97e71b847e4247064565cb4d2281342f96eaa2be1532436d6d7c920"
            alt="img"
            className="h-1/4 w-1/6 rounded-xl hidden md:block"
          />
          <div>
            <p className="font-light text-[14px] md:text-[17px] ">
              <ul className="flex flex-col gap-2 md:text-[20px]">
                <li>
                  -Enterprise networks are integral to a company's IT
                  infrastructure, providing agility and competitiveness.{" "}
                </li>
                <li>
                  -A next-generation network extends beyond basic connectivity,
                  strategically optimized for current and future technology
                  needs.{" "}
                </li>
                <li>
                  -Challenges include enhancing network responsiveness,
                  improving productivity, and managing growth within budget
                  limitations.{" "}
                </li>

                <li>
                  -A well-designed network ensures resilience, scalability, and
                  security, enabling businesses to control costs and mitigate
                  risks.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="md:text-[23px] md:mx-5 font-semibold mb-3">
          AV Integration
        </h1>
        <div className="flex flex-row gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDwfESuhfw9PldXa18oSwxwzv9SLplmIVsw&usqp=CAU"
            alt="img"
            className="h-1/4 w-1/4 rounded-xl hidden md:block"
          />
          <p className="font-light text-[14px] md:text-[17px] ">
            <ul className="flex flex-col gap-2 md:text-[20px]">
              <li>
                - GT Karwin specializes in AV integration and automation
                services, focusing on the perfect combination of audio, video,
                and IT components.
                <li>
                  - The company emphasizes exceptional design, high-quality
                  products, professional implementation, ease of operation, and
                  world-class support in its services.
                </li>
                <li>
                  - The team at GT Karwin continually explores the latest
                  technologies to enhance client spaces, aiming to improve
                  productivity, profitability, and comfort.
                </li>
                <li>
                  {" "}
                  - As experienced AV integrators, GT Karwin provides solutions
                  that not only meet but exceed client requirements, ensuring
                  optimal performance and satisfaction.
                </li>
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="md:text-[23px] md:mx-5 font-semibold mb-3">
          Safety & Security
        </h1>
        <div className="flex flex-row gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSKmXvLPpX_W8_7UdEKDr6hZ9ipK2Zx8mIQ&usqp=CAU"
            alt="img"
            className="h-1/4 w-1/4 rounded-xl hidden md:block"
          />
          <p className="font-light text-[14px] md:text-[17px] ">
            <ul className="flex flex-col gap-2 md:text-[20px]">
              <li>
                - GT Karwin addresses the increasing security concerns globally
                by focusing on the protection of people, assets, and
                infrastructure.
                <li>
                  - Surveillance systems are now essential in various settings
                  such as public places, schools, businesses, and residences to
                  ensure safety and security.
                </li>
                <li>
                  - These solutions include surveillance with analytics, access
                  control, and intrusion alarms functionalities.
                </li>
                <li>
                  - The company offers comprehensive security and surveillance
                  solutions that manage multiple devices effectively.
                </li>
                <li>
                  - With GT Karwin's surveillance solutions, users can take
                  proactive and reactive measures simultaneously to prevent
                  unwanted events and ensure a secure environment.
                </li>
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="md:text-[23px] md:mx-5 font-semibold mb-3">
          Enterprise communication
        </h1>
        <div className="flex flex-row gap-2">
          <img
            src="data:image/jpeg;base64,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"
            alt="img"
            className="h-1/4 w-1/4 rounded-xl hidden md:block"
          />
          <p className="font-light text-[14px] md:text-[17px] ">
            <ul>
              <li>
                - Effective communication is crucial for today's businesses,
                often determining their success or failure in the market.
              </li>
              <li>
                - Agility in business operations is enhanced when employees can
                easily connect with the right people and access relevant
                information promptly.
              </li>
              <li>
                - The right communication platform significantly improves
                organizational productivity and enables flexibility to adapt to
                changing business environments.
              </li>
              <li>
                - GT Karwin specializes in helping businesses deploy and access
                unified communications technology optimally in the constantly
                evolving technology landscape.
              </li>
              <li>
                - By leveraging unified communications solutions, businesses can
                streamline their communication processes and improve overall
                efficiency in operations.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
