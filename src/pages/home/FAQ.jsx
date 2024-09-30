import { colors } from '@/styles/colors';
import FAQList from '@components/home/FAQList';

const FAQ = () => {
  return (
    <div>
      <FAQList listNum={13} FAQcolor={colors.black} />
    </div>
  );
};

export default FAQ;
