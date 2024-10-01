import Section from '@components/home/Section';
import { PNGImage } from '@components/global/PNGImage';
import UrecaOrder from '@/assets/images/pngs/recruit-order.png';

const Order = () => {
  return (
    <Section
      title="선발절차"
      expl="서류접수 이후 선발절차"
      subexpl={
        '서류 접수부터 오리엔테이션까지 선발절차를 확인하세요.\n더 자세한 날짜는 서류 합격 이후 개별 연락드릴 예정입니다.'
      }
    >
      <PNGImage
        src={UrecaOrder}
        height={'10rem'}
        alt="ureca-order"
        widthMobile="100vw"
        heightMobile="fit-content"
      />
    </Section>
  );
};

export default Order;
