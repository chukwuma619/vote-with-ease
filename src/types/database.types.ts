export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      candidates: {
        Row: {
          created_at: string
          department: string
          full_name: string
          id: string
          level: string
          photo_url: string
          position_id: string
        }
        Insert: {
          created_at?: string
          department: string
          full_name: string
          id?: string
          level: string
          photo_url: string
          position_id: string
        }
        Update: {
          created_at?: string
          department?: string
          full_name?: string
          id?: string
          level?: string
          photo_url?: string
          position_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "candidates_position_id_fkey"
            columns: ["position_id"]
            isOneToOne: false
            referencedRelation: "positions"
            referencedColumns: ["id"]
          }
        ]
      }
      elections: {
        Row: {
          created_at: string
          end_date: string
          id: string
          start_date: string
          status: string
          title: string
          unique_code: string
          user_id: string
        }
        Insert: {
          created_at?: string
          end_date: string
          id?: string
          start_date: string
          status?: string
          title: string
          unique_code: string
          user_id: string
        }
        Update: {
          created_at?: string
          end_date?: string
          id?: string
          start_date?: string
          status?: string
          title?: string
          unique_code?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "elections_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      eligible_voters: {
        Row: {
          created_at: string
          election_unique_code: string | null
          email: string | null
          id: string
        }
        Insert: {
          created_at?: string
          election_unique_code?: string | null
          email?: string | null
          id?: string
        }
        Update: {
          created_at?: string
          election_unique_code?: string | null
          email?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "eligible_voters_election_unique_code_fkey"
            columns: ["election_unique_code"]
            isOneToOne: false
            referencedRelation: "elections"
            referencedColumns: ["unique_code"]
          }
        ]
      }
      positions: {
        Row: {
          created_at: string
          election_unique_code: string
          id: string
          title: string
        }
        Insert: {
          created_at?: string
          election_unique_code: string
          id?: string
          title: string
        }
        Update: {
          created_at?: string
          election_unique_code?: string
          id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "positions_election_unique_code_fkey"
            columns: ["election_unique_code"]
            isOneToOne: false
            referencedRelation: "elections"
            referencedColumns: ["unique_code"]
          }
        ]
      }
      votes: {
        Row: {
          candidate: string | null
          created_at: string
          id: string
          position: string | null
          vote_author: string | null
        }
        Insert: {
          candidate?: string | null
          created_at?: string
          id?: string
          position?: string | null
          vote_author?: string | null
        }
        Update: {
          candidate?: string | null
          created_at?: string
          id?: string
          position?: string | null
          vote_author?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "votes_candidate_fkey"
            columns: ["candidate"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_position_fkey"
            columns: ["position"]
            isOneToOne: false
            referencedRelation: "positions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_vote_author_fkey"
            columns: ["vote_author"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      fetch_positions: {
        Args: {
          unique_code: string
        }
        Returns: {
          created_at: string
          election_unique_code: string
          id: string
          title: string
        }[]
      }
      fetch_single_position: {
        Args: {
          unique_code: string
          title: string
        }
        Returns: {
          created_at: string
          election_unique_code: string
          id: string
          title: string
        }[]
      }
      fetch_user_election: {
        Args: Record<PropertyKey, never>
        Returns: {
          created_at: string
          end_date: string
          id: string
          start_date: string
          status: string
          title: string
          unique_code: string
          user_id: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
