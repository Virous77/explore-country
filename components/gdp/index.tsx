"use client";

import MainChartComp from "../shared";
import { useGDP } from "@/hooks/use-gdp";
import { useGDPStore } from "@/store/use-gdp";

const PerCapita = () => {
  const {
    timeRange,
    setTimeRange,
    countries,
    setCountries,
    removeCountry,
    removeLastCountry,
  } = useGDPStore();
  const { isLoading, chartData, fetchSingleCountryGDPData, fetchGDPData } =
    useGDP();

  return (
    <MainChartComp
      isLoading={isLoading}
      fetchGDPData={fetchGDPData}
      fetchSingleCountryGDPData={fetchSingleCountryGDPData}
      timeRange={timeRange}
      setTimeRange={setTimeRange}
      countries={countries}
      chartData={chartData}
      title="Country Per Capita Income"
      toolTipMessage="We move"
      setCountries={setCountries}
      removeCountry={removeCountry}
      removeLastCountry={removeLastCountry}
    />
  );
};

export default PerCapita;
