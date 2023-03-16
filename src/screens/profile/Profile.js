import React, { useState } from 'react';
import { View, ScrollView, } from 'react-native';
import { styles } from './Profile.styles';
import { UserHeader } from '.';
import { hp } from '../../utils/styles/responsive';
import ContactDetails from './contact/ContantDetails';
import Rfid from './rfid/Rfid';
import Residence from './property/Residence';
import Settings from './settings/Settings';


const Profile = () => {

    const [isOwner, setIsOwner] = useState(true)
    const [isTenant, setIsTenant] = useState(false)

    const TenantData = {
        name: 'Mr. Sachin Kumar',
        pic: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
        userType: 'Residence (Tenant)',
        address: 'H.no 123, GF, Jankipuram',
        phone: '+91 8160234589',
        email: 'mukeshkumar@gmail.com',

        rfid: [
            {
                id: 0,
                tag: 'Green RFID',
                tagNum: '8392047836294'
            },
            {
                id: 1,
                tag: 'Blue RFID',
                tagNum: '8392047836294'
            },
            {
                id: 2,
                tag: 'Red RFID',
                tagNum: '8392047836294'
            }
        ],
        property: [
            {
                id: 0,
                key: 'Property',
                fullAddress: 'H.no 123, GF, Jankipuram',
                house: 123,
                floor: 'Ground Floor',
                locality: 'Jankipuram',
                building: {
                    type: 'Residential',
                    holdingId: '160234589',
                    localAddress: '123, Ground Floor, Area 67, Jankipuram, Jhansi, 284001',
                    rfid: '8392047836294',
                    area: '1602 sqm',
                    member: '5',
                    kitchen: '1',
                    bedroom: '4',
                    toilet: '4',
                    balconies: '4',
                },
                people: [
                    {
                        id: 0,
                        name: 'Mr. Amitabh Bachchan',
                        type: 'Owner',
                        title: 'Property (Owner)',
                        pic: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                        address: '213, Ameer Nagri, Mumbai, Maharashtra, 873569',
                        house: '213',
                        floor: 'First Floor',
                        phone: '+91 8160234589',
                        email: 'mukeshkumar@gmail.com'

                    },
                    {
                        id: 1,
                        name: 'Mr. Abhishek Bachchan',
                        type: 'Spoc',
                        title: 'Spoc',
                        pic: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                        address: '213, Ameer Nagri, Mumbai, Maharashtra, 873569',
                        house: '213',
                        floor: 'First Floor',
                        phone: '+91 8160234589',
                        email: 'mukeshkumar@gmail.com',

                    },

                ]

            },
            {
                id: 1,
                key: 'Property',
                fullAddress: 'H.no 323, GF, Jankipuram',
                house: 323,
                floor: 'First Floor',
                locality: 'Jankipuram',
                building: {
                    type: 'Residential',
                    holdingId: '160234589',
                    localAddress: '123, Ground Floor, Area 67, Jankipuram, Jhansi, 284001',
                    rfid: '8392047836294',
                    area: '1602 sqm',
                    member: '5',
                    kitchen: '1',
                    bedroom: '4',
                    toilet: '4',
                    balconies: '4',
                },
                people: [
                    {
                        id: 0,
                        name: 'Mrs. Jaya Bachchan',
                        type: 'Owner',
                        title: 'Property (Owner)',
                        pic: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                        address: '213, Ameer Nagri, Mumbai, Maharashtra, 873569',
                        phone: '+91 8160234589',
                        email: 'mukeshkumar@gmail.com'


                    },
                    {
                        id: 1,
                        name: 'Mrs. Aiswarya Bachchan',
                        type: 'Spoc',
                        title: 'Spoc',
                        pic: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                        address: '213, Ameer Nagri, Mumbai, Maharashtra, 873569',
                        phone: '+91 8160234589',
                        email: 'mukeshkumar@gmail.com'

                    }

                ]

            },
        ],

    };

    const OwnerData = {
        name: 'Mr. Sachin Kumar',
        pic: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
        userType: 'Residence (Owner)',
        address: 'H.no 123, GF, Jankipuram',
        phone: '+91 8160234589',
        email: 'mukeshkumar@gmail.com',

        rfid: [
            {
                id: 0,
                tag: 'Green RFID',
                tagNum: '8392047836294'
            },
            {
                id: 1,
                tag: 'Blue RFID',
                tagNum: '8392047836294'
            },
            {
                id: 2,
                tag: 'Red RFID',
                tagNum: '8392047836294'
            }
        ],
        property: [
            {
                id: 0,
                key: 'Property',
                fullAddress: 'H.no 123, GF, Jankipuram',
                house: 123,
                floor: 'Ground Floor',
                locality: 'Jankipuram',
                building: {
                    type: 'Residential',
                    holdingId: '160234589',
                    localAddress: '123, Ground Floor, Area 67, Jankipuram, Jhansi, 284001',
                    rfid: '8392047836294',
                    area: '1602 sqm',
                    member: '5',
                    kitchen: '1',
                    bedroom: '4',
                    toilet: '4',
                    balconies: '4',
                },
                people: [
                    {
                        id: 0,
                        name: 'Mr. Amitabh Bachchan',
                        type: 'Owner',
                        title: 'Property (Owner)',
                        pic: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                        address: '213, Ameer Nagri, Mumbai, Maharashtra, 873569',
                        house: '213',
                        floor: 'First Floor',
                        phone: '+91 8160234589',
                        email: 'mukeshkumar@gmail.com'

                    },
                    {
                        id: 1,
                        name: 'Mr. Abhishek Bachchan',
                        type: 'Spoc',
                        title: 'Spoc',
                        pic: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                        address: '213, Ameer Nagri, Mumbai, Maharashtra, 873569',
                        house: '213',
                        floor: 'First Floor',
                        phone: '+91 8160234589',
                        email: 'mukeshkumar@gmail.com',

                    },
                    {
                        id: 2,
                        name: 'Mr. Ram Kumar',
                        type: 'Tenant',
                        title: 'Tenant',
                        pic: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                        address: '213, Ameer Nagri, Mumbai, Maharashtra, 873569',
                        house: '213',
                        floor: 'First Floor',
                        phone: '+91 8160234589',
                        email: 'mukeshkumar@gmail.com',
                        dueAmount: '0',
                        status: 'ontime'


                    },
                    {
                        id: 3,
                        name: 'Ms. Geeta Shetty',
                        type: 'Tenant',
                        title: 'Tenant',
                        pic: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                        address: '213, Ameer Nagri, Mumbai, Maharashtra, 873569',
                        house: '213',
                        floor: 'First Floor',
                        phone: '+91 8160234589',
                        email: 'mukeshkumar@gmail.com',
                        dueAmount: '50',
                        status: '1 month behind'

                    }


                ]


            },
            {
                id: 1,
                key: 'Property',
                fullAddress: 'H.no 323, GF, Jankipuram',
                house: 323,
                floor: 'First Floor',
                locality: 'Jankipuram',
                building: {
                    type: 'Residential',
                    holdingId: '160234589',
                    localAddress: '123, Ground Floor, Area 67, Jankipuram, Jhansi, 284001',
                    rfid: '8392047836294',
                    area: '1602 sqm',
                    member: '5',
                    kitchen: '1',
                    bedroom: '4',
                    toilet: '4',
                    balconies: '4',
                },
                people: [
                    {
                        id: 0,
                        name: 'Mrs. Jaya Bachchan',
                        type: 'Owner',
                        title: 'Property (Owner)',
                        pic: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                        address: '213, Ameer Nagri, Mumbai, Maharashtra, 873569',
                        phone: '+91 8160234589',
                        email: 'mukeshkumar@gmail.com'


                    },
                    {
                        id: 1,
                        name: 'Mrs. Aiswarya Bachchan',
                        type: 'Spoc',
                        title: 'Spoc',
                        pic: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                        address: '213, Ameer Nagri, Mumbai, Maharashtra, 873569',
                        phone: '+91 8160234589',
                        email: 'mukeshkumar@gmail.com'

                    }

                ]

            },
        ],

    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.container}>
                {
                    isOwner &&
                    <>
                        <UserHeader
                            name={OwnerData.name}
                            profilePic={OwnerData.pic}
                            userType={OwnerData.userType}
                            showBackBtn={false}
                        />
                        <ContactDetails data={OwnerData} />
                        <Rfid data={OwnerData.rfid} />
                        <Residence data={OwnerData.property} showTenant ={false}  />
                        <Settings />
                    </>

                }
                {
                    isTenant &&
                    <>
                        <UserHeader
                            name={TenantData.name}
                            profilePic={TenantData.pic}
                            userType={TenantData.userType}
                            showBackBtn={false}
                        />
                        <ContactDetails data={TenantData} />
                        <Rfid data={TenantData.rfid} />
                        <Residence data={TenantData.property} showOwner ={false} />
                        <Settings />
                    </>

                }

                <View style={{ height: hp(78) }} />
            </View>
        </ScrollView>
    )
}

export default Profile;