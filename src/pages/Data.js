import { dataApi } from "../api/dataApi";
import { Navigator } from "../components/Navigator";
import useSWR from "swr";
import { useLocation } from "react-router-dom";
import React from "react";
import * as Sentry from "@sentry/react";

const Data = () => {
  const location = useLocation();
  return (
    <Sentry.ErrorBoundary
      key={location.pathname}
      fallback={
        <>
          <Navigator />
          Error occured!
        </>
      }
    >
      <React.Suspense fallback={"Loading...."}>
        <DataContent />
      </React.Suspense>
    </Sentry.ErrorBoundary>
  );
};

const DataContent = () => {
  const { data, isFetching, isLoading } = useSWR(
    `/brewery`,
    dataApi.getBrewery,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshWhenOffline: false,
      shouldRetryOnError: true,
      suspense: false,
      revalidateOnMount: true,
    }
  );

  if (isLoading || isFetching) {
    return <>Loading...</>;
  }

  if (!data) {
    throw new Error("Data is not loaded");
  }

  return (
    <>
      <Navigator />
      Data page
      {JSON.stringify(data)}
    </>
  );
};

export default Data;
