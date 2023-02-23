"use client";
import {
  LinkIcon,
  DocumentDuplicateIcon,
  HandThumbUpIcon,
} from "@heroicons/react/20/solid";
import { useRef, useState } from "react";



const UrlCopy = () => {
  const url = useRef(document.URL);
  const [copied, setCopied] = useState(false);

  console.log(url.current);

  return (
    <div className="p-3">
      <div className="mt-3 flex justify-center">
        <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => {
          navigator.clipboard.writeText(url.current).then(
            () => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }
          );
        }}
      >
        {copied ? (
            <HandThumbUpIcon
            className="-ml-1 mr-3 h-5 w-5"
            aria-hidden="true"
          />
          ) :(
          <DocumentDuplicateIcon
            className="-ml-1 mr-3 h-5 w-5"
            aria-hidden="true"
          />)}
        COPY BROWSERINFO LINK TO CLIPBOARD
      </button>
      </div>
    </div>
  );
};

export default UrlCopy;
