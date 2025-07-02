import React from 'react'

function InfoSection() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mt-20">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Find Your Perfect Drive – New, Used & Certified Pre-Owned Cars All in One Place
          </h2>

          <p className="mt-4 text-gray-700">
           Explore new, used, and certified pre-owned cars from trusted dealers and sellers. With smart search and expert support, finding your perfect ride is easy, secure, and hassle-free.
          </p>
        </div>
      </div>

      <div>
        <img
          src="https://imgs.search.brave.com/aF37HudXPt8On542_eaBfkuqZaLT_ELfeylvW0P0sRY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgw/NjUyNzEyL3Bob3Rv/L2RlYWxlci1uZXct/Y2Fycy1zdG9jay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/TXpmYjVvRWVvdlFi/bEVvMTYwZGYteEZ4/ZmQ2ZEdvTEJrcWpq/RFdRYmQ1RT0"
          className="rounded-2xl border shadow hover:shadow-2xl hover:border-blue-600"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default InfoSection