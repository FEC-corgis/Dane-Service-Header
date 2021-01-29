import React from 'react';
import Header from './components/header/Header';
import PropertyName from './styled-components/PropertyName';
import TitleContainer from './TitleContainer';
import TitleBox from './styled-components/TitleBox';
import { useSelector } from 'react-redux';
import { getPhotoState } from '../../redux/slices/photos/PhotoSlice';

const Title = (props) => {
    const { allPhotos } = useSelector(getPhotoState);
    return (
        <TitleContainer>
            <TitleBox>
                <PropertyName>{allPhotos[0].Property.title}</PropertyName>
                <Header showIcons={props.showIcons} />
            </TitleBox>
        </TitleContainer>
    );
};

export default Title;
