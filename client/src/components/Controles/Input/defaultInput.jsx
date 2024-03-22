const DefaultInput = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col bg-transparent ">
      {
        label && 

        <label htmlFor={label}>{label}</label>
      }
      
      <input
      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        type={type}
        name={label}
        id={label}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
}
export default DefaultInput;