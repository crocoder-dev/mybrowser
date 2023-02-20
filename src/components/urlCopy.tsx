"use client";
import {
  LinkIcon,
  DocumentDuplicateIcon,
  HandThumbUpIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";

const UrlCopy = () => {
  const url = !document ? "" : document.URL;

  const [copied, setCopied] = useState(false);

  return (
    <div className="p-3">
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <LinkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            disabled
            value={url}
          />
        </div>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          onClick={() => {
            navigator.clipboard.writeText(url).then(
              () => {
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
              }
            );
          }}
        >
          {copied ? (
            <HandThumbUpIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          ) :(
          <DocumentDuplicateIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />)}
        </button>
      </div>
    </div>
  );
};

export default UrlCopy;
