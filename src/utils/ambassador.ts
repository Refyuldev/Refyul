"use server";

import { AmbassadorApplicationBody } from "@/types/ambassador";

export async function submitAmbassadorApplication(
  data: AmbassadorApplicationBody,
) {
  try {
    const request = await fetch(
      `${process.env.BASE_URL}/ambassadors/applications`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    const response = await request.json();
    if (!response.success) {
      return {
        status: false,
        data: null,
        message: response.message || "Failed to submit application",
      };
    }
    return { status: true, data: response.data, message: response.message };
  } catch (error) {
    return {
      status: false,
      data: null,
      message: "An unexpected error occurred",
    };
  }
}
