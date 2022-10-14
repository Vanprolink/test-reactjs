import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList =[
        {
            id: 1,
            name: 'Nhạc Hoà Chi Pu',
            thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/d/f/9/2df9160352308dd28caedb80406b678d.jpg" 
        },
        {
            id: 2,
            name: 'Say Em Từ Lâu',
            thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/0/2/f/202f1551da9c10a37cb203b56a7a9749.jpg"
        },
        {
            id: 3,
            name: 'Một Chút Thôi',
            thumbnailUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/3/9/1/0391594a2ecd60c1d38f0815fd5db7a1.jpg"
        },
    ];
    return (
        <div>
            <h2>Đâu Đó Có Người Cần</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;