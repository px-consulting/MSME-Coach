import {
    BarChart3,
    CreditCard,
    ClipboardCheck,
    GraduationCap,
    DollarSign,
    Search,
    UserPen,
    NotepadText,
  } from "lucide-react";
  
  // Stats Data
  export const statsData = [
    {
      value: "15K+",
      label: "Assessments Completed",
    },
    {
      value: "200+",
      label: "Industries Served",
    },
    {
      value: "95%",
      label: "User Satisfaction Rate",
    },
    {
      value: "3K+",
      label: "Hours of Specialized Advice",
    },
  ];
  
  // Features Data
  export const featuresData = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Advanced Analytics",
      isLive:true,
      description:
        "Unlock business insights with AI-powered analytics and track your growth through an intuitive dashboard",
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-blue-600" />,
      title: "360° Business Maturity Assessment",
      isLive:true,
      description:
        "Answer a few questions to receive a diagnostic report on your business",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Book an Expert Consultation",
      isLive:true,
      description: "Schedule a consultation with our experienced team to receive advanced strategies and personalized guidance",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: "Check Funding Readiness",
      isLive:true,
      description: "Assess business readiness for funding and get guidance on necessary documents, data, and local funding options",
    },
    {
      icon: <NotepadText className="h-8 w-8 text-blue-600" />,
      title: "Create a Business Plan",
      isLive:true,
      description: "Quickly build a comprehensive business plan by simply answering a few guided questions",
    },
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: "Find the Perfect Consultant for Your Business",
      isLive:false,
      description: "Match with the ideal consultant from a network of 10k+ MSME experts, specific to your business needs",
    },
  ];
  
  // How It Works Data
  export const howItWorksData = [
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "1. Create Your Account",
      description:
        "Get started in minutes with our simple and secure sign-up process",
    },
    {
      icon: <UserPen className="h-8 w-8 text-blue-600" />,
      title: "2. Complete Your Business Profile",
      description:
        "Provide key information about your business to get tailored recommendations and resources",
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-blue-600" />,
      title: "3. Assess Your Business Maturity",
      description:
        "Complete assessments to receive a comprehensive report on your business maturity and growth potential",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "4. Book an Expert Consultation",
      description:
        "For in-depth analysis and personalized guidance, schedule an expert consultation",
    },
  ];
  
  // Testimonials Data
  export const testimonialsData = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      quote:
        "Msme Coach has transformed how I manage my business.The AI insights have helped me identify cost-saving opportunities I never knew existed.",
    },
    {
      name: "Michael Chen",
      role: "Freelancer",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote:
        "The expert guidance was incredibly helpful, offering valuable insights that drove meaningful improvements in my business.",
    },
    {
      name: "Emily Rodriguez",
      role: "Financial Advisor",
      image: "https://randomuser.me/api/portraits/women/74.jpg",
      quote:
        "I recommend Msme Coach to all my fellow business owners. The funding readiness report and detailed analytics make it perfect for international investors.",
    },
  ];