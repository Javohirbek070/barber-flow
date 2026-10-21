export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      salons: {
        Row: {
          id: string;
          name: string;
          slug: string;
          currency: string;
          timezone: string;
          phone: string | null;
          email: string;
          address: string | null;
          city: string | null;
          country: string | null;
          tier: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          currency?: string;
          timezone?: string;
          phone?: string | null;
          email: string;
          address?: string | null;
          city?: string | null;
          country?: string | null;
          tier?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          currency?: string;
          timezone?: string;
          phone?: string | null;
          email?: string;
          address?: string | null;
          city?: string | null;
          country?: string | null;
          tier?: string;
          updated_at?: string;
        };
      };
      barbers: {
        Row: {
          id: string;
          salon_id: string;
          user_id: string | null;
          name: string;
          email: string;
          phone: string | null;
          role: string;
          specialties: string[];
          is_active: boolean;
          color_tag: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          salon_id: string;
          user_id?: string | null;
          name: string;
          email: string;
          phone?: string | null;
          role?: string;
          specialties?: string[];
          is_active?: boolean;
          color_tag?: string | null;
          created_at?: string;
        };
        Update: {
          salon_id?: string;
          user_id?: string | null;
          name?: string;
          email?: string;
          phone?: string | null;
          role?: string;
          specialties?: string[];
          is_active?: boolean;
          color_tag?: string | null;
        };
      };
      services: {
        Row: {
          id: string;
          salon_id: string;
          name: string;
          description: string | null;
          duration_minutes: number;
          price_cents: number;
          category: string;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          salon_id: string;
          name: string;
          description?: string | null;
          duration_minutes: number;
          price_cents: number;
          category?: string;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          name?: string;
          description?: string | null;
          duration_minutes?: number;
          price_cents?: number;
          category?: string;
          is_active?: boolean;
        };
      };
      appointments: {
        Row: {
          id: string;
          salon_id: string;
          barber_id: string;
          customer_name: string;
          customer_phone: string;
          customer_email: string;
          service_id: string;
          duration_minutes: number;
          price_cents: number;
          status: string;
          start_time: string;
          end_time: string;
          notes: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          salon_id: string;
          barber_id: string;
          customer_name: string;
          customer_phone: string;
          customer_email: string;
          service_id: string;
          duration_minutes: number;
          price_cents: number;
          status?: string;
          start_time: string;
          end_time: string;
          notes?: string | null;
          created_at?: string;
        };
        Update: {
          barber_id?: string;
          customer_name?: string;
          customer_phone?: string;
          customer_email?: string;
          service_id?: string;
          duration_minutes?: number;
          price_cents?: number;
          status?: string;
          start_time?: string;
          end_time?: string;
          notes?: string | null;
        };
      };
    };
  };
}
