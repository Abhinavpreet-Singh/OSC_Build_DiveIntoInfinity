"use client";

import { DashboardPageShell, DashboardPageHeader } from "@/components/dashboard/dashboard-page-shell";
import { Settings as SettingsIcon, Building2, Bell, Shield } from "lucide-react";

const panelBorder = "border border-black/20 dark:border-white/25";
const panelSurface = `${panelBorder} bg-white/80 backdrop-blur-[2px] dark:bg-black/75`;

export default function CompanySettingsPage() {
  return (
    <DashboardPageShell maxWidth="full">
      <DashboardPageHeader
        breadcrumb="Company"
        title="Settings"
        description="Manage your company profile, notifications, and security preferences."
      />
      <div className={`${panelSurface} p-12 text-center`}>
        <SettingsIcon className="w-14 h-14 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
        <h3 className="font-mono text-sm font-bold text-black dark:text-white mb-2">
          Company Settings
        </h3>
        <p className="font-mono text-xs text-gray-400 mb-6 max-w-md mx-auto">
          Configure your organization profile, manage team members, notification preferences, and security policies.
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className={`${panelSurface} p-4 flex flex-col items-center gap-2 w-32`}>
            <Building2 className="w-5 h-5 text-gray-400" />
            <span className="font-mono text-[9px] tracking-wider text-gray-500 uppercase">Profile</span>
          </div>
          <div className={`${panelSurface} p-4 flex flex-col items-center gap-2 w-32`}>
            <Bell className="w-5 h-5 text-gray-400" />
            <span className="font-mono text-[9px] tracking-wider text-gray-500 uppercase">Alerts</span>
          </div>
          <div className={`${panelSurface} p-4 flex flex-col items-center gap-2 w-32`}>
            <Shield className="w-5 h-5 text-gray-400" />
            <span className="font-mono text-[9px] tracking-wider text-gray-500 uppercase">Security</span>
          </div>
        </div>
        <p className="font-mono text-[10px] text-gray-300 dark:text-gray-600 mt-6">
          Full settings panel is coming in a future update.
        </p>
      </div>
    </DashboardPageShell>
  );
}
