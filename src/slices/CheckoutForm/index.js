"use client"
import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Info, InfoIcon, Lock, Smartphone } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.CheckoutFormSlice} CheckoutFormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CheckoutFormSlice>} CheckoutFormProps
 * @type {import("react").FC<CheckoutFormProps>}
 */

const CheckoutForm = ({ slice }) => {
  const handleApplyButton=()=>{
    alert("Discount Apply")
  }
  const handlePayButton=()=>{
    alert("Pay Apply")
  }
  return (
    <section
      data-slice-type={slice?.slice_type}
      data-slice-variation={slice?.variation}
      className="min-h-screen flex flex-col lg:flex-row text-neutral-700 bg-white"
    >
      {/* LEFT: Form */}
      <div className="w-full lg:w-1/2 border-r border-neutral-200 px-6 md:px-16 py-12 space-y-10">
        {/* EXPRESS */}
        <div className="space-y-3">
          <h3 className="text-center text-neutral-600 text-sm font-medium">
            {slice?.primary?.express_title || "Express checkout"}
          </h3>

          <div className="grid grid-cols-4 ">
            {slice?.primary?.express_options?.map((item, i) => (
              <div
                key={i}
                className=" rounded-md w-full h-12 flex justify-end items-center hover:border-neutral-300 transition"
              >
                <PrismicNextImage
                  field={item.provider_logo}
                  className="object-cover "
                />
              </div>
            ))}
          </div>

          <div className="text-center text-neutral-500 text-sm">
            Show more options <span className="text-neutral-400">⌄</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-neutral-100"></div>
            <span className="text-neutral-400 text-xs uppercase">OR</span>
            <div className="flex-1 h-px bg-neutral-100"></div>
          </div>
        </div>

        {/* CONTACT */}
       
<div className="space-y-3">
  {/* Header */}
  <div className="flex justify-between items-center mb-2">
    <h2 className="text-neutral-900 text-base font-semibold">Contact</h2>
    <a href="#" className="text-sm text-neutral-600 underline">
      Sign in
    </a>
  </div>

  {/* Email Input */}
  <input
    type="email"
    placeholder={slice?.primary?.contact_email_placeholder || "Email"}
    className="flex justify-items-center w-full border border-neutral-200 px-3 h-[56px] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-neutral-300"
  />

  {/* Checkbox */}
  <label className="flex items-center gap-2 text-sm text-neutral-700">
    <input type="checkbox" className="accent-black" />
    {slice?.primary?.contact_news_opt_in || "Email me with news and offers"}
  </label>
</div>

        {/* DELIVERY */}
<div className="space-y-5">
  <div className="text-neutral-900 text-base font-semibold"><PrismicRichText field={slice.primary.delivery_title} /></div>

  {/* Card container */}
  <div className=" p-5 space-y-4 ">

    {/* Country / Region */}
    <div className="w-full">
      <select
        className="w-full border border-neutral-200 rounded-md px-3 h-[58px] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200"
      >
        <option>{slice?.primary?.country_placeholder || "Country/Region"}</option>
      </select>
    </div>

    {/* First & Last Name */}
    <div className="grid grid-cols-2 gap-3">
      <div className="w-full">
        <input
          defaultValue={slice?.primary?.first_name || ""}
          placeholder={slice?.primary?.first_name_placeholder || "First name"}
          className="w-full border border-neutral-200 rounded-md px-3 h-[58px] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200"
        />
      </div>
      <div className="w-full">
        <input
          defaultValue={slice?.primary?.last_name || ""}
          placeholder={slice?.primary?.last_name_placeholder || "Last name"}
          className="w-full border border-neutral-200 rounded-md px-3 h-[58px] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200"
        />
      </div>
    </div>

    {/* Company */}
    <div className="w-full">
      <input
        defaultValue={slice?.primary?.company || ""}
        placeholder={slice?.primary?.company_placeholder || "Company (optional)"}
        className="w-full border border-neutral-200 rounded-md px-3 h-[58px] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200"
      />
    </div>

    {/* Address */}
    <div className="w-full">
      <input
        defaultValue={slice?.primary?.address || ""}
        placeholder={slice?.primary?.address_placeholder || "Address"}
        className="w-full border border-neutral-200 rounded-md px-3 h-[58px] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200"
      />
    </div>

    {/* Apartment / Suite */}
    <div className="w-full">
      <input
        defaultValue={slice?.primary?.apartment_suite || ""}
        placeholder={slice?.primary?.apartment_suite_placeholder || "Apartment, suite, etc. (optional)"}
        className="w-full border border-neutral-200 rounded-md px-3 h-[58px] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200"
      />
    </div>

    {/* City / State / ZIP */}
    <div className="grid grid-cols-3 gap-3">
      <div className="w-full">
        <input
          defaultValue={slice?.primary?.city || ""}
          placeholder={slice?.primary?.city_placeholder || "City"}
          className="w-full border border-neutral-200 rounded-md px-3 h-[58px] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200"
        />
      </div>
      <div className="w-full">
        <input
          defaultValue={slice?.primary?.state || ""}
          placeholder={slice?.primary?.state_placeholder || "State"}
          className="w-full border border-neutral-200 rounded-md px-3 h-[58px] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200"
        />
      </div>
      <div className="w-full">
        <input
          defaultValue={slice?.primary?.zip_code || ""}
          placeholder={slice?.primary?.zip_code_placeholder || "ZIP code"}
          className="w-full border border-neutral-200 rounded-md px-3 h-[58px] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200"
        />
      </div>
    </div>

    {/* Phone */}
    <div className="w-full">
      <input
        defaultValue={slice?.primary?.phone || ""}
        placeholder={slice?.primary?.phone_placeholder || "Phone"}
        className="w-full border border-neutral-200 rounded-md px-3 h-[58px] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200"
      />
    </div>

    {/* Checkbox */}
    <label className="flex items-center gap-2 text-sm text-neutral-700 mt-1">
      <input type="checkbox" className="accent-black" />{" "}
       Text me with news and offerss
    </label>
  </div>
</div>



        {/* SHIPPING METHOD */}
        <div>
          <h2 className="text-neutral-900 text-base font-semibold mb-3">Shipping method</h2>

          <div className="border border-neutral-200 rounded-md p-4 text-sm text-neutral-700 mb-3 bg-neutral-50">
            {slice?.primary?.shipping_address_notice ||
              "Enter your shipping address to view available shipping methods."}
          </div>

          <div className="border border-neutral-200 rounded-md p-4 text-sm bg-neutral-50">
            <div className="flex items-center gap-2 mb-1">
              <InfoIcon className="w-5 h-5 text-neutral-500" />
              <span className="font-medium text-neutral-800">
                {slice?.primary?.shipping_heading || "Shipping Notice"}
              </span>
            </div>
            <p className="text-neutral-700 leading-6 font-medium">
              {slice?.primary?.shipping_description}
             
            </p>
          </div>
        </div>

        {/* PAYMENT */}
        <div className="space-y-4">
          <h2 className="text-neutral-900 text-base font-semibold">Payment</h2>
          <p className="text-xs text-neutral-500">{slice?.primary?.all_transactions_secure_text || "All transactions are secure and encrypted."}</p>

          {/* Credit card block */}
          <label className="flex items-center justify-between border border-neutral-200 rounded-md px-4 py-3 cursor-pointer hover:border-neutral-300 transition">
            <div className="flex items-center gap-3">
              <input type="radio" name="paymentMethod" value="creditCard" className="accent-black w-4 h-4" />
              <span className="text-sm text-neutral-800 font-medium">{slice?.primary?.payment_label || "Credit or debit card"}</span>
            </div>

            <div className="flex items-center gap-2">
              {slice?.primary?.payment_methods?.map((item, i) => (
                <div key={i} className="w-10 h-6 flex justify-center items-center overflow-hidden">
                  <PrismicNextImage field={item.payment_icon} className="object-contain max-h-5" />
                </div>
              ))}
            </div>
          </label>

          {/* Card inputs */}
         

{/* Card Inputs */}
<div className="space-y-3">
  {/* Card number with lock icon */}
  <div className="relative">
    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
    <input
      placeholder={slice?.primary?.card_number_placeholder || "Card number"}
      className="w-full border border-neutral-200 rounded-md pl-9 pr-3 h-[58px] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200"
    />
  </div>

  {/* Expiration date + Security code */}
  <div className="grid grid-cols-2 gap-3">
    <input
      placeholder={slice?.primary?.expiration_date_placeholder || "Expiration date (MM / YY)"}
      className="border border-neutral-200 rounded-md px-3 h-[58px] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200"
    />
    <div className="relative">
      <input
        placeholder={slice?.primary?.security_code_placeholder || "Security code"}
        className="w-full border border-neutral-200 rounded-md pl-3 pr-8 h-[58px] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200"
      />
      <InfoIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer" />
    </div>
  </div>

  {/* Name on card */}
  <input
    placeholder={slice?.primary?.name_on_card_placeholder || "Name on card"}
    className="w-full border border-neutral-200 rounded-md px-3 h-[58px] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200"
  />
</div>

          {/* Use shipping as billing */}
          <label className="flex items-center gap-2 text-sm text-neutral-700">
            <input type="checkbox" className="accent-black" /> {slice?.primary?.use_shipping_as_billing || "Use shipping address as billing address"}
          </label>

          {/* Alternative payments (PayPal, Klarna etc.) */}
          <div className="flex flex-col gap-3">
            {slice?.primary?.shipping_icon?.map((item, i) => (
              <label key={i} className="flex items-center justify-between border border-neutral-200 rounded-md px-4 py-3 cursor-pointer hover:border-neutral-300 transition">
                <div className="flex items-center gap-3">
                  <input type="radio" name="altPayment" value={item.name} className="accent-black w-4 h-4" />
                  <span className="text-sm text-neutral-800 font-medium">{item.name}</span>
                </div>
                <div className="w-14 h-6 flex justify-center items-center overflow-hidden">
                  <PrismicNextImage field={item.shipping_icon} className="object-contain max-h-5" />
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* REMEMBER / MOBILE */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm text-neutral-700">
            <input type="checkbox" className="accent-black" /> {slice?.primary?.save_for_faster_checkout || "Save my information for a faster checkout with a Shop account"}
          </label>

          {/* Mobile input with floating label */}
          <div className="relative">
            <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
            <input
              type="tel"
              id="mobileNumber"
              defaultValue={slice?.primary?.mobile_phone_number || ""}
              placeholder=" "
              className="peer border border-neutral-200 text-neutral-900 rounded-md w-full pl-11 pr-4 py-3 text-base placeholder-transparent focus:outline-none focus:ring-2 focus:ring-neutral-200"
            />
            <label
              htmlFor="mobileNumber"
              className="absolute left-11 top-1/2 -translate-y-1/2 text-neutral-500 text-base bg-white px-1 transition-all duration-200 ease-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-neutral-700"
            >
              Mobile phone number
            </label>
          </div>

          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-neutral-500" strokeWidth={1.6} />
            <p className="text-xs text-neutral-700">Secure and encrypted</p>
          </div>
        </div>

        {/* PAY NOW */}
        <button onClick={handlePayButton} className="w-full bg-neutral-900 text-white py-3 rounded-md text-sm font-medium hover:opacity-95 transition mt-6">
          <PrismicRichText field={slice?.primary?.pay_now_label}  />
        </button>

        {/* FOOTER */}
        <p className="text-neutral-500 text-xs mt-4">
          <PrismicRichText field={slice?.primary?.checkout_footer_notice} />
        </p>
      </div>

      {/* RIGHT: Summary */}
      <aside className="hidden lg:flex flex-col w-1/2 bg-neutral-50 px-16 py-12 shadow-sm">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-start">
            <div className="relative w-20 h-20 bg-neutral-200 rounded-md overflow-hidden mr-4">
              <PrismicNextImage field={slice?.primary?.product_image} className="object-cover" />
              <div className="absolute -top-2 -right-2 bg-neutral-900 text-white text-xs w-6 h-6 flex items-center justify-center rounded">
                {slice?.primary?.product_count || 1}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-neutral-800">{slice?.primary?.product_name}</p>
              <p className="text-xs text-neutral-500">{slice?.primary?.product_description}</p>
            </div>
          </div>

          <p className="text-sm font-medium text-neutral-800">{slice?.primary?.product_price}</p>
        </div>

        <div className="flex mb-6">
          <input
            type="text"
            placeholder={slice?.primary?.discount_placeholder || "Discount code or gift card"}
            className="flex-1 border border-neutral-200 rounded-md px-3 py-2 text-sm bg-white"
          />
          <button onClick={handleApplyButton}  className="ml-2 bg-white border border-neutral-200 text-sm font-medium px-4 rounded-md hover:bg-neutral-100 transition">
            Apply
          </button>
        </div>

        <div className="text-sm space-y-2 border-t border-neutral-200 pt-4">
          <div className="flex justify-between text-neutral-700">
            <span>Subtotal</span>
            <span>{slice?.primary?.subtotal_price || "$0.00"}</span>
          </div>
          <div className="flex justify-between text-neutral-700">
            <span>Shipping</span>
            <span className="text-neutral-400">{slice?.primary?.shipping_text || "Enter shipping address"}</span>
          </div>
          <div className="flex justify-between font-semibold text-neutral-900 text-base pt-2 border-t border-neutral-100">
            <span>Total</span>
            <span>{slice?.primary?.total_price || "USD $0.00"}</span>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default CheckoutForm;
