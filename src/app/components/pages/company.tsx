import React from "react";

import { employeeList } from "@/constants";

import Card from "../molecules/card/card";

// function useOnScreen(ref: RefObject<HTMLElement>) {
//   const [isIntersecting, setIntersecting] = useState(false);

//   const observer = useMemo(
//     () =>
//       new IntersectionObserver(([entry]) =>
//         setIntersecting(entry.isIntersecting),
//       ),
//     [ref],
//   );

//   useEffect(() => {
//     if (ref.current) {
//       observer.observe(ref.current);
//     }
//     return () => observer.disconnect();
//   }, []);

//   return isIntersecting;
// }

export default function Company() {
  // eslint-disable-next-line unused-imports/no-unused-vars
  // const { isMounted } = useIsMounted(currentPage, "Company");
  // console.log("shouldMount :>> ", shouldMount);

  // const ref = useRef<HTMLDivElement>(null);
  // const isVisible = useOnScreen(ref);
  // console.log("isVisible :>> ", isVisible);
  return (
    <div className="flex h-screen w-screen flex-row overflow-hidden ">
      {/* <div className="animate-glow hidden h-1 w-screen animate-fade-left bg-gradient-to-r from-[grey] via-[white] to-[grey] md:block" /> */}
      <div className="flex animate-shake h-full w-full flex-col items-center justify-center mt-5 self-center md:w-2/4">
        <Card {...employeeList[0]} />
      </div>
      <div className="hidden h-full w-full flex-col items-center justify-center self-center mt-5 md:flex">
        {/* <Card {...employeeList[0]} /> */}

        <div className="w-full h-3/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <ul
            className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
            id="defaultTab"
            data-tabs-toggle="#defaultTabContent"
            role="tablist"
          >
            <li className="me-2">
              <button
                id="about-tab"
                data-tabs-target="#about"
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected="true"
                className="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
              >
                About
              </button>
            </li>
            <li className="me-2">
              <button
                id="services-tab"
                data-tabs-target="#services"
                type="button"
                role="tab"
                aria-controls="services"
                aria-selected="false"
                className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              >
                Services
              </button>
            </li>
            <li className="me-2">
              <button
                id="statistics-tab"
                data-tabs-target="#statistics"
                type="button"
                role="tab"
                aria-controls="statistics"
                aria-selected="false"
                className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              >
                Facts
              </button>
            </li>
          </ul>
          <div id="defaultTabContent">
            <div
              className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="about"
              role="tabpanel"
              aria-labelledby="about-tab"
            >
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Empowering a vast multitude of companies across the globe
              </h2>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                As a Senior Software Engineer with an impressive record of
                developing innovative solutions, I have made significant
                contributions to projects across Japan, Europe, and the USA. My
                expertise in JavaScript, along with a comprehensive skill set in
                various programming languages like Python, PHP, and Java, has
                been pivotal in my work. I am adept in a range of frameworks,
                including React.js/Native, Node.js, and Flask, enhancing my
                ability to deliver robust and scalable applications. My
                experience extends to cloud computing platforms such as AWS,
                GCP, and Azure, and I am proficient in managing databases like
                DynamoDB, MongoDB, and MySQL. My commitment to excellence is
                further demonstrated by my ability to manage state effectively
                using tools like MobX, Redux, and React-Hooks context API. Known
                for my high organization and self-motivation, I am dedicated to
                making a positive impact in the software engineering field.
              </p>
            </div>
            <div
              className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="services"
              role="tabpanel"
              aria-labelledby="services-tab"
            >
              <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                We invest in the world’s potential
              </h2>
              {/* <!-- List --> */}
              <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="leading-tight">
                    Dynamic reports and dashboards
                  </span>
                </li>
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="leading-tight">Templates for everyone</span>
                </li>
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="leading-tight">Development workflow</span>
                </li>
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="leading-tight">
                    Limitless business automation
                  </span>
                </li>
              </ul>
            </div>
            <div
              className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="statistics"
              role="tabpanel"
              aria-labelledby="statistics-tab"
            >
              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div className="flex flex-col">
                  <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                  <dd className="text-gray-500 dark:text-gray-400">
                    Developers
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                  <dd className="text-gray-500 dark:text-gray-400">
                    Public repositories
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                  <dd className="text-gray-500 dark:text-gray-400">
                    Open source projects
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hidden h-full w-full flex-col items-center justify-center self-center bg-red-900 md:flex">
        <Card {...employeeList[0]} />
      </div>
      <div className="hidden h-full w-full flex-col items-center justify-center self-center bg-red-900 md:flex">
        <Card {...employeeList[0]} />
      </div>
      <div className="hidden h-full w-full flex-col items-center justify-center self-center bg-red-900 md:flex">
        <Card {...employeeList[0]} />
      </div> */}

      {/* <div className="hidden h-full w-full flex-col items-center justify-center self-center bg-red-900 md:flex">
        <Card {...employeeList[0]} />
      </div> */}

      {/* <Link
        className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800"
        href="/company"
      >
        <span
          ref={ref}
          className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
        >
          Company
        </span>
      </Link> */}

      {/* <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-zinc-300 shadow hover:bg-gray-100 md:max-w-xl md:flex-row dark:border-zinc-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            AAK.tech technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2024 so
            far, in reverse chronological order.
          </p>
        </div>
      </div> */}
    </div>
  );
}
