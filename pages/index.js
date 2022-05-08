import { Layout, Home } from '@/components'
import React, {useEffect} from 'react';
import axios from "axios";
import styles from '../styles/Home.module.css'
import tableStyles from '../styles/Table.module.css'
import { Herounit } from './herounit';
export default function HomePage() {
  useEffect(() => {
    const loginUser = localStorage.getItem("loginUser")
    const user = JSON.parse(loginUser)
    if (loginUser === null) {
        axios
            .get("http://localhost:5000/api/now")
            .then((res) => {
                var data = res.data;
                document
                    .getElementById("timeZone")
                    .innerHTML = '<h1>현재시간: ' + data.now + '<h1>'
            });
    } else {
        console.log(JSON.stringify(user))
        document.getElementById("timeZone").innerHTML = '<h1>Welcome: ' + user.user.name + '<h1>'
    }
}, []);

return (
    <table className={tableStyles.table}>
        <thead>
            <tr>
                <th>
                    <h2>HOME</h2>
                    <Herounit/>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr >
                <td>
                    <div id="timeZone">현재시간</div>
                </td>
            </tr>
        </tbody>
    </table>
)
}