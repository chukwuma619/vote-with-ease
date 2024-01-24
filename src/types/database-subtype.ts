import { Database } from "./database.types";

export type ElectionType = Database["public"]["Tables"]["elections"]["Row"];

export type PositionType = Database["public"]["Tables"]["positions"]["Row"];
