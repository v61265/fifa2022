import styled from 'styled-components';
import ReactGA from 'react-ga';
import {
  CardWrapper,
  ImgWrapper,
  Link,
  TextWrapper,
} from '../../components/news-card';

const NewsItems = ({ newsItems }) => {
  const handleOnClick = (index) => {
    if (index === 0) {
      ReactGA.event({
        category: 'Projects_FIFA',
        action: 'click',
        label: '點擊「最新消息」第 1 則新聞',
      });
    } else if (index === 6) {
      ReactGA.event({
        category: 'Projects_FIFA',
        action: 'click',
        label: '點擊「最新消息」第 7 則新聞',
      });
    }
  };

  return newsItems?.slice(0, 12)?.map((item, index) => {
    return (
      <Link
        href={`https://www.mirrormedia.mg/story/${item?.slug}`}
        target='_blank'
        rel='noreferrer'
        key={item._id}
        onClick={() => handleOnClick(index)}
      >
        <CardWrapper key={item._id}>
          <ImgWrapper>
            <img
              src={`${item?.heroImage?.image?.resizedTargets?.mobile?.url}`}
              alt={`${item?.title}`}
            />
          </ImgWrapper>
          <TextWrapper>
            <p className='title'>{item?.title}</p>
            <p className='date'>
              {`${item?.slug?.slice(0, -10)}/${item?.slug?.slice(
                4,
                -8
              )}/${item?.slug?.slice(6, -6)} `}
              {item?.createTime?.slice(17, -7)}
            </p>
          </TextWrapper>
        </CardWrapper>
      </Link>
    );
  });
};

export default NewsItems;
