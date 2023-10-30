"use client"
import React, {useEffect, useState} from 'react';
import { useSession } from 'next-auth/react'
import {UserResponseType} from "@/types/userTypes";
import {useTranslation} from "react-i18next";

const User = () => {
    const { data } = useSession()
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        if (data?.user) {
            fetch('http://localhost:8080/api/v1/auth/all', {
                method: 'get',
                headers: {
                    Authorization: `Bearer ${data?.user?.token}`
                }
            })
                .then((res) => res.json())
                .then((res) => setUserList(res))
        }
    }, [data])
    return (
        <div>
            {
                userList.map((user: UserResponseType) => (
                    <div key={user.id}>
                        <span>{user.id}-</span>
                        <span>{user.email}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default User;