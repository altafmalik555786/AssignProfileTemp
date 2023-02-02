import { Col, Rate, Row } from 'antd'
import React, { useState } from 'react'
import style from './style.module.scss'
import profilePic from '@assets/images/profile.png'
import Heading from './common/heading'
import CustomButton from '@components/common/custom-button'
import Header from './menu'
import BookMark from '@assets/icon/bookmark.png'
import Location from '@assets/icon/location.svg'
import { MessageOutlined, CheckOutlined } from '@ant-design/icons';


const UserProfile = () => {
    const [rateValue] = useState(4)

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

    const contactInfoList = [ 
        {
            label: 'Phone',
            value: '+1 123 456 7890',
            isLink: true,
        },
        {
            label: 'Address',
            value: '525 E 68th Street',
            isLink: false,
        },
        {
            label: 'E-mail',
            value: 'hellow@jeremyrose.com',
            isLink: true,
        },
        {
            label: 'Site',
            value: 'www.jeremyrose.com',
            isLink: true,
        },
     ]


    const basicInfoList = [ 
        {
            label: 'Birthday',
            value: 'June 5, 1992',
        },
        {
            label: 'Gender',
            value: 'Male',
        },
      
     ]


    return (
        <>
            <div className={style.profilePageContainer} >
                <Header />
                <div className={style.containerProfile}>
                    <Row>
                        <Col span={1}></Col>
                        <Col md={8} sm={24} xs={24} className={style.leftCol} >
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
                                <Heading heading={'SKILLS'} />
                                <hr />
                            </div>

                            <div className={style.skillContainer} >
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
                        <Col md={14} sm={24} xs={24} className={style.rightCol} >
                            <Row>
                                <Col span={18} className={style.rightInnerCol} >

                                    <Row className={style.profileTitle} >
                                        <Col span={24} >
                                            <Row>
                                                <Col lg={12} sm={24} >
                                                    <h1>Jeremy Rose</h1>
                                                </Col>
                                                <Col lg={12} xs={24} className={style.userLocation} >
                                                    <img src={Location} />
                                                    <span> New York, NY </span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={24} >
                                                    <h6>Product Desinger</h6>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <div className={style.rating} >
                                        <Heading heading={'RANKINGS'} />

                                        <h1 className={style.ratingValue} >
                                            {rateValue}
                                        </h1>
                                        <div className={style.rate} >
                                            <Rate disabled defaultValue={rateValue} />
                                        </div>
                                    </div>

                                    <Row className={style.cardsInfo} >
                                        <Col lg={8} md={24}  >
                                            <MessageOutlined /> Send message
                                        </Col>
                                        <Col lg={8} md={24}  >
                                            <CheckOutlined /> Contacts
                                        </Col>
                                        <Col lg={8} md={24}  >
                                            Reports
                                        </Col>
                                    </Row>

                                    <div>
                                       Tabs
                                    </div>


                                    <div className={style.InfoArea} >
                                    <Heading heading={'CONTACT INFORMATION'} />
                                    {
                                        contactInfoList?.map( (item, index) => {
                                            return (
                                                <Row key={index} className={ style.contactInfo } >
                                                    <Col span={6} > {item?.label}: </Col>
                                                    <Col className={ item?.isLink ? style.isLink : style.notLink } > {item?.value}: </Col>
                                                </Row>
                                            )
                                        })
                                    }
                                    </div>


                                    <div className={style.InfoArea} >
                                    <Heading heading={'BASIC INFORMATION'} />
                                    {
                                        basicInfoList.map( (item, index) => {
                                            return (
                                                <Row key={index} className={ style.contactInfo } >
                                                    <Col span={6} > {item?.label}: </Col>
                                                    <Col > {item?.value}: </Col>
                                                </Row>
                                            )
                                        })
                                    }
                                    </div>


                                </Col>
                                <Col span={6} className={style.bookmarkCol} >
                                    <img src={BookMark} alt="Bookmark icon" />
                                    <h4>Bookmark</h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default UserProfile