import { Col, Row } from 'antd'
import React from 'react'
import style from './style.module.scss'
import profilePic from '@assets/images/profile.png'
import Heading from './common/heading'
import CustomButton from '@components/common/custom-button'
import Header from './menu'

const UserProfile = () => {

    const workList = [
        {
            title: 'Spotify New York',
            periority: 'Primary',
            addressOne: '170 William Street',
            addressTwo: 'New York, NY 10038-78 212-312-52',

        },
        {
            title: 'Metropolitan Museum',
            periority: 'Secondary',
            addressOne: '525 E 68th Street',
            addressTwo: 'New York, NY 10038-78 212-312-52'
        },
    ]

    const skillsLit = ['Branding', 'UI/UX', 'Web-Design', 'Packaging', 'Print % Editors']


    return (
        <>
        <div className={style.profilePageContainer} >
            <Header/>
            <div className={style.container}>
            <Row>
                <Col md={9} sm={24} xs={24} className={style.firstCol} >
                    <Row>
                        <img src={profilePic} />
                    </Row>
                    <div className={style.heading}>
                        <Heading heading={'WORK'} />
                        <hr />
                    </div>

                    <Row className={style.workContainter} >
                        {
                            workList?.length > 0 && workList?.map((item, index) => {
                                return (
                                    <Col span={24} key={index} >
                                        <div className={style.placeName}>
                                                <h1>{item?.title || '----'}</h1>
                                                <CustomButton
                                                    title={item?.periority}
                                                    className={style.btnPeriorityStyle}
                                                />
                                        </div>
                                        <div className={style.addressContainer} >
                                            <Heading heading={item?.addressOne} className={style.workAddress} />
                                            <Heading heading={item?.addressTwo} className={style.workAddress} />
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <div className={style.heading}>
                        <Heading heading={'Skills'} />
                        <hr />
                    </div>

                    <div>
                        {
                            skillsLit?.length > 0 && skillsLit?.map((item, index) => {
                                return (
                                    <h4 className={style.skillsList} key={index} >  {item} </h4>
                                )
                            })
                        }
                    </div>


                </Col>
                <Col span={1}></Col>
                <Col md={14} sm={24} xs={24}>

                </Col>
            </Row>
            </div>
        </div>
        </>
    )
}

export default UserProfile