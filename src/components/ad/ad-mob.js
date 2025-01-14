import styled from 'styled-components';
// import DfpAd from './dfpAd';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
// import useDfpSlot from '../../useDfpSlot';

const AdWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  font-size: 40px;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const AdMob = () => {
  // useDfpSlot({
  //   path: '/40175602/mirror_RWD_2022FIFA_970250-300250_FT',
  //   size: [300, 250],
  //   id: 'adSlot-2',
  // });
  return (
    <AdWrapper>
      {/* <div id='adSlot-2' style={{ width: '300px', height: '250px' }} /> */}

      <DFPSlotsProvider dfpNetworkId='40175602'>
        <AdSlot
          id='adSlot-2'
          adUnit='mirror_RWD_2022FIFA_970250-300250_FT'
          sizes={[[300, 250]]}
        />
      </DFPSlotsProvider>
      {/* <DfpAd width={300} height={250}></DfpAd> */}
    </AdWrapper>
  );
};

export default AdMob;
