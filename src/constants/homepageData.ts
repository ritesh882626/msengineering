import {
  Cable,
  CheckCircle2,
  Factory,
  Gauge,
  Layers,
  LucideIcon,
  PanelTop,
  Route,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Wrench,
  Zap
} from "lucide-react";

export type IconItem = {
  title: string;
  description?: string;
  icon: LucideIcon;
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" }
];

export const trustItems: IconItem[] = [
  { title: "Electroplating Plants", icon: Factory },
  { title: "Surface Treatment Systems", icon: Layers },
  { title: "Process Engineering", icon: Route },
  { title: "Automation Support", icon: Cable },
  { title: "Maintenance Guidance", icon: Wrench }
];

export const aboutPoints = [
  "Electroplating plant planning",
  "Surface treatment process setup",
  "Industrial equipment integration",
  "Custom layout and workflow planning",
  "Operational reliability",
  "Long-term technical support"
];

export const solutions: IconItem[] = [
  {
    title: "Automatic Electroplating Plants",
    description: "For businesses that need better consistency, productivity, and controlled operations.",
    icon: Factory
  },
  {
    title: "Semi-Automatic Electroplating Plants",
    description: "For manufacturers balancing automation, flexibility, and cost control.",
    icon: Settings
  },
  {
    title: "Manual Electroplating Plants",
    description: "For small-scale or specialized operations requiring practical plant setups.",
    icon: SlidersHorizontal
  },
  {
    title: "Surface Treatment Systems",
    description: "Systems for cleaning, preparation, coating, finishing, and post-treatment processes.",
    icon: ShieldCheck
  },
  {
    title: "Process Tanks & Industrial Setup",
    description: "Durable tanks, layouts, and plant structures designed for real production environments.",
    icon: Layers
  },
  {
    title: "Control Panels & Automation Support",
    description: "Electrical and automation-ready systems for process monitoring and operational control.",
    icon: Cable
  }
];

export const processSteps = [
  "Requirement Study",
  "Plant Layout Planning",
  "Equipment & Tank Selection",
  "Process Flow Design",
  "Installation Support",
  "Testing & Optimization",
  "Training & Maintenance Support"
];

export const industries: IconItem[] = [
  { title: "Automotive Components", icon: Gauge },
  { title: "Hardware Manufacturing", icon: Wrench },
  { title: "Electrical Components", icon: Zap },
  { title: "Metal Fabrication", icon: Factory },
  { title: "Fasteners & Tools", icon: Settings },
  { title: "Aerospace Components", icon: Route },
  { title: "Defence Manufacturing", icon: ShieldCheck },
  { title: "Industrial Equipment", icon: PanelTop },
  { title: "Consumer Durable Parts", icon: Layers },
  { title: "Engineering Workshops", icon: Cable }
];

export const reasons: IconItem[] = [
  {
    title: "Engineering-Led Approach",
    description:
      "We plan electroplating plant systems with practical industrial requirements, workflow efficiency, and long-term operations in mind.",
    icon: Route
  },
  {
    title: "Custom Plant Solutions",
    description:
      "Every manufacturing setup is different. We design plant solutions around your process, capacity, space, and production needs.",
    icon: SlidersHorizontal
  },
  {
    title: "Built for Durability",
    description:
      "Our focus is on plant systems that can perform in demanding industrial environments with safety, reliability, and consistency.",
    icon: ShieldCheck
  },
  {
    title: "Support Beyond Setup",
    description:
      "We support clients with installation guidance, testing, optimization, training, and maintenance planning.",
    icon: CheckCircle2
  }
];

export const showcase = [
  "Plant layout planning",
  "Tank line setup",
  "Control panel integration",
  "Surface treatment workflow",
  "Safety and ventilation planning",
  "Maintenance-ready system design"
];

export const qualityCards: IconItem[] = [
  { title: "Safety-focused layout", icon: ShieldCheck },
  { title: "Maintenance access", icon: Wrench },
  { title: "Chemical process planning", icon: Layers },
  { title: "Electrical and control support", icon: Cable },
  { title: "Workflow efficiency", icon: Route },
  { title: "Long-term support", icon: CheckCircle2 }
];

export const requirementTypes = [
  "Automatic Electroplating Plant",
  "Semi-Automatic Electroplating Plant",
  "Manual Electroplating Plant",
  "Surface Treatment System",
  "Maintenance / Support",
  "Other Requirement"
];
