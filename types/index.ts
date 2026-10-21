export type Role = "owner" | "barber" | "customer";

export interface Salon {
  id: string;
  name: string;
  slug: string;
  currency: string;
  timezone: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  country: string;
  tier: "starter" | "pro" | "business";
  openingHours: {
    [key: string]: { open: string; close: string; isOpen: boolean };
  };
}

export interface Barber {
  id: string;
  salonId: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  role: "owner" | "barber";
  specialties: string[];
  isActive: boolean;
  colorTag: string;
  appointmentsToday: number;
}

export interface Service {
  id: string;
  salonId: string;
  name: string;
  description: string;
  durationMinutes: number;
  price: number;
  category: "Haircut" | "Beard" | "Combo" | "Treatment";
  isActive: boolean;
}

export type AppointmentStatus =
  | "confirmed"
  | "in_progress"
  | "completed"
  | "cancelled"
  | "no_show";

export interface Appointment {
  id: string;
  salonId: string;
  barberId: string;
  barberName: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  serviceId: string;
  serviceName: string;
  durationMinutes: number;
  price: number;
  status: AppointmentStatus;
  startTime: string; // ISO 8601 string
  endTime: string;
  notes?: string;
}

export interface ActivityItem {
  id: string;
  salonId: string;
  type: "booking_created" | "booking_completed" | "booking_cancelled" | "client_arrived";
  message: string;
  actor: string;
  timestamp: string;
}

export interface DashboardMetrics {
  todayBookingsCount: number;
  todayCompletedCount: number;
  todayRevenue: number;
  occupancyRatePercent: number;
  upcomingCount: number;
}
