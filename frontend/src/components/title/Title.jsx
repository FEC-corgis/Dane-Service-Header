import React from 'react';
import Header from './components/header/Header';
import PropertyName from './styled-components/PropertyName';
import TitleContainer from './styled-components/TitleContainer';
import TitleBox from './styled-components/TitleBox';
import { useSelector } from 'react-redux';
import { getHeaderState } from '../../redux/slices/photos/HeaderServiceSlice';

const Title = (props) => {
    const { photos } = useSelector(getHeaderState);
    return (
        <TitleContainer>
            <TitleBox>
                <PropertyName>
                    {photos.allPhotos[0].Property.title}
                </PropertyName>
                <Header showIcons={props.showIcons} />
            </TitleBox>
        </TitleContainer>
    );
};

export default Title;
