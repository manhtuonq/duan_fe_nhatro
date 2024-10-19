

export default function Home() {
  return (
    <>
    <div className="p-3">
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
        {/* Image Section */}
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src="https://tromoi.com/cdn-cgi/image/format=webp,quality=75,fit=cover,width=300,height=300/uploads/static/phong_tro_hcm/Quan_10/234_NguyenTriPhuong/234_NguyenTriPhuong_G12_hinh35-min.png"
            alt="Property"
          />
          {/* Badge "Nổi bật" */}
          <div className="absolute top-2.5 left-0">
            <div className="relative inline-block">
              <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
                Nổi bật
              </span>
              <span className="absolute left-0 top-5 w-1.5 h-1.5 bg-orange-900  rounded-full"></span>
            </div>
          </div>

          {/* Favorite Icon */}
          <span className="absolute top-2 right-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 12.879a3 3 0 010-4.242L12 1.757l6.879 6.88a3 3 0 010 4.242l-6.879 6.878-6.879-6.878z"
              />
            </svg>
          </span>
        </div>

        {/* Information Section */}
        <div className="p-4 bg-gray-50">
          {/* Rooms available */}
          <div className="flex items-center text-gray-500 text-sm mb-1">
            <svg
              className="w-4 h-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7m-9 5v6h4v-6m5 6V9m0 0l-5-5-5 5"
              />
            </svg>
            <span>12 phòng trống</span>
          </div>

          {/* Address */}
          <h2 className="font-semibold text-gray-800 text-lg">
            Số 55/9 đường Lý Thường Kiệt
          </h2>

          {/* Price */}
          <div className="text-red-500 font-bold text-xl mt-1">
            3,800,000 VNĐ
          </div>

          {/* Details */}
          <div className="flex justify-between items-center mt-3">
            {/* Location */}
            <span className="text-sm text-gray-500 bg-gray-200 rounded px-2 py-1">
              Quận 12
            </span>
            {/* Area */}
            <span className="text-sm text-gray-500 bg-gray-200 rounded px-2 py-1 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 20h9m-9-16h9m-9 8h9m-9-8V4m0 8v6m0 2v2m0 0h-6V4"
                />
              </svg>
              từ 12 - 24 m²
            </span>
          </div>

          {/* Map link */}
          <div className="mt-3 text-gray-600 text-sm flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 10c0 3.866-6 10-6 10s-6-6.134-6-10a6 6 0 1112 0z"
              />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Xem bản đồ
          </div>
        </div>
      </div>
    </div>


    </>
  );
}
