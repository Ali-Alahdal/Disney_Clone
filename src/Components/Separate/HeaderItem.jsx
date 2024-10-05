import Icon from "./Icon";
function HeaderItem(props) {
    return ( 
        <div className="flex gap-3 hover:underline underline-offset-8 cursor-pointer font-[20px] decoration-2">
            <Icon icon={props.icon} />
            <h1 className=" font-bold ">{props.name}</h1>    
          
        </div>
     );
}

export default HeaderItem;