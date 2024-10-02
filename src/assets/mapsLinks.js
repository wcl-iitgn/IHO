import drought from "../assets/legends/drought.jpg"
import mean_tmp_anm_foreact from "../assets/legends/mean_tmp_anm_foreact.jpg"
import mean_tmp_foreact from "../assets/legends/mean_tmp_foreact.jpg"
import pcp_anm_forecast from "../assets/legends/pcp_anm_forecast.jpg"
import pcp_anm from "../assets/legends/pcp_anm.jpg"
import pcp from "../assets/legends/pcp.jpg"
import tmax from "../assets/legends/tmax.jpg"
import tmin from "../assets/legends/tmin.jpg"
import tmin_anm from "../assets/legends/tmin_anm.jpg"
import tmax_anm from "../assets/legends/tmax_anm.jpg"
import runoff from "../assets/legends/runoff.jpg"
import runoff_foreact from "../assets/legends/runoff_foreact.jpg"
import runoff_anm from "../assets/legends/runoff_anm.jpg"
import runoff_anm_foreact from "../assets/legends/runoff_anm_foreact.jpg"
import sm from "../assets/legends/sm.jpg"
import sm_anm from "../assets/legends/sm_anm.jpg"
import sm_anm_forecast from "../assets/legends/sm_anm_forecast.jpg"
import sm_forecast from "../assets/legends/sm_forecast.jpg"
import pcp_forecast from "../assets/legends/pcp_forecast.jpg"







