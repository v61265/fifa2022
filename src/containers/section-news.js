import styled from 'styled-components';
import SubTitle from '../components/sub-title';

const Section = styled.div`
  width: 100%;
  background: #f0eae3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  padding: 40px 0;
`;

const NewsSection = () => {
  return (
    <Section>
      <Wrapper>
        <SubTitle>最新消息</SubTitle>
      </Wrapper>
    </Section>
  );
};

export default NewsSection;