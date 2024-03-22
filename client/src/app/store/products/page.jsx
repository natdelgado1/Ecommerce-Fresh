import AllFilteredProducts from "@/components/Filters/AllFilteredProducts/AllFilteredProducts";

export default function ProductsPage() {
  return (
    <div className="px-28 py-7 min-h-80">
      <div className="w-full min-h-80">
        <AllFilteredProducts title="Productos" />
      </div>
    </div>
  );
}
