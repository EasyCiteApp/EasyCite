import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const CitationType = ({citationStyles, handleStyleSelected}) => {
  return (
    <Fragment>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center items-center w-40 text-base font-medium text-gray-600">
            Citation Style
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 w-90 mt-6 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-auto">
            <div className="px-4 py-1 truncate">
              {citationStyles.map((citationStyle, index) => (
                <Menu.Item key={index} value={citationStyle.citationFile}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "text-indigo-600" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-base`}
                      onClick={handleStyleSelected}
                    >
                      {citationStyle.citationName}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </Fragment>
  );
};

export default CitationType;
