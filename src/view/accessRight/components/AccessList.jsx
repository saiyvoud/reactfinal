import React, { useState } from 'react'
import userImg from '../../../assets/images/user.png'

import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import AccessListRow from './AccessListRow';
function AccessList({ data, loading }) {
    return (
        <div>
            {
                data.map((item, index) => (
                    <AccessListRow data={item} key={index} />
                ))
            }
        </div>
    )
}

export default AccessList