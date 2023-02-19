import { NextPage } from "next";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

const page = ({ params }: { params: { browser: string; engine: string; os: string } }) => {
  const { browser, engine, os } = params;

  const [browserName, ...browserRest] = browser.split("-");
  const browserVersion = browserRest.join("-");
  const [engineName, ...engineRest] = engine.split("-");
  const engineVersion = engineRest.join("-");
  const [osName, ...osRest] = os.split("-");
  const osVersion = osRest.join("-");

  const stats = [
    {
      id: 1,
      name: "Browser",
      stat: browserName,
      version: browserVersion,
      icon: UsersIcon,
    },
    {
      id: 2,
      name: "Engine",
      stat: engineName,
      version: engineVersion,
      icon: EnvelopeOpenIcon,
    },
    {
      id: 3,
      name: "Operating system",
      stat: osName,
      version: osVersion,
      icon: CursorArrowRaysIcon,
    },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className={classNames("max-w-3xl mx-auto bg-white py-24 sm:py-32", inter.className)}>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        My Browser Info:
      </h1>
      <dl className="mt-5 grid grid-cols-1 gap-5">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-6 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-4">
              <p className="text-2xl font-semibold text-gray-900">
                {item.stat}
              </p>
              {" "}
              <p className="rounded-full leading-8 bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                version: {item.version}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default page;
