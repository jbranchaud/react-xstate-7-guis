import React from "react";
import Counter from "../../src/components/1/counter.jsx";

const Task1 = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-12">
          <h1 className="text-center sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            1. Counter
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            The task is to build a frame containing a label or read-only
            textfield T and a button B. Initially, the value in T is “0” and
            each click of B increases the value in T by one.
          </p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Counter serves as a gentle introduction to the basics of the
            language, paradigm and toolkit for one of the simplest GUI
            applications imaginable. Thus, Counter reveals the required
            scaffolding and how the very basic features work together to build a
            GUI application. A good solution will have almost no scaffolding.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <Counter />
            <div></div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <span className="inline-flex">
                Josh Branchaud{" "}
                <a
                  className="ml-4 text-gray-500"
                  href="https://twitter.com/jbrancha"
                >
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Task1;
