import React from "react";

import { aboutMe } from "@/constants";

import Card from "../molecules/card/card";

export default function Company() {
  // eslint-disable-next-line unused-imports/no-unused-vars

  return (
    <div className="flex h-screen w-screen flex-row overflow-show">
      <div className="mt-5 flex h-full w-full flex-col items-center justify-center self-center md:w-2/4">
        <Card {...aboutMe} />
      </div>
      <div className="hidden w-full flex-col items-center justify-center md:flex  ">
        <div className="w-[95%] rounded-lg border border-gray-200 bg-zinc-100 shadow dark:border-gray-700 dark:bg-gray-800">
          <div
            className="flex h-[62vh] flex-col overflow-scroll rounded-lg bg-zinc-100 p-4 md:p-8 dark:bg-gray-800"
            id="about"
            role="tabpanel"
            aria-labelledby="about-tab"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mt-10">
              Empowering Companies Worldwide.
            </h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400 mt-10 text-ellipsis">
              As a Senior Software Engineer, my career is marked by an
              exceptional track record in developing innovative solutions, with
              significant contributions to multinational projects in Japan,
              Europe, and the USA. My expertise extends beyond JavaScript,
              encompassing a wide array of programming languages like Python,
              PHP, and Java, enabling me to tackle complex software challenges.
              My proficiency in frameworks such as React.js/Native, Node.js, and
              Flask has been instrumental in building robust, scalable
              applications. Additionally, my skills in cloud computing with
              platforms like AWS, GCP, and Azure, coupled with database
              management expertise in systems like DynamoDB, MongoDB, and MySQL,
              enhance my versatility as a developer. I take pride in my ability
              to effectively manage state using tools like MobX, Redux, and
              React-Hooks context API. My approach to software engineering is
              characterized by a strong organizational ability and
              self-motivation, underlining my commitment to excellence and a
              positive impact in the field. This diverse skill set not only
              defines my professional journey but also underscores my dedication
              to staying at the forefront of technological innovation and
              contributing meaningfully to the software engineering community.
            </p>
            <dl className="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 p-2 text-gray-900 sm:grid-cols-3 sm:p-8 xl:grid-cols-6 dark:text-white">
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">20K+</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  Hours of Work Experience
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">16+</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  Projects Contributed
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">30+</dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  Technologies and Frameworks
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">7</dt>
                <dd className="text-gray-500 dark:text-gray-400">Countries</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
