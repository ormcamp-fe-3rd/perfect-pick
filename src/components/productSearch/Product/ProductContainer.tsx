function ProductContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-24 grid grid-cols-4 gap-x-10 lg:grid-cols-3 lg:px-[15px] md:grid-cols-1 md:gap-y-[10px] md:px-[10px]">
      {children}
    </div>
  );
}
export default ProductContainer;
