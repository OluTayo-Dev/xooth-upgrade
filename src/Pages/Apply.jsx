import React from 'react'

function Apply() {
  return (
    <div>
         <form className='float-center border border-slate-300 rounded-lg xl:w-[35vw] lg:w-[65%]  lg:h-fit w-[90%] xl:ml-[26rem] lg:ml-[10rem] md:ml-[3rem] ml-5 mt-[5rem] h-[90vh] bg-gray-100 shadow-xl'> 
            <div className='space-y-2 xl:lg:md:space-y-1 xl:space-x-6 md:space-x-6 ml-7 lg:ml-4 xl:ml-2 mt-5 flex flex-col'>
               <label className='font-semibold md:pt-5 lg:pt-3 xl:pt-2 xl:pl-4 lg:pl-4 md:pl-4'>Full Name:</label>
               <input type="text" placeholder='Enter FullName' className='xl:w-[30vw] lg:w-[57vw]  md:w-[90%] w-[90%] h-[6vh] outline-0 p-2 border border-[#02010abb] shadow-lg' />
       
               <label className='font-semibold md:pt-5 lg:pt-3 xl:pt-2'>Relevant Experience:</label>
               <input type="text" placeholder='' className='xl:w-[30vw] lg:w-[57vw] md:w-[90%] w-[90%] h-[6vh] outline-0 p-2 border border-[#02010abb] shadow-lg' />

                
               <label className='font-semibold md:pt-5 lg:pt-3 xl:pt-2'>Salary Expectation(#):</label>
               <input type="number" placeholder='' className='xl:w-[30vw] lg:w-[57vw] md:w-[90%] w-[90%] h-[6vh] outline-0 p-2 border border-[#02010abb] shadow-lg' />

               <label className='font-semibold md:pt-5 lg:pt-3 xl:pt-2'>Date Available For Interview:</label>
               <input type="text" placeholder='' className='xl:w-[30vw] lg:w-[57vw] md:w-[90%] w-[90%] h-[6vh] outline-0 p-2 border border-[#02010abb] shadow-lg' />
 
                

               <label className='font-semibold md:pt-5 lg:pt-3 xl:pt-2'>Upload Resume/CV:</label>
               <input  
                 type="file" 
                 className='xl:w-[30vw] lg:w-[57vw]  md:w-[90%] w-[90%] h-[6vh] outline-0 p-2 border border-[#02010abb] shadow-lg' 
                 />
               

               <label className='font-semibold md:pt-5 lg:pt-3 xl:pt-2'>Upload Cover Letter(Optional):</label>
               <input  
                 type="file" 
                 className='xl:w-[30vw] lg:w-[57vw]  md:w-[90%] w-[90%] h-[6vh] outline-0 p-2 border border-[#02010abb] shadow-lg' 
                 />
            </div>
            <button type="submit" className='mt-5 bg-[#02010abb] w-[70%] h-[3rem] hover:text-[#fff] font-semibold xl:ml-[4rem] ml-[3rem] md:ml-[6rem] hover:bg-black text-[#FFFF] rounded-md lg:mb-4'>Submit Application</button>
        </form>
    </div>
  )
}

export default Apply