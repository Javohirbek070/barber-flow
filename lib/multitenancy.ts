/**
 * BarberFlow Multi-Tenancy Architecture and Isolation Guards
 *
 * In BarberFlow, every salon is an isolated tenant identified by a unique `salon_id`.
 *
 * CRITICAL SECURITY INVARIANTS:
 * 1. Never trust client-provided `salon_id` in requests or form submissions.
 * 2. In production, `salon_id` must ALWAYS be resolved server-side from:
 *    a) The verified user's auth token (JWT custom claims `app_metadata.salon_id`), OR
 *    b) A verified membership mapping table `salon_members` where `user_id = auth.uid()`.
 * 3. Supabase Row Level Security (RLS) must be enabled on every table with strict policies:
 *    `salon_id = auth.jwt() -> 'app_metadata' ->> 'salon_id'`
 * 4. Service-role keys must NEVER be bundled in the browser or exposed to public clients.
 */

export interface TenantContext {
  salonId: string;
  salonSlug: string;
  isOwner: boolean;
  role: "owner" | "barber" | "customer";
}

/**
 * Validates that an entity belongs to the active salon tenant context.
 */
export function assertTenantOwnership(
  entitySalonId: string,
  currentSalonId: string
): boolean {
  if (!entitySalonId || !currentSalonId || entitySalonId !== currentSalonId) {
    throw new Error(
      `Tenant Isolation Violation: Attempted to access data belonging to salon [${entitySalonId}] from salon context [${currentSalonId}].`
    );
  }
  return true;
}
