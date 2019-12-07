import React from 'react';
import "tabler-react/dist/Tabler.css";
import "./upload.css"
import Navbar from '../component/navbar'
import { Dropdown, Form, Button } from "tabler-react";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar title="upload" />
      <div className='top-bar'>
        <img className="logo" src="https://github.com/chelseyywang/pinstagrad/blob/master/pinstagrad.png?raw=true" alt='logo'/>
        <h1 className='title'><strong>upload</strong></h1>
        <div className='right-buttons'>
          {/* <Button className='heart-icon' icon='heart-icon' color="azure"><img className='heart-or' src="https://github.com/chelseyywang/pinstagrad/blob/master/fall%201.png?raw=true"/></Button> */}
          <button className='filter'><img className='heart-or' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNDkiIHZpZXdCb3g9IjAgMCA1MCA0OSIgZmlsbD0ibm9u%0D%0AZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjUuMjg2%0D%0AOSIgY3k9IjI0LjYzNiIgcj0iMjQuMjg4OCIgZmlsbD0iIzZBQUFEOCIvPgo8cGF0aCBkPSJNMjQu%0D%0AOTM5MyAzNy4xNzczTDI2LjkyMTIgMzYuNTQ0MkMyNy4zMzU3IDM2LjQxMTkgMjcuNjE3IDM2LjAy%0D%0ANjcgMjcuNjE3IDM1LjU5MTZWMjkuMDE1NkMyNy42MTcgMjguODA0NSAyNy42ODM4IDI4LjU5ODkg%0D%0AMjcuODA3NyAyOC40MjgxTDM3LjA4MjkgMTUuNjUxOUMzNy41NjI4IDE0Ljk5MDkgMzcuMDkwNiAx%0D%0ANC4wNjQ1IDM2LjI3MzcgMTQuMDY0NUgxNC4zODczQzEzLjU1NyAxNC4wNjQ1IDEzLjA4ODQgMTUu%0D%0AMDE3OCAxMy41OTU1IDE1LjY3NTJMMjMuNDI2OSAyOC40MjA5QzIzLjU2MTkgMjguNTk1OSAyMy42%0D%0AMzUxIDI4LjgxMDcgMjMuNjM1MSAyOS4wMzE3VjM2LjIyNDdDMjMuNjM1MSAzNi45MDIgMjQuMjk0%0D%0AMiAzNy4zODMzIDI0LjkzOTMgMzcuMTc3M1oiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0i%0D%0AMS41Ii8+Cjwvc3ZnPgo="/></button>
          <button className='heart-two'><img className='heart-or' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9u%0D%0AZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwIDUzLjM3%0D%0ANUwyNi4zNzUgNTAuMDc1QzEzLjUgMzguNCA1IDMwLjcgNSAyMS4yNUM1IDEzLjU1IDExLjA1IDcu%0D%0ANSAxOC43NSA3LjVDMjMuMSA3LjUgMjcuMjc1IDkuNTI1IDMwIDEyLjcyNUMzMi43MjUgOS41MjUg%0D%0AMzYuOSA3LjUgNDEuMjUgNy41QzQ4Ljk1IDcuNSA1NSAxMy41NSA1NSAyMS4yNUM1NSAzMC43IDQ2%0D%0ALjUgMzguNCAzMy42MjUgNTAuMUwzMCA1My4zNzVaIiBmaWxsPSIjNkFBQUQ4Ii8+Cjwvc3ZnPgo="/></button>
          <div className='top-dropdown'>
            <Button.List>
              <Dropdown
                type="button"
                toggle
                color="secondary"
                items={[
                  <Dropdown.Item>home</Dropdown.Item>,
                  <Dropdown.Item>mission</Dropdown.Item>,
                  <Dropdown.Item>profile</Dropdown.Item>,
                  <Dropdown.Item>log out</Dropdown.Item>
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
        </div>
      </div>
      <div className="c-form">
        <div className='photo-submission'>
          <div className="question">upload photo here: </div>
          <button className="upload-photo">
            <img className="camera-img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9u%0D%0AZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDov%0D%0AL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgcng9%0D%0AIjI1IiBmaWxsPSJ1cmwoI3BhdHRlcm4wKSIvPgo8ZGVmcz4KPHBhdHRlcm4gaWQ9InBhdHRlcm4w%0D%0AIiBwYXR0ZXJuQ29udGVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgd2lkdGg9IjEiIGhlaWdo%0D%0AdD0iMSI+Cjx1c2UgeGxpbms6aHJlZj0iI2ltYWdlMCIgdHJhbnNmb3JtPSJzY2FsZSgwLjAwMTk1%0D%0AMzEyKSIvPgo8L3BhdHRlcm4+CjxpbWFnZSBpZD0iaW1hZ2UwIiB3aWR0aD0iNTEyIiBoZWlnaHQ9%0D%0AIjUxMiIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5T%0D%0AVWhFVWdBQUFnQUFBQUlBQ0FNQUFBRERwaVRJQUFBQUEzTkNTVlFJQ0FqYjRVL2dBQUFBQ1hCSVdY%0D%0ATUFBRWJlQUFCRzNnR09KakpiQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUIzZDNjdWFXNXJjMk5oY0dV%0D%0AdWIzSm5tKzQ4R2dBQUF0eFFURlJGLy8vL0F3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VF%0D%0AQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVB%0D%0Ad0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3%0D%0ARUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdF%0D%0ARUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VF%0D%0AQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVB%0D%0Ad0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3%0D%0ARUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdF%0D%0ARUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VF%0D%0AQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVB%0D%0Ad0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3%0D%0ARUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdF%0D%0ARUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VF%0D%0AQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVB%0D%0Ad0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3%0D%0ARUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdF%0D%0ARUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VF%0D%0AQXdFRUF3RUVBd0VFQXdFRUF3RUVBd0VFQXdFRXl3TkRzZ0FBQVBOMFVrNVRBQUVDQXdRRkJnY0lD%0D%0AUW9MREEwT0R4QVJFaE1VRlJZWEdCa2FHeHdkSGg4aElpTWtKU1luS0NrcUt5d3RMaTh3TVRJek5E%0D%0AVTJOemc1T2pzOFBUNC9RRUZEUkVWR1IwaEpTMHhOVGs5UVVWSlRWRlZXVjFoYVcxeGRYbDlnWVdK%0D%0AalpHVm1aMmhwYW10c2JXNXdjWEp6ZEhWMmQzaDVlbnQ4Zlg1L2dJR0NoSVdHaDRpSmlvdU1qWTZQ%0D%0Aa0pHU2s1U1ZscGVZbVpxYm5KMmVuNkNobzZTbHBxaXBxcXVzcmE2dnNMR3lzN1MxdHJlNHVicTd2%0D%0ATC9Bd2NMRHhNWEd4OGpKeXN2TXpjN1AwTkhTMDlUVjF0ZlkyZHJiM043ZzRlTGo1T1htNStqcDZ1%0D%0AdnM3ZTd2OFBIeTgvVDE5dmY0K2ZyNy9QMytaOVA1bXdBQUZRMUpSRUZVR0JudHdZdURqbVhlQi9E%0D%0Adk0yT21ZZHBoTW1TMUpaSERxQndpRXJLZDFpdHBhMVpTYTRtV0VxbTBaUmlybEUyN0txV2tJalpK%0D%0ANldTbEpLcWhsSFBiR0VyTzU5T1l3L1A5Qjk3YWptUU85M1hmejF5LzY3NS9udytnbEZKS0thV1VV%0D%0Aa29wcFpSU1NpbWxsRkpLS2FXVVVrb3BwWlJTU2ltbGxGSktLYVdVVWtvcHBaUlNTaW1sbEZKS0th%0D%0AV1VVa29wcFpSU1NpbWxsRkpLL2F6NTBNbHpQdmpNS1IvTW1UeTBPVlFBR2s3K2lvNzZhbkpES0g5%0D%0AT2UrZ0lIWGJrb2RPZ3pLWGZ2NCtPMjNkL09wU2huTzBNZ2UwNVVFWUdsakVVeWdaQ0dSZ1daMGpF%0D%0AaDBGNWRnOUQ1QjRvai9JWUtubFFuZ3hteUF5RzhxRFJBWWJNZ1VaUVZiZUlvYk1JcXNxNk00UzZR%0D%0AMVhWcXd5aFY2R3FxSEVaUTZpc01WVFZqR1lvallhcW1sVU1wVlZRVmRLY0lkVWNxaXBHTTZSR1Ex%0D%0AWEZhb2JVYXFncWFNN1FhZzVWdVZ5R1ZpNVU1Vll6dEZaRFZhbzVRNnc1VkdWeUdXSzVVSlZaelJC%0D%0AYkRWV0pGZ3kxRmxBVnkyV281VUpWYkExRGJRMVVoVm93NUZwQVZXUU1RMjRNVkVYV01PVFdRRldn%0D%0AQlVPdkJWVDV4akQweGtDVmJ3MURidzFVdVZveUFscENsV2NNSTJBTVZIbldNZ0xXUXBXakpTT2hK%0D%0AZFRKaldVa2pJVTZ1YldNaExWUUo5V1NFZEVTNm1UR01pTEdRcDNNV2tiRVdxaVR5R1prWkVQOTJs%0D%0AaEd4bGlvWDF2SHlGZ0g5U3ZaakpCc3FCUGxNVUx5b0U2MGpoR3lEdW9FMll5VWJLamo1VEZTOHFD%0D%0AT3Q0NlJzZzdxT0swWU1hMmdmaW1QRVpNSDlVdnJHVEhyb1g2aEZTT25GZFRQeGpGeXhrSDliRDBq%0D%0AWnozVVQ4NWpCSjBIOWFOeGpLQnhVRDlhendoYUQvV0ROb3lrTmxEZm04NUllZzdxZitvWE1aS09u%0D%0AUTcxblljWVVZOUFmZXZDRWtaVWFRY29wSzVtWksxSlJlVFZtTTBJbTEwREVYZkthNHkwMTA1QnBO%0D%0AVmF5SWhiV0FzUmxyR0VrYmNrQTVIVk1KK0srUTBSVFprUEhhSDYxcEdITWhFOTZYL2JSL1dEZlg5%0D%0ATFI3U2tEOTFHOVF2YmhxWWpHbUwxTHJncTkvMWlxaE1VdjU5NzFRWDFZaENyZG9kKzQxOWV0bXJq%0D%0AenFOVVFoM2R1WEhWc3BmSDkrdFFHOEhLeXBsYVFPV1FncWs1V1FoSTQ5eVZjU3JueEZmbU5vWnZk%0D%0AUVl0b1hMV2trRjE0RWZHQTBlb25IYmtnUXlZU2htMms4cDVPNGVsd0VoT0FWVW9GT1RBdTY0ZlU0%0D%0AWEd4MTNoemJuenFVSmwvcm53b09jQnFwQTUwQk5WTnFxTUtuVEtScUZxMGw2a0NxVVgwMUFGRGZP%0D%0AcFFpcS9JU3JWZmd0VmFHMXBqMHIwUFVvVllrZjdva0o5cVVLdUx5clEvaWhWeUIxdGozSTEzRUlW%0D%0AZWxzYW9oeHArVlFSa0orR2szdVJLaEpleEVtTm9vcUlVVGlKbm1WVUVWSFdFNzl5N2dHcXlEaHdM%0D%0AazQwbnlwQzV1TUVYYWtpcFN1Tzl6RWpwbWpueHM4L1dEQm4rdlE1Q3o3NGZPUE9Ja2JNeHpoT0Rx%0D%0ATmgxOUxwZC9mcW1IMVdaZ3BPa0pKNVZuYkhYbmRQWDdxTDBaQ0RYMGdwWU1nVnI1czNvZi9GZFZF%0D%0ARmRTL3VQMkhldW1LR1hFRUtmamFNWWJiNWhadWJKc09qNUtZM3Y3Q1pZVFlNUDhuWXliRGFQbnRR%0D%0ARXhock1tajJkb2JWemd6ODZBR0cwcDU1dDJmRHQremI1KzFoS0QyQUg5UTV3dkRabU5jMkNRRkph%0D%0AcHUza2VGenBBNitONGhocysvcExqRUVLdGJsNlgwTW0wSDQzaEtHU3NrYk9XbElnTFNjTjBvWUtr%0D%0AdndQNDBaSnAvZWNUb1M1dlE3UG1XWU5NWjNjaGthZXllMlFvSzFtcmlYb1pHTDc2eGtTT3dZbFlG%0D%0AcWtERnFCME5pSmI2VkZXY29mSDFITFZTVFduZDh6VkNJWndISVlSaHNISHdLcXRFcGd6Y3lESElB%0D%0AVEtYN050eGNBOVdzeHMwYjZMNnBBQXJvdXM5emttQkJVczduZEYwQlVKdU8yOVl2Qmt0aS9iYlJj%0D%0AYlhSZ1U0cmU3d09MS3J6ZUJtZDFnSDk2TEtQMnNLeXRoL1JaZjB3bnU3YWZVc00xc1Z1MlUxM2pj%0D%0AZkxkRlY4V2haRXlKb1dwNnRleGpJNmFtVW5pTkZwSlIyMURLdm9wS0xoeVJBa2VYZ1JuYlFLRytt%0D%0AaWdyWVFwbTBCWGJRUk8rbWdPUmtRSjJNT0hiUVRSK21jb3FFUWFXZ1JuWE1VZEU1Qld3alZ0b0RW%0D%0AbzJ6cDN3Zi9YOXVPZjd4OTBqcjZCTHJtcFF5SWxmRVNxOEZIL2V2aEowM3Yya3cvUUxjVURZRm9R%0D%0ANHFZWUY5ZWgrT2wzYldINWtDbkZMU0JjRzBLbUZBUHB1QlhNdWZUR09pUy9DeUlsNVhQeERsNkEw%0D%0ANG02VUdhQWgyeUlCME9TRi9BUkRsMEVjb3hrSVpBZDh4TWdSTlNaakl4NHRlaVhBL1JET2lNU1RF%0D%0ANElqYUpDWkdMOGlXOVFTT2dLKzZCUSs1aEF1VEhVSUc2KzJnQ2RFUEpuK0dVUDVjd2NOMVJvVkUw%0D%0AQVRyaGNBODRwc2RoQnV3dFZLem0xelFBdW1CM0p6aW4wMjRHcXpzcThUY2FBQjJ3dnpVYzFIby9n%0D%0AN1FyR1pYSXBnRlF2cUp1Y0ZLM0lnWm9PaXBWUU85QThVcXZoYU91TFdWd3JrZWxIcWQzb0hpRDRL%0D%0AeEJERTRIVkdva3ZRT2x1eDhPdTUrQk9RdVZ1b0hlZ2NJOUJxYzl4cUNjZ2twMW8zZWdiTE9UNExT%0D%0AazJReEd2QVlxMVpuZWdhSzlrd3JIcGI3RFlEUkVwYTZuZDZCa3kwK0Y4MDVkemtDMFJhWHVvSGVn%0D%0AWU4vVVJ3alUvNFpCdUJxVmVvVGVnWEtWWG9wUXVMU1VBZmdYS3JXUzNvRnk1U0lrY2htQVRhak1X%0D%0AVFFBaXJVb0NTR1J0SWdCYUl0S0RLVUJVS3B0RFpCb0tabG50bWh4Wm1ZS0VxM0JOdnIzTENxV3RJ%0D%0Ab0dRS0hLZm85RXFkOTEwQ052cmk3Y1ZjUWZGTzBxWFAzbUk0TzYxa2VpL0w2TXZwVzFRb1g2MHdR%0D%0AbzFEZ2t3aGszUHJOc0Q4dTFaOWt6TjU2QlJCaEgvOTVBUldwK1JST2dUTzhsSTJnTitrejlMNnZn%0D%0AdjFQN05FRFFrdCtqZnplaEFrL1FDQ2pTam9ZSVZwTng2K2pCdW5GTkVLeUdPK2hiVVVlVTYxYWFB%0D%0AU1dLWDRrZ1pkNjZqSjR0dXpVVFFib3lUdCsyTmtJNWZsOU1NNkJFVXhDYzVLdGZMcUtSb3BldlRr%0D%0AWndwdEMvcloxd1VuOHVvaUZRb08yWkNFcktnQy9wdzVjRFVoQ1V6TzMwcitobS9GcnlJelFHQ25R%0D%0AVEFsTHo5czMwYWZQdE5SR1FteGlFQmVmakJEM1gwQndvejJJRTR6ZDNiMk1BdHQzOUd3UmpNWU5R%0D%0AOWtLbkpQd2tyZWY3OUFNVXB5UWJRWWdOMk1tQTdCd1FReEN5U3hpTTdjL2UySzFKclRyWmx3OTY1%0D%0AVEQ5QWNWNUdFRm92WXdCV3RZYVFYaVk0b0RTYkU2SGY3VW5sekpRcFpOcnc3LzB6WlFHbE9aYStO%0D%0AZDNLd08zdFMvOHU1YlNnTUs4QmQ4eTVqQWg1bVRBdDdjb0RDakwwWFBnVjlzQ0praEJXL2gxemxI%0D%0AS0FzcVNCNytHRkRGaGlvYkFyenpLQW9xeXJ6Yjh5WGlKQ2ZWU0J2eXB2WStpZ0tLTWh6OU52MlND%0D%0AZmRrVS9veW5LS0FraCt2QmwzWTdtSEE3MnNHWGVvY3BDU2pKby9EbHNvT3NCZ2N2Z3krUFVoSlFr%0D%0AR05ud0k4L0hXTzFPUFluK0hIR01Rb0NDaklWZnR4ZXhtcFNkanY4bUVwQlFEbEtHOE9IZTFtTjdv%0D%0AVVBqVXNwQnlqSERQZ3drTlZxSUh5WVFUbEFNZUl0WWE1WEthdFZhUytZYXhtbkdLQVljMkd1eTFG%0D%0AV3M2TmRZRzR1eFFERmFBZGo1KzFsdGR0N0hveTFveGlnRkN0ZzdLd3R0R0RMV1RDMmdsS0FVZ3lE%0D%0AcWRSOFdwR2ZDbFBES0FVb1JFazltUG9uTGZrblROVXJvUkNnRVBOaHFqZXQ2UTFUOHlrRUtNUjFN%0D%0ASFQyWGxxejkyd1l1bzVDZ0RMc1BRVm1VcGZUb3VXcE1IUEtYc29BeXZBVUREMUtxeDZGb2Fjb0F5%0D%0AakR4VERUdm94V2xiV0htWXNwQXloQ0Fjd2tMYWRseTVOZ3BvQWlnQ0xrd3N4ZmFkMWZZU2FYSW9B%0D%0AU3hNK0drWHA3YU4yZWVqQnlkcHdTZ0JJc2c1bm5LTUJ6TUxPTUVvQVNqSVdSem5FS0VPOE1JMk1w%0D%0AQVNoQlZ4aFpTaEdXd2toWFNnQUtjQ1FWSnJwUmlHNHdrWHFFQW9BQ0xJU1JoUlJpSVl3c3BBQ2dB%0D%0AUGZDUkh1SzBSNG03cVVBb0FBWHdjUThpakVQSmk2aUFLQjkrNU5oSUR0T01lTFpNSkM4bi9hQjly%0D%0AME9Fek1weUV5WWVKMzJnZllOaDRFNlJSU2txQTRNREtkOW9IMnRZV0F3UlJrTUE2MXBIMmpkcmhn%0D%0ATUxLVW9TMkVndG92V2dkYk5oWUVtRktZSkRNeWxkYUIxbzJFZ2o4TGt3Y0JvV2dkYWx3UHZZaHNw%0D%0Aek1ZWXZNdWhkYUIxNThPN1N5ak9KZkR1ZkZvSDJoYXZDZThlcERnUHdydWFjZG9HMmxZSUEva1VK%0D%0AeDhHQ21rYmFOdC80RjN0VW9wVFdodmUvWWUyZ2JaTmhuZTlLRkF2ZURlWnRvRzJEWVYzLzZKQS80%0D%0ASjNRMmtiYU50bDhHNE5CVm9EN3k2amJhQnRaOEt6MHluUzZmRHNUTm9HV25Zb0JzK3Vwa2hYdzdQ%0D%0AWUlWb0dXcllTM3QxRmtlNkNkeXRwR1dqWkhIZzNqU0pOZzNkemFCbG8yVFB3YmdsRldnTHZucUZs%0D%0Ab0dXVDROMTJpclFkM2syaVphQmxlZkNzRG9XcUE4L3lhQmxvMlVoNGRoR0Z1Z2llamFSbG9HV0Q0%0D%0AVmsvQ3RVUG5nMm1aYUJsZmVIWmNBbzFISjcxcFdXZ1pWZkRzekVVYWd3OHU1cVdnWloxaDJmL29G%0D%0ARC9nR2ZkYVJsbzJZWHdiQ3FGbWdyUExxUmxvR1hONE5rc0NqVUxualdqWmFCbERlSFpHeFRxRFhq%0D%0AV2tKYUJsbVhBczhVVWFqRTh5NkJsb0dYSjhHd0ZoVm9CejVKcEdXaFpPanhiUXFHV3dMTjBXZ1ph%0D%0AMWdDZXZVV2gzb0puRFdnWmFGbFRlUFp2Q3ZWdmVOYVVsb0dXdFlWbjB5alVOSGpXbHBhQmxuV0Za%0D%0ANU1vMUNSNDFwV1dnWmIxZ0dkNUZDb1BudldnWmFCbGZlRFpTQW8xRXA3MW9XV2daYmZBc3dFVWFn%0D%0AQTh1NFdXZ1phTmdHZGRLVlJYZURhQ2xvR1dqWUZuRFNoVUEzZzJocGFCbGsyRWQvc3AwbjU0TjVH%0D%0AV2daWTlCZS95S1ZJK3ZIdUtsb0dXellKM015blNUSGczaTVhQmxuMEk3MFpUcE5IdzdrTmFCbHEy%0D%0AQjk3bFVLUWNlTGVIbG9HMjFZTm5UU2hTRTNoV2o3YUJ0bDBDN3paVG9NM3c3aExhQnRvMkFONDlU%0D%0ANEdlaDNjRGFCdG8yOFB3cmg4RjZnZnZIcVp0b0cydndic3pLTkFaOE80MTJnYmF0Z0VHTmxDY0RU%0D%0AQ3dnYmFCdGhYWGdIZFRLTTRVZUZlam1MYUIxcDBMNzNwUm5GN3c3bHhhQjFyWEU5Nmw3cVl3dTFQ%0D%0AaFhVOWFCMW8zRWdhbVVKZ3BNRENTMW9IV1BROERIU2xNUnhoNG50YUIxaFhDeEJjVTVRdVlLS1Ix%0D%0Ab0gyTlllQitpbkkvRERTbWZhQjlBMkdnVVp5Q3hCdkJ3RURhQjlvM0N5WVdVWkJGTURHTDlvSDJi%0D%0AWVdKeXluSTVUQ3hsZmFCQXJTQWlYeUtrUThUTFNnQUtNQlFtTGlHWWx3REUwTXBBQ2pBWEppSXJh%0D%0AWVFxMk13TVpjQ2dBTHNUb0tKR3lqRURUQ1J0SnNDZ0JLMGdZbmtBb3BRa0F3VGJTZ0JLTUdkTU5L%0D%0AWEl2U0ZrVHNwQVNqQjJ6RHpMZ1Y0RjJiZXBnU2dCTVZaTU5LaW1OWVZ0NENSckdKS0FJcHdHOHhN%0D%0Ab0hVVFlPWTJpZ0NLa0E4ejZadG8yYVowbU1tbkNLQU16V0htR2xwMkRjdzBwd3lnRE9OaDZGVmE5%0D%0AU29NamFjTW9BeWJZakJUOXl0YTlGVmRtSWx0b2d5Z0VOMWhxSE1KclNucERFUGRLUVFveEhNd05Z%0D%0AclczQU5UejFFSVVJZ0R0V0FvOWpZdGVUc0dRN1VPVUFoUWlodGdLdXRyV3ZGMUZremRRQ2xBS1Ji%0D%0AQVdPY2lXbERVR2NZV1VBcFFpdEl6WWV5UFpheDJaWCtFc1ROTEtRVW94bVNZdTVYVjdsYVltMHd4%0D%0AUURHTzFJZTVNYXhtWTJDdS9oR0tBY294QVQ1TVliV2FBaDhtVUE1UWpnT1pNSmMwaDlWb1RoTE1a%0D%0AUjZnSEtBZ3VmQWhaUWFyell3VStKQkxRVUJCZHA4S0gyS1BzSm84RW9NUHArNm1JS0FrSStITDNh%0D%0Ad1dkOE9Ya1pRRWxHUnJHbnk1dVlRSlYzSXpmRW5iU2tsQVVZYkFueDZIbVdDSGU4Q2ZJUlFGRktV%0D%0Ad0JmNWtyMlZDcmMyR1B5bUZGQVdVNVMvd3FkWnpUS0RuYXNHbnYxQVdVSlp0ZGVEWFRZZVlJSWR1%0D%0AZ2w5MXRsRVdVSmduNEZ2ejFVeUkxYzNoMnhNVUJoU203RUw0Vm5OaUNRTlhNckVtZkx1d2pNS0Ew%0D%0AaXhQZ24vWml4bXd4ZG53TDJrNXBRSEZHWUlnOU52R0FHM3JoeUFNb1RpZ09IdFBSeEJxUDFiS2dK%0D%0AUStWaHRCT0gwdnhRSGxtWUZndEpwZHhnQ1V6VzZGWU15Z1BLQkFseUlnelo0dm9VOGx6emREUUM2%0D%0AbFFLQkE2MUlRbExPbkhxTVB4NmFlamFDa3JLTkFvRVQzSWppL0c3K0poamFOL3gyQ2N5OGxBaVU2%0D%0Aa28wQXhicE4yMGZQOWszckZrT0FzbzlRSWxDa3RiVVFxTFNjMTR2cFFmSHJPV2tJVksyMUZBbVVh%0D%0AVHFDbG43VnhFL0tXQVZsbjB5OEtoMUJtMDZaUUtGdVJBSms5bjVzMVRGVzROaXF4M3BuSWdGdXBG%0D%0AQ2dVQWViSVRHU20vUVk4ZFM3My9BRTM3ejcxSWdlVFpLUkdNME9VaWhRcXMvU2tFZzFNaHUxNm5U%0D%0ARmRmMzdYM2RGcDFhTk1tc2drZEkrbzFTZ1dFOGlOSjZrV0tCY09RaUpITW9GeXJYL0hJVENPZnNw%0D%0ARnlqWWlsU0VRT29LQ2daS05pTUc1OFZtVURKUXRFbHczaVNLQnNwMkR4eDNEMlVEaGVzUHAvV25j%0D%0AS0J3cFQzaHNKNmxGQTZVN3NnbGNOWWxSeWdkS043ZVZuQlVxNzBVRDVSdlN5TTRxZEVXeWdjNjRJ%0D%0Ac3NPQ2pyQ3pvQWRNSG52NFZ6ZnZzNVhRQTZZV05UT0ticFJqb0JkTU9PZG5CS3V4MTBBK2lJZzVm%0D%0ARElaY2ZwQ05BVnh6ckEyZjBPVVpYZ002SUQ0TWpoc1hwRE5BaEQ4QUpEOUFob0V1ZVRZWjR5Yy9T%0D%0ASmFCVDNzeUVjSmx2MGltZ1d3b3ZnbWdYRmRJdG9HT0tSMEN3RWNWMERPaWMxekloVk9acmRBN29u%0D%0AazBkSVZMSFRYUVA2S0RpT3lIUW5jVjBFT2lrK2FkQm1OUG0wMG1nbXpaMWhpaWROOUZOb0tQaXo5%0D%0AU0ZHSFdmaWROUm9MTjJEWXhCaE5qQVhYUVc2TEFQMjBDQU5oL1NZYURMU2lmWGhtVzFKNWZTWmFE%0D%0AYnR0MElxMjdjUnJlQnJudXZKYXhwK1I1ZEJ6cXYrT2x6WU1VNVR4ZlRlV0FJbE03TVJyWExubG5L%0D%0ARUFCRElmNUtPMVNyZHEvRUdRcGdXQ3pvZ21yVFpRSERBZ3lQOTY5RXRianlmWVlIR0NZcit0WkNn%0D%0AdFhxdTRKaEFvYkxnZW1YeHBBd3NVdW5IMkM0Z0tHejZlL05rQkROL3I2Sm9RT0cwVWRENmlKZ2RZ%0D%0AZDh4REFDdytuWXZONDFFWmlhdmVjZFl6aUJvWFZzOFpndXFmQXR0Y3VZeGNjWVdtQ29IVjQ0cWtN%0D%0AeWpDVjNHTFh3TUVNTkRMMzk4NGRmRUlObnNRdUd6OS9QMEFNajRkQW5zOGIwYVpPT0trbHYwMmZN%0D%0AckU4T01STEFDSWwvdGVpSllWYzBTa001MGhwZE1leUpSVi9GR1NHSU0zcEs5bXhhKzlFN3I3encr%0D%0ASVQ3aGcyN2I4TGpMN3p5emtkck4rMHBZZlRFY1lncXdnNWhHMVdFYlVNQlZZUVY0RE9xQ1BzTVM2%0D%0AZ2liQWxtVWtYWVRJeW1pckRSdUo0cXdxN0grVlFSZGo3U3lxZ2lxeXdOK0pRcXNqNEZNSkVxc2lZ%0D%0AQ3VJb3FzcTRDa0Y1TUZWSEY2ZmpXKzFRUjlUNitjeHRWUk4yRzcyUVZVMFZTY1JiKzUxV3FTSG9W%0D%0AMzd1V0twS3V4ZmRTdDFKRjBOWlUvT0JXcWdpNkZUK3FzWUVxY2piVXdFOTZVMFZPYi96Q1VxcUlX%0D%0AWXBmdXBncVlpN0djVjZoaXBSWGNMeG1KVlFSVXRJTUozaVNLa0tleElteUNxa2lvekFMdjNMK1Fh%0D%0AcUlPSGcrVHVLYU9GVWt4Sy9CU2QxSEZRbjNvUnl6cUNKZ0ZzcFRjemxWNkMydmlYSTEzRUlWY2xz%0D%0AYW9nTHREMUdGMnFIMnFOQUZoVlFoVm5nQktsSC9BNnJRK3FBK0twVTZuU3FrcHFlaUtrYVVVb1ZR%0D%0ANlFoVTBSLzJVWVhPdmorZ3lwcC9TUlV5WHphSEI2Zm1IYUlLa1VONXA4S2JCaytXVUlWRXlaTU40%0D%0ARjJ6dVZTaE1MY1p6SFJhUXVXOEpaMWdydGRLS3FldDdBVi9Xais2bmNwUjJ4OXREZjlxOUp4ZVNP%0D%0AV2N3dWs5YXlBb2pRZTh1TDZZeWhIRjYxOGMwQmhCcTlHMDU4aEowMTVhc0d6bFowcWtsY3NXdkRS%0D%0AdDBzaWVUV3RBS2FXVVVrb3BwWlJTU2ltbGxGSktLYVdVVWtvcHBaUlNTaW1sbEZKS0thV1VVa29w%0D%0AcFpSU1NpbWxsRkpLS2FXVVVrb3BwWlJTU2ltbGxGSktLYVdVUFA4UEJ1cGxYUkF0YnljQUFBQUFT%0D%0AVVZPUks1Q1lJST0iLz4KPC9kZWZzPgo8L3N2Zz4K"/>
            <div className="up-button-label">upload photo</div>
          </button>
          {/* <Button pill color="azure" >
            Upload Photo
          </Button> */}
        </div>
        <div className='form-submission'>
          <div className="question">where was this photo taken? </div>
          <Dropdown triggerContent="location" 
              itemsObject={[
              { value: "royce",},
              { isDivider: false },
              { value: "powell", },
              { isDivider: false },
              { value: "janss", },
              { isDivider: false },
              { value: "boelter", },
              { isDivider: false },
              { value: "bruin bear", },
              { isDivider: false },
              { value: "sculpture garden" },
              ]}
              />
          <div className="question">when was this photo taken? (season) </div>
          <Button.List className='button-list'>
            <Button pill color="secondary">
              <div className="butt"><img src="https://github.com/chelseyywang/pinstagrad/blob/master/fall%201.png?raw=true"/></div>
            </Button>
            <Button pill color="secondary">
              <div className="butt"><img src="https://github.com/chelseyywang/pinstagrad/blob/master/winter.png?raw=true"/></div>
            </Button>
            <Button pill color="secondary">
              <div className="butt"><img src="https://github.com/chelseyywang/pinstagrad/blob/master/spring%201.png?raw=true"/></div>
            </Button>
            <Button pill color="secondary">
              <div className="butt"><img src="https://github.com/chelseyywang/pinstagrad/blob/master/summer%201.png?raw=true"/></div>
            </Button>
          </Button.List>
          <div className="question">time? </div>
          <div className="toggle">
          <Form.Group>
            <Form.SwitchStack>
              <Form.Switch type="radio" name="toggle" value="day" label="day" />
              <Form.Switch type="radio" name="toggle" value="night" label="night" />
            </Form.SwitchStack>
          </Form.Group>
          <Button pill color="azure">
            submit upload
          </Button>
        </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;