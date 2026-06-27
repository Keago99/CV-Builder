import GeneralSection from "./components/General.jsx"
import EducationalSection from "./components/Educational.jsx"
import PracticalSection from "./components/Practical.jsx"
import "../src/styles/App.css"
export default function App(){
    return (
        <div className="app-container">
        <GeneralSection/>
        <EducationalSection/>
        <PracticalSection/>
        </div>
    )
}