
function Main({change}){
    return(
        <>
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label>Initail payment</label>
                    <input type="number" required onChange={(event)=>change("initialInvestment",event.target.value)}/>
                </p>
                <p>
                    <label>Annual invesment</label>
                    <input type="number" required onChange={(event)=>change("annualInvestment",event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input type="number" required onChange={(event)=>change("expectedReturn",event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required onChange={(event)=>change("duration",event.target.value)}/>
                </p>
            </div>
        </div>
        </>
    )
}
export default Main;