export interface DataField {
  name: string;
  description: string;
  type: string;
  optional: boolean;
  nullable: boolean;
  notes?: number;
}

export interface DataStructure {
  name: string;
  description?: string;
  fields: DataField[];
  notes?: string[];
}

export interface DataEnumField {
  name: string;
  value: string;
  description?: string;
}

export interface DataEnum {
  name: string;
  description?: string;
  fields: DataEnumField[];
}

export type RequestMethod =
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "HEAD"
  | "DELETE";

export interface DataEndpoint {
  name: string;
  description?: string;
  method: RequestMethod;
  path: string;
}
