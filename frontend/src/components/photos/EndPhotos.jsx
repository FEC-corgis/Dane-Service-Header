import React from 'react';
import EndImg from './styled-components/EndImg';
import ContainerTopRight from './styled-components/ContainerTopRight';
import ContainerBottomRight from './styled-components/ContainerBottomRight';

const EndPhotos = (props) => (
    <React.Fragment>
        <ContainerTopRight
            className={'photo-container'}
            onClick={() => props.handleClick(props.photo1.id)}
        >
            <EndImg
                src={props.photo1.link}
                data-testid={'end-img1'}
                alt={'house'}
            />
        </ContainerTopRight>
        <ContainerBottomRight
            className={'photo-container'}
            onClick={() => props.handleClick(props.photo2.id)}
        >
            <EndImg
                src={props.photo2.link}
                data-testid={'end-img2'}
                alt={'house'}
            />
        </ContainerBottomRight>
    </React.Fragment>
);

export default EndPhotos;
