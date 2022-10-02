import React from 'react'


const formatCash = (str) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(str);
}


export default formatCash