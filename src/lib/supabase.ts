import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface ContactRequest {
  id?: string
  name: string
  email: string
  company?: string
  interest_type: 'build' | 'training' | 'talent' | 'general'
  message: string
  status?: 'new' | 'contacted' | 'closed'
  created_at?: string
}

export interface Enrollment {
  id?: string
  course_id: string
  full_name: string
  email: string
  phone: string
  experience_level: string
  status?: 'pending' | 'confirmed' | 'completed'
  created_at?: string
}

// Database functions
export async function submitContactRequest(data: Omit<ContactRequest, 'id' | 'created_at' | 'status'>) {
  const { data: result, error } = await supabase
    .from('contact_requests')
    .insert([{ ...data, status: 'new' }])
    .select()
    .single()
  
  if (error) throw error
  return result
}

export async function submitEnrollment(data: Omit<Enrollment, 'id' | 'created_at' | 'status'>) {
  const { data: result, error } = await supabase
    .from('enrollments')
    .insert([{ ...data, status: 'pending' }])
    .select()
    .single()
  
  if (error) throw error
  return result
}
