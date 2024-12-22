import React from "react";
import { useState,useEffect, useContext} from 'react'
import pool from '../../../db.js'
import { AddUser } from "../../../components/Admin/User/AddUser";
import {DisplayUser} from "../../../components/Admin/User/DisplayUser";
import { useSession } from "next-auth/react";
import { VerticalNavbar } from "../../../components/Admin/VerticalNavbar";
import { MainHeader } from '../../../components/common/MainHeader';
import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const userRole = session?.user?.role;

  if (userRole !== 'admin') {
    return {
      redirect: {
        destination: '/auth/error', // Redirect to the error page for unauthorized access
        permanent: false,
      },
    };
  }

  const usersQuery = `
    SELECT 
      user_id, email, "firstname", "lastname", age, role, "createddate", "modifieddate", "username"
    FROM "User"
    ORDER BY "modifieddate" DESC
  `;

  try {
    const client = await pool.connect();
    const usersResult = await client.query(usersQuery);
    const users = usersResult.rows.map((data) => ({
      user_id: data.user_id,
      email: data.email,
      firstName: data.firstname,
      lastName: data.lastname,
      age: data.age,
      role: data.role,
      CreatedDate: data.createdDate,
      ModifiedDate: data.modifieddate,
      UserName: data.username
    }));

    client.release();

    return {
      props: {
        users: JSON.parse(JSON.stringify(users)),
      },
    };
  } catch (err) {
    console.error('Database Query Error:', err);
    return {
      props: {
        users: [],
      },
    };
  }
}

export default function User({users}) {
    const { status, data } = useSession();
    return (
    	<React.Fragment>
      		<MainHeader title="User Dashboard" />
      		<section className="flex flex-col w-full h-full bg-[#e6e6e6] dark:bg-[#02201D] pt-10">
				    <div className='w-full h-full flex flex-row'>
		        	<VerticalNavbar data={data} />
		        	<div className="w-full">
            			<AddUser />
            			<DisplayUser users={users} />
        			</div>
		        </div> 
			     </section>
      	</React.Fragment>
        
    );
}
