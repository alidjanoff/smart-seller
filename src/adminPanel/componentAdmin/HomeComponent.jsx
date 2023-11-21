import React from "react";
import { LuUsers } from "react-icons/lu";
import { IoIosTimer } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import dataReklam from "../../db/dataReklam";
const HomeComponent = () => {
  return (
    <>
      <section className="homeContent">
        <div className="usersCount">
          <div className="leftuC">
            <p>
              <LuUsers />
            </p>
          </div>
          <div className="rightuC">
            <p>Vebsayta daxil olan istifadəçilərin sayı:</p>
            <p>
              12,468 vip olan istifadəçilər - 72,000 adi istifadəçilər --- Ümumi
              84,468{" "}
            </p>
          </div>
        </div>

        <div className="usersTime usersCount ">
          <div className="leftuC leftuT">
            <p>
              <IoIosTimer />
            </p>
          </div>
          <div className="rightuC">
            <p>Ümumi istifadəçilərin saytda qalma vaxtları:</p>
            <p>24 saat 48 dəq 32 san</p>
          </div>
        </div>

        <div className="vebView">
          <div className="leftW ">
            <div className="leftWC ">
              <p>
                <FaRegEye />
              </p>
            </div>
            <div className="rightWC">
              <p>Saytın görüntlənmə sayı:</p>
              <p>148, 960. 249</p>
            </div>
          </div>
          <div className="rightW leftW">
            <div className="leftWC">
              <p>
                <CiWallet />
              </p>
            </div>
            <div className="rightWC">
              <p>Vip satış sayı və vip satışından gələn pul:</p>
              <p>1440 satış - 24,000 AZN</p>
            </div>
          </div>
        </div>

        <div className="dataReklam">
          <h4>Reklamlar haqqında məlumat</h4>
          <table>
            {dataReklam.map((x) => (
              <tr key={x.id}>
                <div>
                  <p>Hansı şirkətlərdən reklam təklifi almışıq:</p>
                  <th>{x.name} </th>
                </div>
                <div>
                  <p>Reklam təkliflərindən nə qədər qazanmışıq:</p>
                  <th>{x.money}</th>
                </div>
                <div>
                  <p>İş müddəti nə vaxta qədərdir:</p>
                  <th>{x.date}</th>
                </div>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
