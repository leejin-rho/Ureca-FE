import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Flex } from '@components/global/Flex';
import { Text } from '@components/global/Text';
import Curriculums from '@assets/data/Curriculums.json';

const Curriculum = ({ title, data }) => {
  const groupByMonth = (data) => {
    return data.reduce((acc, item) => {
      const { month } = item;
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(item);
      return acc;
    }, {});
  };

  const groupedData = groupByMonth(data);

  return (
    <Container>
      <Text variant="h2">{title} 커리큘럼 안내</Text>
      <Table>
        <thead>
          <tr>
            <Th>
              <Text variant="h8">개월</Text>
            </Th>
            <Th>
              <Text variant="h8">단원</Text>
            </Th>
            <Th>
              <Text variant="h8">학습 내용</Text>
            </Th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedData).map(([month, items], index) => (
            <>
              <tr key={index}>
                <Td rowSpan={items.length}>
                  <Text variant="h8">{month}</Text>
                </Td>
                <Td>
                  <Text variant="h8" textAlign="flex-start">
                    {items[0].unit}
                  </Text>
                </Td>
                <Td>
                  <Text variant="h8" textAlign="flex-start">
                    {items[0].description}
                  </Text>
                </Td>
              </tr>
              {items.slice(1).map((item, subIndex) => (
                <tr key={subIndex}>
                  <Td>
                    <Text variant="h8" textAlign="flex-start">
                      {item.unit}
                    </Text>
                  </Td>
                  <Td>
                    <Text variant="h8" textAlign="flex-start">
                      {item.description}
                    </Text>
                  </Td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Curriculum;

const Container = styled(Flex)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: auto;
  margin: 8rem 0;
`;

const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin-top: 4rem;
`;

const Th = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  background-color: #f4f4f4;
`;

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  vertical-align: top;
`;
