export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  condition: 'New' | 'Pre-owned';
  mileage: number;
  engine: string;
  transmission: string;
  fuelType: string;
  description: string;
  features: string[];
  images: string[];
}

export const cars: Car[] = [
  {
    id: '1',
    make: 'Mercedes-Benz',
    model: 'S-Class S580',
    year: 2024,
    price: 125000,
    condition: 'New',
    mileage: 0,
    engine: '4.0L V8 Biturbo',
    transmission: '9G-TRONIC Automatic',
    fuelType: 'Gasoline',
    description: "The pinnacle of luxury automotive engineering. The S-Class is the flagship sedan that defines the standard for all others.",
    features: ['Burmester 4D Surround Sound', 'Nappa Leather', 'Panoramic Roof', 'MBUX Infotainment'],
    images: ['https://storage.googleapis.com/dala-prod-public-storage/generated-images/90a17fe5-9244-48ab-b2e4-aee1265a787a/mercedes-s-class-1ab48520-1779365303467.webp']
  },
  {
    id: '2',
    make: 'BMW',
    model: 'M8 Competition',
    year: 2023,
    price: 145000,
    condition: 'Pre-owned',
    mileage: 5000,
    engine: '4.4L V8 BMW M TwinPower Turbo',
    transmission: '8-Speed M Steptronic',
    fuelType: 'Gasoline',
    description: "Experience pure performance. The BMW M8 Competition is the ultimate expression of luxury and speed.",
    features: ['M Carbon Ceramic Brakes', 'Head-up Display', 'Carbon Fiber Interior', 'Adaptive M Suspension'],
    images: ['https://storage.googleapis.com/dala-prod-public-storage/generated-images/90a17fe5-9244-48ab-b2e4-aee1265a787a/bmw-m8-57917eb5-1779365303916.webp']
  },
  {
    id: '3',
    make: 'Land Rover',
    model: 'Range Rover Autobiography',
    year: 2024,
    price: 165000,
    condition: 'New',
    mileage: 0,
    engine: '4.4L V8 Twin-Turbo',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    description: "The world's most refined SUV. The Range Rover Autobiography offers unparalleled comfort and capability.",
    features: ['24-way Heated Seats', 'All-Wheel Steering', 'Meridian Signature Sound', 'Executive Rear Seating'],
    images: ['https://storage.googleapis.com/dala-prod-public-storage/generated-images/90a17fe5-9244-48ab-b2e4-aee1265a787a/range-rover-574f714f-1779365303831.webp']
  },
  {
    id: '4',
    make: 'Rolls-Royce',
    model: 'Ghost',
    year: 2022,
    price: 340000,
    condition: 'Pre-owned',
    mileage: 2500,
    engine: '6.75L V12',
    transmission: 'Satellite Aided Transmission',
    fuelType: 'Gasoline',
    description: "Post-opulence design meets effortless performance. The Ghost is the most advanced Rolls-Royce yet.",
    features: ['Starlight Headliner', 'Planar Suspension', 'Illuminated Fascia', 'Whisper Cabin'],
    images: ['https://storage.googleapis.com/dala-prod-public-storage/generated-images/90a17fe5-9244-48ab-b2e4-aee1265a787a/rolls-royce-ghost-41056ab6-1779365304849.webp']
  },
  {
    id: '5',
    make: 'Porsche',
    model: '911 GT3 RS',
    year: 2024,
    price: 225000,
    condition: 'New',
    mileage: 0,
    engine: '4.0L Flat-6',
    transmission: '7-Speed PDK',
    fuelType: 'Gasoline',
    description: "Born from racing. The 911 GT3 RS is designed for maximum aerodynamic downforce and uncompromising performance.",
    features: ['Club Sport Package', 'Chrono Package', 'Full Bucket Seats', 'DRS System'],
    images: ['https://storage.googleapis.com/dala-prod-public-storage/generated-images/90a17fe5-9244-48ab-b2e4-aee1265a787a/porsche-911-74386ddd-1779365304379.webp']
  },
  {
    id: '6',
    make: 'Audi',
    model: 'RS7 Sportback',
    year: 2023,
    price: 118000,
    condition: 'Pre-owned',
    mileage: 8000,
    engine: '4.0L V8 TFSI',
    transmission: '8-Speed Tiptronic',
    fuelType: 'Gasoline',
    description: "Elegant design meets beastly performance. The RS7 Sportback is the perfect grand tourer for the modern driver.",
    features: ['Dynamic All-Wheel Steering', 'RS Adaptive Air Suspension', 'Bang & Olufsen 3D Sound', 'Matrix LED Headlights'],
    images: ['https://storage.googleapis.com/dala-prod-public-storage/generated-images/90a17fe5-9244-48ab-b2e4-aee1265a787a/audi-rs7-e70ffce1-1779365304784.webp']
  }
];

export const brands = [
  { name: 'Mercedes-Benz', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_Logo_2010.svg/2048px-Mercedes-Benz_Logo_2010.svg.png' },
  { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png' },
  { name: 'Land Rover', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Land_Rover_logo_2011.svg/2560px-Land_Rover_logo_2011.svg.png' },
  { name: 'Rolls-Royce', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Rolls-Royce_Motor_Cars_logo.svg/1200px-Rolls-Royce_Motor_Cars_logo.svg.png' },
  { name: 'Porsche', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Porsche_logo.svg/1200px-Porsche_logo.svg.png' },
  { name: 'Audi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi_logo_detail.svg/2560px-Audi_logo_detail.svg.png' }
];

export const testimonials = [
  {
    id: '1',
    name: 'James Harrison',
    role: 'CEO, TechVentures',
    content: "The level of service at this dealership is unparalleled. They didn't just sell me a car; they provided a full luxury experience.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '2',
    name: 'Sarah Montgomery',
    role: 'Interior Designer',
    content: "I found my dream Range Rover here. The process was smooth, professional, and entirely stress-free. Highly recommended.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '3',
    name: 'Robert Chen',
    role: 'Real Estate Developer',
    content: "If you are looking for excellence and a curated collection of the finest vehicles, this is the only place to go.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100'
  }
];