export const mapsLinks = [


    {
        "name": "pcp",
        "label": "Precipitation (mm)",
        "url": "https://lh3.googleusercontent.com/d/19wpfoBkaN1i50BgQeFHaNJsGq4grIsEG",
        "section": "Observed_meteorological_conditions",
        "legend": pcp
    },
    {
        "name": "tmax",
        "label": "Max. temp. (°C)",
        "url": "https://lh3.googleusercontent.com/d/1VQEDON0yzvzDmM8GB3K22HXSdRhCkLkO",
        "section": "Observed_meteorological_conditions",
        "legend": tmax
    },
    {
        "name": "tmin",
        "label": "Min. temp. (°C)",
        "url": "https://lh3.googleusercontent.com/d/1TVUp4Qu5iCFCeD6HVn4vYCVxGDqaT8GR",
        "section": "Observed_meteorological_conditions",
        "legend": tmin
    },
    {
        "name": "pcp_anm",
        "label": "Precip. anomaly (mm)",
        "url": "https://lh3.googleusercontent.com/d/13hg2mCk9S3MSY3LjX0GgrbD80MmtfDH5",
        "section": "Observed_meteorological_conditions",
        "legend": pcp_anm
    },

    {
        "name": "tmax_anm",
        "label": "Max. temp. anomaly (°C)",
        "url": "https://lh3.googleusercontent.com/d/1NhCDXfWxClv_V2hRzipkIcWFKYx434z2",
        "section": "Observed_meteorological_conditions",
        "legend": tmax_anm
    },
    {
        "name": "tmin_anm",
        "label": "Min. temp. anomaly (°C)",
        "url": "https://lh3.googleusercontent.com/d/1TOIYHhytH4k_NtzBpSM9nZhIiTscee6W",
        "section": "Observed_meteorological_conditions",
        "legend": tmin_anm
    },





    {
        "name": "runoff",
        "label": "Runoff (mm)",
        "url": "https://lh3.googleusercontent.com/d/1nDMiz8YSCRqZ1aWlxwy3L8ho3gMHf5IK",
        "section": "Observed_hydrological_conditions",
        "legend": runoff
    },
    {
        "name": "sm",
        "label": "Soil moisture (mm)",
        "url": "https://lh3.googleusercontent.com/d/1ih4HlxFdsvYSQZUmcntp7RO6ltJSDW1j",
        "section": "Observed_hydrological_conditions",
        "legend": sm
    },
    {
        "name": "runoff_anm",
        "label": "Runoff anomaly (mm)",
        "url": "https://lh3.googleusercontent.com/d/13k5MztU8eXCvBkvUQiiUcjoISgg3Zuo2",
        "section": "Observed_hydrological_conditions",
        "legend": runoff_anm
    },

    {
        "name": "sm_anm",
        "label": "Soil moist. anomaly (%)",
        "url": "https://lh3.googleusercontent.com/d/1VUpYoZEDx9dkFX5j6dJQZ9G2N4fUwquW",
        "section": "Observed_hydrological_conditions",
        "legend": sm_anm
    },











    {
        "name": "pcp_7",
        "label": "7 days prec. (mm)",
        "url": "https://lh3.googleusercontent.com/d/1Oypm2OpMBVwyafDo3SPW-NV3ZKPSu_-m",
        "section": "Forecasted_meteorological_conditions",
        "legend": pcp_forecast
    },
    {
        "name": "pcp_15",
        "label": "15 days prec. (mm)",
        "url": "https://lh3.googleusercontent.com/d/1Bndjtkcy5YwL26ljsX1UDpuPwwffSdTp",
        "section": "Forecasted_meteorological_conditions",
        "legend": pcp_forecast
    },

    {
        "name": "pcp_30",
        "label": "30 days prec. (mm)",
        "url": "https://lh3.googleusercontent.com/d/1hfihzZGNO2UO6M-pp7BH8UIdt__yLX5P",
        "section": "Forecasted_meteorological_conditions",
        "legend": pcp_forecast
    },
    {
        "name": "pcp_7_anm",
        "label": "7 days prec. anomaly (mm)",
        "url": "https://lh3.googleusercontent.com/d/1a3NOrumhxjP9v7CxgqrUP9gWrY_1itU8",
        "section": "Forecasted_meteorological_conditions",
        "legend": pcp_anm_forecast
    },
    {
        "name": "pcp_15_anm",
        "label": "15 days prec. anomaly (mm)",
        "url": "https://lh3.googleusercontent.com/d/1gzSZXNN37XlexvfKQzysxEPSMy8mQDVP",
        "section": "Forecasted_meteorological_conditions",
        "legend": pcp_anm_forecast
    },
    {
        "name": "pcp_30_anm",
        "label": "30 days prec. anomaly (mm)",
        "url": "https://lh3.googleusercontent.com/d/14nBEWXeTOONWbwWKxoLt5yb93A_ixa7F",
        "section": "Forecasted_meteorological_conditions",
        "legend": pcp_anm_forecast
    },




    {
        "name": "tmean_7",
        "label": "7 days mean temp. (°C)",
        "url": "https://lh3.googleusercontent.com/d/17wfRX9tTGED8QfJ-sgk4ATr-Bn4NkI8f",
        "section": "Forecasted_meteorological_conditions",
        "legend": mean_tmp_foreact
    },
    {
        "name": "tmean_15",
        "label": "15 days mean temp. (°C)",
        "url": "https://lh3.googleusercontent.com/d/1zGwnldozZ40Yo7I09o0TbUf8FiszPfep",
        "section": "Forecasted_meteorological_conditions",
        "legend": mean_tmp_foreact
    },

    {
        "name": "tmean_30",
        "label": "30 days mean temp. (°C)",
        "url": "https://lh3.googleusercontent.com/d/1lCwfdpD8Qhkc3MD1lGc6togAYyR8IFGB",
        "section": "Forecasted_meteorological_conditions",
        "legend": mean_tmp_foreact
    },
    {
        "name": "tmean_7_anm",
        "label": "7 days mean temp. anomaly(°C)",
        "url": "https://lh3.googleusercontent.com/d/1-0tTvEY-V6-BbyV_ZDD2WMfhG2SJjPhw",
        "section": "Forecasted_meteorological_conditions",
        "legend": mean_tmp_anm_foreact
    },
    {
        "name": "tmean_15_anm",
        "label": "15 days mean temp. anomaly(°C)",
        "url": "https://lh3.googleusercontent.com/d/1J7kG44aYt1DAK4ePDre5pzlzxB4QncwN",
        "section": "Forecasted_meteorological_conditions",
        "legend": mean_tmp_anm_foreact
    },
    {
        "name": "tmean_30_anm",
        "label": "30 days mean temp. anomaly(°C)",
        "url": "https://lh3.googleusercontent.com/d/1eL70B8UkLwgSw_ESeqbirWDlJ83sJqr5",
        "section": "Forecasted_meteorological_conditions",
        "legend": mean_tmp_anm_foreact
    },










    {
        "name": "runoff_7",
        "label": "7 days Runoff (mm)",
        "url": "https://lh3.googleusercontent.com/d/1W6ezfsOxqoiBjHKXoMpKlPMwo17ZuEf6",
        "section": "Forecasted_hydrological_conditions",
        "legend": runoff_foreact
    },
    {
        "name": "runoff_15",
        "label": "15 days Runoff (mm)",
        "url": "https://lh3.googleusercontent.com/d/173Au-pwYa47IS9wdzOhAWnlfHk97oUaY",
        "section": "Forecasted_hydrological_conditions",
        "legend": runoff_foreact
    },

    {
        "name": "runoff_30",
        "label": "30 days Runoff (mm)",
        "url": "https://lh3.googleusercontent.com/d/1cMmFnTzn7atENuoyA-NTygNzC93LBV70",
        "section": "Forecasted_hydrological_conditions",
        "legend": runoff_foreact
    },
    {
        "name": "runoff_7_anm",
        "label": "7 days Runoff anomaly (mm)",
        "url": "https://lh3.googleusercontent.com/d/1SJ_sQetE8b4v-yJNvCi3ffj-0Y2D-4n3",
        "section": "Forecasted_hydrological_conditions",
        "legend": runoff_anm_foreact
    },

    {
        "name": "runoff_15_anm",
        "label": "15 days Runoff anomaly (mm)",
        "url": "https://lh3.googleusercontent.com/d/1l__wx2cw22lBCH2pzZ-NowfXRUn1dzFm",
        "section": "Forecasted_hydrological_conditions",
        "legend": runoff_anm_foreact
    },
    {
        "name": "runoff_30_anm",
        "label": "30 days Runoff anomaly (mm)",
        "url": "https://lh3.googleusercontent.com/d/1LGzV0M48PqgEL5XSrZwEXBOfGRhnlQDh",
        "section": "Forecasted_hydrological_conditions",
        "legend": runoff_anm_foreact
    },




    {
        "name": "sm_7",
        "label": "7 days Soil moisture (mm)",
        "url": "https://lh3.googleusercontent.com/d/1aQhZmKJHB1ZqdIi60A_LLHNijwMyqdgo",
        "section": "Forecasted_hydrological_conditions",
        "legend": sm_forecast
    },
    {
        "name": "sm_15",
        "label": "15 days Soil moisture (mm)",
        "url": "https://lh3.googleusercontent.com/d/1QMgRQMQ9KSAou9ALbiJJChzuzkZ-jG20",
        "section": "Forecasted_hydrological_conditions",
        "legend": sm_forecast
    },
    {
        "name": "sm_30",
        "label": "30 days Soil moisture (mm)",
        "url": "https://lh3.googleusercontent.com/d/16bOzToGpuWkmHJmgzkU6n2ymjfFE-rAc",
        "section": "Forecasted_hydrological_conditions",
        "legend": sm_forecast
    },
    {
        "name": "sm_7_anm",
        "label": "7 days SM anomaly (mm) ",
        "url": "https://lh3.googleusercontent.com/d/1iwKh-jOfsp-nD3sXi59CFZR1U-MdL9oQ",
        "section": "Forecasted_hydrological_conditions",
        "legend": sm_anm_forecast
    },
    {
        "name": "sm_15_anm",
        "label": "15 days SM anomaly (mm) ",
        "url": "https://lh3.googleusercontent.com/d/1GzZik5E7RiQoIZ95i7a-a-YrayWyuWL-",
        "section": "Forecasted_hydrological_conditions",
        "legend": sm_anm_forecast
    },
    {
        "name": "sm_30_anm",
        "label": "30 days SM anomaly(mm) ",
        "url": "https://lh3.googleusercontent.com/d/1kj7G5_HCicMtTAl1N1JtWGehfFWisFha",
        "section": "Forecasted_hydrological_conditions",
        "legend": sm_anm_forecast
    },





    {
        "name": "sri_obs",
        "label": "Observed Standardised runoff index",
        "url": "https://lh3.googleusercontent.com/d/1XYIbMnvlJnar_5-Z0ZBKVZcCrWfDUgBE",
        "section": "Droughts",
        "legend": drought
    },
    {
        "name": "sri_7_anm",
        "label": "7 days forecast Standardised runoff index",
        "url": "https://lh3.googleusercontent.com/d/11CDYft_Mq1h89M2BHd1WvRxVUvCBl5wx",
        "section": "Droughts",
        "legend": drought
    },
    {
        "name": "sri_15_anm",
        "label": "15 days forecast Standardised runoff index",
        "url": "https://lh3.googleusercontent.com/d/1MmI4xKWc0llV-wYgv4lciV3noPgzpPka",
        "section": "Droughts",
        "legend": drought
    },
    {
        "name": "sri_30_anm",
        "label": "30 days forecast Standardised runoff index",
        "url": "https://lh3.googleusercontent.com/d/1ksSLcCQdn8CjUG45VSoProLxBOtyNl8d",
        "section": "Droughts",
        "legend": drought
    },
    {
        "name": "ssi_obs",
        "label": "Observed Standardised soil moisture index",
        "url": "https://lh3.googleusercontent.com/d/1FJEL6_IYXgyrRR-ZGwohCG2J6uGFphxp",
        "section": "Droughts",
        "legend": drought
    },
    {
        "name": "ssi_7_anm",
        "label": "7 days forecast Standardised soil moisture index",
        "url": "https://lh3.googleusercontent.com/d/136f5od3YNLLUFKpqruRvRmg5930Dsddb",
        "section": "Droughts",
        "legend": drought
    },
    {
        "name": "ssi_15_anm",
        "label": "15 days forecast Standardised soil moisture index",
        "url": "https://lh3.googleusercontent.com/d/1gipiNNUHQvB0dr1FZq2xbN0JCEn0QmTs",
        "section": "Droughts",
        "legend": drought
    },

    {
        "name": "ssi_30_anm",
        "label": "30 days forecast Standardised soil moisture index",
        "url": "https://lh3.googleusercontent.com/d/17cUNx352bWlbFTJxmQ1663BX9E-fQqBa",
        "section": "Droughts",
        "legend": drought
    }


]