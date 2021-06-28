import React from 'react';
import styled, { keyframes } from 'styled-components';

const commonStyle = {
    margin: 'auto',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

const sizeItem = {
    small: '7rem',
    default: '9rem',
    large: '11rem'
}

const sizeContainer = {
    small: '9rem',
    default: '10rem',
    large: '16rem'
}

const borderRadiusContainerSize = {
    small: '16rem',
    default: '8rem',
    large: '10rem'
}

const stretchdelay = keyframes`
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
`;

const LoadContainer = styled.div`
  width: 100px;
  height: ${props => sizeContainer[props.size] || sizeContainer['default']};
  text-align: center;
  font-size: 10px;
`;

const box = styled.div`
  background-color: ${props => props.color || 'burlywood'};
  height: 100%;
  width: 6px;
  display: inline-block;
  margin-left: 5px;
  animation: ${stretchdelay} ${props => props.speed || 1.2}s infinite ease-in-out;
`;

const BoxLoadingNeg1 = styled(box)`
  animation-delay: -1.4s;
`;

const BoxLoadingNeg2 = styled(box)`
  animation-delay: -1.3s;
`;

const BoxLoadingFirst = styled(box)`
  animation-delay: -1.2s;
`;

const BoxLoadingTwo = styled(box)`
  animation-delay: -1.1s;
`;

const BoxLoadingThree = styled(box)`
  animation-delay: -1s;
`;

const BoxLoadingFour = styled(box)`
  animation-delay: -0.9s;
`;

const BoxLoadingFive = styled(box)`
  animation-delay: -0.8s;
`;

const BoxLoadingPos1 = styled(box)`
  animation-delay: -0.7s;
`;

const BoxLoadingPos2 = styled(box)`
  animation-delay: -0.6s;
`;

const WaveLoading = ({ style = commonStyle, color, speed, size = "default" }) => {
    return (
        <LoadContainer style={style} size={size}>
            <BoxLoadingNeg2 color={color} speed={speed} />
            <BoxLoadingNeg1 color={color} speed={speed} />
            <BoxLoadingFirst color={color} speed={speed} />
            <BoxLoadingTwo color={color} speed={speed} />
            <BoxLoadingThree color={color} speed={speed} />
            <BoxLoadingFour color={color} speed={speed} />
            <BoxLoadingFive color={color} speed={speed} />
            <BoxLoadingPos1 color={color} speed={speed} />
            <BoxLoadingPos2 color={color} speed={speed} />

        </LoadContainer>
    );
};

export default WaveLoading;
