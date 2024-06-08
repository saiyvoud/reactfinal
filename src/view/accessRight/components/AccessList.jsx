import React, { useState } from 'react'
import userImg from '../../../assets/images/user.png'

import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import AccessListRow from './AccessListRow';
function AccessList({ data, loading, onDeleteSuccess }) {
    return (
        <div>
            {
                data.map((item, index) => (
                    <AccessListRow data={item} key={index} onDeleteSuccess={onDeleteSuccess} />
                ))
            }
        </div>
    )
}

export default AccessList