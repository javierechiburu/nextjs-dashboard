'use client'

import SideNav from '@/app/ui/dashboard/sidenav';
import useUser from '@/hooks/useUser';

export default function Layout({ children }: { children: React.ReactNode }) {
    const user = useUser();
    return (
      (user && <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-gray-800">
      <div className="w-full flex-none md:w-64 bg-gray-900">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>)
    );
  }