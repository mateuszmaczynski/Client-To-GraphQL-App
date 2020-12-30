import {gql, useQuery} from "@apollo/client";
import Quote from "./Quote";

const RANDOM_QUOTE_QUERY = gql`
  query getRandomQuote {
    randomQuote {
      text
      author
    }
  }
`;

export default function RandomQuote() {
  const { data, error, loading, refetch } = useQuery(RANDOM_QUOTE_QUERY, {
    onError: error => {
      console.log(error.message);
      window.lastError = error;
    },
    errorPolicy: "all"
  });
  if (loading) {
    return "Quote is loading...";
  }
  if(error){
    return "Could not load quote";
  }
  const { text, author } = data.randomQuote;

  return (
    <>
      <Quote text={text} author={author} />
      <button
        onClick={() => {
          refetch()
        }}
      >
        Get new quotation
      </button>
    </>
  )
}
