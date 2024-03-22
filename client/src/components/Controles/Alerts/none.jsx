import { TbRefreshAlert } from "react-icons/tb";
const AlertNone = ({ title, descripcion }) => {
  return (
    <div className=" flex rounded-lg border px-4 py-3 text-sm bg-background text-foreground tracking-wider">
      <TbRefreshAlert className="w-6 h-6"/>
      <div className="text-sm  [&amp;_p]:leading-relaxed content-end ml-4 tracking-wider ">
      <h5 className="mb-1  leading-none tracking-tight font-semibold">{title}</h5>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};
export default AlertNone;

