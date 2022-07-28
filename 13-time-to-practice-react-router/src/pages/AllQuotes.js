import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Sandro', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Sena', text: 'Poker is my thing' }
]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes;