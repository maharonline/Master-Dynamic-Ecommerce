

import { PrismicRichText } from "@prismicio/react";
import { Search } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.FormRequestSlice} FormRequestSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FormRequestSlice>} FormRequestProps
 * @type {import("react").FC<FormRequestProps>}
 */
const FormRequest = ({ slice }: any) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen bg-white px-6 py-10"
    >
      {/* ======= Header with breadcrumb and search ======= */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-6xl mx-auto mb-10 border-b border-gray-200 pb-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-3 md:mb-0">
          <span className="font-semibold text-gray-900">Master & Dynamic</span>{" "}
          <span className="mx-1 text-gray-400">›</span>
          <span>Submit a request</span>
        </div>

        {/* Search bar */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search product name or topic."
            className="w-full border text-black border-gray-300 rounded-md pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <Search className="h-4 w-4 absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* ======= Main form ======= */}
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <div className="mb-8">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-3xl font-semibold text-gray-900">
                  {children}
                </h1>
              ),
            }}
          />
        </div>

        {/* Form */}
        <form className="space-y-6 text-black">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {slice.primary.email_label || "Your email address"}
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {slice.primary.subject_label}
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {slice.primary.description_label}
            </label>
            <textarea
              placeholder="Please enter the details of your request..."
              rows={4}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              {slice.primary.short_description}
            </p>
          </div>

          {/* Request Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {slice.primary.request_type_label}
            </label>
            <select className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-400 outline-none">
              <option>{slice.primary.request_type_options}</option>

            </select>
            <p className="text-xs text-gray-500 mt-1">
              {slice.primary.request_type_description}
            </p>
          </div>

          {/* ======= Attachments Section ======= */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {slice.primary.attachments_label}

            </label>

            {/* File upload box */}
            <div className="w-full border border-gray-300 rounded-md p-6 text-center text-sm text-gray-500 bg-gray-50">
              <p className="font-medium text-gray-600">
                <input type="file" placeholder="Add File" />
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded shadow"
            >
              {slice.primary.submit_label || "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormRequest;
