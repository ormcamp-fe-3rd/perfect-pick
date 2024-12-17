function BottomSheetContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-11 max-w-[568px] rounded-t-md bg-gray text-2xl text-white">
      {children}
    </div>
  );
}
export default BottomSheetContainer;
