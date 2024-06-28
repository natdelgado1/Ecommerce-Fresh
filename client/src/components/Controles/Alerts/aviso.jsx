import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiFillAlert } from "react-icons/ai";
const AlertAviso = ({ title, descripcion,  flotante, closable, handleClose }) => {
  return (
    flotante ? 
    <div className="absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.2)] flex items-center justify-center">
      <div className={`relative flex rounded-lg border px-4 py-3 text-sm bg-background text-foreground tracking-wider`}>
        {
          closable &&
          <button className="h-9 w-9 absolute top-0 right-0" onClick={()=> {handleClose()}}><FontAwesomeIcon icon={faXmark}/></button>
        }

        <AiFillAlert className="w-6 h-6" />
        <div className="text-sm  [&amp;_p]:leading-relaxed content-end ml-4 tracking-wider ">
        <h5 className="mb-1  leading-none tracking-tight font-semibold">{title}</h5>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
    :
    <div className={`w-96 flex rounded-lg border px-4 py-3 text-sm bg-background text-foreground tracking-wider`}>
      <AiFillAlert className="w-6 h-6" />
      <div className="text-sm  [&amp;_p]:leading-relaxed content-end ml-4 tracking-wider ">
      <h5 className="mb-1  leading-none tracking-tight font-semibold">{title}</h5>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};
export default AlertAviso;