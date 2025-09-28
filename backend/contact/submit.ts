import { api } from "encore.dev/api";
import db from "../db";

export interface ContactInquiry {
  name: string;
  email: string;
  phone?: string;
  serviceType: string;
  propertyType: string;
  area: string;
  message?: string;
  urgent: boolean;
}

export interface ContactResponse {
  success: boolean;
  inquiryId: number;
}

// Submits a new contact inquiry for pressure washing services.
export const submit = api<ContactInquiry, ContactResponse>(
  { expose: true, method: "POST", path: "/contact" },
  async (req) => {
    const result = await db.queryRow<{ id: number }>`
      INSERT INTO inquiries (name, email, phone, service_type, property_type, area, message, urgent)
      VALUES (${req.name}, ${req.email}, ${req.phone || null}, ${req.serviceType}, ${req.propertyType}, ${req.area}, ${req.message || null}, ${req.urgent})
      RETURNING id
    `;

    if (!result) {
      throw new Error("Failed to create inquiry");
    }

    return {
      success: true,
      inquiryId: result.id,
    };
  }
);
