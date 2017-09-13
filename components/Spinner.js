import React from 'react';
import { ActivityIndicator } from 'react-native';

const Spiner = () =>
    <ActivityIndicator
        size='large'
        color='#000'
        style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'
        }}
    />;

export default Spiner;
