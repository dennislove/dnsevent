import React, { useEffect, useState,useRef } from 'react';
import '../MemberCT/style.css'

function SlideMember() {
    const list = [
        {
            data:1,
            loca: "MC, PGD",
            img:"https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80",
            name:"Hà Đông",
            des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corrupti, iusto! Hic, mollitia qui maxime ea molestiae in illum delectus quibusdam nisi enim facere, libero temporibus nihil recusandae odit, ipsam quas!"
        },
        {
            data:2,
            loca: "MC, PGD",
            img:"https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80",
            name:"Văn Sơn",
            des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corrupti, iusto! Hic, mollitia qui maxime ea molestiae in illum delectus quibusdam nisi enim facere, libero temporibus nihil recusandae odit, ipsam quas!"
        },
        {
            data:3,
            loca: "MC, PGD",
            img:"https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80",
            name:"Hoàng Duy",
            des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corrupti, iusto! Hic, mollitia qui maxime ea molestiae in illum delectus quibusdam nisi enim facere, libero temporibus nihil recusandae odit, ipsam quas!"
        },
        {
            data:4,
            loca: "MC, PGD",
            img:"https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80",
            name:"Huy Hùng",
            des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corrupti, iusto! Hic, mollitia qui maxime ea molestiae in illum delectus quibusdam nisi enim facere, libero temporibus nihil recusandae odit, ipsam quas!"
        },
        {
            data:5,
            loca: "MC, PGD",
            img:"https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80",
            name:"Hữu Ngọ",
            des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corrupti, iusto! Hic, mollitia qui maxime ea molestiae in illum delectus quibusdam nisi enim facere, libero temporibus nihil recusandae odit, ipsam quas!"
        },
        {
            data:6,
            loca: "MC, PGD",
            img:"https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80",
            name:"Mạnh Tim",
            des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corrupti, iusto! Hic, mollitia qui maxime ea molestiae in illum delectus quibusdam nisi enim facere, libero temporibus nihil recusandae odit, ipsam quas!"
        },
        {
            data:7,
            loca: "MC, PGD",
            img:"https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80",
            name:"Tiến Đạt",
            des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corrupti, iusto! Hic, mollitia qui maxime ea molestiae in illum delectus quibusdam nisi enim facere, libero temporibus nihil recusandae odit, ipsam quas!"
        },
        {
            data:8,
            loca: "MC, PGD",
            img:"https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80",
            name:"James",
            des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corrupti, iusto! Hic, mollitia qui maxime ea molestiae in illum delectus quibusdam nisi enim facere, libero temporibus nihil recusandae odit, ipsam quas!"
        },
    
    ] 
    const [activeTab, setActiveTab] = useState(1);
    const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTab((prevActiveTab) => (prevActiveTab + 1) % list.length);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [list.length]);

  const handleClickTab = (index) => {
    setActiveTab(index);
    clearInterval(intervalRef.current);
  };
  return (
    <div className="fui-testimonial-1">
    <div className="testimonialWrap">
        <ul className="testimonialBodyList text-white">
            {list.map((item, index) =>(
                <li key={index} className={`testimonialBodyItem ${activeTab === index ? 'active' : ''}`} data-tab={item.data}>
                <div className="testimonialRate text-yellow-600">Vị trí:<span className='text-white'>{item.loca}</span>
                    
                </div>
                <p className='testimonialContent text-yellow-600 text-xl font-bold'>Phương châm làm nghề</p>
                <p className="testimonialContent text-white">
                    {item.des}
                </p>
                <div className="testimonialBodyPersonal active">
                    <div className="testimonialBodyPersonalImg"><img src={item.img} alt={item.name} /></div>
                    <h4 className="testimonialBodyPersonalName">{item.name}</h4>
                </div>
            </li>
            ))}
            
           
        </ul>
        <ul className="testimoniaPersonalList">
            {list.map((item,index) =>(
                <li key={index} onClick={() => handleClickTab(index)} className={`testimoniaPersonalItem ${activeTab === index ? 'active' : ''}`} data-tab={item.data}>
                <div className="testimoniaPersonalImage"><img src={item.img} alt={item.name} /></div>
                </li>
            ))}
        </ul>
    </div>
</div>
  )
}

export default SlideMember
