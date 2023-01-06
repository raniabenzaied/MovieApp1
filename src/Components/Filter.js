import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Rate from './Rate'
function ButtonsExample({setSearch,setRate,rate}) {
 
    return (
      <>
        <InputGroup className="mb-3">
          <Button variant="outline-secondary" id="button-addon1">
            Search
          </Button>
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            placeholder="Please Enter The Name Of The Movie"
            onChange={(e)=> setSearch(e.target.value)}

          />
        </InputGroup>
        <Rate setRate={setRate}/>
        </>
    )}
export default ButtonsExample