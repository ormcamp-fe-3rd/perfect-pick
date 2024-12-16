interface ProductContainerProps {
  children: React.ReactNode;
  marginTop?: string; // marginTop을 동적으로 설정 (옵션값)
  grid?: string;
  gap?: string;
}

function ProductContainer({
  children,
  marginTop = 'mt-24',
  grid = 'grid-cols-4 lg:grid-cols-3 md:grid-cols-1',
  gap = 'gap-x-10, md:gap-y-[10px]',
}: ProductContainerProps) {
  return (
    <div
      className={`${marginTop} ${grid} ${gap} grid lg:px-[15px] md:px-[10px]`}
    >
      {children}
    </div>
  );
}

export default ProductContainer;
