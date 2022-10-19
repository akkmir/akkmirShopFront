import styled from "styled-components";
const css = {
  Main: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 1950px;
    min-width: 1450px;
    height: auto;
    min-height: 100px;
    background-color: #f7f7f7;
    box-sizing: border-box;
    padding-left: 90px;
    padding-right: 90px;
  `,
  MainContentLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  `,
  Model3D: styled.div`
    display: block;
    position: relative;
    height: auto;
    min-height: 400px;
    width: calc(50% - 20px);
    box-shadow: 10px 18px 8px rgb(163 163 163 / 2%),
      6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%),
      1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%);
    border-radius: 12px;
    background-color: white;
  `,
  MainContentLineBanner: styled.div`
    display: flex;
    position: relative;
    width: 30%;
    height: auto;
    padding: 17px 20px;
    min-height: 160px;
    background: radial-gradient(
        110.83% 1056.5% at -4.45% 15.94%,
        #2e2e2e 36.97%,
        #201c51 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    /* 99 */

    box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03),
      12px 30px 19px rgba(163, 163, 163, 0.09),
      5px 13px 14px rgba(163, 163, 163, 0.15),
      1px 3px 8px rgba(163, 163, 163, 0.18),
      0px 0px 0px rgba(163, 163, 163, 0.18);
    border-radius: 12px;
  `,
  MainContentLineBanner2: styled.div`
    display: flex;
    position: relative;
    width: 33%;
    height: auto;
    padding: 17px 20px;
    min-height: 160px;
    background: radial-gradient(
        100.31% 865.46% at 13.16% 77.19%,
        #2e2e2e 41.64%,
        #30704a 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    /* 99 */

    box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03),
      12px 30px 19px rgba(163, 163, 163, 0.09),
      5px 13px 14px rgba(163, 163, 163, 0.15),
      1px 3px 8px rgba(163, 163, 163, 0.18),
      0px 0px 0px rgba(163, 163, 163, 0.18);
    border-radius: 12px;
  `,
  MainContentLineBanner3: styled.div`
    display: flex;
    position: relative;
    width: 33%;
    height: 100%;
    padding: 17px 20px;
    min-height: 160px;
    /* padding-bottom: 100px; */
    background: radial-gradient(
        129.66% 1235.96% at 0% 10.31%,
        #2e2e2e 32.05%,
        #6c0808 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    /* 99 */

    box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03),
      12px 30px 19px rgba(163, 163, 163, 0.09),
      5px 13px 14px rgba(163, 163, 163, 0.15),
      1px 3px 8px rgba(163, 163, 163, 0.18),
      0px 0px 0px rgba(163, 163, 163, 0.18);
    border-radius: 12px;
  `,
};

export default css;
