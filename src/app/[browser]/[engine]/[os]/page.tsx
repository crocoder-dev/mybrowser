import {
  CursorArrowRaysIcon,
  ComputerDesktopIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import UrlCopy from "@/components/urlCopy";

const page = ({
  params,
}: {
  params: { browser: string; engine: string; os: string };
}) => {
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
      icon: BookmarkIcon,
    },
    {
      id: 2,
      name: "Engine",
      stat: engineName,
      version: engineVersion,
      icon: CursorArrowRaysIcon,
    },
    {
      id: 3,
      name: "Operating system",
      stat: osName,
      version: osVersion,
      icon: ComputerDesktopIcon,
    },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div
      className="max-w-3xl mx-auto bg-white py-24 sm:py-32"
    >
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
            <dd className="ml-16 flex items-baseline pb-4 align-baseline gap-2">
              <p className="text-2xl font-semibold text-gray-900">
                {item.stat}
              </p>
              <p className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                {item.version}
              </p>
            </dd>
          </div>
        ))}
      </dl>
      <UrlCopy />
    </div>
  );
};

export default page;
