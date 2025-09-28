import { api } from "encore.dev/api";
import { Query } from "encore.dev/api";
import db from "../db";

export interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone?: string;
  serviceType: string;
  propertyType: string;
  area: string;
  message?: string;
  urgent: boolean;
  createdAt: Date;
  status: string;
}

export interface ListInquiriesParams {
  limit?: Query<number>;
  status?: Query<string>;
}

export interface ListInquiriesResponse {
  inquiries: Inquiry[];
}

// Lists contact inquiries for admin review.
export const list = api<ListInquiriesParams, ListInquiriesResponse>(
  { expose: true, method: "GET", path: "/contact/inquiries" },
  async (req) => {
    const limit = req.limit || 50;
    const status = req.status;

    let query = `
      SELECT id, name, email, phone, service_type, property_type, area, message, urgent, created_at, status
      FROM inquiries
    `;
    const params: any[] = [];

    if (status) {
      query += ` WHERE status = $1`;
      params.push(status);
      query += ` ORDER BY created_at DESC LIMIT $2`;
      params.push(limit);
    } else {
      query += ` ORDER BY created_at DESC LIMIT $1`;
      params.push(limit);
    }

    const rows = await db.rawQueryAll<{
      id: number;
      name: string;
      email: string;
      phone?: string;
      service_type: string;
      property_type: string;
      area: string;
      message?: string;
      urgent: boolean;
      created_at: Date;
      status: string;
    }>(query, ...params);

    const inquiries: Inquiry[] = rows.map(row => ({
      id: row.id,
      name: row.name,
      email: row.email,
      phone: row.phone,
      serviceType: row.service_type,
      propertyType: row.property_type,
      area: row.area,
      message: row.message,
      urgent: row.urgent,
      createdAt: row.created_at,
      status: row.status,
    }));

    return { inquiries };
  }
);
