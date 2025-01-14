import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 288px;
  height: 298px;

  background-color: #ffffff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.06), 0px 4px 12px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  @media (min-width: 768px) {
    width: 344px;
    height: 298px;
  }
  @media (min-width: 1200px) {
    width: 240px;
    height: 293px;
  }

  img {
    border-radius: 6px 6px 0 0;
    width: 288px;
    @media (min-width: 768px) {
      width: 344px;
    }
    @media (min-width: 1200px) {
      width: 240px;
    }
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 344px;
  height: 192px;
  border-radius: 6px 6px 0 0;
  overflow: hidden;

  @media (min-width: 1200px) {
    width: 240px;
    height: 160px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: gray;
  :link {
    color: gray;
  }
  :hover {
    transform: translateY(-5px);
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 15%);
    transition: all 0.3s ease-in-out;
  }
  :active {
    transform: translateY(0px);
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 15%);
    transition: all 0.3s ease-in-out;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 106px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding: 15px;
  @media (min-width: 1200px) {
    height: 133px;
  }

  .title {
    color: rgba(0, 9, 40, 0.87);
    font-size: 16px;
    @media (min-width: 1200px) {
      font-size: 18px;
    }
  }
  .date {
    color: rgba(0, 9, 40, 0.5);
    font-size: 12px;
    @media (min-width: 1200px) {
      font-size: 14px;
    }
  }
`;
