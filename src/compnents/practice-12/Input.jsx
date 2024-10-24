export function MyInput({name,lable,type,id,placeholder,value,onchange}) {
  return (
    <>
      <label htmlFor={name}>{lable}</label>
      <input
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder} 
        value={value} 
        onChange={onchange} 
      />
    </>
  )
}