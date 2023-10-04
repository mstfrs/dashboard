
import TopCards from "@/components/TopCards/page"
import BarChart from "@/components/BarChart/page"
import RecentOrders from "@/components/RecentOrders/page"

export default function Home() {
  return (
    <div className='bg-gray-300  ml-20'>

      <TopCards/>
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart/>
        <RecentOrders/>
      </div>
    
    </div>
  )
}
