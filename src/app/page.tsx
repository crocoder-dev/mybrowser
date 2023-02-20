import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      <main className="py-12 pt-6 sm:pt-6 sm:py-24 lg:pt-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Share Your Browser Info in a Link
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            No Ads, No Cookies, No Tracking. Just a simple link to share your browser info.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/check"
              className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get info about you browser
            </Link>
          </div>
        </div>
        <p className="mx-auto max-w-xl text-lg leading-8 text-gray-600 mt-28">
          {"BrowserInfo is a neat little tool that lets you share information about your internet browser with others."}
        </p>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          {"All you have to do is go to "}<Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.browserinfo.link/check">browserinfo.link/check</Link>{" and your browser information will automatically appear on the screen. This includes things like the name and version of your browser, as well as details about the browser engine and operating system you're using."}
        </p>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
         {"This tool is really handy for people who work in web development or IT, as it allows them to easily get browser information from clients or coworkers. Plus, it's a great option if you're concerned about online privacy, since it doesn't collect any data about you. So maybe even"} <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://twitter.com/AdriaanvRossum">AdriaanvRossum</Link>{" can use it."}
        </p>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
         {"If you still aren't convinced, take a look at the "} <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/crocoder-dev/mybrowser">Github Repo</Link>{" or take a gander at the "} <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://simpleanalytics.com/browserinfo.link">Simple Analytics page.</Link>
        </p>
      </main>
      <footer className="bg-white">
      <div className="mx-auto max-w-7xl py-0 px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            Made by <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://twitter.com/devabram">David</Link> with ❤️ check out my <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.crocoder.dev/blog">blog posts</Link>.
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
}
