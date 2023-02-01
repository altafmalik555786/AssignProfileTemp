import React from 'react'
import { Menu } from 'antd'
import 'antd/dist/antd.css'
import { useNavigate } from 'react-router-dom'
import { constRoute } from '../../utils/route/index'


function MenuBar() {
    const navigate = useNavigate()
    const itemsList = [
        { label: 'Home', key: constRoute.dashboard},
        { label: 'My Profile', key: constRoute.userProfile},
    ]

    const changeNavigate = (e) => {
        navigate(e.key)
    }


    return (
        <div style={{ height: '10vh' }}>
            <Menu mode="horizontal" items={itemsList} onClick={(e) => {
                changeNavigate(e)
            }} />
        </div>
    )
}

export default MenuBar
