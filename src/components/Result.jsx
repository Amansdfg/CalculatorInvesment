import { calculateInvestmentResult,formatter } from "../util/investment";
function Result({userInput}){
    const data=calculateInvestmentResult(userInput);
    const initialInvestment=data[0].valueEndOfYear-data[0].interest-data[0].annualInvestment;
    return(
        <table id="result">
            <thead>
                <tr>
                    <td> Year </td>
                    <td> Investment value </td>
                    <td> Interest(Year) </td>
                    <td>Total Interest</td>
                    <td>Invested Capital</td>
                </tr>
            </thead>
            <tbody>
                {data.map(dataByYear=>{
                    const totalInetrest=dataByYear.valueEndOfYear-dataByYear.annualInvestment*dataByYear.year-initialInvestment;
                    const totalAmountInvestment=dataByYear.valueEndOfYear-totalInetrest;
                    return (
                    <tr key={dataByYear.year}>
                        <td>{dataByYear.year}</td>
                        <td>{formatter.format(dataByYear.valueEndOfYear)}</td>
                        <td>{formatter.format(dataByYear.interest)}</td>
                        <td>{formatter.format(totalInetrest)}</td>
                        <td>{formatter.format(totalAmountInvestment)}</td>
                    </tr>
                    )
})}
            </tbody>
        </table>
    )
}
export default Result;