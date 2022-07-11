import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const AddQuoteHandler = quoteData => {
    console.log(quoteData)
  }


  return <QuoteForm onAddQuote={AddQuoteHandler} />
}

export default NewQuote;