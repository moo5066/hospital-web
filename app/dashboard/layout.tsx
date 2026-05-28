import  Sidebar  from "../components/Sidebar";
// import Header from "../components/Header"; 
import Navbar from "../components/Navbar";


export default function DashboardLayout( { children }: { children: React.ReactNode }) { 

  return ( 
    <div className="flex flex-col h-screen"> 
    
      <Navbar /> 

<div className="flex flex-row flex-1">
  <Sidebar/>

<main className="flex-1 overflow-auto bg-gray-100 p-5">
{children}
</main>

</div>
</div>



  );
}
