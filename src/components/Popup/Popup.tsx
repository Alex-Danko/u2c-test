import { Dispatch, FC, SetStateAction, useState } from "react"
import "./Popup.css"
import { AnimatePresence, motion } from "framer-motion";

interface PopupProps {
    setPopupOpen: Dispatch<SetStateAction<boolean>>
}

export const Popup: FC<PopupProps> = ({ setPopupOpen }) => {
    const [sum, setSum] = useState("");
    const [months, setMonths] = useState("12");
    const [multiplier, setMultiplier] = useState("1");
    const [resultShown, setResultShown] = useState(false);

    const onMonthsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMonths(e.target.value)
    }

    const onMultplierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMultiplier(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setResultShown(true)
    }

    const paymentAmount = ((parseInt(sum) / parseInt(months)) * parseInt(multiplier)).toFixed(2)


    return (
        <motion.div
            className="popup-wrapper"
            initial={{
                opacity: 0,
                y: -10
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            exit={{
                opacity: 0,
                y: -10,
                transition: { ease: 'easeIn', duration: 0.5 }
            }}
            transition={{
                ease: 'easeIn',
                duration: 0.5,
            }}>
            <div className="popup">
                <button className="popup__close" onClick={() => setPopupOpen(false)}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.4226 20.0009L28.4771 13.9447C28.6407 13.7867 28.7712 13.5977 28.8609 13.3887C28.9507 13.1798 28.998 12.955 28.9999 12.7276C29.0019 12.5002 28.9586 12.2747 28.8725 12.0642C28.7863 11.8537 28.6592 11.6625 28.4984 11.5016C28.3375 11.3408 28.1463 11.2137 27.9358 11.1275C27.7253 11.0414 27.4998 10.9981 27.2724 11.0001C27.045 11.002 26.8202 11.0493 26.6113 11.1391C26.4023 11.2288 26.2133 11.3593 26.0553 11.5229L19.9991 17.5774L13.9447 11.5229C13.7867 11.3593 13.5977 11.2288 13.3887 11.1391C13.1798 11.0493 12.955 11.002 12.7276 11.0001C12.5002 10.9981 12.2747 11.0414 12.0642 11.1275C11.8537 11.2137 11.6625 11.3408 11.5016 11.5016C11.3408 11.6625 11.2137 11.8537 11.1275 12.0642C11.0414 12.2747 10.9981 12.5002 11.0001 12.7276C11.002 12.955 11.0493 13.1798 11.1391 13.3887C11.2288 13.5977 11.3593 13.7867 11.5229 13.9447L17.5774 19.9991L11.5229 26.0553C11.3593 26.2133 11.2288 26.4023 11.1391 26.6113C11.0493 26.8202 11.002 27.045 11.0001 27.2724C10.9981 27.4998 11.0414 27.7253 11.1275 27.9358C11.2137 28.1463 11.3408 28.3375 11.5016 28.4984C11.6625 28.6592 11.8537 28.7863 12.0642 28.8725C12.2747 28.9586 12.5002 29.0019 12.7276 28.9999C12.955 28.998 13.1798 28.9507 13.3887 28.8609C13.5977 28.7712 13.7867 28.6407 13.9447 28.4771L19.9991 22.4226L26.0553 28.4771C26.2133 28.6407 26.4023 28.7712 26.6113 28.8609C26.8202 28.9507 27.045 28.998 27.2724 28.9999C27.4998 29.0019 27.7253 28.9586 27.9358 28.8725C28.1463 28.7863 28.3375 28.6592 28.4984 28.4984C28.6592 28.3375 28.7863 28.1463 28.8725 27.9358C28.9586 27.7253 29.0019 27.4998 28.9999 27.2724C28.998 27.045 28.9507 26.8202 28.8609 26.6113C28.7712 26.4023 28.6407 26.2133 28.4771 26.0553L22.4226 19.9991V20.0009Z" fill="#EA0029" />
                    </svg>
                </button>

                <div className="popup__descr">
                    <h2 className="popup__descr-title">Платежи по кредиту</h2>
                    <p className="popup__descr-text">Введите сумму кредита и выберите срок, на который вы хотите его оформить.</p>
                    <p className="popup__descr-text">Мы автоматически рассчитаем для вас ежемесячный платеж, чтобы вы могли лучше спланировать свои финансы. </p>
                </div>

                <form className="popup__calculation" onSubmit={handleSubmit} style={{ marginBottom: `${resultShown ? "22px" : "49px"}` }}>

                    <h3 className="popup__calculation-sum-label">Ваша сумма кредита</h3>
                    <input id="popup__calculation-sum" type="number" value={sum} placeholder="Введите данные" onChange={(e) => setSum(e.target.value)} />

                    {parseInt(sum) > 0 &&
                        <AnimatePresence>

                            <motion.input
                                initial={{
                                    opacity: 0,
                                    y: -10
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -10,
                                    transition: { ease: 'easeIn', duration: 0.5 }
                                }}
                                transition={{
                                    ease: 'easeIn',
                                    duration: 0.5,
                                }}

                                className="popup__calculation-submit"
                                type="submit"
                                value="Рассчитать" />
                        </AnimatePresence>
                    }


                    <fieldset className="popup__calculation-radios">
                        <h3 className="popup__calculation-radios-title">Количество месяцев?</h3>

                        <div className="popup__calculation-radios-flex">
                            <input className="radio" id="months12" type="radio" name="months" value="12" checked={months === "12"} onChange={onMonthsChange} />
                            <label className="radio-label" htmlFor="months12">12</label>

                            <input className="radio" id="months24" type="radio" name="months" value="24" checked={months === "24"} onChange={onMonthsChange} />
                            <label className="radio-label" htmlFor="months24">24</label>

                            <input className="radio" id="months36" type="radio" name="months" value="36" checked={months === "36"} onChange={onMonthsChange} />
                            <label className="radio-label" htmlFor="months36">36</label>

                            <input className="radio" id="months48" type="radio" name="months" value="48" checked={months === "48"} onChange={onMonthsChange} />
                            <label className="radio-label" htmlFor="months48">48</label>

                        </div>
                    </fieldset>

                </form>

                {resultShown &&
                    (<AnimatePresence>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -10
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            exit={{
                                opacity: 0,
                                y: -10,
                                transition: { ease: 'easeIn', duration: 0.5 }
                            }}
                            transition={{
                                ease: 'easeIn',
                                duration: 0.5,
                            }}

                            className="popup__result">
                            <h3 className="popup__result-title">Итого ваш платёж по кредиту:</h3>
                            <div className="popup__result-radios">

                                <input className="radio" id="payment-month" type="radio" name="payment-interval" value="1" checked={multiplier === "1"} onChange={onMultplierChange} />
                                <label className="radio-label" htmlFor="payment-month">в месяц</label>

                                <input className="radio" id="payment-year" type="radio" name="payment-interval" value="12" checked={multiplier === "12"} onChange={onMultplierChange} />
                                <label className="radio-label" htmlFor="payment-year">в год</label>

                            </div>



                            <motion.p
                                key={paymentAmount}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="popup__result-payment">
                                {paymentAmount} рублей
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>)
                }

                <button className="popup__add-btn">Добавить</button>
            </div>
        </motion.div>
    )
}