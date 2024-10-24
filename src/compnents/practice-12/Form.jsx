import { MyInput } from "./Input";

const initial={
  INPUT : 'input',
  SELECT:'select',
}
export function MyForm({formControl=[],handleSubmit,formDetails,setFormDetails}){

  function show(item){
    let content =null;

    switch (item.controlType) {
      case initial.INPUT:
        content = <MyInput name={item.name} lable={item.lable} type={item.type} id={item.id} placeholder={item.placeholder} value={formDetails[item.name]} onchange={event=>setFormDetails({
          ...formDetails,
          [event.target.name]:event.target.value
        })}/>
        break;
    
      default:
        break;
    }
    return content;
  }
  return<>
  <form onSubmit={handleSubmit}>
    {
      formControl.length>0?
      formControl.map((item) =>
        show(item))
      :null
    }
    <button type="submit" >Submit</button>
  </form>
  </>
}