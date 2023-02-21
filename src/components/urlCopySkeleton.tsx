import {
  DocumentDuplicateIcon,
} from "@heroicons/react/20/solid";

const UrlCopySkeleton = () => {
  return (
    <div className="p-3">
      <div className="mt-3 flex justify-center">
        <button
        type="button"
        className="line-flex items-center rounded-md border border-transparent bg-indigo-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
          <DocumentDuplicateIcon
            className="-ml-1 mr-3 h-5 w-5"
            aria-hidden="true"
          />
        COPY BROWSERINFO LINK TO CLIPBOARD
      </button>
      </div>
    </div>
  )
}

export default UrlCopySkeleton;