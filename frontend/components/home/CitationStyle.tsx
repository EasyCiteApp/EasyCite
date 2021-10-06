import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CitingStyle } from "../types/CitingStyle";

interface CitationStyleProps {
  citationStyles: CitingStyle[],
  styleSelected: CitingStyle,
  handleStyleSelected: (style: CitingStyle) => void
}

const CitationStyle = ({ citationStyles, styleSelected, handleStyleSelected }: CitationStyleProps) => {
  return (
    <Fragment>
      <Listbox
        as="div"
        className="space-y-1 w-48"
        value={styleSelected}
        onChange={(style: CitingStyle) => {
          handleStyleSelected(style)
        }}
      >
        {({ open }) => (
          <>
            <div className="relative">
              <span className="inline-block w-full">
                <Listbox.Button className="cursor-default relative w-full pl-3 pr-10 py-2 text-left outline-none transition ease-in-out duration-150 sm:leading-5">
                  <span className="block truncate text-gray-700">
                    {styleSelected.citationShortName ? styleSelected.citationShortName : styleSelected.citationName}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-600"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Listbox.Button>
              </span>

              <Transition
                show={open}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="absolute mt-4 w-90 rounded-md bg-white shadow-lg text-left "
              >
                <Listbox.Options
                  static
                  className="max-h-90 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                >
                  {citationStyles.map((citationStyle, index) => (
                    <Listbox.Option key={index} value={citationStyle}>
                      {({ selected, active }) => (
                        <div
                          className={`${
                            active
                              ? "text-white bg-purple-600"
                              : "text-gray-900"
                          } cursor-default select-none relative py-2 pl-8 pr-4`}
                        >
                          <span
                            className={`${
                              selected ? "font-semibold" : "font-normal"
                            } block truncate`}
                          >
                            {citationStyle.citationName}
                          </span>
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </Fragment>
  );
};

export default CitationStyle;
