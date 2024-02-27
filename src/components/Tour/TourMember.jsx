import React from 'react'

function TourMember() {
    const ListMember = [
        {
            img:"http://www.grandteambuilding.vn/thumbs/230x100x2/upload/news/logo-2-01-6436.png",
            des:"Viettools đã đăng ký bảo hộ thương hiệu độc quyền được cấp bởi cục sở hữu trí tuệ, cùng giấy phép kinh doanh lữ hành ký quỹ doanh nghiệp đối với hoạt động du lịch.Chính những yếu tố đó sẽ đảm bảo đem lại sự tin tưởng tuyệt đối từ khách hàng và đối tác của Viettools.",
        },
        {
            img:"http://www.grandteambuilding.vn/thumbs/230x100x2/upload/news/logo-2-01-6436.png",
            des:"Viettools đã đăng ký bảo hộ thương hiệu độc quyền được cấp bởi cục sở hữu trí tuệ, cùng giấy phép kinh doanh lữ hành ký quỹ doanh nghiệp đối với hoạt động du lịch.Chính những yếu tố đó sẽ đảm bảo đem lại sự tin tưởng tuyệt đối từ khách hàng và đối tác của Viettools.",
        },
        {
            img:"http://www.grandteambuilding.vn/thumbs/230x100x2/upload/news/logo-2-01-6436.png",
            des:"Viettools đã đăng ký bảo hộ thương hiệu độc quyền được cấp bởi cục sở hữu trí tuệ, cùng giấy phép kinh doanh lữ hành ký quỹ doanh nghiệp đối với hoạt động du lịch.Chính những yếu tố đó sẽ đảm bảo đem lại sự tin tưởng tuyệt đối từ khách hàng và đối tác của Viettools.",
        },
        {
            img:"http://www.grandteambuilding.vn/thumbs/230x100x2/upload/news/logo-2-01-6436.png",
            des:"Viettools đã đăng ký bảo hộ thương hiệu độc quyền được cấp bởi cục sở hữu trí tuệ, cùng giấy phép kinh doanh lữ hành ký quỹ doanh nghiệp đối với hoạt động du lịch.Chính những yếu tố đó sẽ đảm bảo đem lại sự tin tưởng tuyệt đối từ khách hàng và đối tác của Viettools.",
        },
    ]
  return (
    <div className='flex flex-col gap-8'>
        {ListMember.map((item,index) =>(
       <div key={index} className='w-[70%] group items-center justify-center flex gap-8 relative'>
                <div className={
                index % 2 === 0
                  ? "w-1/2 h-1/2 ml-20 translate-x-1/2"
                  : "w-1/2 h-1/2 transform -translate-x-1/2 "
              }>
                    <img src={item.img} alt="" className='w-full h-full bg-cover transition-all delay-200'/>
                    <div className='h-[1px] w-full bg-white'></div>
                </div>
               
            <h3 className={
                index % 2 === 0
                ? "w-[47%] absolute ml-3 opacity-0 transform group-hover:-translate-x-1/2 transition ease-out duration-500 group-hover:opacity-100 text-white font-normal text-[15px] text-ellipsis overflow-hidden h-[90px]"
                : "w-[47%] absolute ml-3 opacity-0 transform group-hover:translate-x-3/4 transition ease-out duration-500 group-hover:opacity-100 text-white font-normal text-[15px] text-ellipsis overflow-hidden h-[90px]"
            }>{item.des}</h3>
       </div>
        ))}
    </div>  
  )
}

export default TourMember
