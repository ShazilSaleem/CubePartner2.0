"use server";

export type ConsultationState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitConsultation(
  _previous: ConsultationState,
  formData: FormData,
): Promise<ConsultationState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();

  if (!name || !email || !service) {
    return { status: "error", message: "Please fill in your name, email and the service you need." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // TODO: deliver the enquiry to the firm (email provider or CRM). Until that
  // integration exists the request is logged on the server only.
  console.log("Consultation request", { name, email, phone, service });

  return {
    status: "success",
    message: "Thank you. One of our chartered accountants will be in touch shortly.",
  };
}
