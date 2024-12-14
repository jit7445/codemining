import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

// import { Head } from "next/document";
// import Header from '@/components/Header';
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (

   
    <SidebarProvider>
      
      {/* <Header/> */}
      <AppSidebar />
      {/* <Navbar /> */}
      <main className="w-full">
        <div className="flex flex-row min-w-full">
          {/* <SidebarTrigger className=" bg-red-500 p-4 h-[1rem] w-[2rem]" /> */}
          <div className="w-full flex flex-col gap-4 bg-zinc-900  rounded-lg shadow-lg">
            <Navbar />
           {children}
          </div> 
        </div>
      </main>
 
    </SidebarProvider>

   
  );
}
