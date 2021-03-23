import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
    width?: number;
    height?: number;
    fixed?: boolean;
    overlay?: boolean;
    rest?: any;
}

const spinningAnimation = keyframes`
        100% {
        transform: rotate(360deg);
        filter: hue-rotate(45deg);
    }
`;

const SpinnerWrap = styled.div.attrs<SpinnerProps>(({ height = 50, width = 50 }) => ({ height, width }))`
    margin-top: 2em;
    position: relative;
    width: ${(props: SpinnerProps) => props.width}px;
    height: ${(props: SpinnerProps) => props.height}px;
    &.spinner {
        position: relative;
        animation: ${spinningAnimation} 0.65s linear infinite;
        border: 0.3em solid;
        border-radius: 50%;
        border-color: #7b4fff #d9d9d9 transparent;
        bottom: 0;

        left: 0;
        margin: auto;
        z-index: 1;
        &.fixed {
            right: 0;
            top: 0;
            position: fixed;
        }
    }
`;

const Spinner = ({ width = 50, height = 50, fixed = false, overlay = false, ...rest }: SpinnerProps) => {
    return (
        <SpinnerWrap
            data-cy={'spinner-cy'}
            className={`spinner ${fixed ? 'fixed' : ''}`}
            height={height}
            width={width}
            style={{ height, width }}
            {...rest}
        >
            <div className={`overlay ${overlay ? 'visible' : ''}`} style={{ height, width }} />
            <div className='spinner' style={{ height, width }} />
        </SpinnerWrap>
    );
};

export default Spinner;
