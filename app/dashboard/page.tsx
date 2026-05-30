import DashboardClient from "@/components/DashboardClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Dashboard | Tehlil Khan",
  description: "Real-time metrics on system efficiency, cost reduction, and delivery performance.",
};

export default function DashboardPage() {
  return <DashboardClient />;
}
