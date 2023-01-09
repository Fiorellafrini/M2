import SearchBar from "./ShearchBar";
import { Link } from "react-router-dom";

export default function Nav(props){
return (
   <div>

      <SearchBar onSearch={props.onSearch} />    
        {/* //recibe a onsearch por props y la manda a search */}
   </div>

)
}
