import { VerticalNavbar } from "../../components/Admin/VerticalNavbar";
// import { DashBoard } from "../../components/Admin/DashBoard";
import Profile  from "../../components/Admin/Profile";
import { useSession } from "next-auth/react";
import { useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { MainHeader } from '../../components/common/MainHeader';
import React from 'react'
import pool from "../../db.js"
import { getSession } from "next-auth/react";
import MyCalendar from '../../components/common/MyCalendar' 

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const serverdate = new Date();
  const userRole = session?.user?.role;
  if (userRole !== 'admin') {
    return {
      redirect: {
        destination: '/auth/error',
        permanent: false,
      },
    };
  }

  const adminQuery = `
    SELECT 
      admin_id, "firstname", "lastname", age, "username", email 
    FROM "admin" 
    WHERE admin_id = $1
  `;

  try {
    const client = await pool.connect();

    const [adminResult, categoriesResult] = await Promise.all([
      client.query(adminQuery, [Number(session.user.user_id)]),
    ]);

    const admin = adminResult.rows[0];
    console.log('Admin Result:', admin); // Log the admin query result

    const admins = {
      admin_id: admin.admin_id,
      firstName: admin.firstname,
      lastName: admin.lastname,
      age: admin.age,
      UserName: admin.username,
      email: admin.email
    };

    client.release();
    console.log(admins)
    return {
      props:{
        admins,
      },
    };
  } catch (err) {
    console.error('Database Query Error:', err);
    return {
      props: {
        admins: null,
      },
    };
  }
}
export default function Admin({serverdate,admins}){
  const [selected , setselected] = useState("dashboard")
  const { status, data } = useSession();
  const router = useRouter();
  const file = []

  const [barChartData, setbarChartData] = useState({
    labels: file.map((data) => data.id),
    datasets: [
      {
        label: "Jobs",
        data: file.map((data) => data.Number),
        backgroundColor: [
          "#00008b",
          "#ffc0cb",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  function handleChange(newValue) {
      setselected(newValue);
  }
  // if (status === "authenticated")
  console.log(admins)
  return (
    <React.Fragment>
      <MainHeader title="Hulu Media : Admin" />
      <div className="flex bg-[#e6e6e6] dark:bg-[#02201D] pt-10">
        <VerticalNavbar onChange={handleChange} data={data} />
        <div className="w-full flex flex-col justify-between mx-1 lg:mx-3 lg:mx-10 mt-20">
          <div className="flex flex-row justify-between items-center">
            <Profile admins={admins} />
            <MyCalendar serverdate={serverdate} />
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );

}