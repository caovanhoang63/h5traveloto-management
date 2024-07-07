import "./dashboard-balance.css"
import {useState} from "react";

import eye from "../../../assets/icons/icons8-eye-90.png"
import eyeSlash from "../../../assets/icons/icons8-invisible-90.png"
import Modal from "../../../components/modal/modal";
import {getWallet, Withdrawal} from "../../../api/wallet";
import TextBlock from "../../../components/textblock/textblock";
import FlexTextbox from "../../../components/flextextbox/flextextbox";
import Toast from "../../../components/modal/toast";

export function DasboardBalance(){
    const [isOpenModal, setIsOpenModal] = useState(false )
    const [eyeClicked, setEyeClicked] = useState(true)
    const [balance, setBalance] = useState(0)

    const getBalance = () =>  {
        getWallet().then((res) => {
            setBalance(res.data.balance)
        }).catch()
    }

    const openModal = () => {
        setIsOpenModal(true)
    }

    const WithdrawalModal = () => {
        const [amount, setAmount] = useState(0)
        return (
            <Modal content={
                <div>
                    <TextBlock content={"Amount:"}/>
                    <br/>
                    <FlexTextbox value={amount} onChange={e => setAmount(e)} placeholder="Amount"/>
                </div>
            } onClose={() => {setIsOpenModal(false)}}  onConfirm={() =>{
                Withdrawal(parseFloat(amount)).then( (res ) => {

                    }
                ).catch((err) => setEyeClicked(false))
                    .finally(()=>{
                        setIsOpenModal(false)
                        setEyeClicked(true)
                    })
            }}>

            </Modal>
        )
    }

    return(
        <div className={"Balance_container"}>
            <div className={"Balance"}>
                <div className={`Balance-number ${eyeClicked ? 'Balance-hidden' : ''}`}
                     onClick={ eyeClicked ? () =>{} : openModal}>
                    {eyeClicked ? "********" : balance + " VND"}
                </div>
            </div>
            <img className={"Balance-Eye"}
                 src={eyeClicked ? eye : eyeSlash}
                 alt={eyeClicked ? "Eye" : "Eye Slash"}
                 onClick={() => {
                     setEyeClicked(!eyeClicked)
                     getBalance()
                 }}
            />
            { isOpenModal && <WithdrawalModal/>}
        </div>
        
    )
}