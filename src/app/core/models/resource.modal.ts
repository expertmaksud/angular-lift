export interface Resource {
  id: number;
  resourceType: number;
  owns: string;
  worth: number;
  isSingle: boolean;
  bankName: string;
  acNumber: string;
  location: string;
}
