import { Database } from "./database.types";

export type ElectionType = Database["public"]["Tables"]["elections"]["Row"];

export type PositionType = Database["public"]["Tables"]["positions"]["Row"];

export type CandidateType = Database['public']['Tables']['candidates']['Row']

export type VoterType = Database["public"]["Tables"]['eligible_voters']["Row"]
