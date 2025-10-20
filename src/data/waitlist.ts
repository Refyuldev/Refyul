export interface LocationGroup {
  heading: string;
  areas: string[];
}

export const vehicle_options: string[] = [
  "Car (Sedan/Saloon)",
  "SUV / Jeep",
  "Pickup Truck",
  "Bus / Van",
  "Keke (Tricycle)",
  "Okada (Motorcycle)",
  "Minibus",
  "Light Truck",
  "Heavy Truck",
  "Generator (Home/Industrial)",
  "No Vehicle - Home Use",
];

export const location_data: LocationGroup[] = [
  {
    heading: "Lagos Island & Vicinity",
    areas: [
      "Ikoyi",
      "Victoria Island (VI)",
      "Lekki Phase 1",
      "Lekki Phase 2",
      "Ajah",
      "Sangotedo",
      "Awoyaya",
      "Lakowe",
      "Marwa / Oniru",
      "Osborne Foreshore",
    ],
  },
  {
    heading: "Lagos Mainland & Central",
    areas: [
      "Ikeja (GRA, Opebi, Allen Ave)",
      "Surulere",
      "Yaba",
      "Ebute-Metta",
      "Gbagada",
      "Ilupeju",
      "Maryland",
      "Ojota",
      "Ogba",
      "Magodo",
      "Omole",
    ],
  },
  {
    heading: "Mainland & Western Areas",
    areas: [
      "Apapa",
      "Amuwo-Odofin (Festac Town)",
      "Satellite Town",
      "Ojo",
      "Alaba",
      "Badagry",
    ],
  },
  {
    heading: "Mainland & Northern Areas",
    areas: ["Agege", "Ifako-Ijaiye", "Iju-Ishaga", "Abule-Egba"],
  },
];
