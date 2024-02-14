import { FaPen } from "react-icons/fa";
import dummy from "../assets/dummy.jpg"
import { NavLink } from "react-router-dom";
const StudentProfile = () => {
  return (
      <div>
          <div className="w-full h-[150px] flex justify-center items-center bg-blue-800 gap-4">
              <div className='h-[100%] w-[80%] relative'>
                  <div className='w-[155px] col-span-3 h-[155px] rounded-full border-4 bg-blue-800 border-white absolute top-[70px] '>
                      <img src={dummy} style={{ objectFit: "cover", borderRadius: "100%" }} />
                      <div className="w-[40px] h-[40px] bg-black bottom-4 rounded-full cursor-pointer  absolute flex justify-center items-center right-0"><FaPen style={{color:"white"}} /></div>
                  </div>
                
              </div>
          </div>
          <br />
          <br /><br /><br /><br />
          <div className="ml-[55px] grid w-[50%] grid-cols-2">
              <NavLink to="/" className={({ isActive }) => 
            isActive ? "font-medium cursor-pointer text-[17px] text-blue-800" :"font-medium cursor-pointer hover:text-blue-800 text-[17px]"}>
                  My personal details
              </NavLink>
              <div>My school details</div>
          </div>
     </div>
  )
}

export default StudentProfile