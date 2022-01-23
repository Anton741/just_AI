import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Search from '../components/search'
import TableBlock from '../components/tableBlock';
import TransactionsTable from '../components/transactionsTable';
import { getBlock } from '../services/http.service';


const Main = () => {
  const history = useHistory()
  const { numberTrans } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [block, setBlock] = useState()
  const [error, setError] = useState({searchValue:null, loadError: null})
  const [showTrasaction, setShowTrasaction] = useState(false)

  async function getData(id){
    try {
      const { result } = await getBlock(id);
      setError(prev =>  {return { ...prev, loadError:null}})
      setBlock(result);
      setLoading(false)
    } catch (error) {
      setError(prev =>  {return { ...prev, loadError:error.message}})
      setLoading(false)
    }
    
  }
  useEffect(async () => {
    if (Number(numberTrans)){
      getData(numberTrans);
    }else{
      getData();
    }
  }, []);
  function handleSearch(e){
    setSearchValue(e.target.value);
  };
  
  function handleSubmitSearch(e) {
    e.preventDefault()
    if (isNaN(Number(searchValue))){
        setError(prev =>  {return { ...prev, searchValue: 'Please enter the number' }})
    }else{
      setLoading(true);
      setShowTrasaction(false);
      getData(searchValue);
      setError(prev =>  {return { ...prev, searchValue: null}})
      history.push(`/block/${searchValue}`);
    }
    
  };
  function numberDecreaceEncrease(mode) {
    setLoading(true)
    setShowTrasaction(false);
    let blockNum = parseInt(block.number, 16);
    blockNum = mode === 'dcs'
      ? blockNum - 1
      : blockNum + 1
      
    getData(blockNum);
    history.push(`/block/${blockNum}`);
  }

  function onShowTransaction(){
    setShowTrasaction(prev => setShowTrasaction(!prev))
  }
  if (!isLoading && !error.loadError){
    return (
      <>
    <div className="p-4">
      {error.searchValue ? <p className="text-danger">{error.searchValue}</p> : null }
      <Search onHandleSearch={handleSearch} onHandleSubmit={handleSubmitSearch} value={searchValue} />
      <div className="pt-5">
        <h2>Block  #{parseInt(block.number, 16)}</h2>
        <TableBlock block = {block} onHandleNumberDecreaseEncrease = {numberDecreaceEncrease}  showTrasaction = {onShowTransaction}/>
        {showTrasaction && <TransactionsTable transactions={block.transactions} showTrasaction = {onShowTransaction}/>}
    </div>
    </div>
    </>
    )
  }
  return (
    <>
    {error.loadError ? 
                                <div class="alert alert-danger" role="alert">
                                      {error.loadError}, try late!
                                  </div>
                                  : <div className="loader"></div>}</>
  );
};

export default Main;


