"use server";

import { waitlistBody } from "@/types/waitlist";

export async function sendWaitlist(formData: waitlistBody) {
  try {
    const request = await fetch("https://refycl.onrender.com/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const response = await request.json();
    if (response?.data) {
      return {
        status: true,
        message: response?.message ?? "Successfully joined the waitlist!",
        data: response?.data,
      };
    } else {
      return {
        status: false,
        message: response?.details ?? response?.message ?? "Error",
        data: null,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Something went wrong!!",
      data: null,
    };
  }
}
