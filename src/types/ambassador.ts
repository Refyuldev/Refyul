export type AmbassadorApplicationBody = {
  fullName: string;
  whatsappPhone: string;
  email: string;
  lagosZone: string;
  promotionMethod: string;
  socialHandles?: string;
  estimatedReach?: string;
  motivation?: string;
  agreedToTerms: boolean;
};

export type AmbassadorApplicationResponse = {
  success: boolean;
  message: string;
  data?: {
    application: {
      _id: string;
      fullName: string;
      email: string;
      status: string;
      createdAt: string;
    };
  };
  errors?: any[];
};
