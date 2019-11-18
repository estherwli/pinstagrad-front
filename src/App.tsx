import React from 'react';
import logo from './assets/PinstagradLogo.jpeg';
import './App.css';
import { GalleryCard, Button, Dropdown} from "tabler-react";

const App: React.FC = () => {
  return (
    <div className="home-page">
      <header className="header">
        <div>
          <img src="https://github.com/chelseyywang/pinstagrad/blob/master/pinstagrad.png?raw=true" className='logo' alt='logo'/>
          <h1 className='hashtags'>###</h1>      
          <div className='selection'> 
            <Button pill color="azure" >✓ Night</Button>
            <Button pill color="yellow" >✓ Royce</Button>
          </div>
        </div>
        <div>
          <GalleryCard>
            <img src='https://lh3.googleusercontent.com/peHUXz7cJpIFH2iwO0YMHmz1zjyOlbaPiR0WJOpAzCJ_0hzJbZU42skIp9QWlijzFQR5M82RSlOFbWzv3Lh2EEFqiCNyRguYlZKXrg73uTAATlfm1vQ87XgrYN776jV5iNq7-CGcge3ZiUMBIbdZpCBePp92MCBiw7ioV7UPRuqKScx9RVfTjQjtbp1q901qJeJ98wIbW-LcS7vSw4V2z5gH-gpXcl0--cbAPO-0AR3XMX8niZIdwd5ZafNQlRtZEKaM8SFDTFG5UVrhDGZeAu2bsGGv0PuBZcdAkUj-h97TrvZm2YfGsfIdXyzqAjxs6WDzuVYaUE9rJrGQPxtZR0HGHMEQVlkKPwFQi2-OyjUQRQqP_DtHaUs14GuywFvFdW4cMaHxnUNeXyIISHdWzaKCzG68JWea-GgDOtS-ES472vs5VNLKJDRFk1SjDubY-H2OET4_Sfp6ZzIBeP2I0Bs03UO1GRc92dO8zKTak53Rwi9D-qVORQ8BvrCAyLL7wWDaPg1ExTryN4eAACh_cINCF6ojPrD3bVPamUmIGsxvlUfNyG00n2edi5m2jVtHkoXAasx3D80dsyINb4tKP3437GDBPK0mIoBVA29GuFfY5ld3gPsAj1RJkE_g9NhLEblOpLAptuC90BnzAS_jQbTzhsubOMXIjNGv-vo0cHC4C2mqcawjN9lldMDzcBZNh2eK43J_6t0ugrLzuGKoEmGOlrPuk8SmgewESrd1v1gx3-E=w986-h1478-no' className='image'/>
          </GalleryCard>
          <GalleryCard>
            <img src='https://lh3.googleusercontent.com/yLYohvkBVm5c8VLVRSTgbOCqX0Gh2rS_aUuMaJwHCa-IaBWb-TxE4HyOe7h6aoo8dznPrhIYSp0UmQMXI5MAoiQ68XRFIbHE_8USA9PawsgTfT0MdCPMEbRdJBgfPjareNo95pWS5nrzUokl1zGCKmFqhlyzpuH4xcf760TtmXuFyL2ZyZp86Wkno_rjqeNQTfTjeVNPY1NwRWvZ1oQj67HFX9FCGI1ssB_afajvL1qiyfuoQTFzLcfeSXYQ0EkukBu2Ku708wiQIKJ7-HsbhKGbPKj7g2wbc1lcoAMIQU9_3jPFMG3yy7aVdWw4HluQOudnPI-GEyn7PZou0o1xMSPP5gSJLTLCDgaBqFHv0uAtKbWeH_3_-97zL3bPsoIRohndBFKOEYG9oVAaHb_65tef56ZVizKXw3W0Tg_VJ48d9rwO-dX5Hr3gnXk-Iu0mZmzz2KI5hu2G-18-7rs-x1shyfI9y-xGGFPWkCon5nKaziNZtk4LkHUPa7W6egbtoMYDmocPLR7IfdT_bgaWWxGula8TS0NBWD1rYryfDoJ2GeVfBHrUxzzUS65xffRmc14E5m_EaUSNy4Vp_0aZpj3usE6sJ9vvrIIHOomZeSuNhLpMTsZt-8K_dZhJ3yiDwcc0bsbXBERq-jGkWXBAU3yzinC7Hg-vKiaslSUvv8fNoO4Dy-EqKoI9lVHN-CW7H_f53arCaLV9SFhjymBZzwUvvL-S7KHsrq6oGm6qL7G_zQM=w986-h1478-no' className='image'/>
          </GalleryCard>
          <GalleryCard>
            <img src='https://lh3.googleusercontent.com/IdvV9Uwh8SxI_uZyZsI2XYv149ePDOmpM7GwYz4J2f9uzJlyP8x669cQsan6Zq50-QNWdI1dkEjicAY07DjUEKPlh9Km46bTX4-4BBqXwef0TV6GUVPjVIGh0eLj7uy40Xy5sbgCbYiBl5uu99IIcGzu_VWUkCeAlE4Q9kWxH1NOK7jPetHwa36vC7mIzFGZ5i2cXIGC2uNRj2BtZ5fDk2Jz-QX6hseeXwW01FFQXUsE9C_XHRMCuu7fPaZlDocVTK6z_n-WhEVTZitiA_Dg9uig3yrwbDcHsmOvbk2Goks5C8IaOIpGTlvfonWyjBGIwJyhxrrPvBAXEbuEkIAmMZ0J4etab2DBD7wGbllEau6J4bV53bri-nIPId4eDbbzjda7hJgIFPdxLmTVDVuaobOrftvxW14_1OC0SxktnN-jXcFn9dv_5pjVeetfKzOjJynfUCwJsCzetIaN33ZJZOy9xqcI0tZuA9wVQq2uQibedZKZHY2wmZgWMwbnSerFtySMtgD3fXBnH91DsHNhs4BFg_Hur0AF5Rufj4OEVOHsMPzy4137PHihi-q_90S0XxNKNyGIL02p9cVNE61dfQM6jkDbByCvCKeXHYDs6j69e8lxuHeATr5VFBfkG6COtxsAelkm9rqewCPftVd4hqRb3TsDk13UAvRd-x9cE1Cn_ZDfIZHSoQOlGSZtREvMrrE2wYMMt6v2HnyFi2L-S3xoml-QTUF-11xJoQxNLOBLrVg=w2218-h1478-no' className='image'/>
          </GalleryCard>
 
        </div>

        <div>
          <GalleryCard>
            <img src='https://lh3.googleusercontent.com/IWg8he1Jc5wCKxd2yShrMGl4-u1IKo4oNkyLinP6EbgMUq4z62SnJQMvmmLph9-0Ip9cV6uzY_T98kiqBrpuI075KQI4zuIrqoDnnwG1XsILTKUfGjGEX5fT4060ZCeuNjTzuxzKSVK3GfOiIKjEFVNsFCyCY_s8uhdA60PDvFBDpdoB4iPejvypmnm8J54ptzqo3pHI-SoQESSeEuPOlxAxWBgJN2huG6yNnRGj1kLUtPe57sVbTY_ULUiTZWgTmjxDpEdEBetHT8MdNdo3WPRpnKy70mjXGizl4wrLRKgC-QWuFVQasqHEEMjGlMIbVm1uf2b8Kfhll6MKijiKgxJi2MiYa1YFy2VY-HOuPU7B0cDoRCu1KKXBz16XnF-gueE7tWw7RchAiZV88N9hWFIbjaryABlvoooCFh-g8_Bu5Rtyv0_Ay-Zvg0WJyirC4iJuEmEYvmhEhyseW2Y5Xym-C63ge1WZwon31vgQ523kApA1bsukyUciA5D-0_UY1_PrtYW269SUlY3I3SFLboYsK6g4OjGDD5fgubk11tIAI39T5Jpsci__0aAuayxIMZO9IRSthusycpCJH2syApr9pCwka22ZC7omvLbo6w3M0qlbZDXqYzYfahGVsReVIwLFYoVUAKeEQduN1C0KhPHqUjs9UHPBbFwQI-Aj3uvZ_pCdVSQEWQyrAeVZ5nGASPUPuLYy5XBrMO84RVBHg_71V_M7JAat_GJ6kfkZfZgS-wo=w2218-h1478-no' className='image'/>
          </GalleryCard>
          <GalleryCard>
            <img src='https://lh3.googleusercontent.com/KJ8UY81Aew3gEw6F3dpk1Uxm177ziZ494Y4ckYiwRKoWlYsbxTtAEaM8Ox2QRSqP7x1irdB0rdwqopYsnuoZ3r7eokkFjovcOAYq9vNOv6yZPZ2OLX_OECCtN5hGfL6tTTN0ZMlDu8hNRUuR7NTUcZFBrz9C7LHb6oTTOJjaFUara7MapDkrLyaiihLZEpq8rSdhR0THquBc7-7fqSg79RaMild8mJcjjIVNGuny5UilvuUELC8KhhPElFcF3a-tlkccKK3oZdQ3tFTfpf2-YtvMkSUDJ0Ou-X7QAkffakqCjymWWBtfRuwsF0n9-uJUNuVq1ihj76gotb3JGJX1oUSk2_FRR5CcvUD6AynLab-1CqPJ3OmXuzanmqx-Bf7rC7Kf11MPFPOPHNAcLeSXzAcvySO6Qg_z-Sr7xT9sgq8JWgsmu8rVsmuBrOqd7mzHYuexIQis3X-nHOt22B3lxbDW7B-4h8RJN8Lv62rvxrJ1dMIQdssCUBpoWuHYaIxbLUbEQx9_O88re3aL8lyh15--i8bfkaFJVWFj8b9TBFkvM35XlvlkkSMFn0Bm4NqQlyjRoCzWpJPeAY0NPmhYN7NGQZ5SEpQbdqIou1hOwRY8Sb7IEni4Ns9mhwiVjsOq8bVIrKMnlJJzgeI7_i1gySeAmscGE0bwDZ-7sI5ycbPoNdgoui3WzBA77EFiEa67e5R_7blZ19-zm87RPMO_RUoLJtFYKjpnGuXJ8tBgvxWFn4E=w986-h1478-no' className='image'/>
          </GalleryCard>
          <GalleryCard>
            <img src='https://lh3.googleusercontent.com/y5dB_Gh6IBEos8ZE9WUYOFUPYs9ps8pH2rAbbeK8tPEqLlxjzkjyuNyunnxopIwxmpxsGsRh93Xpdzjm8WItySlo7mKtRpzgabdcuvCvU-Dqdgax51Yg1uILL9zQo7C_e-547gaTDY0Q0Kib1yFbJJu0xeV_ACnshAcETM23O_TwTIm2YfOZdV3-y-jf-_IEiBIdP6iIgUyGjZRjzNPRlXm05tLjlM8UjgZ5OOlCITIuMv2k2VSTk4t_TMk1Xds11DkDX2Puo00XtQsDWwsOFnjJyhCw6bW__FZHyKCVq2h1tdt1k7GfLNnuXsmkMHxJFNyZRBLcsOIMYhN_dafQOoRif9So5QDC3umqU9CC7KbMXydUgtWAy_Bkl7kG6C3K9ytIi1nUTR4SBUfAqjyL6CA_dm8EBcn0zlHi-3FsdLq-p6mCSXCJP7E0vhW9DVxOR751tyXtuoSAPmDoqwm02vwYcSewz2rnZJWyqpiNaFfGGNklNqc99iAeeir08goCJmRlmyFHAKGOr4mf12g2FgR1ukRq-9MtaQFcqwO9VOuXjvw5pgGOJqY9OQFaEK1CSURv6YTyYKGQEDjRahxjo6biyW4viWnKnxvCvmGXVsEDlj9hCQvzhM0ZHWISaqr08lGjq5fFqfINa9s_OUQburtACrV__2EfBTF-91c6duKkGdzoDBfsI2kn7SoMRSQxYK6xgGbigo8D5vzr1O1_1DbhlmWAnNkmCWjpwnU2gV6FZBs=w2364-h1576-no' className='image'/>
          </GalleryCard>
          <GalleryCard>
            <img src='https://lh3.googleusercontent.com/Y53X6T23dNetsRn2c19iok7U0hahJCPXLjW8lp5crH1bOhr6qxkuKb12AZxaxGACV_S3yxuTuvvZSfg3UACZZwzFJJ5QsGp-dgI0mabqj5bYaD5K4k0uAt4xFzo--qO-FiWk6sL-c07no63S_IRqeqoKbmr9062iMIgwbpmn0ALtMYNGMXfB-ota4_PV3dtc62ghi6dnswR183wh1rDzp9SyR2IwBU913WC8F3y8KssCJBOmuf_-QCwJshyMdzkZgyDPjF6NfqCbPNl-0dA5R4jXaxoH2wsDpb9OLDhUxLKhJ4kgQFEWrOr3ZuU6XjiwUCv37569d6yPVch3wKbUGSwakSxnSgpnQCmCDIDrr2pkf611Fx8v1NHKlu6g7hpgTeZUWmfezBdO-W33tmpQGB8fwHeLF6m6YfcVjmiIm9IzAue5ihawv3RWRqhQjc77If9B1lDC9pxTQAHGwNofFIpVw011adlG7W4TMDOMCvd-Vh23ymF3oR8SYP7fkARNMx8SSUNjixDl86kUtCtYJTj1KBqubs0Q1zKzu4-ZUwBayEOS1wqCyuwouWv7SEGLUyzFIFf4zbUGpR2TtjlWFHeMw9hNKhrzJYuWziR8C5mI2jD81ZZmbipdqfbvg7NHBY7lmdpUkW_Af637d4muAZ3O6WbLvozeVcf0QB-aF1uHcw5biRBqsPJSp44Hrw2h7z-TgD2q99dGbKXaUZU2Xm0I22RH44LNJ6breHK5ir3JB6U=w2364-h1576-no' className='image'/>
          </GalleryCard>
        </div>
        <div>
          <GalleryCard>
            <img src='https://lh3.googleusercontent.com/0vNpGn_Ga6yBvsJ6nLU_518P_YQHCvlzvDxE_0NFOB368Yh4yOBY5jJVK1jlFWzWriwbhp1Xlnc3T4bUERHgv1JLv1I4K2RUwXL-ZtWsefzWk1mSYwokyubahrKE1jDAZ2VmdWopELfGAj5_hO-X0YNQ1olDmPRsMpXLV9KezbZH-7c3U9oZVWFDL2qPDSES65wW14eKm1xrmLUO26BF1VbtUO3COTI2nNuPp5aPbV0CZxOD1NCmZXZ2CAsX3_XxGDHTuTNy3vfL7FUOcLS5HDYev5u7N7Eqx1y1eIRXx9l2zlVpFYF_rO0tnc6rlGyjWuI0HdPWSVYb7ChcbMyywu9N_DzZjcTGQ0wkwXuLE-32c8vXycHl7KjCecfpXd_QYmcKu103cQE0r_R5yYRaUYJ2DHNOB7U6vVIu8Jwt9u-PJ5RTDurQ9GuKQuoSX5XbNa3b6j2NVVvgzIcNHccKQnOifA4KNaK1X34X3UYRDBw2eh1frIv-NlBV4FJL8n2reJ2JEbZXNMuQG2xNVsp__6kHHXB1DfZkKfpQA8NN5ENvItF-jeHc4Zi5Hdqq6wUrJDVn25uI__cXrFiwR2aTf6qZon9gpUrfdqKKYV06ozzxrSW2NDiil5hLSpqJtUxT-DQ_riKI6AQ4yzX5etKjw6qvCHSdc05syV2RRE-xyRYH18DGTz5PUirTrJDfBHqyvJobaPiuxT_cvEeA8ZVx_BHydjVycU8F4bUKWzDwB0fH2Sc=w1052-h1576-no' className='image'/>
          </GalleryCard>
          <GalleryCard>
            <img src='https://lh3.googleusercontent.com/Y53X6T23dNetsRn2c19iok7U0hahJCPXLjW8lp5crH1bOhr6qxkuKb12AZxaxGACV_S3yxuTuvvZSfg3UACZZwzFJJ5QsGp-dgI0mabqj5bYaD5K4k0uAt4xFzo--qO-FiWk6sL-c07no63S_IRqeqoKbmr9062iMIgwbpmn0ALtMYNGMXfB-ota4_PV3dtc62ghi6dnswR183wh1rDzp9SyR2IwBU913WC8F3y8KssCJBOmuf_-QCwJshyMdzkZgyDPjF6NfqCbPNl-0dA5R4jXaxoH2wsDpb9OLDhUxLKhJ4kgQFEWrOr3ZuU6XjiwUCv37569d6yPVch3wKbUGSwakSxnSgpnQCmCDIDrr2pkf611Fx8v1NHKlu6g7hpgTeZUWmfezBdO-W33tmpQGB8fwHeLF6m6YfcVjmiIm9IzAue5ihawv3RWRqhQjc77If9B1lDC9pxTQAHGwNofFIpVw011adlG7W4TMDOMCvd-Vh23ymF3oR8SYP7fkARNMx8SSUNjixDl86kUtCtYJTj1KBqubs0Q1zKzu4-ZUwBayEOS1wqCyuwouWv7SEGLUyzFIFf4zbUGpR2TtjlWFHeMw9hNKhrzJYuWziR8C5mI2jD81ZZmbipdqfbvg7NHBY7lmdpUkW_Af637d4muAZ3O6WbLvozeVcf0QB-aF1uHcw5biRBqsPJSp44Hrw2h7z-TgD2q99dGbKXaUZU2Xm0I22RH44LNJ6breHK5ir3JB6U=w2364-h1576-no' className='image'/>
          </GalleryCard>
          <GalleryCard>
            <img src='https://lh3.googleusercontent.com/y-hgHpf5TgPZmC77racs1quQ-Q39mUckN5H4S8FPoX8Z4Vv2oyGJOdb_-En5KvIuBkC65nScEJHuDp0t0Qskrtzwmc2KfvtOIbc8pCeILvCUOEXR9WlZ5BCXsQZhNDdLsHAbZjJ-fZ26u3QKDOfBJTNyjTbYmwjDuH--MWvRkBzyUzcq-ybl7j9Z8EfF5mcJoXERArUrmuyZQpAhuGpSkBbMsfnxlZ1QQu9XUxdsCzL5Vrl3KxV584u66Lv-kneaHmeiHWCfDWRCMWcKrGPSKT-o1pcIM_mUHOTFeJBt18TG1cwwISH3Y_rVWbOa9mRsbdSQEJ9F-x4JCZox9ur9f92v6FBIgEKpsMIRMm9hmDv9603k1FyPVwr87uZ1gerCg4a0BR-Q7DuXLnr3o23KEd1tJs_zTOvFvQlbpfGcZtD7fJsLaw-1ltGYMZSwVPZHcO9MIGTPiaSiqBd7IDXBGcfaM7R7TbG8Fl3pBM4S2ZxT7OdFRGRsWXLsBi12c5QS3eJCiL_O5BBgCoeTZuUE_ZmsvNAdG-MEq_emI1h6-BQYcKolj91kJ6lUmodx-TBBQRvqWt3XzH6oIJra70S2ukmgT6HJqIFbrdp34ftVoL1mt_YK-_t5dfhB2lA5I6UV5hZiuRDDtZITvlFhg_dxuLR8v3WaZi8uLjJea5KwwfmQ4dDFlUYNy6HZaIyUWMU38-eqoIDam7CgVIKjUlbIvF_xslwGFK-setHNR4Ywq8d0n14=w986-h1478-no' className='image'/>
          </GalleryCard>
        </div>
        <div>
          <GalleryCard>
            <img src='https://lh3.googleusercontent.com/EnvQJ5GtwRkVhTdYcbKTJqEzeDl4aodQAEp5cLngDee9sDZbMkmciG3kCtNuh3V6QHGT47fXs7OlnalfCMPTVZ7eccT5rl05851nbE_m8IIaiBLjpjLsDJNjo7flJ2iyWKy56YfXE5w3rm4gvO69EQbNVbSKtE1MOl9e2uzeanbo6Bpl7MgL2kkioi_KDwP7RA6DoN-uXAybhvAgc6uDZh-mhSy_avV4vCmc-M_wZH01ZFlNljjlAlPG9eh9i4dQ__XdbclgY2COTcfaJ6t3clJAbqqFzWN0SZhpHP6Y0IyKDD-_tl6z6nQvQhpBfpZi_dODP-KTSmO57CE0o0CTEsidZiJwVNKsXo-VznD7pktoAv6Q__St6KemaoS9UCfIiI_BmlEsRRl4wqJN-YQ4T6nZomPWEH3ZePtL14BF73TkiQ-_nx04AuoZnpdjpwmWYopR_b-k3GFUiki_e7IOu7zfi_LjSIgxvIg-3QDRYFX3-w_h-xY1F3u_iSKONzeQaY0w75d_8W8Lp6qCvIy3WAGFHQwo5fciyYp3xexzCMacYFi22GoSpe4diAcX0cDsTcZvD6QSpSp0ckM1NTaBEeuEyQGzXgB2LJcfLk-JAfTl89fgK0bGkrsqMiJrTzygfS4HQov_QVSqvefqgjirrfG4kau_IckqLsAmU-q-__0KK3yz6kUMbkKA5kOOW_LagHkeARxQCzH0BX1HPYsOOkiVzbC6ChuodxR_BPnv_G5cByc=w1052-h1576-no' className='image'/>
          </GalleryCard>
          <GalleryCard>
            <img src='https://lh3.googleusercontent.com/6SHVSsbYN70GdL51LjZQDfezMNzbULkpQ98RZdnAYDSPq9yx-Cj1of6PNprsFgl0A_aw8w--9X5tHk6pOr6TxqLXOkkm8ePiGEizv3Z-R4XOhz7FLwr-pvJNfJIb6MverejpVOB179_r02gUMr_1rLFg5edSnKtSmS08EN8J_MxQu8ehaLc1UQgV4VonKVihP7C3JdsDpc2IpKH7vwwhWD1esZcsJ0QQGsf7rOKTZ_jrZzie98nitf58SBZGnlUV0VtSl9pMTO0hDRx48IC9Mfh3t-7f-ttzAUnCRdEfg-XYVUXOzTX27nUNG1i_qvZpYqtXnl8Fl4dzNrO62ove5wRM21swr8iA7e5q79h2agK1z7Css_yWMEClx6VLtzbdSUxd49ndEyat6LjE6szknIQEEnIKRHNf4iPZXaN_24xFeSsmkU867s35Pr9si1hRZbMGD3STxSzvwYab6vZ4C8TJjv3sK2uZh8r02CYf2Up02rfAqBDfECXPYt95iSm2A7Bzq-RBGVLDYH7OT8QPv7cW710sz_hdg_22g3ocTx5lWMMBArFIPtDqLqwK_nzcxwVeohESKBQKPiasIrWuKaUBlWsW5vMgozh_fqGK9u9LFf6CjgAk8vhJg2L33sIvFcWz5MQZaesJj4I6Kfzh3Ct-biFYC8fSropYUqfFXwCmjMpsLMRS3ofyQoaJMeveycrr6ozYGcXHb2sC_FkWPAeYvtdyCWpzTIpx8FGABfS-nbY=w1052-h1578-no' className='image'/>
          </GalleryCard>
          <GalleryCard>
            <img src='https://lh3.googleusercontent.com/TWi6RnpFD3B9swJHRMDcAJm5aZPZ3Xkr_PjD7Sy_mrVXQypYAZwDiimu4WrDkxY2AAikIrN8_-jXiNv9XnyCnBMtkz5PKqTbEVSzTAvXh_WzraGDiB0t_kS9V49gxo2TCHJTd7PJf0AOTOuEeMopZa73en_DjRgW4nsVI2Ekh9hMMoHqeEXZqGEas-8wZuIFO3SbS8akaaZcP36YptuPQTejaSL2QQajSLICGIAlOfxAJtPS6fhI10f3xxfGQU_J9XHsmKxt0uxwtXTF38W-Av8-KB91OFtmJfRZW3vK6xwV6vRC39htsmluFlLo4QDb_ZBIHSFHs9KHqBuD4KQO2qdXA0jZvVu9XpHrKxIg_rzeCyjQ-jmUZwmxQs_CLH4EG5ZmOXNBZHxZRsF0RMj1WR7ZJ_zs28mp-05XLsGL0HKODL7Yrtt_ycFy92gfwEc5NT_blhfhprKvwI5RKUYWA16HtduBM80r5iteYfZEI_P10t5v5EbKthtXeq0msg_KF84hYCSlugcOEExZsXR78lj_4fHQs59_nDF9dI78ZpeC9hDaA7ahBAHt6r6tYMtuAvrQ5ptbT0sn8krJd_ZjagKAhNpMeqbeBWPEuLVz8xbD3wkmXhOiSl5ekLqB4T17Iw3u_tSpoP9XgRKjvXwpO3MnaKyFWH6-pRTzG8Dixb4NQszYbLNaX-CMMrXU5165vK98uS12gyd6k1Xu1lINOT7B8uvqFvXLns0_SdbaWvmQfOw=w1052-h1576-no' className='image'/>
          </GalleryCard>
        </div>
        <div className='heart'>
          <Button icon='heart' color="azure"></Button>
        </div>
        <div className='dropdown'>
        <Button.List>
          <Dropdown
            type="button"
            toggle
            color="secondary"
            items={[
              <Dropdown.Item>Home</Dropdown.Item>,
              <Dropdown.Item>Mission</Dropdown.Item>,
              <Dropdown.Item>Profile</Dropdown.Item>,
              <Dropdown.Item>Log Out</Dropdown.Item>
            ]}
          />
          <Dropdown
            value="Show Calendar"
            color="secondary"
            icon="calendar"
            items={[
              <Dropdown.Item>Dropdown Link</Dropdown.Item>,
              <Dropdown.Item>Dropdown Link</Dropdown.Item>,
            ]}
          />
          <Dropdown
            value="Show Calendar"
            color="primary"
            toggle
            items={[
              <Dropdown.Item>Dropdown Link</Dropdown.Item>,
              <Dropdown.Item>Dropdown Link</Dropdown.Item>,
            ]}
          />
        </Button.List>
        </div>
          


      </header>
    </div>
  );
}

export default App;
