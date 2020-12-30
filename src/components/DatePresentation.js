import {gql, useQuery} from "@apollo/client";

const GET_DAY = gql`
  query getDay {
    today,
  }
`;

export default function DatePresentation() {
  const { data, loading, error, refetch } = useQuery(GET_DAY, {
    onError: error => {
      console.log(error.message);
      window.lastError = error;
    },
    errorPolicy: "all"
  });
  const dayDict = {
    MON: "Monday",
    TUE: "Tuesday",
    WED: "Wednesday",
    THU: "Thursday",
    FRI: "Friday",
    SAT: "Saturday",
    SUN: "Sunday"
  }
  if (loading)
    return "Loading...";
  if (error) {
    return "Could not check day";
  }

  return (
    <>
      <h1>Today is {dayDict[data.today]}</h1>
      <button
        onClick={() => {
          refetch();
        }}
      >
        Check day
      </button>
    </>
  );
}
