"use client";

import { location_data, vehicle_options } from "@/data/waitlist";
import { waitlistBody } from "@/types/waitlist";
import { sendWaitlist } from "@/utils/waitlist";
import { useState, ChangeEvent } from "react";
import { ErrorContainer, SuccessContainer } from "./notifContainer";

export const WaitListForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean | string>(false);
  const [isSuccess, setIsSuccess] = useState<boolean | string>(false);
  const [formData, setFormData] = useState<waitlistBody>({
    fullName: "",
    email: "",
    location: "",
    phoneNumber: "",
    primaryNeeds: [],
    vehicleType: "",
  });
  const [isVehicleOthers, setIsVehicleOthers] = useState<boolean>(false);
  const [isLocationOthers, setIsLocationOthers] = useState<boolean>(false);

  const onChangeVehicleType = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    if (selectedValue === "Other") {
      setIsVehicleOthers(true);
      setFormData({ ...formData, vehicleType: "" });
    } else {
      setIsVehicleOthers(false);
      setFormData({ ...formData, vehicleType: selectedValue });
    }
  };

  const onChangeLocation = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    if (selectedValue === "Other") {
      setIsLocationOthers(true);
      setFormData({ ...formData, location: "" });
    } else {
      setIsLocationOthers(false);
      setFormData({ ...formData, location: selectedValue });
    }
  };

  const handlePrimaryNeedChange = (value: string, isChecked: boolean) => {
    setFormData((prevFormData) => {
      const exists = prevFormData.primaryNeeds.includes(value);

      if (isChecked && !exists) {
        return {
          ...prevFormData,
          primaryNeeds: [...prevFormData.primaryNeeds, value],
        };
      } else if (!isChecked && exists) {
        return {
          ...prevFormData,
          primaryNeeds: prevFormData.primaryNeeds.filter(
            (need) => need !== value
          ),
        };
      }
      return prevFormData;
    });
  };

  const onSubmitWaitlist = async () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.location ||
      !formData.phoneNumber ||
      !formData.primaryNeeds ||
      !formData.vehicleType
    ) {
      setIsSuccess("Kindly fill all details");
      setTimeout(() => setIsSuccess(false), 3000);
      return;
    }
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    const { message, status } = await sendWaitlist(formData);
    if (status) {
      setIsSuccess(message);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: "",
          email: "",
          location: "",
          phoneNumber: "",
          primaryNeeds: [],
          vehicleType: "",
        });
      }, 4000);
    } else if (!status) {
      setIsError(message);
      setTimeout(() => setIsError(false), 4000);
    }

    setIsLoading(false);
  };
  return (
    <>
      <section className="w-full bg-white border border-black/10 rounded-[14px] flex flex-col justify-start items-center gap-6 p-8">
        <div className="w-full max-w-[448px] flex flex-col justify-start items-start gap-2">
          <label htmlFor="fullName" className="text-sm font-normal">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="w-full bg-[#F3F3F5] rounded-lg py-2.5 px-3.5 text-sm placeholder:text-[#717182] outline-none"
            placeholder="Enter your fullname"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            required
          />
        </div>
        <div className="w-full max-w-[448px] flex flex-col justify-start items-start gap-2">
          <label htmlFor="email" className="text-sm font-normal">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full bg-[#F3F3F5] rounded-lg py-2.5 px-3.5 text-sm placeholder:text-[#717182] outline-none"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="w-full max-w-[448px] flex flex-col justify-start items-start gap-2">
          <label htmlFor="phone" className="text-sm font-normal">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="w-full bg-[#F3F3F5] rounded-lg py-2.5 px-3.5 text-sm placeholder:text-[#717182] outline-none"
            placeholder="Enter your Phone number"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            required
          />
        </div>
        <div className="w-full max-w-[448px] flex flex-col justify-start items-start gap-2">
          <label htmlFor="location" className="text-sm font-normal">
            Location in Lagos
          </label>
          <button className="w-full bg-[#F3F3F5] pr-3.5 rounded-lg cursor-pointer">
            <select
              name="location"
              id="location"
              className="py-3.5 px-3.5 text-sm placeholder:text-[#717182] w-full outline-none cursor-pointer"
              value={formData.location}
              onChange={onChangeLocation}
              required
            >
              <option value="">Select your area</option>
              {location_data.map((group) => (
                <optgroup label={group.heading} key={group.heading}>
                  {group.areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </optgroup>
              ))}
              <option value="Other">Other (Please specify)</option>
            </select>
          </button>
          {isLocationOthers && (
            <textarea
              name="vehicle"
              id="vehicle"
              className="w-full resize-none h-[100px] border border-gray-300 rounded-lg outline-none p-3"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            ></textarea>
          )}
        </div>
        <div className="w-full max-w-[448px] flex flex-col justify-start items-start gap-2">
          <p className="text-sm font-normal">
            Primary Need (select all that apply)
          </p>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <label className="w-full flex justify-start items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="pvehicle"
                id="pvehicle"
                className="size-4 border border-[#F3F3F5] rounded- accent-primary outline-none"
                checked={formData.primaryNeeds.includes("Petrol for Vehicle")}
                onChange={(e) =>
                  handlePrimaryNeedChange(
                    "Petrol for Vehicle",
                    e.target.checked
                  )
                }
              />

              <p className="text-sm font-normal text-grey-04">
                Petrol for Vehicle
              </p>
            </label>
            <label className="w-full flex justify-start items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="gfuel"
                id="gfuel"
                className="size-4 border border-[#F3F3F5] rounded- accent-primary outline-none"
                checked={formData.primaryNeeds.includes("Generator Fuel")}
                onChange={(e) =>
                  handlePrimaryNeedChange("Generator Fuel", e.target.checked)
                }
              />
              <p className="text-sm font-normal text-grey-04">Generator Fuel</p>
            </label>
            <label className="w-full flex justify-start items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="cgas"
                id="cgas"
                className="size-4 border border-[#F3F3F5] rounded- accent-primary outline-none"
                checked={formData.primaryNeeds.includes("Cooking Gas")}
                onChange={(e) =>
                  handlePrimaryNeedChange("Cooking Gas", e.target.checked)
                }
              />
              <p className="text-sm font-normal text-grey-04">Cooking Gas</p>
            </label>
          </div>
        </div>
        <div className="w-full max-w-[448px] flex flex-col justify-start items-start gap-2">
          <label htmlFor="vehicle" className="text-sm font-normal">
            Vehicle Type (if applicable)
          </label>
          <button className="w-full bg-[#F3F3F5] pr-3.5 rounded-lg cursor-pointer">
            <select
              name="vehicle"
              id="vehicle"
              className="py-3.5 px-3.5 text-sm placeholder:text-[#717182] w-full outline-none cursor-pointer"
              value={formData.vehicleType}
              onChange={onChangeVehicleType}
              required
            >
              <option value="">Select vehicle type</option>
              {vehicle_options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
              <option value="Other">Other (Please specify)</option>
            </select>
          </button>
          {isVehicleOthers && (
            <textarea
              name="vehicle"
              id="vehicle"
              className="w-full resize-none h-[100px] border border-gray-300 rounded-lg outline-none p-3"
              value={formData.vehicleType}
              onChange={(e) =>
                setFormData({ ...formData, vehicleType: e.target.value })
              }
            ></textarea>
          )}
        </div>
        <button
          type="button"
          className="text-sm font-normal text-white bg-primary py-2 px-3 rounded-lg w-full max-w-[448px] outline-none cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed"
          onClick={() => onSubmitWaitlist()}
          disabled={isLoading}
        >
          {isLoading ? "Adding to waitlist..." : "Join the Waitlist →"}
        </button>
        <p className="text-sm text-[#717182] text-center w-full max-w-[448px]">
          By joining, you&apos;ll get priority access and exclusive launch
          discounts
        </p>
      </section>
      {isError && (
        <ErrorContainer>
          <p className="w-full text-center text-sm leading-none text-white">
            {isError}
          </p>
        </ErrorContainer>
      )}
      {isSuccess && (
        <SuccessContainer>
          <p className="w-full text-center text-sm leading-none text-white">
            {isSuccess}
          </p>
        </SuccessContainer>
      )}
    </>
  );
};
