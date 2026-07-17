"use client";

import React, { useState, ChangeEvent } from "react";
import { submitAmbassadorApplication } from "@/utils/ambassador";
import { ErrorContainer, SuccessContainer } from "./notifContainer";

export const AmbassadorForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean | string>(false);
  const [isSuccess, setIsSuccess] = useState<boolean | string>(false);

  const [formData, setFormData] = useState({
    fullName: "",
    whatsappPhone: "",
    email: "",
    lagosZone: "",
    promotionMethod: "",
    socialHandles: "",
    estimatedReach: "",
    motivation: "",
    agreedToTerms: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    const { status, message } = await submitAmbassadorApplication(formData);

    if (!status) {
      setIsError(message || "Unable to proceed");
      setTimeout(() => setIsError(false), 4000);
    } else {
      setIsSuccess(message || "Application submitted successfully.");
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: "",
          whatsappPhone: "",
          email: "",
          lagosZone: "",
          promotionMethod: "",
          socialHandles: "",
          estimatedReach: "",
          motivation: "",
          agreedToTerms: false,
        });
      }, 4000);
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full bg-white rounded-lg border border-[#D8E7DF] md:p-12 p-6 relative">
      <h2 className="md:text-xl text-lg font-bold text-[#12393B] mb-6">
        Ambassador application
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col justify-start items-start gap-4"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full name */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#12393B]">
              Full name *
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="First and last name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-[#FBFEFC] border border-[#D8E7DF] rounded-xl py-3 px-4 outline-none placeholder:text-[#717182] text-sm"
              required
            />
          </div>

          {/* WhatsApp phone number */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#12393B]">
              WhatsApp phone number *
            </label>
            <input
              type="tel"
              name="whatsappPhone"
              placeholder="+234 801 234 5678"
              value={formData.whatsappPhone}
              onChange={handleChange}
              className="w-full bg-[#FBFEFC] border border-[#D8E7DF] rounded-xl py-3 px-4 outline-none placeholder:text-[#717182] text-sm"
              required
            />
          </div>

          {/* Email address */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#12393B]">
              Email address *
            </label>
            <input
              type="email"
              name="email"
              placeholder="name@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#FBFEFC] border border-[#D8E7DF] rounded-xl py-3 px-4 outline-none placeholder:text-[#717182] text-sm"
              required
            />
          </div>

          {/* Lagos area / zone */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#12393B]">
              Lagos area / zone *
            </label>
            <input
              type="text"
              name="lagosZone"
              placeholder="Lekki, Ikeja..."
              value={formData.lagosZone}
              onChange={handleChange}
              className="w-full bg-[#FBFEFC] border border-[#D8E7DF] rounded-xl py-3 px-4 outline-none placeholder:text-[#717182] text-sm"
              required
            />
          </div>
        </div>

        {/* How will you promote Refyul? */}
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#12393B]">
            How will you promote Refyul? *
          </label>
          <input
            type="text"
            name="promotionMethod"
            placeholder="WhatsApp groups, campus, estate..."
            value={formData.promotionMethod}
            onChange={handleChange}
            className="w-full bg-[#FBFEFC] border border-[#D8E7DF] rounded-xl py-3 px-4 outline-none placeholder:text-[#717182] text-sm"
            required
          />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Social media handle(s) */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#12393B]">
              Social media handle(s)
            </label>
            <input
              type="text"
              name="socialHandles"
              placeholder="@username"
              value={formData.socialHandles}
              onChange={handleChange}
              className="w-full bg-[#FBFEFC] border border-[#D8E7DF] rounded-xl py-3 px-4 outline-none placeholder:text-[#717182] text-sm"
            />
          </div>

          {/* Estimated audience / reach */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#12393B]">
              Estimated audience / reach
            </label>
            <input
              type="text"
              name="estimatedReach"
              placeholder="100-1,000"
              value={formData.estimatedReach}
              onChange={handleChange}
              className="w-full bg-[#FBFEFC] border border-[#D8E7DF] rounded-xl py-3 px-4 outline-none placeholder:text-[#717182] text-sm"
            />
          </div>
        </div>

        {/* Why do you want to join? */}
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#12393B]">
            Why do you want to join?
          </label>
          <textarea
            name="motivation"
            placeholder="1-2 short sentences"
            value={formData.motivation}
            onChange={handleChange}
            rows={3}
            className="w-full resize-none bg-[#FBFEFC] border border-[#D8E7DF] rounded-xl py-3 px-4 outline-none placeholder:text-[#717182] text-sm"
          />
        </div>

        {/* Terms Checkbox */}
        <div className="w-full flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            id="agreedToTerms"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            className="w-5 h-5 rounded border-[#D8E7DF] text-[#009B5A] focus:ring-[#009B5A] cursor-pointer"
            required
          />
          <label
            htmlFor="agreedToTerms"
            className="text-sm font-medium text-[#12393B] cursor-pointer"
          >
            I agree to the Ambassador Terms *
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#009B5A] text-white font-semibold py-4 rounded-full mt-4 hover:bg-[#00824b] transition-colors cursor-pointer outline-none disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? "Submitting..." : "Submit Application"}
        </button>
      </form>

      {isSuccess && (
        <SuccessContainer>
          <p className="w-full text-center text-sm leading-none text-white">
            {isSuccess}
          </p>
        </SuccessContainer>
      )}
      {isError && (
        <ErrorContainer>
          <p className="w-full text-center text-sm leading-none text-white">
            {isError}
          </p>
        </ErrorContainer>
      )}
    </div>
  );
};
