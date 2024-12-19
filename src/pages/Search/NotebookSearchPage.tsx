import DefaultOption from '../../components/productSearch/Options/DefaultOption';
import MobileOption from '../../components/productSearch/Options/MobileOption';

function NotebookSearchPage() {
  return (
    <>
      <div className="mx-auto mt-14 max-w-[1400px] lg:max-w-[993px] md:mt-3 md:max-w-[548px]">
        <div className="md:hidden">
          <DefaultOption type="notebook" />
        </div>
        <div className="hidden md:!block">
          <MobileOption type="notebook" />
        </div>
      </div>
    </>
  );
}

export default NotebookSearchPage;
