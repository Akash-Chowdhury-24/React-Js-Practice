// props practice
export function Props({value1,value2}){
  return (
    <div>
      <select>
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
      </select>
    </div>
  )
}