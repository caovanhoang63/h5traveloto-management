import './App.css';
import ComboBox from './components/combobox/combobox';
import Textbox from './components/textbox/textbox';
function App() {
  
const options = [
  { value: 'tuoi' },
  { value: 'báo'},
  { value: 's' },
];
  return (
    <div className='container'>
    <Textbox placeHolder="Nhập dữ liệu"
      title="Dữ liệu"
    />
    <ComboBox label="lựa chọn giá đúng" options = {options}></ComboBox>
    </div>
  );
}
 
export default App;
