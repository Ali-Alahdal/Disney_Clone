// Compoents
import HeaderItem from '../Separate/HeaderItem';

// Images
import Disney_Logo from '../../assets/Images/Disney_Logo.png'
import Avatar from '../../assets/Images/Avatar.webp'

function Header() {

    // Items Of Header Menu With The Icons
    const HeaderItems = [
        {
            name:'Home',
            icon:'m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z'
        },
        {
            name:'Search',
            icon:'m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
        },
        {
            name:'Watch List',
            icon:'M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z'
        },
        {
            name:'Originals',
            icon:'M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
        },
        {
            name:'Movies',
            icon:'M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z'
        },
        {
            name:'Series',
            icon:'M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z'
        },
    ];



    return ( 
        <header className='flex items-center justify-between p-5'>

            <div className='flex items-center gap-3'>
                
                {/* Disney Logo */}
                <img src={Disney_Logo} className=' object-cover   w-[90px] md:w-[130px]'   />

                {/* Disney Menu With Icons */}
                <div className='flex gap-8' >
                    {HeaderItems.map((item , index ) =>{
                        return   <HeaderItem key={index} name={item.name} icon={item.icon} />;
                    })}
                </div>
        
            </div>
            
            {/* Profile Icon */}
            <img src={Avatar} className='w-[60px]   object-cover rounded-full' />
          

       

        </header>
     );
}

export default Header;