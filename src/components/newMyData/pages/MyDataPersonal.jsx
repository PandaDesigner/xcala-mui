import { FormBankSection, FormDatas } from '../components';
import { LayoutMydata } from '../layouts';

export const MyDataPersonal = () => {
  return (
    <>
      <LayoutMydata>
        <FormDatas />
        <FormBankSection />
      </LayoutMydata>
    </>
  );
};
