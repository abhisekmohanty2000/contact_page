import './inputFields.Module.css'

const Inputfields = () =>{
    return(
        <div>
            <form>
                <div className="black-button">
                    <button className="chat-btn">VIA SUPPORT CHAT</button>
                    <button className="call-btn">VIA SUPPORT CALL</button>
                </div>
                <div>
                    <button className="email-btn">VIA EMAIL FORM</button>
                </div>
                <div>
                    <input type="text" className="input-fields" placeholder="Name"/>
                    <input type ="text" className="input-fields" placeholder="E-mail"/>
                    <input type = "text" className="input-fields-text" /> 
                </div>
                <div>
                <button className='submit'>SUBMIT</button>
                </div>
            </form>  
                <div className="image">
                    <img src="./image/contact.svg"></img>
                </div>  
        </div>
        )
}

export default Inputfields;