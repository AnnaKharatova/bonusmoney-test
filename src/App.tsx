import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card/Card.tsx';
import { IRoot } from "./types.ts";
import Popup from './components/Card/Popup/Popup.tsx';
import AttentionIcon from './img/exclamation_white.png';

interface ResponseData {
  companies: IRoot[];
}

function App() {
  const [cards, setCards] = useState<IRoot[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [offset, setOffset] = useState<Number>(0);
  const [limit] = useState<Number>(5);
  const [openPopup, setOpenPopup] = useState<Boolean>(false)
  const [companyId, setCompanyId] = useState<string>()
  const [pushedButton, setPushedButton] = useState<string>()
  const [errorPopup, setErrorPopup] = useState<Boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>()

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://devapp.bonusmoney.pro/mobileapp/getAllCompaniesLong', {
        method: 'POST',
        headers: {
          'TOKEN': '123',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          offset,
          limit,
        }),
      });

      if (response.ok) {
        setErrorPopup(false)
        const data: ResponseData = await response.json();
        console.log(data);
        setCards([...cards, ...data.companies]);
        setOffset(Number(offset) + Number(limit));
      }
      else {
        setOpenPopup(true);
        setErrorPopup(true);

        if (response.status === 401) {
          setErrorMessage('Ошибка авторизации');
        } else if (response.status === 400) {
          const errorData = await response.json();
          setErrorMessage(errorData.message || 'Ошибка при загрузке карт');
        } else if (response.status === 500) {
          setErrorMessage('Все упало');
        } else {
          setErrorMessage(`Ошибка при загрузке карт: ${response.status}`);
        }
      }
    } catch (error) {
      console.error('Ошибка при загрузке карт:', error);
      setOpenPopup(true);
      setErrorPopup(true);
      setErrorMessage('Ошибка при загрузке карт');
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreCards = () => {
    fetchCards();
  };

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Управление картами</h1>
      </header>
      <main className='container'>
        <ul className='cards-list'>
          {cards.map((card) => (
            <li key={card.company.companyId}>
              <Card card={card} setOpenPopup={setOpenPopup} setCompanyId={setCompanyId} setPushedButton={setPushedButton} />
            </li>
          ))}
        </ul>

        {isLoading &&
          <div className='loader__main'>
            <div className="loader"></div>
            <p className='message'>Подгрузка компаний</p>
          </div>}

        {!isLoading && cards.length > 0 && (
          <button className='more-button' onClick={loadMoreCards}>Далее</button>
        )}

        {!isLoading && cards.length === 0 && (
          <p className='message'>Нет компаний</p>
        )}
      </main>
      {openPopup && <Popup setOpenPopup={setOpenPopup}>
        {errorPopup ?
          <div className='popup__attention'>
            <img className='popup__image' src={AttentionIcon} alt='Знак Внимание' />
            <p className='popup__text'>{errorMessage}</p>
          </div>
          :
          <>
            <p className='popup__text'>Нажата кнопка: {pushedButton}</p>
            <p className='popup__text'>ID компании: {companyId}</p>
          </>}
      </Popup>}

    </>
  );
}

export default App;
