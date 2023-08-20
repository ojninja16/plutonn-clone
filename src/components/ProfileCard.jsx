import '../styles/profileCard.css'
// import { FaArrowGate } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <section className='profileCard'>

      <div className='profile_cool_logo'>
        <img className='logo_outside' src='https://www.plutonn.com/static/media/Mask.c87a2edc5f7bc40a251cbff35040b1cb.svg'/>
        <img className='logo_inside' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABWCAYAAACgqOpHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS+SURBVHgB7ZxBbxtVEMf/qZDghF0ucKHdXHpq6/SOqIMEByrUcEVCciSE6AERiQNCQoqrIorEASQkrgkp4ZoExDlJ4R47/QBe+8SJhE8wfeNdq6kbZ71+M+u39vykkS1tHL/9e3b2vZk3CxiGYRiGYRiGYRiGERgLCBwiqrqXyNmSs2pqA06dxelra2Fh4RQBE5zYTtzIvaw4u41E4CjHx2NnLWd7zg6c+DGM52HvdbbmbJ9kOXLWSH/A+SYVed3ZCenScbYxl6IXKPIw/H3rmBfcydZTT5smHZp1L6fEm0Ni9ryckrCxQ2HC46qiANSnfpRcrjtIpnGhEjtb1p4qqoqdCr2PfHPlaRFDWXA1sdNL8wjlEHoAL4iWtVail6DHBsolNMOhbgdKqIhNyV1+BeWkTkqzFPEwksbpDsoPh5MDCKIhNgsdofzEzm5Jxm/RMJJefhFmg8jZGgQR8+w0fPDso5AFQkGwVy9KebekZzcxW0IzfD5i3i3i2SVbvORFzLulPLuODKH/eXyIO++9gytvvIbKK5f6739/9CuKZMIxsHc3EAqUVERG8vBBk159eeFc42NF4DmGfYSAG0h00Si3tzZGnuTA/j7cJ02ExhDBE4kwUr/o4PajLWTx8Nv70ERoDN4rYu8bpPvFd93L3VHHOTZmUalW0fv3P2ghNIY9d5P0ElzCs2sXHeSTyOL/U93tHkJjqMETL7Hp2Qaakdy4mT3Gt96+DU2ExhCRZ0XH17Mzqy9ff5OdQPvo4wY0ERxDhGnhfukVGoPvHqyPnAXwsSIQGkMD04KSXUxj8Zubfr3/br1/cm++frn//rHylE9hDKKJqbxiF7MiCYcmPNAsixlDmNgF4it20PuhFfA6XxM7HzE88BW7hfnCy7m8ciOUrKhOMD9c9ikieHl2+sVdzAexb7XmJfjDoeQqFODkEFdXer0Yx+02et34ueNXrka4Wau53MdSP/8xTsLJgzamDeVYRY7D6ckJ/fLzT251t5yZ8B82/sz21iYp0cC0oYxKzbiwyFye4mV0XpGH7fq1RY1yW4QQIM8uL/ZkCZHPE13I048ggNRWBk7Q/IiccEy+9+kq/vpjb+TfcBy+88Fd3KgtoVKpOKsmVRUXv3vdLp4ct/Ck3eq/H8W9z7/A9z/kHt5ZVt3NcRMhQEkbR+7Or+vXonM9kr38qy/XcmXk+G8/+6RxQTyv04R0KLRmJ5ogAzgqt8zxe1K6cedc0TmkTMgGQoMm8O5BbnkgxnH7iKTgrQlnrxy+UiaAzydCiNAE3v3n3k4/qe/jzaNgL+f/71GkaEIQ0f3ZVM4+mlHwinERgojms9Pl7Cpmg2UII148SFsjdLc46XNfo0VPszWPNyPWUT52ndAfQgHtPkgWPOTO3mFiCPfRnEWtBpkOmD0kRjmIodhwyqgWfNO4xzeaGGEz6OyNoYh6dT09gVvOdhEmhyhA6MKh8Db1NDHLUJL/7tB06TirY16gxMun8Ywo/t5ZayHMhhIv3yR9T59fkYdJRW84a5EsB5TUSIMQOdQnVtaRNAxxy0CU4+NcruFp3AGSlWCMgCjLs1gHz2GN8OKzWPvPYYXAvg7DMAzDMAzDMAzDMAzDMIx8PAXDnXjodxSdEQAAAABJRU5ErkJggg=='/>
      </div>

      <div className='login_status'>
        <h2>You Haven't Logged... </h2>
        <h3>take your username now</h3>
      <p>
      Click the login button and make yourself
       a part of this wonderful community.
      </p>
      </div>
      <button className='login_btn'>
Login
      </button>
    </section>
  )
}

export default ProfileCard