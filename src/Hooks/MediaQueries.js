// Media Query Modules
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";

const useMediaQueries = () => {
  /* Constants for Media Queries 🚀 */
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const isDeviceWidth375_811 = useMediaQuery({
    query: "(min-device-width:375) and (max-device-height:811)",
  });
  const isDeviceWidth360_374 = useMediaQuery({
    query: "(min-device-width:360) and (max-device-width:374)",
  });
  const isDeviceWidth295_359 = useMediaQuery({
    query: "(min-device-width:295) and (max-device-width:359)",
  });

  return {
    isTabletOrMobileDevice,
    isDeviceWidth375_811,
    isDeviceWidth360_374,
    isDeviceWidth295_359,
  };
};

export default useMediaQueries;
