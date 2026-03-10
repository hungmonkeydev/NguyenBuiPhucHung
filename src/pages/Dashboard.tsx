import studentsData from '../mock/students.json'; 

export function Dashboard() {
  return (
    <div className="p-8 w-full">
      
      <div className="mb-6 flex justify-between items-center">
        <div>
           <h2 className='text-4xl text-gray-900 font-semibold'>Student Management</h2>
          <p className='mt-1 text-gray-600'>Students List Table</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors ">
        + Add Student
        </button>
      </div>
      
      <div className="bg-white overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-sm">
              <th className="p-4 text-gray-600">ID</th>
              <th className="p-4 text-gray-600">NAME</th>
              <th className="p-4 text-gray-600">Enrollment Date</th>
              <th className="p-4 text-gray-600">Gender</th>
              <th className="p-4 text-gray-600">Status</th>
              <th className="p-4 text-gray-600">Actions</th>
            </tr>
          </thead>
          
          <tbody className="text-sm">
            {studentsData.slice(0, 100).map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 ">
                <td className="p-4 text-gray-600">{student.id}</td>
                <td className="p-4">
                    <div className="font-semibold text-gray-900 text-2xl">
                        {student.first_name} {student.last_name}
                    </div>
                    <div className="font-normal text-sm text-gray-500 mt-1">
                        {student.email}
                    </div>
                </td>
                <td className="p-4 text-gray-600">{student.enrollment_date}</td>
                <td className="p-4 text-gray-600">{student.gender}</td>
                <td className="p-4">
                  {student.is_active ? (
                    <span className="text-green-600 bg-green-50 px-2 py-1 rounded-md text-xs font-medium">Active</span>
                  ) : (
                    <span className="text-red-500 bg-red-100 px-2 py-1 rounded-md text-xs font-medium">Inactive</span>
                  )}
                </td>
                <td className="p-4">
                  <span className="text-blue-500 hover:text-blue-700 cursor-pointer mr-3">Edit</span>
                  <span className="text-red-500 hover:text-red-700 cursor-pointer">Delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}