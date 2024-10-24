export function ConditionalStatement({flagValue}){
  function give(){
    const value = flagValue?(<h1>falg was true</h1>):(<h1>falg was false</h1>)
    return value;
  }

  return(
    <div>
      {give()}
    </div>
  )
}